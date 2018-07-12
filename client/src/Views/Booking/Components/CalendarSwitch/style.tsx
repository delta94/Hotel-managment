import styled from 'styled-components'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/lib/md'

export const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const Date = styled.p`
    width: 250px;
    text-align: center;
    color: black;
    font-weight: 500;
    font-size: 26px;
    user-select: none;
`
export const LeftArrow = styled(MdKeyboardArrowLeft)`
    color: gray;
    font-size: 26px;
    margin-right: 20px;
    cursor: pointer;
`
export const RightArrow = styled(MdKeyboardArrowRight)`
    color: gray;
    font-size: 26px;
    margin-left: 20px;
    cursor: pointer;
`
