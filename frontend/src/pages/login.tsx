import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";

import { loginOne } from '../queries';
import React, { DependencyList, useEffect } from "react";
import { ReadonlyRecord } from 'readonly-types/dist';
import { Theme } from "../types/theme";
import { useTheme, useStore } from '../store/store';
import { useFormStore } from '../util/index';
import { UserInputError } from "apollo-server-core";
import { Link, useNavigate } from "react-router-dom";
import LoadingProgress from "../components/progressload";

//TODO: handle this with two factor authentication or O-Auth or another IAM platform
export const HandleLogin = ({ variables }: { [key: string]: any }) => {
    const navigate = useNavigate()
    const loginAttemptResults = useQuery<typeof loginOne.data>(gql(loginOne.toString()), { variables });

    if (loginAttemptResults.data?.loginOne) {
        const [{ username, id }] = loginAttemptResults.data.loginOne;
        console.log(loginAttemptResults.data)

        alert('login successful')
        useStore.setState((state: any) => ({
            ...state,
            auth: {
                ...state.auth,
                isLoggedIn: true,
                user: {
                    username: username,
                    id: id,
                }
            }
        }))
        navigate('/dashboard')
        return <></>
    }
    else {
        return <LoadingProgress />
    }
}

export default function LoginPage(): JSX.Element {
    const [userNameInput, setUserNameInput, userNameInputError] = useFormStore('loginInput', 'username', true, 'username')
    const [passwordInput, setPasswordInput, passwordInputError] = useFormStore('loginInput', 'password', true, 'password')
    const inputErrors = [userNameInputError, passwordInputError]

    const [loggingIn, setLogginIn] = React.useState(false)

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
            {inputErrors.map(err => err && <div style={{ color: theme.core.colors.danger }}>{err}</div>)}
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
                    setLogginIn(true);
                    e.preventDefault();
                }}
                disabled={(inputErrors.every(error => error !== false))}
                style={{
                    ...(inputErrors.every(error => error === false)) ? { opacity: 1 } : { opacity: .3 },
                    borderRadius: theme.core.space[1],
                    padding: theme.core.space[3],
                    background: theme.core.colors.success,
                    cursor: 'pointer',
                    color: theme.core.colors.textSecondary,
                    boxShadow: "0px 2.5px 7.5px green",
                }}
            >
                💃 Login
                {loggingIn &&
                    <HandleLogin variables={{ username: userNameInput, password: passwordInput }} />
                }
            </button>
            <p style={{ color: theme.core.colors.text }}>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    );
};