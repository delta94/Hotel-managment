import * as React from 'react'
import { Subscribe } from 'unstated'

import { InputDate } from 'src/Components/InputDate'
import { ModalContainer } from 'src/Components/Modal'
import { Container, Title, Subtitle, Row, Button, PlusIcon } from './style'

const modal1: React.SFC<any> = ({ hideModal }) => {
    return <p onClick={hideModal}>modal1</p>
}

export const BookingDetails: React.SFC<{}> = () => (
    <Container>
        <Title>Booking details</Title>

        <Row>
            <Subtitle>User details</Subtitle>

            <Subscribe to={[ModalContainer]}>
                {({ showModal }: ModalContainer) => (
                    <Button onClick={() => showModal(modal1)}>
                        <PlusIcon />
                        Add client details
                    </Button>
                )}
            </Subscribe>
        </Row>

        <Row>
            <Subtitle>Arrival date</Subtitle>

            <InputDate type="date" />
            <InputDate type="time" marginLeft />
        </Row>

        <Row>
            <Subtitle>Departure date</Subtitle>

            <InputDate type="date" />
        </Row>
    </Container>
)
