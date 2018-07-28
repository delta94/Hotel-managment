import * as React from 'react'

import { withRooms, WithRoomsQuery } from '../../../../../graphql/rooms'
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

const C: React.SFC<WithRoomsQuery> = ({ rooms, loading }) => (
    <>
        <RoomList>
            {rooms.map(room => (
                <Room key={room.roomNumber}>
                    <Wrapper>
                        <RoomType>{room.type.substring(0, 2)}</RoomType>
                        <Text>{room.type}</Text>
                    </Wrapper>

                    <Wrapper>
                        <OrderIcon />
                        <Text>{room.roomNumber}</Text>
                    </Wrapper>

                    <Wrapper>
                        <PeopleIcon />
                        <Text>{room.people}</Text>
                    </Wrapper>

                    <Wrapper>
                        <WalletIcon />
                        <Text>$ {room.price}</Text>
                    </Wrapper>
                </Room>
            ))}
        </RoomList>
    </>
)

export const ModalRoom = withRooms(C)
