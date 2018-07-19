import * as React from 'react'
import { Container, Icons, DashboardIcon } from './style'
import { Link } from 'react-router-dom'

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
                    <Link to="/">
                        <DashboardIcon
                            active={active === 0 ? 1 : 0}
                            onClick={() => this.handleClick(0)}
                        />
                    </Link>
                    <Link to="/booking/calendar">
                        <DashboardIcon
                            active={active === 1 ? 1 : 0}
                            onClick={() => this.handleClick(1)}
                        />
                    </Link>
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
