import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSingelBlog } from "./blogApi";

const initialState = {
  isLoading: false,
  isError: false,
  blog: {},
  error: "",
};

const singelBlogSlice = createSlice({
  name: "singelblogs",
  initialState,
  reducers: {
    add_like: (state) => {
      state.blog.likes += 1;
    },
    save: (state, action) => {
      state.blog.isSaved = !action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.blog = action.payload;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.blog = {};
      });
  },
});

export const { add_like, save } = singelBlogSlice.actions;

// thunk
export const fetchBlog = createAsyncThunk("blog/fetchBlog", async (id) => {
  const blog = await getSingelBlog(id);
  return blog;
});

export default singelBlogSlice.reducer;
