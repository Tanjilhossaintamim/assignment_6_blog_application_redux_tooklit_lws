import { Link, useParams } from "react-router-dom";
import PostDetails from "../components/PostDetails/PostDetails";
import RelatedPosts from "../components/RelatedPost/RelatedPosts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "../redux/features/blog/blogSlice";
import Loading from "../components/ui/Loading";

const ViewBlog = () => {
  const { isLoading, isError, blog, error } = useSelector(
    (state) => state.singelBlog
  );

  const dispatch = useDispatch();
  const { blogId } = useParams();
  useEffect(() => {
    dispatch(fetchBlog(blogId));
  }, [blogId, dispatch]);
  const { id, tags } = blog || {};
  // desicion making
  let content;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <div>{error}</div>;
  if (!isLoading && !isError && !blog?.id)
    content = <div>no blogs found !</div>;
  if (!isError && !isLoading && blog?.id) {
    content = (
      <section className="post-page-container">
        <PostDetails blog={blog} />

        {/* <!-- related posts --> */}
        <RelatedPosts currentBlogId={id} tags={tags} />
        {/* <!-- related posts ends --> */}
      </section>
    );
  }
  return (
    <>
      <div className="container mt-8">
        <Link
          to="/"
          className="inline-block text-gray-600 home-btn"
          id="lws-goHome"
        >
          <i className="mr-2 fa-solid fa-house"></i>Go Home
        </Link>
      </div>
      {content}
    </>
  );
};

export default ViewBlog;
