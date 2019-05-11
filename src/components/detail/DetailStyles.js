import styled from 'styled-components'

export const DetailContainer = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0,0.9);
    overflow: auto;

    & img {
        max-width: 600px;
        width: auto;
    }
`

export const DetailInfoContainer = styled.div`
    max-width: 640px;
    background: blue;
    margin: auto;
    padding: 50px;
    margin-top:50px;
    margin-bottom:50px;
`

export const CloseButton = styled.div`
    margin-top:50px;
    margin-bottom:50px;
    cursor: pointer;
    color: blue;
`

