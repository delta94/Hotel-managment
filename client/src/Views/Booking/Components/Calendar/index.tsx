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

        const reservations = [
            { date: '09 07 2018', nights: 1 },
            { date: '13 07 2018', nights: 2 },
            { date: '15 07 2018', nights: 1 }
        ]

        const rooms = Array.from(Array(10).keys())
        const today = moment().format('DD MM YYYY')
        const firstDayOfWeek = moment().startOf('isoWeek')

        const week: string[] = []
        for (let i = 0; i < 7; i++) {
            week.push(firstDayOfWeek.format('DD MM YYYY'))
            firstDayOfWeek.add(1, 'd')
        }

        const findReservation = (day: string, i: number) => {
            const find = reservations.find(
                reservation => reservation.date === day
            )

            if (find) {
                return (
                    <Item length={find.nights + i > 7 ? 7 - i : find.nights}>
                        <ItemTitle>John Dohn ({find.nights} nights)</ItemTitle>
                    </Item>
                )
            }
            return null
        }

        return (
            <Container>
                <Row>
                    {days.map((day, i) => (
                        <Legend key={i} active={moment().day() === i}>
                            {day}
                        </Legend>
                    ))}
                </Row>
                {rooms.map(room => (
                    <Row key={room}>
                        <Column key={Math.random()} />
                        {week.map((day, i) => (
                            <Column key={Math.random()} active={day === today}>
                                {findReservation(day, i)}
                            </Column>
                        ))}
                    </Row>
                ))}
            </Container>
        )
    }
}
