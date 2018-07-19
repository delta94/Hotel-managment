import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router'

import { Container, Item } from './style'

interface Props {
    routes: Routes[]
}

interface Routes {
    name: string
    path: string
}

class C extends React.Component<RouteComponentProps<{}> & Props, {}> {
    navigate = (path: string) => this.props.history.push(path)

    render() {
        const {
            routes,
            location: { pathname }
        } = this.props

        return (
            <Container>
                {routes.map((route, i) => (
                    <Item
                        key={i}
                        active={pathname === route.path}
                        onClick={() => this.navigate(route.path)}
                    >
                        {route.name}
                    </Item>
                ))}
            </Container>
        )
    }
}

export const Topbar = withRouter(C)
