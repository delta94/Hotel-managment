import * as React from 'react'

import {
    RoomList,
    Room,
    RoomType,
    Text,
    PeopleIcon,
    Wrapper,
    WalletIcon,
    OrderIcon
} from './style'

export const ModalRoom: React.SFC<{}> = () => (
    <>
        <RoomList>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(i => (
                <Room key={i}>
                    <Wrapper>
                        <RoomType>Ap</RoomType>
                        <Text>Apartament</Text>
                    </Wrapper>

                    <Wrapper>
                        <OrderIcon />
                        <Text>003</Text>
                    </Wrapper>

                    <Wrapper>
                        <PeopleIcon />
                        <Text>4</Text>
                    </Wrapper>

                    <Wrapper>
                        <WalletIcon />
                        <Text>$ 50</Text>
                    </Wrapper>
                </Room>
            ))}
        </RoomList>
    </>
)
