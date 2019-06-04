import styled from "styled-components";

export const ItemContainer = styled.article`
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  width: 300px;
  display: inline-block;
  cursor: pointer;
  transition: 0.3s all;
  height: 300px;
  text-align: center;
  border: 2px solid white;
  margin: 25px;
  background: rgba(0, 0, 0, 0);
  border-radius: 50%;
  :hover {
    transform: scale(1.25);
    background: rgba(0, 0, 155, 1);
  }
`;
