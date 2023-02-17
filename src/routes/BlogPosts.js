import classes from './BlogPosts.module.css';


function BlogPosts() {
  return (
    <main>
      <h1>Blog</h1>
      <ul className={classes.posts}>
        <li key={'1'}>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</li>
        <li key={'2'}>Qui Est Esse</li>
        <li key={'3'}>ea molestias quasi exercitationem repellat qui ipsa sit aut</li>
      </ul>
    </main>
  );
}
export default BlogPosts;
