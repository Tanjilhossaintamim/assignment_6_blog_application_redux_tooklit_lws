import { useDispatch } from "react-redux";
import Post from "./Post";
import { useEffect } from "react";
import { fetchBlogs } from "../../redux/features/blogs/blogsSlice";

const Posts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs());
  });
  return (
    <main className="post-container" id="lws-postContainer">
      <Post />
    </main>
  );
};

export default Posts;
