import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";

import { insertOneMessage } from '../../../queries';
import React, { DependencyList, useEffect } from "react";
import { ReadonlyRecord } from 'readonly-types/dist';
import { Theme } from "../../../types/theme";
import { useTheme } from "../../../store/store";
import { useFormStore } from '../../../util/index';

export default function AddActor(): JSX.Element {

    const [newMessageInput, setFormInput, inputError] = useFormStore('messageInput', 'body', true, 'textArea')
    const [newSenderId, setSenderId, senderInputError] = useFormStore('messageInput', 'senderId', true, 'textArea')
    const [sendMessage] = useMutation<typeof insertOneMessage.data>(gql(insertOneMessage.toString()));
    const theme: Theme = useTheme();
    return (
        <div style={{
            ...theme.element.variants.row,
            whiteSpace: 'pre-wrap',
            lineBreak: 'anywhere',
            borderRadius: theme.core.space[3],
            flexGrow: 1,
            height: '100%',
            alignItems: 'center',
            gap: theme.core.space[4],
            color: theme.core.colors.text,
            justifyContent: 'start',
        }}>
            <form className="formInput"
                style={{
                    ...theme.element.variants.row,
                    gap: theme.core.space[2],
                    width: '50%',
                    height: '100%',
                }}
            >
                {/* <input
                    className="input"
                    style={{
                        borderRadius: '30px',
                        padding: '7.5px',
                    }}
                    placeholder="first name"
                    value={newSenderId}
                    onChange={e => setSenderId(e.target.value)}
                /> */}
                <textarea
                    className="input"
                    style={{
                        borderRadius: theme.core.space[2],
                        padding: theme.core.space[2],
                        boxShadow: `inset ${theme.core.shadows.small}`,
                        minHeight: '100px',
                        minWidth: '350px',
                        width: '100%',
                        height: '100%',
                    }}
                    placeholder="first name"
                    value={newMessageInput}
                    onChange={e => {
                        setFormInput(e.target.value)
                    }}
                />
            </form>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    alert(`you sent: ${JSON.stringify({ "body": newMessageInput, "senderId": newSenderId }, null, 2)}`)
                    sendMessage({ variables: { "body": newMessageInput, "senderId": newSenderId } });
                }}
                disabled={newMessageInput.length < 5}
                style={{
                    ...newMessageInput.length < 5 ? { opacity: .3 } : { opacity: 1 },
                    borderRadius: theme.core.space[1],
                    padding: theme.core.space[3],
                    background: theme.core.colors.success,
                    cursor: 'pointer',
                    color: theme.core.colors.textSecondary,
                    boxShadow: "0px 2.5px 7.5px green",
                }}
            >
                💬 Send Message
            </button>
        </div>
    );
};