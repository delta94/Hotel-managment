import * as React from 'react'
import { Container, Item } from './style'
import { withRouter, RouteComponentProps } from 'react-router'

interface State {
    index: number
}

interface Routes {
    name: string
    path: string
}

interface Props {
    routes: Routes[]
}

class C extends React.Component<RouteComponentProps<Props> & Props, State> {
    state = {
        index: 0
    }

    handleChane = (index: number, path: string) => {
        this.setState({ index })
        this.props.history.push(path)
    }

    render() {
        const { index } = this.state
        const { routes } = this.props
        return (
            <Container>
                {routes.map((route, i) => (
                    <Item
                        active={index === i}
                        onClick={() => this.handleChane(i, route.path)}
                    >
                        {route.name}
                    </Item>
                ))}
            </Container>
        )
    }
}

export const Topbar = withRouter(C)
