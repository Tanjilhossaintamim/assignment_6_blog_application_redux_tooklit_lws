import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Post = ({ blog }) => {
  const { id, title, image, tags, isSaved, createdAt, likes } = blog || {};
  return (
    <div className="lws-card">
      <Link to={`/blogs/${id}`}>
        <img src={image} className="lws-card-image" alt="" />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>
            {likes}
          </p>
        </div>
        <Link to={`/blogs/${id}`} className="lws-postTitle">
          {" "}
          {title}{" "}
        </Link>
        <div className="lws-tags">
          {tags?.length > 0 &&
            tags.map((tag, i) => <span key={i}>#{tag},</span>)}
        </div>
        {/* <!-- Show this element if post is saved --> */}
        {isSaved && (
          <div className="flex gap-2 mt-4">
            <span className="lws-badge"> Saved </span>
          </div>
        )}

        {/* <!-- Show this element if post is saved Ends --> */}
      </div>
    </div>
  );
};
Post.propTypes = {
  blog: PropTypes.object,
};

export default Post;
