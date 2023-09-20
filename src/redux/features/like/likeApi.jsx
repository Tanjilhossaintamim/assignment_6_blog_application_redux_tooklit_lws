import axiosInstance from "../../../utils/api";

const postLike = async ({ id, likes }) => {
  const response = await axiosInstance.patch(`/blogs/${id}/`, {
    likes: likes + 1,
  });
  return response.data;
};

export default postLike;
