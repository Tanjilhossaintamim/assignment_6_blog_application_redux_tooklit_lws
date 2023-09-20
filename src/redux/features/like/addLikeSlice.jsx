import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postLike from "./likeApi";

const initialState = {
  isLoading: false,
};

const addLikeSlice = createSlice({
  name: "like",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addlike.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addlike.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addlike.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const addlike = createAsyncThunk(
  "like/addlike",
  async ({ id, likes }) => {
    const response = await postLike({ id, likes });
    return response;
  }
);

export default addLikeSlice.reducer;
