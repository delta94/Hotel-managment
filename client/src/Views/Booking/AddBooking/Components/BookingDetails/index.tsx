import * as React from 'react'
import { Subscribe } from 'unstated'

import { Input } from 'src/Components/Input'
import { ModalContainer } from 'src/Components/Modal'
import { ModalUser } from '../ModalUser'
import { Container, Title, Subtitle, Row, Button, PlusIcon } from './style'

export const BookingDetails: React.SFC<{}> = () => (
    <Container>
        <Title>Booking details</Title>

        <Row>
            <Subtitle>User details</Subtitle>

            <Subscribe to={[ModalContainer]}>
                {({ showModal }: ModalContainer) => (
                    <Button onClick={() => showModal(ModalUser)}>
                        <PlusIcon />
                        Add client details
                    </Button>
                )}
            </Subscribe>
        </Row>

        <Row>
            <Subtitle>Arrival date</Subtitle>

            <Input type="datetime-local" onChange={text => console.log(text)} />
        </Row>

        <Row>
            <Subtitle>Departure date</Subtitle>

            <Input type="date" onChange={text => console.log(text)} />
        </Row>
    </Container>
)
