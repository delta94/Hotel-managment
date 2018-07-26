import * as React from 'react'

import { BookingDetails } from './Components/BookingDetails'
import { Services } from './Components/Services'
import { Rooms } from './Components/Rooms'
import { Container, Row, Item } from './style'

export const AddBooking: React.SFC<{}> = () => (
    <Container>
        <Row>
            <BookingDetails />
            <Services />
        </Row>

        <Row>
            <Rooms />
            <Item />
        </Row>
    </Container>
)
