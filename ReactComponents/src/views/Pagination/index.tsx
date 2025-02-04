import { useState } from "react";
import useData from "./hooks/useData";
import Product from "./Product";
import { ProductWrapper } from "./styledElements";

function Pagination() {
  const [page, setPage] = useState<number>();
  const { data, loading } = useData(page);

  function handlePageChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setPage(Number(e.target.value));
  }

  const noOfPages = Array.from(
    { length: Math.round(data?.total / 10) },
    (_, i) => i + 1
  );

  return (
    <ProductWrapper>
      <select onChange={handlePageChange} value={page}>
        {noOfPages.map((page) => {
          return (
            <option key={page} value={page}>
              {page}
            </option>
          );
        })}
      </select>
      <div>
        {loading ? (
          <p>Loading....</p>
        ) : (
          data?.products.map((product) => {
            return <Product key={product.id} product={product} />;
          })
        )}
      </div>
    </ProductWrapper>
  );
}

export default Pagination;
