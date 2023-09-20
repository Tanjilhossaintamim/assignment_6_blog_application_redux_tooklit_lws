import { useDispatch, useSelector } from "react-redux";
import Blog from "./Blog";
import { useEffect } from "react";
import { fetchBlogs } from "../../redux/features/blogs/blogsSlice";
import Loading from "../ui/Loading";

const Posts = () => {
  const { isLoading, isError, error, blogs } = useSelector(
    (state) => state.blogs
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs({ name: "", sortValue: "" }));
  }, [dispatch]);
  // decisition making which content will show
  let content;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <div>{error}</div>;
  if (!isLoading && !isError && blogs?.length == 0)
    content = <div>no blogs found !</div>;
  if (!isError && !isLoading && blogs?.length > 0) {
    content = blogs.map((blog) => <Blog key={blog.id} blog={blog} />);
  }

  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
};

export default Posts;
