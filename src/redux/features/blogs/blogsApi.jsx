import axiosInstance from "../../../utils/api";

export const getBlogs = async () => {
  const response = await axiosInstance("/blogs");
  return response.data;
};
