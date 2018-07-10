import styled, { css } from 'styled-components'

import { MdDashboard } from 'react-icons/lib/md'

interface IconProps {
    active?: boolean
}

export const Container = styled.div`
    width: 90px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fdfdfd;
    box-shadow: 0px 0px 15px lightgray;
`
export const Icons = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
export const DashboardIcon = styled(MdDashboard)<IconProps>`
    width: 50px;
    height: 50px;
    padding: 5px;
    font-size: 38px;
    color: #b8b8c7;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        color: ${props => props.theme.primary};
    }

    ${props =>
        props.active &&
        css`
            background-color: white;
            color: ${props.theme.primary};
            box-shadow: 0px 0px 15px lightgray;
        `};
`
