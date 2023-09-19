import axiosInstance from "../../../utils/api";

export const getRelatedBlogs = async ({ tags, currentBlogId }) => {
  const queryString =
    tags.map((tag) => `tags_like=${tag}`).join("&") +
    `&id_ne=${currentBlogId}&_limit=4`;
  const response = await axiosInstance.get(`/blogs?${queryString}`);
  return response.data;
};
