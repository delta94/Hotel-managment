import * as React from 'react'
import { CalendarSwitch } from './Components/CalendarSwitch'
import { Calendar } from './Components/Calendar'

export const Booking: React.SFC<{}> = () => (
    <React.Fragment>
        <CalendarSwitch />
        <Calendar />
    </React.Fragment>
)
