import * as React from 'react';
import { Theme } from '../../types/theme';
import { useTheme } from '../../store/store';



//https://table-react-component.vercel.app/demo/animation
export default function MessageContainer({ data }: { [key: string]: any }) {
    const theme: Theme = useTheme();
    console.log(data)
    return (
        <div
            style={{
                border: theme.core.borders.primary,
                ...theme.element.variants.column,
                gap: theme.core.space[1],
                width: '100%',
                justifyContent: 'start',
            }}
        >
            {data?.sort((a: any, b: any) => a.timestamp - b.timestamp).map((message: any) => {
                return (
                    <div
                        style={{
                            padding: theme.core.space[3],
                            border: theme.core.borders.primary,
                            ...theme.element.variants.row,
                            gap: theme.core.space[2],
                            width: '90%',
                            margin: theme.core.space[3],
                            justifyContent: 'start',
                            boxShadow: theme.core.shadows.small,
                            borderRadius: theme.core.space[2],
                        }}
                    >
                        <div
                            style={{
                                maxWidth: 50,
                                maxHeight: 50,
                                height: '50px',
                                width: '50px',
                                color: theme.core.colors.text,
                                background: theme.core.colors.background,
                                border: theme.core.borders.primary,
                                boxShadow: theme.core.shadows.small,
                                borderRadius: '100%',
                                backgroundImage: `url('https://randomuser.me/api/portraits/men/70.jpg')`
                            }} />
                        <b style={{
                            textTransform: 'capitalize'
                        }}>
                            {`${message?.actor?.firstname}:`}
                        </b>
                        <p>{message?.body}</p>
                    </div>
                )
            })}
        </div>
    );
}