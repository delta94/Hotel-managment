import * as React from 'react'
import { Container, Subscribe } from 'unstated'

import { Overlay, Content, CloseIcon } from './style'

interface State {
    component: any
    props: any
}

export class ModalContainer extends Container<State> {
    state = {
        component: null,
        props: {}
    }

    showModal = (component: any, props: any = {}) =>
        this.setState({ component, props })

    hideModal = () => this.setState({ component: null, props: {} })
}

export const ModalRoot: React.SFC = ({ children }) => (
    <Subscribe to={[ModalContainer]}>
        {({ state: { component: Component, props }, hideModal }: any) =>
            Component && (
                <Overlay>
                    <Content>
                        <CloseIcon onClick={hideModal} />
                        <Component {...props} hideModal={hideModal} />
                    </Content>
                </Overlay>
            )
        }
    </Subscribe>
)
