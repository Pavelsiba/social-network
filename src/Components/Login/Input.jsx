import styled from "styled-components";
/* export default function Input({ type, placeholder }) {
  return <StyledInput type={type} placeholder={placeholder} />;
} */

const InputLogin = ({ type, placeholder,inputProps,autoComplete })=> {
  return <StyledInput type={type} placeholder={placeholder} 
    {...inputProps} autoComplete={autoComplete}
  />;
}

const StyledInput = styled.input`
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width:100%;
  height: 1rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;


export default  InputLogin;