import * as React from 'react'
import { Subscribe } from 'unstated'

import { CalendarState } from '../../Containers/CalendarState'
import { Container, Date, LeftArrow, RightArrow } from './style'

export const CalendarSwitch: React.SFC = () => (
    <Subscribe to={[CalendarState]}>
        {(calendar: CalendarState) => (
            <Container>
                <LeftArrow onClick={calendar.decrementWeek} />
                <Date>{calendar.state.date.format('MMMM, YYYY')}</Date>
                <RightArrow onClick={calendar.incrementWeek} />
            </Container>
        )}
    </Subscribe>
)
