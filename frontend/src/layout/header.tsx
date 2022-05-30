import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";

import React, { DependencyList, useEffect, useState } from "react";
import { useStore, useTheme } from '../store/store';
import { AppStore } from '../types/store';
import { Theme } from "../types/theme";
import { useToggle } from "../util";
import { colors } from '../store/theme';
import { useTrackTime } from '../util/index';

import { Link } from "react-router-dom";


export const UserProfile = function ({ searchVariables }: { [key: string]: {}; }): JSX.Element {
    const currentUser = useStore((state: any) => state.user.currentUser);
    const theme: Theme = useTheme();

    // debugger;
    return (
        <div>
            <div style={{
                ...theme.element.variants.row,
                gap: theme.core.space[3],
            }}>
                <div style={{
                    borderRadius: '100%',
                    display: 'block',
                    backgroundImage: `url(${currentUser.avatar})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100px',
                    height: '100px',
                }} />
                {currentUser.name}
            </div>
        </div>
    );
}

export default function Header() {
    const theme: Theme = useTheme();
    const time = useTrackTime(0, 10, (time) => {
        return Math.round(time)
    })
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
            <div style={{
                width: '40%',
                ...theme.element.variants.row,
                color: theme.core.colors.text,
            }}>
                <h1>Actors 💃</h1>
            </div>

            <div style={{
                ...theme.element.variants.row,
                gap: theme.core.space[6],
                width: '60%',
            }}>
                <Link
                    to={'./messenger'}
                    style={{ textDecoration: 'none' }}
                >Messenger</Link>
                <Link
                    to={'./actors'}
                    style={{ textDecoration: 'none' }}
                >Actors</Link>
            </div>
        </div >
    )
}
