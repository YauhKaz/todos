import styled from "styled-components";

const SInput = styled.input`
  padding: 5px 10px;
  background-color: #474A51;
  color: #DCDCDC;
  border: 1px solid #DCDCDC;
  border-radius: 16px;
  cursor: pointer;
  transition: all 1s;
  :first-child {
    padding-left: 10px;
    width: 70%;
  }
  :hover {
    transition: all 1s;
    background-color: #92AC6D;
    color: #141615;
    border: 1px solid #474A51;
  }
`;

export default SInput;