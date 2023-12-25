import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface AA{
  title: string,
  desc: string,
  name: string,
  date: string,
  file?: File | undefined

}
interface postForm {
  post: any
}
const initialState: postForm = {
  post: [],
};

export const PostFormSlice = createSlice({
  name: "postForm",
  initialState,
  reducers: {
    addToPostForm(state, action: PayloadAction<any>) {
      if (state.post.length === 0) {
        state.post.unshift(action.payload);
      } else {
        state.post.shift();
        state.post.unshift(action.payload);
      }
    },
  },
});
export const { addToPostForm } = PostFormSlice.actions;
export const PostFormReducer = PostFormSlice.reducer;
