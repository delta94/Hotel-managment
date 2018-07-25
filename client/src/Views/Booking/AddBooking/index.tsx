import * as React from 'react'

import { BookingDetails } from './Components/BookingDetails'
import { Rooms } from './Components/Rooms'
import { Container, Row, Item } from './style'

export const AddBooking: React.SFC<{}> = () => (
    <Container>
        <Row>
            <BookingDetails />
            <Item />
        </Row>

        <Row>
            <Rooms />
            <Item />
        </Row>
    </Container>
)
