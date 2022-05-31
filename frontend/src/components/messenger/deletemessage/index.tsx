import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";

import { deleteOneActor, deleteOneMessage } from '../../../queries';
import React, { DependencyList, useEffect } from "react";
import { ReadonlyRecord } from 'readonly-types/dist';
import { Theme } from "../../../types/theme";
import { useTheme } from "../../../store/store";

export default function DeleteActor({ messageId }: { messageId: string }): JSX.Element {

    const [messageInput, setMessageInput] = React.useState('full name');
    const [removeMessage] = useMutation<typeof deleteOneMessage.data>(gql(deleteOneMessage.toString()));
    const theme: Theme = useTheme();


    if (messageId) {
        return (
            <button
                onClick={(e) => {
                    e.preventDefault();
                    alert(`you sent: ${JSON.stringify({ id: messageId, }, null, 2)}`)
                    removeMessage({ variables: { id: messageId, } });
                }}
                style={{
                    border: 'none',
                    background: 'inherit',
                    color: theme.core.colors.danger,
                    cursor: 'pointer',
                }}
            >
                ☠️ Delete Message
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
                    value={messageInput}
                    onChange={e => setMessageInput(e.target.value)}
                />
            </form>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    alert(`you sent: ${JSON.stringify({ id: messageInput }, null, 2)}`)
                    removeMessage({ variables: { id: messageInput } });
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
                Delete Message ❌
            </button>
        </div>
        );
};