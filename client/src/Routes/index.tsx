import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Sidebar } from '../Components/Sidebar'
import { Layout } from '../Components/Layout'

import { DashboardRoutes } from './Dashboard'
import { BookingRoutes } from './Booking'

export const Routes: React.SFC = () => (
    <BrowserRouter>
        <React.Fragment>
            <Sidebar />
            <Layout>
                <React.Fragment>
                    <Route exact path="/" component={DashboardRoutes} />
                    <Route path="/booking" component={BookingRoutes} />
                </React.Fragment>
            </Layout>
        </React.Fragment>
    </BrowserRouter>
)
