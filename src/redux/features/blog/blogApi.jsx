import axiosInstance from "../../../utils/api";

export const getSingelBlog = async (id) => {
  const response = await axiosInstance(`/blogs/${id}`);
  return response.data;
};
