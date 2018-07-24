import styled, { keyframes } from 'styled-components'

import { MdClose } from 'react-icons/lib/md'

const fade = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`

export const Overlay = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 100;

    animation: ${fade} 0.3s ease;
`
export const Content = styled.div`
    width: 1200px;
    padding: 40px 40px 0 40px;
    position: relative;
    border-radius: 4px;
    background-color: white;
`
export const CloseIcon = styled(MdClose)`
    color: black;
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 24px;
    cursor: pointer;
    transition: all 200ms ease;

    &:hover {
        transform: rotate(90deg);
    }
`
