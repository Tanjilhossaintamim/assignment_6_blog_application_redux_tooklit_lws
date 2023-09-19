import { useDispatch, useSelector } from "react-redux";
import RelatedPost from "./RelatedPost";
import PropTypes from "prop-types";
import { useEffect } from "react";

import { fetchRelatedBlogs } from "../../redux/features/relatedBlog/relatedBlogsSlice";

const RelatedPosts = ({ currentBlogId, tags }) => {
  const { blogs } = useSelector((state) => state.relatedBlog);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRelatedBlogs({ tags, currentBlogId }));
  }, [dispatch, currentBlogId, tags]);
  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">
        {/* <!-- related post  --> */}
        {blogs?.length > 0 &&
          blogs.map((blog) => <RelatedPost key={blog.id} blog={blog} />)}
      </div>
    </aside>
  );
};
RelatedPosts.propTypes = {
  currentBlogId: PropTypes.number,
  tags: PropTypes.array,
};

export default RelatedPosts;
