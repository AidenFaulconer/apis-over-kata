import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";
import React, { DependencyList, useEffect, useState } from "react";
import { useStore, useTheme } from '../store/store';
import { Theme } from "../types/theme";

import { Link, useNavigate } from "react-router-dom";
import produce from "immer";


export const UserProfile = function ({ searchVariables }: { [key: string]: {}; }): JSX.Element {
    const currentUser = useStore((state: any) => state.auth.user);

    const theme: Theme = useTheme();
    return (
        <div>
            <div style={{
                ...theme.element.variants.row,
                gap: theme.core.space[3],
            }}>
                <div style={{
                    borderRadius: '100%',
                    display: 'block',
                    backgroundImage: `url(${currentUser.profile_picture})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100px',
                    height: '100px',
                }} />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: theme.core.space[1],
                }}>
                    <p>
                        {currentUser.username}
                    </p>
                    <p>
                        {currentUser.user_type}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function Header() {
    const theme: Theme = useTheme();
    const isLoggedIn = useStore((state: any) => state.auth.isLoggedIn)
    const navigate = useNavigate();

    const logout = () => {
        useStore.setState(produce((state: any) => {
            state.auth.isLoggedIn = false;
            state.auth.user = {}
        }));
        navigate("/");
    }

    return (
        <div style={{
            ...theme.element.variants.row,
            position: 'fixed',
            width: '100%',
            zIndex: 20000,
            background: theme.core.colors.background,
            gap: theme.core.space[3],
            padding: theme.core.space[2],
            border: theme.core.borders.primary,
            boxShadow: theme.core.shadows.small,
        }}>
            <Link to={'./dashboard'} style={{
                width: '40%',
                textDecoration: 'none',
                ...theme.element.variants.row,
                color: theme.core.colors.text,
            }}>
                <h1>Actors 💃</h1>
            </Link>

            <div style={{
                ...theme.element.variants.row,
                gap: theme.core.space[6],
                width: '60%',
            }}>
                <Link
                    to={'./dashboard'}
                    style={{ textDecoration: 'none' }}
                >Dashboard</Link>
                <Link
                    to={'./messenger'}
                    style={{ textDecoration: 'none' }}
                >Messenger</Link>
                <Link
                    to={'./actors'}
                    style={{ textDecoration: 'none' }}
                >Actors</Link>


                {isLoggedIn && <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: theme.core.space[2] }}>
                    <button
                        style={{
                            borderRadius: theme.core.space[1],
                            padding: theme.core.space[3],
                            height: '50px',
                            background: theme.core.colors.success,
                            cursor: 'pointer',
                            color: theme.core.colors.textSecondary,
                            boxShadow: "0px 2.5px 7.5px green",
                        }}
                        onClick={() => {
                            logout();
                        }}
                    >Logout</button>
                    <UserProfile />
                </div>
                }
            </div>


        </div >
    )
}
