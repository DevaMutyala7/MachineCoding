import { useEffect, useState } from "react";
import { Product as MyProduct } from "./types";
import Product from "./Product";
import styled from "styled-components";

const ProductWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap;
  padding: 10px;
  justify-content: space-between;
  gap: 30px;
`;

export default function Products() {
  const [products, setProducts] = useState<MyProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [skipCount, setSkipCount] = useState<number>(0);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setSkipCount((prev) => prev + 10);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    fetch(
      `https://api.escuelajs.co/api/v1/products?offset=${skipCount}&limit=10`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!ignore) {
          setProducts((prev) => [...prev, ...data]);

          setLoading(false);
        }
      });

    return () => {
      ignore = true;
    };
  }, [skipCount]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <ProductWrapper>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </ProductWrapper>
      <div style={{ margin: "10px" }}>
        {loading && <div className="loader">Loading.....</div>}
      </div>
    </div>
  );
}
