import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";

import { insertOneMessage } from '../queries';
import React, { DependencyList, useEffect } from "react";
import { ReadonlyRecord } from 'readonly-types/dist';
import { Theme } from "../types/theme";
import { useTheme } from "../store/store";
import { useFormStore } from '../util/index';
import { UserInputError } from "apollo-server-core";
import { Link } from "react-router-dom";

export default function AddActor(): JSX.Element {

    const [userNameInput, setUserNameInput, userNameInputError] = useFormStore('loginInput', 'username', true, 'text')
    const [passwordInput, setPasswordInput, passwordInputError] = useFormStore('loginInput', 'password', true, 'password')
    const [login] = useMutation<typeof insertOneMessage.data>(gql(insertOneMessage.toString()));
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
            width: '100%',
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
                    placeholder="email"
                    value={userNameInput}
                    onChange={e => setUserNameInput(e.target.value)}
                />
                <input
                    className="input"
                    style={{
                        borderRadius: theme.core.space[1],
                        padding: theme.core.space[2],
                    }}
                    value={passwordInput}
                    onChange={e => setPasswordInput(e.target.value)}
                />
            </form>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    login({ variables: { password: passwordInput, username: userNameInput } });
                }}
                disabled={(userNameInputError || passwordInputError)}
                style={{
                    ...(userNameInputError || passwordInputError) ? { opacity: .3 } : { opacity: 1 },
                    borderRadius: theme.core.space[1],
                    padding: theme.core.space[3],
                    background: theme.core.colors.success,
                    cursor: 'pointer',
                    color: theme.core.colors.textSecondary,
                    boxShadow: "0px 2.5px 7.5px green",
                }}
            >
                💃 Login
            </button>
            <p style={{ color: theme.core.colors.text }}>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    );
};