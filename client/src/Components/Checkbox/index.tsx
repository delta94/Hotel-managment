import * as React from 'react'

import { Container, CheckIcon } from './style'

interface State {
    checked: boolean
}

interface Props {
    onClick: () => void
}

export class Checkbox extends React.Component<Props, State> {
    state = {
        checked: false
    }

    handleChange = () => {
        this.props.onClick()

        this.setState(({ checked }) => ({ checked: !checked }))
    }

    render() {
        const { checked } = this.state
        return (
            <Container checked={checked} onClick={() => this.handleChange()}>
                {checked && <CheckIcon />}
            </Container>
        )
    }
}
