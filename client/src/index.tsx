import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'

import registerServiceWorker from './registerServiceWorker'
import { Routes } from './Routes'

// tslint:disable-next-line
injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500');
    
    body {
        margin: 0px;
        font-family: Montserrat;
    }
`

ReactDOM.render(<Routes />, document.getElementById('root') as HTMLElement)
registerServiceWorker()
