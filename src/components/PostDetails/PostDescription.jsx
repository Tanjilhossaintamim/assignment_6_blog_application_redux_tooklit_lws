import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addlike } from "../../redux/features/like/addLikeSlice";
import { add_like, save } from "../../redux/features/blog/blogSlice";
import { saveBookMark } from "../../redux/features/save/saveSlice";

const PostDescription = ({ blog }) => {
  const { id, title, tags, isSaved, likes, description } = blog || {};
  const dispatch = useDispatch();

  const handelAddlikes = () => {
    dispatch(addlike({ id, likes }));
    dispatch(add_like());
  };

  const handelAddToBookmark = () => {
    dispatch(saveBookMark({ id, isSaved }));
    dispatch(save(isSaved));
  };

  return (
    <div>
      <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
        {title}
      </h1>
      <div className="tags" id="lws-singleTags">
        {tags?.length > 0 &&
          tags.map((tag, i) => <span key={i}>#{tag}, </span>)}
      </div>
      <div className="btn-group">
        {/* <!-- handle like on button click --> */}
        <button
          className="like-btn"
          id="lws-singleLinks"
          onClick={handelAddlikes}
        >
          <i className="fa-regular fa-thumbs-up"></i> {likes}
        </button>
        {/* <!-- handle save on button click -->
      <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
        {isSaved ? (
          <button
            onClick={handelAddToBookmark}
            className="active save-btn"
            id="lws-singleSavedBtn"
          >
            <i className="fa-regular fa-bookmark"></i> Saved
          </button>
        ) : (
          <button
            onClick={handelAddToBookmark}
            className="save-btn"
            id="lws-singleSavedBtn"
          >
            <i className="fa-regular fa-bookmark"></i> Save
          </button>
        )}
      </div>
      <div className="mt-6">
        <p>{description}</p>
      </div>
    </div>
  );
};

PostDescription.propTypes = {
  blog: PropTypes.object,
};

export default PostDescription;
