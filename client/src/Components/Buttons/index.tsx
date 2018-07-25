import * as React from 'react'

import { StyledAddButton, PlusIcon } from './style'

interface Props {
    title: string
    width: number
    onClick?: () => any
}

export const AddButon: React.SFC<Props> = ({ title, width, onClick }) => (
    <StyledAddButton width={width} onClick={() => onClick && onClick()}>
        <PlusIcon />
        {title}
    </StyledAddButton>
)
