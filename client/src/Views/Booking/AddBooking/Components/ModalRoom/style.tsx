import styled from 'styled-components'

export const RoomList = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
`
export const Room = styled.div`
    width: 100%;
    height: 60px;
    padding: 0 10px 0 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    transition: all 200ms ease-out;
    cursor: pointer;

    &:hover {
        background-color: lightgray;
    }
`
export const RoomType = styled.div`
    width: 40px;
    height: 40px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #ffc4d8;
    font-weight: 500;
    color: #ff2d75;
`
export const RoomTypeText = styled.p`
    color: black;
    font-weight: 500;
    font-size: 14px;
`
