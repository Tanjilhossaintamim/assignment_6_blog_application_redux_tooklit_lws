import axiosInstance from "../../../utils/api";

export const getBlogs = async () => {
  const response = await axiosInstance.get("/blogs");
  return response.data;
};
