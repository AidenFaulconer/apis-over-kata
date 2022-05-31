import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";

import { insertOneMessage } from '../queries';
import React, { DependencyList, useEffect } from "react";
import { ReadonlyRecord } from 'readonly-types/dist';
import { Theme } from "../types/theme";
import { useTheme } from "../store/store";
import { useFormStore } from '../util/index';

export default function AddActor(): JSX.Element {

    const [newMessageInput, setFormInput, inputError] = useFormStore('messageInput', 'body', true, 'textArea')
    const [sendMessage] = useMutation<typeof insertOneMessage.data>(gql(insertOneMessage.toString()));
    const theme: Theme = useTheme();
    return (
        <div style={{
            ...theme.element.variants.column,
            padding: theme.core.space[3],
            background: theme.core.colors.background,
            whiteSpace: 'pre-wrap',
            lineBreak: 'anywhere',
            borderRadius: theme.core.space[3],
            flexGrow: 1,
            height: '100%',
            alignItems: 'center',
            gap: theme.core.space[4],
            boxShadow: theme.core.shadows.small,
            border: theme.core.borders.primary,
            color: theme.core.colors.text,
        }}>
            <form className="formInput"
                style={{
                    ...theme.element.variants.column,
                    gap: theme.core.space[2],
                }}
            >
                <textarea
                    className="input"
                    style={{
                        borderRadius: theme.core.space[1],
                        padding: theme.core.space[2],
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
                    alert(`you sent: ${JSON.stringify(newMessageInput, null, 2)}`)
                    sendMessage({ variables: { body: newMessageInput } });
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