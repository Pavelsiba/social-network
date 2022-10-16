import styled from "styled-components";

export default function Icon ({ color, children }) {
  return <StyledIcon background={color}>{children}</StyledIcon>;
}

const StyledIcon = styled.div`
  height: 3.5rem;
  width: 3.5rem;
  background: ${(props) => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  color: white;
  cursor: pointer;
  transition: all 0.7s ease;
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  &:hover {
    box-shadow: 0px 5px 20px rgba(0,0,0,0.5);
    transform: scale(1.1);
  }
`;
