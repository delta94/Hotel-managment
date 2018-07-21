import * as React from 'react'

import { BookingDetails } from './Components/BookingDetails'
import { Container, Row, Item } from './style'

export const AddBooking: React.SFC<{}> = () => (
    <Container>
        <Row>
            <BookingDetails />
            <Item />
        </Row>

        <Row>
            <Item />
            <Item />
        </Row>
    </Container>
)
