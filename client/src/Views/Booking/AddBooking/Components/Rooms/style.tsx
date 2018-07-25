import styled from 'styled-components'

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
export const TableContainer = styled.div`
    width: 100%;
    height: 211px;
    margin-top: 20px;
    overflow-y: scroll;
`
export const Table = styled.table`
    width: 100%;
    max-height: 100%;
    border-radius: 2px;
    border-spacing: 0;
    border: 1px solid lightgray;
    border-bottom: none;
`
export const Tr = styled.tr``
export const Legend = styled.th`
    font-size: 14px;
    padding: 8px;
    background-color: #f6f7fa;
    color: gray;
    border-left: 1px solid lightgray;
    border-bottom: 1px solid lightgray;

    :nth-child(1) {
        border-left: none;
    }
`
export const Td = styled.td`
    padding: 8px;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    border-left: 1px solid lightgray;
    border-bottom: 1px solid lightgray;

    :nth-child(1) {
        border-left: none;
    }
`
