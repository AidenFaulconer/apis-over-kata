import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";

import { getActorsQuery, getActorsSubscription, aggregateActorsRolesAndFilms } from '../queries';
import Table, { ITableComponentProps } from '../components/table'
import React, { DependencyList, useEffect } from "react";
import { ColumnsType, DefaultRecordType } from 'rc-table/lib/interface';
import AddActor from "../components/addactor";
import DeleteActor from "../components/deleteactor";
import { useStore, useTheme } from "../store/store";
import { AppStore } from '../types/store';
import { StateSelector } from "zustand";
import { Theme } from "../types/theme";
import { deepmerge } from "@mui/utils";


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



export default function ActorsPage() {
    const [actorData, setActorData] = React.useState({ data: mockData, columns: mockColumns });
    const { loading, error, data } = useSubscription<typeof getActorsSubscription.data>(gql(getActorsSubscription.toString()));
    const theme: Theme = useTheme();
    const deps: DependencyList = [actorData, loading, error]

    // Updating state, will trigger listeners
    const actorsSub = useStore.subscribe((state: any) => state.users.actors)
    const store = useStore()
    const actors = useStore((state: any) => state?.users?.actors)
    const setActors = useStore((state: any) => state?.actions?.setActors)


    debugger;
    // Unsubscribe listeners
    // actorsSub()

    if (data) {
        console.log(JSON.stringify(data, null, 2))
    }

    const pageContent = React.useCallback(() =>
        <>
            <AddActor />
            <div
                style={{
                    ...theme.element.variants.column,
                    boxShadow: "0px 5px 15px rgba(1,1,1,.3)",
                    border: theme.core.borders.primary,
                    background: 'white',
                    minHeight: '300px',
                    height: '100%',
                    position: 'relative',
                    width: 'auto',
                    padding: theme.core.space[4],
                    borderRadius: theme.core.space[3],
                    overflowY: 'scroll',
                    // gridColumn: 'span 3',
                    gridRow: 'span 3',
                }}>
                <Table data={data?.actors} columns={actorData.columns} />
            </div>
        </>
        , [...deps, data])

    const parseServerResponse = React.useCallback((data: any, statusElement: JSX.Element) =>
        <div
            style={{
                ...theme.element.variants.column,
                gridColumn: 'span 2',
                background: theme.core.colors.background,
                padding: theme.core.space[4],
                height: '100%',
                minWidth: '200px',
                gridRow: 'span 2',
                whiteSpace: 'pre-wrap',
                lineBreak: 'anywhere',
                borderRadius: theme.core.space[3],
                boxShadow: theme.core.shadows.large,
                overflowY: 'scroll',
                overflowX: 'hidden',
                border: theme.core.borders.primary,
            }}>
            {statusElement}
            {JSON.stringify(data, null, 2)}
        </div>
        , deps)

    return (
        <div style={theme.element.variants.grid}>
            {
                loading &&
                <div>
                    {parseServerResponse('loading...', <h1>🟡</h1>)}
                </div>
                || error &&
                <>
                    {parseServerResponse(error, <h1>🔴</h1>)}
                </>
                ||
                <>
                    {parseServerResponse(data, <h1>🟢</h1>)}
                    {pageContent()}
                </>
            }
        </div >
    )
}
