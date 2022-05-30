import { gql, useQuery, useMutation, useSubscription, } from "@apollo/client";

import { insertOneActor } from '../../queries';
import React, { DependencyList, useEffect } from "react";
import { ReadonlyRecord } from 'readonly-types/dist';
import { Theme } from "../../types/theme";
import { useTheme, useStore } from '../../store/store';
import { searchActors } from '../../queries/index';
import { useFormStore } from "../../util";
import { uniqueId } from "lodash-es";

const SearchResults = ({ searchVariables }: { [key: string]: any }): JSX.Element => {
    const theme: Theme = useTheme();

    const { loading, error, data } = useQuery<typeof searchActors.data>(gql(searchActors.toString()), { variables: searchVariables });
    if (loading) return <></>
    if (error) return <></>
    // if (error) return <div>error...{JSON.stringify(error, null, 2)}</div>
    return (
        <div
            style={{
                ...theme.element.variants.column,
                padding: theme.core.space[1],
                paddingTop: theme.core.space[2],
                paddingBottom: theme.core.space[2],
                maxHeight: '100%',
                maxWidth: '175px',
                marginTop: theme.core.space[1],
                overflowY: 'scroll',
                overflowX: 'hidden',
                gap: theme.core.space[2],
                boxShadow: theme.core.shadows.small,
                borderRadius: theme.core.space[2],
            }}
            key={uniqueId()}
        >
            {data && data?.searchActors.map(actor => (
                <div
                    draggable
                    style={{
                        ...theme.element.variants.row,
                        fontSize: theme.core.fonts.fontSizes[0],
                        border: theme.core.borders.primary,
                        padding: theme.core.space[2],
                        borderRadius: theme.core.space[1],
                        background: theme.core.colors.info,
                        color: theme.core.colors.primary,
                        boxShadow: theme.core.shadows.small,
                        maxWidth: '125px',
                    }}
                >
                    <div>🧘</div>
                    <div>
                        {` ${actor?.firstname} ${actor?.middlename} ${actor?.lastname}`}
                    </div>
                </div>
            ))}
        </div>)
}

export default function SearchActors({ fieldName = 'fullname', formName = 'userInput' }): JSX.Element {
    const theme: Theme = useTheme();

    const [newActorInput, setFormInput, inputError] = useFormStore(formName, fieldName, true, 'fullName')
    const [search, setSearch] = React.useState({})

    const partsOfName = ['firstname', 'middlename', 'lastname']
    const processInput = (input: string) => input.split(' ').reduce(
        (acc, namePart, index): object => ({
            ...acc,
            [partsOfName[index]]: namePart
        }), {}
    )

    const deps: DependencyList = [newActorInput, inputError]
    return (
        <div style={{
            ...theme.element.variants.row,
            padding: theme.core.space[3],
            background: theme.core.colors.background,
            whiteSpace: 'pre-wrap',
            lineBreak: 'anywhere',
            borderRadius: theme.core.space[3],
            flexGrow: 1,
            height: '325px',
            alignItems: 'start',
            gap: theme.core.space[4],
            boxShadow: theme.core.shadows.small,
            border: theme.core.borders.primary,
            color: theme.core.colors.text,
        }}>
            <form className="formInput">
                <input
                    className="input"
                    style={{
                        borderRadius: theme.core.space[1],
                        padding: theme.core.space[2],
                    }}
                    placeholder="search full name"
                    value={newActorInput}
                    onChange={e => {
                        e.preventDefault();
                        setFormInput(e.target.value)
                        setSearch(processInput(newActorInput));
                        // alert(`you sent: ${JSON.stringify(processInput(newActorInput), null, 2)}`)
                    }}
                />
                <SearchResults searchVariables={search} />
            </form>

        </div >
    );
};