import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";

import { insertOneActor } from '../../queries';
import React, { DependencyList, useEffect } from "react";
import { ReadonlyRecord } from 'readonly-types/dist';

export default function AddActor({ isPublic = false }) {

    const [actorInput, setActorInput] = React.useState('full name');
    const [addActor] = useMutation<typeof insertOneActor.data>(gql(insertOneActor.toString()));

    const partsOfName = ['firstname', 'middlename', 'lastname']
    const processInput = (input: string) => input.split(' ').reduce(
        (acc, namePart, index): object => ({
            ...acc,
            [partsOfName[index]]: namePart
        }), {}
    )

    return (
        <div style={{
            padding: '30px',
            gridRow: 'span 1',
            gridColumn: 'span 1',
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
                    alert(`you sent: ${JSON.stringify(processInput(actorInput), null, 2)}`)
                    addActor({ variables: processInput(actorInput) });
                }}
                disabled={actorInput.split(' ').length < 3}
                style={{
                    ...actorInput.split(' ').length < 3 ? { opacity: .3 } : { opacity: 1 },
                    borderRadius: '30px',
                    padding: '7.5px',
                    background: 'green',
                    cursor: 'pointer',
                    color: 'white',
                    boxShadow: "0px 2.5px 7.5px green",
                }}
            >
                Add Actor 💃
            </button>
        </div>
    );
};