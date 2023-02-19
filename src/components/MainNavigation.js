import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header id="main-nav">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Our Products</Link></li>
          <li><Link to="/blog">Our Blog</Link></li>
          <li><Link to="/list">List</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
