import * as React from 'react'
import { Container, Input } from './style'

interface Props {
    type: string
    marginLeft?: boolean
}

export const InputDate: React.SFC<Props> = ({ type, marginLeft }) => (
    <Container marginLeft={marginLeft}>
        <Input type={type} />
    </Container>
)
