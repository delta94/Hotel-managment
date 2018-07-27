import styled from 'styled-components'

import {
    MdGroup,
    MdAccountBalanceWallet,
    MdFormatListBulleted
} from 'react-icons/lib/md'

export const RoomList = styled.div`
    width: 100%;
    height: 700px;
    overflow-y: scroll;
`
export const Room = styled.div`
    width: 100%;
    height: 60px;
    padding: 0 10px 0 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 3px;
    box-sizing: border-box;
    transition: all 200ms ease-out;
    cursor: pointer;

    &:hover {
        background-color: lightgray;
    }
`
export const Wrapper = styled.div`
    width: 200px;
    display: flex;
    align-items: center;
`
export const RoomType = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #ffc4d8;
    font-weight: 500;
    color: #ff2d75;
`
export const Text = styled.p`
    margin-left: 15px;
    color: black;
    font-weight: 500;
    font-size: 14px;
`
export const PeopleIcon = styled(MdGroup)`
    width: 40px;
    height: 40px;
    padding: 8px;
    border-radius: 50%;
    background-color: #e8f0ff;
    color: #5e9cff;
    box-sizing: border-box;
`
export const WalletIcon = styled(MdAccountBalanceWallet)`
    width: 40px;
    height: 40px;
    padding: 8px;
    border-radius: 50%;
    background-color: #ecffe8;
    color: #75db60;
    box-sizing: border-box;
`
export const OrderIcon = styled(MdFormatListBulleted)`
    width: 40px;
    height: 40px;
    padding: 8px;
    border-radius: 50%;
    background-color: #edd6ff;
    color: #bc68ff;
    box-sizing: border-box;
`
