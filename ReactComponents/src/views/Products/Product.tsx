import styled from "styled-components";
import { Product as MyProduct } from "./types";

const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: max-content;
  background: "red";
  margin: 0;
  padding: 0;
`;

export default function Product({ product }: { product: MyProduct }) {
  return (
    <StyledProduct>
      <div style={{ width: "100%", height: "150px" }}>
        <img
          src={product.images[0]}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          alt={product.title}
        />
      </div>
      <div
        style={{
          textAlign: "left",
          fontWeight: "bold",
          fontSize: "0.8rem",
          padding: "2px",
        }}
      >
        <p>${product.price}</p>
        <p>{product.title}</p>
      </div>
    </StyledProduct>
  );
}
