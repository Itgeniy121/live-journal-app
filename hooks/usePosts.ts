import { fetchPosts } from "@/API/userPosts";
import { useEffect, useState } from "react";

export function resetPosts() {
  const[posts, setPosts] = useState<any>()
  useEffect(() => {
    fetchPosts().then(posts => {
      if (posts !== undefined) {
        setPosts(posts)
      } else {
        console.log("ошибка в диспатче постов в редакс");
      }
    });
  }, [posts]);
  return posts
}
