import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'unstated'
import { injectGlobal, ThemeProvider } from 'styled-components'

import registerServiceWorker from './registerServiceWorker'
import { Routes } from './Routes'
import { theme } from './Theme'
import { ModalRoot } from 'src/Components/Modal'

// tslint:disable-next-line
injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600');
    
    body {
        margin: 0px;
        font-family: Montserrat;
    }

    p,h1,h2,h3,h4,h5,h6 {
        margin: 0;
    }
`

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider>
            <Routes />
            <ModalRoot />
        </Provider>
    </ThemeProvider>,
    document.getElementById('root') as HTMLElement
)
registerServiceWorker()
