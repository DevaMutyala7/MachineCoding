import { Product as ProductType } from "./types";

function Product({ product }: { product: ProductType }) {
  return (
    <div>
      <h3>{product.title}</h3>
      <p>{product.price}</p>
    </div>
  );
}

export default Product;
