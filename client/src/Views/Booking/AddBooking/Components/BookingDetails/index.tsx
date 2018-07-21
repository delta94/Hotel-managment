import * as React from 'react'

import { Container, Title, Subtitle, Row, Button, PlusIcon } from './style'
import { InputDate } from '../../../../../Components/InputDate'

export const BookingDetails: React.SFC<{}> = () => (
    <Container>
        <Title>Booking details</Title>

        <Row>
            <Subtitle>User details</Subtitle>

            <Button>
                <PlusIcon />
                Add client details
            </Button>
        </Row>

        <Row>
            <Subtitle>Arrival date</Subtitle>

            <InputDate type="date" />
            <InputDate type="time" />
        </Row>

        <Row>
            <Subtitle>Departure date</Subtitle>

            <InputDate type="date" />
        </Row>
    </Container>
)
