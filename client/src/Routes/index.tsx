import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Booking } from '../Views/Booking'
import { Sidebar } from '../Components/Sidebar'
import { Layout } from '../Components/Layout'

export const Routes: React.SFC = () => (
    <BrowserRouter>
        <React.Fragment>
            <Sidebar />
            <Layout>
                <Switch>
                    <Route exact path="/" component={Booking} />
                </Switch>
            </Layout>
        </React.Fragment>
    </BrowserRouter>
)
