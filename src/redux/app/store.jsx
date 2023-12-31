import { configureStore } from "@reduxjs/toolkit";
import blogsSlice from "../features/blogs/blogsSlice";
import singelBlogslice from "../features/blog/blogSlice";
import relatedBlogsSlice from "../features/relatedBlog/relatedBlogsSlice";
import addLikeSlice from "../features/like/addLikeSlice";
import saveSlice from "../features/save/saveSlice";

const store = configureStore({
  reducer: {
    blogs: blogsSlice,
    singelBlog: singelBlogslice,
    relatedBlog: relatedBlogsSlice,
    like: addLikeSlice,
    save: saveSlice,
  },
});

export default store;
