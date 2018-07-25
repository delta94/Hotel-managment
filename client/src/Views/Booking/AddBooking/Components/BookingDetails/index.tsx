import * as React from 'react'
import { Subscribe } from 'unstated'

import { Input } from 'src/Components/Input'
import { ModalContainer } from 'src/Components/Modal'
import { AddButon } from 'src/Components/Buttons'
import { ModalUser } from '../ModalUser'
import { Container, Title, Subtitle, Row } from './style'

export const BookingDetails: React.SFC<{}> = () => (
    <Container>
        <Title>Booking details</Title>

        <Row>
            <Subtitle>User details</Subtitle>

            <Subscribe to={[ModalContainer]}>
                {({ showModal }: ModalContainer) => (
                    <AddButon
                        title="Add client details"
                        width={200}
                        onClick={() => showModal(ModalUser)}
                    />
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
