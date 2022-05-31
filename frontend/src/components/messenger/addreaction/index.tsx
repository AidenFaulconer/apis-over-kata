import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";

import { insertOneMessage } from '../../../queries';
import React, { DependencyList, useEffect } from "react";
import { ReadonlyRecord } from 'readonly-types/dist';
import { Theme } from "../../../types/theme";
import { useTheme } from "../../../store/store";
import { useFormStore } from '../../../util/index';
import Picker from 'emoji-picker-react';


export default function AddReaction({ messageId }: { messageId: string }): JSX.Element {

    const [newMessageReaction, setFormInput, inputError] = useFormStore('messageInput', 'reactions', true, 'text')
    const [sendReaction] = useMutation<typeof insertOneMessage.data>(gql(insertOneMessage.toString()));
    const theme: Theme = useTheme();

    const [chosenEmoji, setChosenEmoji]: any[] = React.useState(null);

    const onEmojiClick = (event: any, emojiObject: any) => {
        setFormInput(emojiObject);
        // sendReaction({variables: {reactions: newMessageReaction}})
    };

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
            {chosenEmoji ? (
                <span>You chose: {chosenEmoji?.emoji}</span>
            ) : (
                <span>No emoji Chosen</span>
            )}
            <Picker onEmojiClick={onEmojiClick} />
        </div >
    );
};