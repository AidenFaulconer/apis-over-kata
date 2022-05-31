import * as React from 'react';
import { Theme } from '../../types/theme';
import { useTheme } from '../../store/store';

import DeleteMessage from './deletemessage';
import AddReaction from './addreaction';


//https://table-react-component.vercel.app/demo/animation
export default function MessageContainer({ data }: { [key: string]: any }) {
    const theme: Theme = useTheme();

    const [isOpen, setIsOpen] = React.useState(-1);
    console.log(data)

    //method to sort an array of objects with a timestamp field, containing a data, in ascending order
    const sortByTimestamp = React.useCallback((a: any, b: any) => {
        return a.timestamp - b.timestamp;
    }, [])

    return (
        <div
            style={{
                ...theme.element.variants.column,
                gap: theme.core.space[1],
                width: '100%',
                position: 'relative',
                justifyContent: 'start',
                overflowY: 'scroll',
            }}
        >
            {data?.sort(sortByTimestamp).map((message: any, index: number) => (
                <div
                    style={{
                        // overflow: 'scroll',
                        maxHeight: '200px',
                        padding: theme.core.space[3],
                        ...theme.element.variants.row,
                        width: '90%',
                        margin: theme.core.space[3],
                        justifyContent: 'space-between',
                        borderRadius: theme.core.space[2],
                    }}
                >
                    <div>
                        <i style={{ opacity: .5 }}>{message?.timestamp}</i>
                        <p style={{
                            boxShadow: theme.core.shadows.small,
                            border: theme.core.borders.primary,
                            background: theme.core.colors.background,
                            marginLeft: theme.core.space[4],
                            marginBottom: -theme.core.space[2],
                            padding: theme.core.space[3],
                            position: 'relative',
                            //style border radius like a chat bubble
                            borderRadius: `100px 100px 100px 0px`,
                        }}>
                            {message?.body}
                            <div style={{
                                background: theme.core.colors.success,
                                padding: theme.core.space[1],
                                borderRadius: theme.core.space[3],
                                position: 'absolute',
                                bottom: -theme.core.space[3],
                                right: -theme.core.space[4],
                                ...theme.element.variants.row,
                            }}>
                                <div onClick={() => isOpen === index ? setIsOpen(-1) : setIsOpen(index)}>
                                    🙂
                                    {index === isOpen &&
                                        <div
                                            // onClick={() => setIsOpen(-1)}
                                            style={{
                                                background: theme.core.colors.background,
                                                boxShadow: theme.core.shadows.large,
                                                borderRadius: theme.core.space[3],
                                                position: 'absolute',
                                                top: -theme.core.space[2],
                                                left: 0,
                                                zIndex: 20,
                                                ...theme.element.variants.row,
                                            }}>
                                            <AddReaction messageId={message?.id} />
                                        </div>
                                    }
                                </div>
                            </div>
                        </p>

                        <div
                            style={{
                                maxWidth: 50,
                                maxHeight: 50,
                                height: '50px',
                                width: '50px',
                                color: theme.core.colors.text,
                                background: theme.core.colors.background,
                                border: theme.core.borders.primary,
                                borderRadius: '100%',
                                backgroundImage: `url('https://randomuser.me/api/portraits/men/76.jpg')`,
                                backgroundSize: 'cover',

                                //fit background image
                                backgroundPosition: 'center',
                            }} />
                        <b style={{
                            textTransform: 'capitalize'
                        }}>
                            {`${message?.actor?.firstname}`}
                        </b>
                    </div>

                    <div>
                        <DeleteMessage messageId={message?.id} />
                    </div>

                </div >
            ))
            }
        </div >
    );
}
