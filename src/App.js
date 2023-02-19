import { useState, useEffect } from "react";
import BlogPosts from "./routes/BlogPosts";

import { Route, Routes } from "react-router-dom";

import MainNavigation from "./components/MainNavigation";
import ProductDetail from "./routes/ProductDetail";
import Products from "./routes/Products";
import Welcome from "./routes/Welcome";
import List from "./routes/List";

function App() {
  const [loadedPosts, setLoadedPosts] = useState([]);
  // Todo: Fetch blog posts from https://jsonplaceholder.typicode.com/posts (see documentation on https://jsonplaceholder.typicode.com/guide/)
  // Pass fetched posts to <BlogPost /> via props & output the posts in that component
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setLoadedPosts(data);
      });
  }, []);

  return (
    <>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/blog" element={<BlogPosts posts={loadedPosts} />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </>
  );
}

export default App;
