import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { Container, Icons, DashboardIcon } from './style'

class C extends React.Component<RouteComponentProps<{}>> {
    navigate = (path: string) => this.props.history.push(path)

    render() {
        const {
            location: { pathname }
        } = this.props

        return (
            <Container>
                <Icons>
                    <DashboardIcon
                        active={pathname === '/' ? 1 : 0}
                        onClick={() => this.navigate('/')}
                    />

                    <DashboardIcon
                        active={pathname.includes('/booking') === true ? 1 : 0}
                        onClick={() => this.navigate('/booking/calendar')}
                    />

                    <DashboardIcon active={0} />

                    <DashboardIcon active={0} />
                </Icons>
            </Container>
        )
    }
}

export const Sidebar = withRouter(C)
