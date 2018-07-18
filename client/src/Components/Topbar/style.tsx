import styled from 'styled-components'

interface ItemProps {
    active?: boolean
}

export const Container = styled.div`
    width: 100%;
    height: 80px;
    padding: 0 30px 0 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0px 0px 15px lightgray;
    box-sizing: border-box;
`
export const Item = styled.p<ItemProps>`
    margin: 40px;
    position: relative;
    font-weight: 600;
    font-size: 16px;
    color: ${({ active }) => (active ? 'black' : 'gray')};
    cursor: pointer;
    transition: all 300ms ease;
    user-select: none;

    &:after {
        transform: scaleX(0);
        content: '';
        width: 100%;
        height: 3px;
        position: absolute;
        top: 28px;
        left: 0;
        background-color: ${props => props.theme.primary};
        box-shadow: 0px 3px 10px ${props => props.theme.primary};
        transition: all 3000ms ease;
        animation: ${({ active }) =>
            active ? 'fade-in 300ms forwards' : 'none'};
    }

    @keyframes fade-in {
        from {
            transform: scaleX(0);
        }
        to {
            transform: scaleX(1);
        }
    }
`
