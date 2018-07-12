import * as React from 'react'
import { Container, Row, Column } from './style'

export class Calendar extends React.Component<{}, {}> {
    public render() {
        const days = [
            'All',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ]
        const array = Array.from(Array(10).keys())
        const array2 = Array.from(Array(8).keys())
        return (
            <Container>
                <Row>
                    {days.map((day, i) => <Column key={i}>{day}</Column>)}
                </Row>
                {array.map(item1 => (
                    <Row key={item1}>
                        {array2.map(item2 => (
                            <Column key={Date.now()}>{item2}</Column>
                        ))}
                    </Row>
                ))}
            </Container>
        )
    }
}
