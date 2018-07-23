import styled from 'styled-components'

interface InputProps {
    marginLeft?: boolean
}

export const Container = styled.div<InputProps>`
    margin-left: ${props => (props.marginLeft ? '20px' : '0')};
    padding: 7px;
    border-radius: 4px;
    border: 1px solid lightgray;
`
export const Input = styled.input`
    border: none;
    color: black;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 14px;

    &:focus {
        outline: none;
    }
`
