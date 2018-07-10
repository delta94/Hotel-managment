import * as React from 'react'
import { Container } from './style'

interface Props {
    children: JSX.Element
}

export const Layout: React.SFC<Props> = ({ children }) => (
    <Container>{children}</Container>
)
