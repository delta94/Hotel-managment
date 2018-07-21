import * as React from 'react'
import { Route } from 'react-router-dom'

import { Wrapper, Wrapper2 } from './style'

import { Topbar } from 'src/Components/Topbar'
import { Cal } from '../Views/Booking/Calendar'
import { AddBooking } from '../Views/Booking/AddBooking'

const routes = [
    { name: 'Calendar', path: '/booking/calendar' },
    { name: 'New booking', path: '/booking/addBooking' }
]

export const BookingRoutes: React.SFC<{}> = () => (
    <>
        <Topbar routes={routes} />
        <Wrapper>
            <Wrapper2>
                <Route exact path="/booking/calendar" component={Cal} />
                <Route
                    exact
                    path="/booking/addBooking"
                    component={AddBooking}
                />
            </Wrapper2>
        </Wrapper>
    </>
)
