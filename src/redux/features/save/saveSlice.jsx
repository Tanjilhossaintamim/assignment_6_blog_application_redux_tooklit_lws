import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import saveAsBookMark from "./saveApi";
const initialState = {
  isLoading: false,
};

const makeSaveSlice = createSlice({
  name: "like",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(saveBookMark.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(saveBookMark.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(saveBookMark.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const saveBookMark = createAsyncThunk(
  "like/addlike",
  async ({ id, isSaved }) => {
    const response = await saveAsBookMark({ id, isSaved });
    return response;
  }
);

export default makeSaveSlice.reducer;
