import PostDescription from "./PostDescription";
import PostImage from "../../assets/mern.webp";

const PostDetails = () => {
  return (
    <main className="post">
      <img
        src={PostImage}
        alt="githum"
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <PostDescription />
    </main>
  );
};

export default PostDetails;
