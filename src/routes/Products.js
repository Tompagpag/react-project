import products from "../data/products";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <main>
      <h1>Our Products</h1>
      <ul id="products-list">
        {products.map((product, index) => {
          return (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Products;
