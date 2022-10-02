import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";

import { loginOne } from '../queries';
import { ReadonlyRecord } from 'readonly-types/dist';
import { Theme } from "../types/theme";
import { useTheme, useStore } from '../store/store';
import { useFormStore } from '../util/index';
import { Link, Navigate, useNavigate } from "react-router-dom";
import LoadingProgress from "../components/progressload";
import { useLazyQuery } from "@apollo/react-hoc";
import produce from "immer";

export default function LoginPage(): JSX.Element {
    const [userNameInput, setUserNameInput, userNameInputError] = useFormStore('loginInput', 'username', true, 'username')
    const [passwordInput, setPasswordInput, passwordInputError] = useFormStore('loginInput', 'password', true, 'password')
    const inputErrors = [userNameInputError, passwordInputError]

    const [login, { loading, error, data }] = useLazyQuery<typeof loginOne.data>(
        gql(loginOne.toString()),
    )

    const theme: Theme = useTheme();

    if (data?.loginOne[0]) {
        const [{ username, id, profile_picture, user_type, bio }] = data?.loginOne;

        useStore.setState(
            produce((state: any) => {
                state.auth.isLoggedIn = true;
                state.auth.user = {
                    username,
                    id,
                    profile_picture,
                    user_type, bio
                }
            }));

        return <><Navigate to="/dashboard" replace /></>
    }


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
            {error && <div style={{ color: theme.core.colors.danger }}>{error.message}</div>}
            {data && <div style={{ color: theme.core.colors.danger }}>No user found with given email and password</div>}

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
                    login({
                        variables: {
                            username: userNameInput,
                            password: passwordInput
                        }
                    })
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
                {loading && <LoadingProgress />}
            </button>
            <p style={{ color: theme.core.colors.text }}>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    );
};