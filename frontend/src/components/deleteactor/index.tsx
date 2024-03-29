import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";

import { deleteOneActor } from '../../queries';
import React, { DependencyList, useEffect } from "react";
import { ReadonlyRecord } from 'readonly-types/dist';
import { Theme } from "../../types/theme";
import { useTheme } from "../../store/store";

export interface IDeleteActorComponentProps {
    actorId: string
}

export default function DeleteActor({ actorId }: IDeleteActorComponentProps) {

    const [actorInput, setActorInput] = React.useState('full name');
    const [removeActor] = useMutation<typeof deleteOneActor.data>(gql(deleteOneActor.toString()));
    const theme: Theme = useTheme();


    if (actorId) {
        return (
            <button
                onClick={(e) => {
                    e.preventDefault();
                    alert(`you sent: ${JSON.stringify({ id: actorId, }, null, 2)}`)
                    removeActor({ variables: { id: actorId, } });
                }}
                style={{
                    borderRadius: theme.core.space[2],
                    padding: theme.core.space[3],
                    background: theme.core.colors.danger,
                    cursor: 'pointer',
                    color: 'white',
                    border: theme.core.borders.primary,
                    boxShadow: "0px 2.5px 7.5px crimson",
                }}
            >
                ☠️ Delete
            </button>
        );
    }
    else
        return (<div style={{
            padding: theme.core.space[3],
            background: theme.core.colors.background,
            whiteSpace: 'pre-wrap',
            lineBreak: 'anywhere',
            borderRadius: theme.core.space[3],
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: theme.core.space[3],
            boxShadow: theme.core.shadows.small,
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
                    border: theme.core.borders.secondary,
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