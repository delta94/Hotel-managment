import * as React from 'react'
import { Container, StyledInput } from './style'

interface Props {
    type: string
    placeholder?: string
    onChange: (text: string) => void
}

export const Input: React.SFC<Props> = ({ type, placeholder, onChange }) => (
    <Container>
        <StyledInput
            type={type}
            placeholder={placeholder}
            onChange={e => onChange(e.target.value)}
        />
    </Container>
)
