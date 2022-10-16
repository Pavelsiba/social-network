import styled from "styled-components";

const Button = ({content})=> {
  return<StyledButton>{content}</StyledButton>
}

const StyledButton = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 1s ease;
  &:hover {
    background: linear-gradient(270deg, rgba(55,135,218,1) 4%, rgba(29,133,222,1) 41%, rgba(0,212,255,1) 91%);
    color: #000;
}
`;

export default Button;