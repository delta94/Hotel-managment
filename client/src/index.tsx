import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'

import registerServiceWorker from './registerServiceWorker'
import { Routes } from './Routes'
import { theme } from './Theme'
import { Provider } from 'unstated'

// tslint:disable-next-line
injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500');
    
    body {
        margin: 0px;
        font-family: Montserrat;
    }
`

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider>
            <Routes />
        </Provider>
    </ThemeProvider>,
    document.getElementById('root') as HTMLElement
)
registerServiceWorker()
