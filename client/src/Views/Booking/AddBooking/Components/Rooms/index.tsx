import * as React from 'react'
import { Subscribe } from 'unstated'

import { AddButon } from 'src/Components/Buttons'
import { ModalContainer } from 'src/Components/Modal'
import { ModalRoom } from '../ModalRoom'
import {
    Container,
    Title,
    Table,
    Tr,
    Legend,
    Td,
    TableContainer
} from './style'

export const Rooms: React.SFC<{}> = () => (
    <Container>
        <Title>Rooms</Title>
        <TableContainer>
            <Table>
                <Tr>
                    <Legend>Room type</Legend>
                    <Legend>Room number</Legend>
                    <Legend>People</Legend>
                    <Legend>Price</Legend>
                    <Legend>Edit</Legend>
                </Tr>

                <Tr>
                    <Td>Apartament</Td>
                    <Td>1</Td>
                    <Td>3</Td>
                    <Td>150</Td>
                    <Td>+ -</Td>
                </Tr>
            </Table>
        </TableContainer>

        <Subscribe to={[ModalContainer]}>
            {({ showModal }: ModalContainer) => (
                <AddButon
                    title="Add room"
                    width={150}
                    onClick={() => showModal(ModalRoom)}
                />
            )}
        </Subscribe>
    </Container>
)
