import styled from 'styled-components'

export const ItemContainer = styled.article`
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
    max-width: 400px;
    display: inline-block;
    cursor: pointer;
    transition: 0.3s all;

    :hover {
        transform: scale(1.25)
    }
`