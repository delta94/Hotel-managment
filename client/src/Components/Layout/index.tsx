import * as React from 'react'
import { Container } from './style'
import { Topbar } from '../Topbar'

interface Props {
    children: JSX.Element
}

export const Layout: React.SFC<Props> = ({ children }) => (
    <Container>
        <Topbar />
        {children}
    </Container>
)
