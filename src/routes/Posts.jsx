import { useState } from "react";

import PostsList from "../components/PostsList/PostsList";
import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
if(!response.ok){
  // return {isError:true, message: 'Could not fetch events'}
  throw {message:'Could not Fetch events.'}
}else{
  return response
}
}
