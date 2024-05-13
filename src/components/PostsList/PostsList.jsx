import { useState } from "react";
import NewPost from "../NewPost/NewPost";
import Post from "../Post";
import styles from "./PostsList.module.css";
import Modal from "../Modal/Modal";

function PostsList({isPosting, onStopPosting}) {
 
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");



  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function onAuthorChange(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <div>
      {isPosting && <Modal onClose={onStopPosting}>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={onAuthorChange}
          onCancel={onStopPosting}
        />
      </Modal> }
      
      <ul className={styles.posts}>
        <Post author='Mawuko' body='Something' />
        <Post author="Senyo" body="Check out the full course!" />
      </ul>
    </div>
  );
}

export default PostsList;
