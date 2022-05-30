import { gql, useMutation } from "@apollo/client";

import { insertOneActor } from '../../queries';
import React, { } from "react";
import { Theme } from "../../types/theme";
import { useTheme } from "../../store/store";

export default function AddActor(): JSX.Element {

    const [actorInput, setActorInput] = React.useState('full name');
    const [formInput, setFormInput] = React.useState({
        firstname: '',
        middlename: '',
        lastname: '',
        films: [{}],
        roles: [{}],
    });
    const [addActor] = useMutation<typeof insertOneActor.data>(gql(insertOneActor.toString()));
    const theme: Theme = useTheme();

    const partsOfName = ['firstname', 'middlename', 'lastname']
    const processInput = (input: string) => input.split(' ').reduce(
        (acc, namePart, index): object => ({
            ...acc,
            [partsOfName[index]]: namePart
        }), {}
    )

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
                <input
                    className="input"
                    style={{
                        borderRadius: theme.core.space[1],
                        padding: theme.core.space[2],
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
                    borderRadius: theme.core.space[1],
                    padding: theme.core.space[3],
                    background: theme.core.colors.success,
                    cursor: 'pointer',
                    color: theme.core.colors.textSecondary,
                    boxShadow: "0px 2.5px 7.5px green",
                }}
            >
                💃 Add Actor
            </button>
        </div>
    );
};