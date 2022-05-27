import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";

import { getActorsQuery, getActorsSubscription, aggregateActorsRolesAndFilms } from '../queries';
import Table, { ITableComponentProps } from '../components/table'
import React, { DependencyList, useEffect } from "react";
import { ColumnsType, DefaultRecordType } from 'rc-table/lib/interface';
import AddActor from "../components/addactor";
import DeleteActor from "../components/deleteactor";


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

const gridWrapperStyles: React.CSSProperties = {
    display: 'grid',
    gridGap: '30px',
    height: '100%',
    padding: '30px',
    gridTemplateColumns: 'repeat(auto - fit, minmax(250px, 1fr))',
    gridAutoRows: '200px',
    gridAutoFlow: 'dense',
}


export default function ActorsPage() {
    const [actorData, setActorData] = React.useState({ data: mockData, columns: mockColumns });
    const { loading, error, data } = useSubscription<typeof getActorsSubscription.data>(gql(getActorsSubscription.toString()));
    const deps: DependencyList = [actorData, loading, error]


    if (data) {
        console.log(JSON.stringify(data, null, 2))
    }


    const pageContent = React.useCallback(() =>
        // <Masonry>
        <>
            <AddActor />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: "start",
                    boxShadow: "0px 5px 15px rgba(1,1,1,.3)",
                    border: '1px solid rgba(1,1,1,.3)',
                    background: 'white',
                    minHeight: '300px',
                    height: '100%',
                    position: 'relative',
                    width: 'auto',
                    padding: '30px',
                    borderRadius: '30px',
                    overflowY: 'scroll',
                    // gridColumn: 'span 3',
                    gridRow: 'span 3',
                }}>
                <Table data={data?.actors} columns={actorData.columns} />
            </div>
            {/* </Masonry> */}
        </>
        , [...deps, data])

    const parseServerResponse = React.useCallback((data: any, statusElement: JSX.Element) =>
        <div
            style={{
                gridColumn: 'span 2',
                height: '100%',
                minWidth: '200px',
                gridRow: 'span 2',
                background: 'white',
                whiteSpace: 'pre-wrap',
                lineBreak: 'anywhere',
                borderRadius: '30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: "0px 5px 15px rgba(1,1,1,.3)",
                overflowY: 'scroll',
                overflowX: 'hidden',
                border: '1px solid rgba(1,1,1,.3)',
            }}>
            {statusElement}
            {JSON.stringify(data, null, 2)}
        </div>
        , deps)

    return (
        <div style={gridWrapperStyles}>
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
