import { gql, useMutation, useQuery, useSubscription } from '@apollo/client'

import {
    getActorsSubscription,
} from '../queries'
import React, { DependencyList, useEffect } from 'react'
import { ColumnsType, DefaultRecordType } from 'rc-table/lib/interface'
import AddActor from '../components/addactor'
import DeleteActor from '../components/deleteactor'
import { useStore, useTheme } from '../store/store'
import { Theme } from '../types/theme'
import SearchActor from '../components/searchActor'
import { useDebounce, useTrackTime } from '../util'
import ProgressLabel from 'react-progress-label'
import MessageContainer from '../components/messenger'

const mockColumns: ColumnsType<DefaultRecordType> = [
    {
        title: 'Actions',
        dataIndex: 'id',
        key: 'id',
        render: (text: string): JSX.Element => <DeleteActor actorId={text} />,
        width: '100px',
    },
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        width: '150px',
    },
    {
        title: 'firstname',
        dataIndex: 'firstname',
        width: '150px',
        key: 'firstname',
    },
    {
        title: 'lastname',
        width: '150px',
        dataIndex: 'lastname',
        key: 'lastname',
    },
    {
        title: 'middlename',
        dataIndex: 'middlename',
        width: '150px',
        key: 'middlename',
    },
    {
        title: 'version',
        dataIndex: 'version',
        width: '50px',
        key: 'version',
    },
]

const mockData: DefaultRecordType[] = [
    {
        firstname: 'firstname',
        lastname: 'lastname',
        middlename: 'middlename',
    },
]

export const LoadingProgress = ({ speed = 1 }: { [key: string]: number }): JSX.Element => {
    //input a progress value that is a continuous sin from 0 100
    const progress = useTrackTime(0, 10, (curTime: number) => {
        const result = Math.abs(Math.sin(curTime / speed)) * 100
        // debugger;
        console.log(result)

        return result
    })


    console.log(progress)
    const theme: Theme = useTheme()
    return (
        <ProgressLabel
            progress={progress}
            fillColor="rgb(248,247,243)"
            trackColor="#fff"
            progressColor={theme.core.colors.success}
            progressWidth={10}
            trackWidth={16}
            trackBorderWidth={1}
            trackBorderColor="rgb(232,223,209)"
            cornersWidth={5}
            size={130}
        />
    )
}

export default function ActorsPage() {
    const [actorData, setActorData] = React.useState({
        data: mockData,
        columns: mockColumns,
    })
    const { loading, error, data } = useSubscription<typeof getActorsSubscription.data>(
        gql(getActorsSubscription.toString()),
    )
    const results = useDebounce(data, 250)
    const theme: Theme = useTheme()
    const deps: DependencyList = [actorData, loading, error]

    // Updating state, will trigger listeners
    const actorsSub = useStore.subscribe((state: any) => state.users.actors)
    // debugger;
    // Unsubscribe listeners
    // actorsSub()

    if (data) {
        console.log(JSON.stringify(data, null, 2))
    }

    const pageContent = React.useCallback(
        () => (
            <>
                <div
                    style={{
                        ...theme.element.variants.column,
                        boxShadow: theme.core.shadows.small,
                        border: theme.core.borders.primary,
                        background: 'white',
                        minHeight: '70vh',
                        height: '100%',
                        width: '100%',
                        position: 'relative',
                        padding: theme.core.space[3],
                        borderRadius: theme.core.space[3],
                        overflowX: 'hidden',
                        maxHeight: '70vh',
                        // gridColumn: 'span 3',
                    }}
                >
                    <MessageContainer data={results?.actors} />
                </div>
                <nav
                    style={{
                        ...theme.element.variants.row,
                        boxShadow: theme.core.shadows.small,
                        borderRadius: theme.core.space[3],
                        background: theme.core.colors.info,
                        width: '100%',
                        justifyContent: 'start',
                        padding: theme.core.space[4],
                        gap: theme.core.space[3],
                        maxHeight: '10vh',
                        overflow: 'hidden',
                        position: 'sticky',
                        paddingBottom: theme.core.space[5],
                    }}
                >
                    <textarea>

                    </textarea>
                    <button>
                        Send Message
                    </button>
                </nav>
            </>
        ),
        [...deps, results, loading],
    )

    const parseServerResponse = React.useCallback(
        (data: any, statusElement: JSX.Element) => (
            <div
                style={{
                    ...theme.element.variants.column,
                    background: theme.core.colors.background,
                    padding: theme.core.space[4],
                    flex: 0,
                    height: '100%',
                    maxHeight: '300px',
                    minWidth: '300px',
                    whiteSpace: 'pre-wrap',
                    lineBreak: 'anywhere',
                    borderRadius: theme.core.space[3],
                    boxShadow: theme.core.shadows.small,
                    overflowY: 'scroll',
                    overflowX: 'hidden',
                    border: theme.core.borders.primary,
                }}
            >
                {statusElement}
                {data && JSON.stringify(data, null, 2)}
            </div>
        ),
        deps,
    )

    return (
        <div
            style={{
                ...theme.element.variants.row,
                flexWrap: 'wrap',
                gap: theme.core.space[3],
                padding: theme.core.space[4],
            }}
        >
            {(loading && (
                <div>
                    {parseServerResponse(
                        null,
                        <>
                            <LoadingProgress />
                        </>,
                    )}
                </div>
            )) ||
                (error && <>{parseServerResponse(error, <h1>🔴</h1>)}</>) || (
                    <>{pageContent()}</>
                )}
        </div>
    )
}
