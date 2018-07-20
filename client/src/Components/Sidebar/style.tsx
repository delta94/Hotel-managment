import styled, { css } from 'styled-components'

import { MdDashboard, MdHotel, MdGroup } from 'react-icons/lib/md'
import { FaTags } from 'react-icons/lib/fa'

interface IconProps {
    active: number
}

export const Container = styled.div`
    width: 90px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fdfdfd;
    box-shadow: 0px 0px 15px lightgray;
`
export const Icons = styled.div`
    height: 400px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
export const DashboardIcon = styled(MdDashboard)<IconProps>`
    width: 40px;
    height: 40px;
    padding: 10px;
    color: #b8b8c7;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;

    ${props =>
        props.active &&
        css`
            background-color: white;
            color: ${props.theme.primary};
            box-shadow: 0px 0px 15px lightgray;
        `};

    &:hover {
        color: ${props => props.theme.primary};
    }
`

export const TagIcon = styled(FaTags)<IconProps>`
    width: 40px;
    height: 40px;
    padding: 10px;
    color: #b8b8c7;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;

    ${props =>
        props.active &&
        css`
            background-color: white;
            color: ${props.theme.primary};
            box-shadow: 0px 0px 15px lightgray;
        `};

    &:hover {
        color: ${props => props.theme.primary};
    }
`
export const HotelIcon = styled(MdHotel)<IconProps>`
    width: 40px;
    height: 40px;
    padding: 10px;
    color: #b8b8c7;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;

    ${props =>
        props.active &&
        css`
            background-color: white;
            color: ${props.theme.primary};
            box-shadow: 0px 0px 15px lightgray;
        `};

    &:hover {
        color: ${props => props.theme.primary};
    }
`
export const UsersIcon = styled(MdGroup)<IconProps>`
    width: 40px;
    height: 40px;
    padding: 10px;
    color: #b8b8c7;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;

    ${props =>
        props.active &&
        css`
            background-color: white;
            color: ${props.theme.primary};
            box-shadow: 0px 0px 15px lightgray;
        `};

    &:hover {
        color: ${props => props.theme.primary};
    }
`
