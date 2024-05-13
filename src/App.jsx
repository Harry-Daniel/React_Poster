import { useState } from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import PostsList from "./components/PostsList/PostsList";

function App() {
  const [modalIsVisble, setModalIsVisible] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList isPosting={modalIsVisble} onStopPosting= {hideModalHandler} />
      </main>
    </>
  );
}

export default App;
