import axiosInstance from "../../../utils/api";

export const getBlogs = async ({ name, sortValue }) => {
  let queryString = "";
  if (name == "saved") {
    queryString += "isSaved_like=true";
  }
  if (sortValue == "newest") {
    queryString += "&_sort=createdAt&_order=desc";
  }
  if (sortValue == "most_liked") {
    queryString += "&_sort=likes&_order=desc";
  }

  const response = await axiosInstance.get(`/blogs?${queryString}`);
  return response.data;
};
