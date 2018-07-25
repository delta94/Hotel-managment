import * as React from 'react'
import { RoomList, Room, RoomType, RoomTypeText } from './style'

export const ModalRoom: React.SFC<{}> = () => (
    <>
        <RoomList>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => (
                <Room key={i}>
                    <RoomType>Ap</RoomType>
                    <RoomTypeText>Apartament</RoomTypeText>
                </Room>
            ))}
        </RoomList>
    </>
)
