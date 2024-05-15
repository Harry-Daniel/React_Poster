
import { useLoaderData } from "react-router-dom";

import Post from "../../Post/Post";
import styles from "./PostsList.module.css";

function PostsList() {
  const posts = useLoaderData();

  return (
    <div>
    
      { posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      { posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    
    </div>
  );
}

export default PostsList;
