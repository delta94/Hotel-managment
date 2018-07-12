import * as React from 'react'
import { Container, Date, LeftArrow, RightArrow } from './style'
import * as moment from 'moment'

interface State {
    counter: number
}

export class CalendarSwitch extends React.Component<{}, State> {
    state = {
        counter: 0
    }

    increment = () => this.setState(({ counter }) => ({ counter: counter + 1 }))

    decrement = () => this.setState(({ counter }) => ({ counter: counter - 1 }))

    render() {
        const { counter } = this.state
        const now = moment()
            .add(counter, 'week')
            .format('MMMM, YYYY')

        return (
            <Container>
                <LeftArrow onClick={() => this.decrement()} />
                <Date>{now}</Date>
                <RightArrow onClick={() => this.increment()} />
            </Container>
        )
    }
}
