import { fetchPosts } from "@/API/userPosts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
interface userInfo {
  posts: any;
}

const initialState: userInfo = {
  posts: null,
};
export const ReloadPosts = createSlice({
  name: "allPosts",
  initialState,
  reducers: {
    reloadPosts(state, action: PayloadAction<any>) {
      state.posts = action.payload
    },
    addNewPosts(state, action: PayloadAction<any>){
      state.posts.unshift(action.payload);
    }
  },
});
export const {reloadPosts} = ReloadPosts.actions;
export const {addNewPosts} = ReloadPosts.actions
export const postsReducer = ReloadPosts.reducer;
