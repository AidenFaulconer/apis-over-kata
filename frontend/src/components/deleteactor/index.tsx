import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";

import { deleteOneActor } from '../../queries';
import React, { DependencyList, useEffect } from "react";
import { ReadonlyRecord } from 'readonly-types/dist';

export interface IDeleteActorComponentProps {
    actorId: string
}

export default function DeleteActor({ actorId }: IDeleteActorComponentProps) {

    const [actorInput, setActorInput] = React.useState('full name');
    const [removeActor] = useMutation<typeof deleteOneActor.data>(gql(deleteOneActor.toString()));


    if (actorId) {
        return (
            <button
                onClick={(e) => {
                    e.preventDefault();
                    alert(`you sent: ${JSON.stringify({ id: actorId, }, null, 2)}`)
                    removeActor({ variables: { id: actorId, } });
                }}
                style={{
                    borderRadius: '7.5px',
                    padding: '7.5px',
                    background: 'red',
                    cursor: 'pointer',
                    color: 'white',
                    boxShadow: "0px 2.5px 7.5px crimson",
                }}
            >
                Delete ☠️
            </button>
        );
    }
    else
        return (<div style={{
            padding: '30px',
            background: 'white',
            whiteSpace: 'pre-wrap',
            lineBreak: 'anywhere',
            borderRadius: '30px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '30px',
            boxShadow: "0px 5px 15px rgba(1,1,1,.3)",
            border: '1px solid rgba(1,1,1,.3)',
        }}>

            <form className="formInput">
                <input
                    className="input"
                    style={{
                        borderRadius: '30px',
                        padding: '7.5px',
                    }}
                    placeholder="first name"
                    value={actorInput}
                    onChange={e => setActorInput(e.target.value)}
                />
            </form>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    alert(`you sent: ${JSON.stringify({ firstname: actorInput }, null, 2)}`)
                    removeActor({ variables: { firstname: actorInput } });
                }}
                style={{
                    borderRadius: '30px',
                    padding: '7.5px',
                    background: 'red',
                    cursor: 'pointer',
                    color: 'white',
                }}
            >
                Delete Actor ❌
            </button>
        </div>
        );
};