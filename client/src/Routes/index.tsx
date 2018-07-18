import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Booking } from '../Views/Booking'
import { Sidebar } from '../Components/Sidebar'
import { Layout } from '../Components/Layout'
import { Dashboard } from '../Views/Dashboard'

export const Routes: React.SFC = () => (
    <BrowserRouter>
        <React.Fragment>
            <Sidebar />
            <Layout>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/booking" component={Booking} />
                </Switch>
            </Layout>
        </React.Fragment>
    </BrowserRouter>
)
