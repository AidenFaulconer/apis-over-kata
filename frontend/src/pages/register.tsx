import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";

import { insertOneMessage } from '../queries';
import React, { DependencyList, useEffect } from "react";
import { ReadonlyRecord } from 'readonly-types/dist';
import { Theme } from "../types/theme";
import { useTheme } from "../store/store";
import { useFormStore, useTrackTime } from '../util/index';
import { UserInputError } from "apollo-server-core";
import { Link } from "react-router-dom";

export default function AddActor(): JSX.Element {

    const [userNameInput, setUserNameInput, userNameInputError] = useFormStore('loginInput', 'username', true, 'text')
    const [photoInput, setPhotoInput, photoInputError] = useFormStore('loginInput', 'profilePhoto', true, 'password')
    const [bioInput, setBioInput, bioInputError] = useFormStore('loginInput', 'bio', true, 'password')
    const [userTypeInput, setUserTypeInput, userTypeInputError] = useFormStore('loginInput', 'userType', true, 'password')
    const [passwordInput, setPasswordInput, passwordInputError] = useFormStore('loginInput', 'password', true, 'password')

    const [login] = useMutation<typeof insertOneMessage.data>(gql(insertOneMessage.toString()));

    const randomNumber = useTrackTime(0, 2500, (time) => Math.floor(time))
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
                    width: '400px',
                    ...theme.element.variants.column,
                    gap: theme.core.space[4],
                }}
            >
                <input
                    className="input"
                    style={{
                        width: '100%',
                        borderRadius: theme.core.space[1],
                        padding: theme.core.space[2],
                    }}
                    value={userNameInput}
                    onChange={e => setUserNameInput(e.target.value)}
                />
                <div
                    style={{
                        height: '120px',
                        width: '120px',
                        color: theme.core.colors.text,
                        background: theme.core.colors.background,
                        border: theme.core.borders.secondary,
                        borderRadius: '100%',
                        backgroundImage: `url('${photoInput + randomNumber}')`,
                        boxShadow: theme.core.shadows.small,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}
                />
                <input
                    className="input"
                    style={{
                        borderRadius: theme.core.space[1],
                        padding: theme.core.space[2],
                        width: '100%',
                    }}
                    placeholder="profile photo"
                    value={photoInput}
                    onChange={e => setPhotoInput(e.target.value)}
                />
                <textarea
                    className="input"
                    style={{
                        border: theme.core.borders.secondary,
                        borderRadius: theme.core.space[1],
                        height: '150px',
                        width: '100%',
                        padding: theme.core.space[2],
                    }}
                    placeholder="description"
                    value={bioInput}
                    onChange={e => setBioInput(e.target.value)}
                />
                <select

                    className="input"
                    style={{
                        width: '105%',
                        border: theme.core.borders.secondary,
                        borderRadius: theme.core.space[1],
                        padding: theme.core.space[2],
                    }}
                    placeholder="role"
                    value={userTypeInput}
                    onChange={e => setUserTypeInput(e.target.value)}
                >
                    <option value="actor">actor</option>
                    <option value="guest">guest</option>
                </select>
                <input
                    className="input"
                    style={{
                        width: '100%',
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
                            profilePhoto: photoInput,
                            bio: bioInput,
                            userType: userTypeInput,
                            password: passwordInput,
                        }
                    });
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
                💃 Register
            </button>
            <p style={{ color: theme.core.colors.text }}>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
};