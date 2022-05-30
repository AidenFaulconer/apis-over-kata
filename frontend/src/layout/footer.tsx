import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";

import React, { DependencyList, useEffect } from "react";
import { useStore, useTheme } from '../store/store';
import { AppStore } from '../types/store';
import { Theme } from "../types/theme";

export default function Footer() {
    const theme: Theme = useTheme();
    return (
        <div style={{
            ...theme.element.variants.row,
            width: '100%',
            border: theme.core.borders.primary,
            boxShadow: theme.core.shadows.small,

            ...theme.element.variants.row,
            position: 'sticky',
            background: theme.core.colors.background,
            gap: theme.core.space[3],
            padding: theme.core.space[4],
        }}>
            <div style={{
                width: '40%',
                ...theme.element.variants.row,
                color: theme.core.colors.text,
            }}>
                <h1>Actors 👨‍💻🙋</h1>
            </div>
            <div style={{
                ...theme.element.variants.column,
                width: '70%',
                gap: theme.core.space[3],
            }}>
                <a href="./">Home</a>
                <a href="./">Actors</a>
            </div>
            <div style={{
                ...theme.element.variants.column,
                width: '70%',
            }}>
            </div>
        </div>
    )
}
