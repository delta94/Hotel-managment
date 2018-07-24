import styled from 'styled-components'

import Background from 'src/Images/avatar.png'

export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const UserList = styled.div`
    height: 600px;
    margin-top: 30px;
    overflow-y: scroll;
`
export const User = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: background 200ms ease-out;
    cursor: pointer;

    &:hover {
        background-color: lightgray;
    }
`
export const UserAvatar = styled.div`
    width: 60px;
    height: 60px;
    margin-right: 30px;
    border-radius: 50%;
    background: url(${Background}) center;
    background-size: cover;
`
export const UserEmail = styled.p`
    color: gray;
`
