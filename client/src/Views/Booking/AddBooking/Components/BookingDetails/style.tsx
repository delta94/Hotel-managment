import styled from 'styled-components'

import { MdAdd } from 'react-icons/lib/md'

export const Container = styled.div`
    width: 48%;
    height: 100%;
    padding: 25px;
    border-radius: 4px;
    background-color: white;
    box-shadow: 0px 0px 25px lightgray;
    box-sizing: border-box;
`
export const Title = styled.h1`
    color: black;
    font-size: 18px;
`
export const Row = styled.div`
    padding: 20px 0 20px 0;
    display: flex;
    align-items: center;
`
export const Subtitle = styled.p`
    width: 250px;
    color: gray;
    font-weight: 500;
    font-size: 16px;
`
export const Button = styled.div`
    width: 200px;
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
