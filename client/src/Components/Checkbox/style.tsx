import styled, { css } from 'styled-components'

import { MdCheck } from 'react-icons/lib/md'

interface ContainerProps {
    checked: boolean
}

export const Container = styled.div<ContainerProps>`
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    background-color: #eef1f4;
    border: 1px solid lightgray;
    cursor: pointer;
    user-select: none;
    transition: all 200ms ease;

    ${({ checked }) =>
        checked &&
        css`
            background-color: #56ce3b;
        `};
`
export const CheckIcon = styled(MdCheck)`
    font-size: 20px;
    color: white;
`
