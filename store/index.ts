import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { PostFormReducer } from "./slices/PostForm.slice";
import { postsReducer } from "./slices/ReloadPosts";
const RootReducer = combineReducers({
  postForm: PostFormReducer,
  allPosts: postsReducer,
});
export const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});
export type RootState = ReturnType<typeof RootReducer>;
