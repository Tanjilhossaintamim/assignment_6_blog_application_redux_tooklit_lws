import axiosInstance from "../../../utils/api";

const saveAsBookMark = async ({ id, isSaved }) => {
  const response = await axiosInstance.patch(`/blogs/${id}/`, {
    isSaved: !isSaved,
  });
  return response.data;
};

export default saveAsBookMark;
