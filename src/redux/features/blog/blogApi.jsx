import axiosInstance from "../../../utils/api";

export const getSingelBlog = async (id) => {
  const response = await axiosInstance.get(`/blogs/${id}`);
  return response.data;
};
