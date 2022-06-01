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
import MessageContainer from '../components/messenger'
import { getMessagesSubscription } from '../queries';
import AddMessage from '../components/messenger/addmessage';
import ProgressLoader from '../components/progressload'


export default function ActorsPage(): JSX.Element {
    const [actorData, setActorData] = React.useState({})
    const { loading, error, data } = useSubscription<typeof getMessagesSubscription.data>(
        gql(getMessagesSubscription.toString()),
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
                        flexDirection: 'column-reverse',
                        justifyContent: 'start',
                        alignItems: 'center',
                        boxShadow: `inset ${theme.core.shadows.small}`,
                        border: theme.core.borders.primary,
                        background: 'white',
                        maxHeight: '60vh',
                        height: '100%',
                        width: '100%',
                        position: 'relative',
                        padding: theme.core.space[3],
                        borderRadius: theme.core.space[3],
                        overflowX: 'hidden',
                    }}
                >
                    <MessageContainer data={results?.messages} />
                </div>
                <AddMessage />
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
                width: '90%',
                gap: theme.core.space[3],
                margin: theme.core.space[4],
            }}
        >
            {(loading && (
                <div>
                    {parseServerResponse(
                        null,
                        <>
                            <ProgressLoader />
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