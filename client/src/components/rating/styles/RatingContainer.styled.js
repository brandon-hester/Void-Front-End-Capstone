import styled from 'styled-components';

export const StarContainer = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 30%;
  padding: 20px;
  border-radius: 5px;

  &:hover {
    background-color: #E5E7E9;
  }
`;

export const StarLeft = styled.div`
  float: left;
  width: 15%;
  margin-top: 5px;
`;

export const StarMiddle = styled.div`
  float: left;
  width: 70%;
  margin-top: 5px;
`;

export const StarRight = styled.div`
  text-align: right;
  margin-top: 5px;
`;

export const StarBar = styled.div`
  width: 100%;
  background-color: #F2F3F4;
  text-align: center;
  color: #333;
`;

export const StarFill = styled.div`
  width: ${({ fill }) => Number(fill)}%;
  height: 20px;
  background-color: green;
`;
