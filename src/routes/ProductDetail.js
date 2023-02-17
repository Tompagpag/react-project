
import products from '../data/products';

function ProductDetail() {
  const prodId = 'p1';
  const product = products.find((product) => product.id === prodId);
  
  return (
    <main>
      <h1>{product.title}</h1>
      <p id="product-price">${product.price}</p>
      <p>{product.description}</p>
    </main>
  );
}

export default ProductDetail;
