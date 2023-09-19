import { configureStore } from "@reduxjs/toolkit";
import blogsSlice from "../features/blogs/blogsSlice";
import singelBlogslice from "../features/blog/blogSlice";

const store = configureStore({
  reducer: {
    blogs: blogsSlice,
    singelBlog: singelBlogslice,
  },
});

export default store;
