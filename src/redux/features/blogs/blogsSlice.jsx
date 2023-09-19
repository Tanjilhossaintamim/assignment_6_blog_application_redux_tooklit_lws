import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogs } from "./blogApi";

const initialState = {
  isLoading: false,
  isError: false,
  blogs: [],
  error: "",
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.blogs = [];
      });
  },
});

// thunk
export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const blogs = await getBlogs();
  return blogs;
});

export default blogSlice.reducer;
