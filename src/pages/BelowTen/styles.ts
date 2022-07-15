import styled from "styled-components";

export const ProductListStyles = styled.div`
  --scrollbarBG: #e2e0e0;
  --thumbBG: #1E88E5;

  height: 55vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 14px;
  }
  & {
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
  }
  &::-webkit-scrollbar-track {
    background: var(--scrollbarBG);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--thumbBG);
    border-radius: 8px;
    border: 3px solid var(--scrollbarBG);
  }
`;

export const TotalCartStyles = styled.div`
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  color: #000;
  font-size: 1.125rem;
`;

export const FinalizePurchaseStyles = styled.div`
  padding: 20px;
`;
