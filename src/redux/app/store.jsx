import { configureStore } from "@reduxjs/toolkit";
import blogsSlice from "../features/blogs/blogsSlice";
import singelBlogslice from "../features/blog/blogSlice";
import relatedBlogsSlice from "../features/relatedBlog/relatedBlogsSlice";

const store = configureStore({
  reducer: {
    blogs: blogsSlice,
    singelBlog: singelBlogslice,
    relatedBlog: relatedBlogsSlice,
  },
});

export default store;
