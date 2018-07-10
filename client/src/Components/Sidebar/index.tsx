import * as React from 'react'
import { Container, Icons, DashboardIcon } from './style'

export class Sidebar extends React.Component {
    state = {
        active: 0
    }

    handleClick = (index: number) => this.setState({ active: index })

    render() {
        const { active } = this.state
        return (
            <Container>
                <Icons>
                    <DashboardIcon
                        active={active === 0 ? 1 : 0}
                        onClick={() => this.handleClick(0)}
                    />
                    <DashboardIcon
                        active={active === 1 ? 1 : 0}
                        onClick={() => this.handleClick(1)}
                    />
                    <DashboardIcon
                        active={active === 2 ? 1 : 0}
                        onClick={() => this.handleClick(2)}
                    />
                    <DashboardIcon
                        active={active === 3 ? 1 : 0}
                        onClick={() => this.handleClick(3)}
                    />
                    <DashboardIcon
                        active={active === 4 ? 1 : 0}
                        onClick={() => this.handleClick(4)}
                    />
                </Icons>
            </Container>
        )
    }
}
