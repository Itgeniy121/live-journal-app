"use client";
import { fetchPosts } from "@/API/userPosts";
import PostItem from "./components/PostItem";
import { useEffect, useState } from "react";
import st from "./styles/Post.module.css"
import { useDispatch } from "react-redux";
import { reloadPosts } from "@/store/slices/ReloadPosts";
import { AppSelector } from "../createPost/hooks/useSelector";
import Loader from "@/components/Loader/Loader";
const List = () => {
  const[newPosts, setNewPosts] = useState<any[]>()
  const[isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const{posts} = AppSelector(state => state.allPosts)
    useEffect(()=>{
      setIsLoading(true)
        fetchPosts().then((res) => {
          dispatch(reloadPosts(res))
        })
        setNewPosts(posts)
        setIsLoading(false)
    }, [])

  return (
    <div className={st.list}>
      {isLoading === true && <Loader/>}
      {posts?.map((post: any) =>(
        <PostItem key={post.id} title={post.title} description={post.desc} date={post.date} name={post.name}/>
      ))}
    </div>
  );
};

export default List;
