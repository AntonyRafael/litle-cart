import styled from "styled-components";

export const ProductItemStyles = styled.div`
  padding: 10px 18px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  .productImage {
    border: 1px solid #a8a6a6;
    padding: 10px;
    height: 100px;
    max-width: 120px;
    object-fit: contain;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
    }
  }

  .productInfo {
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    text-align: start;

    p {
      font-size: 0.875rem;
      font-weight: 700;
      max-width: 220px;
      margin-bottom: 0.5rem;
    }

    span {
      font-size: 0.875rem;
      margin-bottom: 0.25rem;
      display: block;

      &.listPrice {
        color: #969393;
      }

      &.sellingPrice {
        font-weight: 700;
      }
    }
  }
`;
