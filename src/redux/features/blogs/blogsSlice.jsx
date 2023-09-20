import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogs } from "./blogsApi";

const initialState = {
  isLoading: false,
  isError: false,
  blogs: [],
  error: "",
};

const blogsSlice = createSlice({
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
export const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async ({ name, sortValue }) => {
    const blogs = await getBlogs({ name, sortValue });
    return blogs;
  }
);

export default blogsSlice.reducer;
