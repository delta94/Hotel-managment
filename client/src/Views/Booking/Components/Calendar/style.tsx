import styled from 'styled-components'

interface ItemProps {
    length: number
}
interface ColumnProps {
    active?: boolean
}

export const Container = styled.div`
    width: 100%;
    flex-grow: 1;
    background-color: white;
    border-radius: 4px;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
`
export const Column = styled.div<ColumnProps>`
    width: 12.5%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: ${({ active }) => (active ? '#e9f6fb' : '#fbfcfc')};
    font-size: 18px;
    border-right: 2px solid #efefef;
    border-bottom: 2px solid #efefef;
`
export const Legend = Column.extend`
    background-color: white;
`
export const Item = styled.div.attrs<ItemProps>({
    width: ({ length }: ItemProps) => (length ? length : 1)
})`
    width: ${({ length }) => 100.5 * length + '%'};
    height: 50px;
    padding: 0 20px 0 20px;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 100px;
    border-radius: 2px;
    background-color: white;
    border-top: 3px solid #8090cd;
    box-shadow: 0px 0px 5px #e5e5e5;
    z-index: 100;
    box-sizing: border-box;
`
export const ItemTitle = styled.p`
    color: black;
    font-size: 15px;
    font-weight: 500;
`
