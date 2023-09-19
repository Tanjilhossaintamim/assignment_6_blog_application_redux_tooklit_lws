import axiosInstance from "../../../utils/api";

export const getRelatedBlogs = async ({ tags, currentBlogId }) => {
  const queryString =
    tags.map((tag) => `tags_like=${tag}`).join("&") +
    `&id_ne=${currentBlogId}&_limit=5`;
  const response = await axiosInstance(`/blogs?${queryString}`);
  return response.data;
};
