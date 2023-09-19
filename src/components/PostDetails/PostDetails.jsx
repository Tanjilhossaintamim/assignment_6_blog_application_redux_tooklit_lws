import PostDescription from "./PostDescription";
import PropTypes from "prop-types";
const PostDetails = ({ blog }) => {
  const { image, title } = blog || {};
  return (
    <main className="post">
      <img
        src={image}
        alt={title}
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <PostDescription blog={blog} />
    </main>
  );
};

PostDetails.propTypes = {
  blog: PropTypes.object,
};

export default PostDetails;
