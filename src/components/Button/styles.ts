import styled from "styled-components";

export const ButtonStyles = styled.button`
  padding: 10px 14px;
  border: none;
  font-size: .875rem;
  border-radius: 8px;
  text-transform: capitalize;
  letter-spacing: 0.125rem;
  font-weight: 500;
  font-family: "Nunito", sans-serif;
  animation: all 0.3s;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  &:hover {
    cursor: pointer;
    filter: saturate(1.2) brightness(1.2);
  }

  &.disabled {
    opacity: 0.7;
    cursor: not-allowed;
    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }
`;
