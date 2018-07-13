import * as React from 'react'
import * as moment from 'moment'

import { Container, Row, Column, Legend, Item, ItemTitle } from './style'

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
        const currentDayOfWeek = parseInt(moment().format('e'), 10)

        return (
            <Container>
                <Row>
                    {days.map((day, i) => <Legend key={i}>{day}</Legend>)}
                </Row>
                {array.map(item1 => (
                    <Row key={item1}>
                        {array2.map((item2, i) => (
                            <Column
                                key={Math.random()}
                                active={i === currentDayOfWeek}
                            >
                                {item1 === 1 &&
                                    item2 === 1 && (
                                        <Item length={3}>
                                            <ItemTitle>
                                                John Dohn (3 nights)
                                            </ItemTitle>
                                        </Item>
                                    )}
                            </Column>
                        ))}
                    </Row>
                ))}
            </Container>
        )
    }
}
