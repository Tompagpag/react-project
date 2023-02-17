import products from '../data/products';

function Products() {
  return (
    <main>
      <h1>Our Products</h1>
      <ul id="products-list">

        <li key='p1'>
          <a href={`/products/p1`}>
            React - Complete Guide (Course) ($18.99)
          </a>
        </li>

      </ul>
    </main>
  );
}

export default Products;
