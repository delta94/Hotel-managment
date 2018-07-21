import * as React from 'react'
import { Container, Input } from './style'

interface Props {
    type: string
}

export const InputDate: React.SFC<Props> = ({ type }) => (
    <Container>
        <Input type={type} />
    </Container>
)
