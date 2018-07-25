import styled from 'styled-components'

import { MdAdd } from 'react-icons/lib/md'

interface ButtonProps {
    width: number
}

export const StyledAddButton = styled.div.attrs<ButtonProps>({
    width: (props: ButtonProps) => props.width
})`
    width: ${({ width }) => `${width}px`};
    height: 40px;
    padding: 0px 10px 0 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 4px;
    background-color: ${props => props.theme.primary};
    color: white;
    font-size: 16px;
    font-weight: 500;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 200ms ease;
    user-select: none;

    &:hover {
        background-color: #5e65ba;
    }
`
export const PlusIcon = styled(MdAdd)`
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    color: ${props => props.theme.primary};
`
