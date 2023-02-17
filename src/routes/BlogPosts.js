import classes from "./BlogPosts.module.css";

const BlogPosts = ({ posts }) => {
  console.log(posts);
  return (
    <main>
      <h1>Blog</h1>
      <ul className={classes.posts}>
        {posts.slice(0, 5).map((post, index) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </main>
  );
};
export default BlogPosts;
