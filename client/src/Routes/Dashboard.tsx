import * as React from 'react'
import { Route } from 'react-router-dom'

import { Topbar } from 'src/Components/Topbar'
import { Dashboard } from '../Views/Dashboard'

export const DashboardRoutes: React.SFC<{}> = () => (
    <>
        <Topbar routes={[{ name: 'Dashboardddd', path: '/dashboard/index' }]} />

        <Route path="/dashboard/index" component={Dashboard} />
    </>
)
