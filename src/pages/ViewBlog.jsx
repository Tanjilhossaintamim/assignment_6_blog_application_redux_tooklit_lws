
import PostDetails from "../components/PostDetails/PostDetails";
import RelatedPosts from "../components/RelatedPost/RelatedPosts";

const ViewBlog = () => {
  return (
    <section className="post-page-container">
      <PostDetails />

      {/* <!-- related posts --> */}
      <RelatedPosts />
      {/* <!-- related posts ends --> */}
    </section>
  );
};

export default ViewBlog;
