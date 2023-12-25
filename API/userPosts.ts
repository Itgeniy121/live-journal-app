import { auth, db } from "@/firebase";
import { ref, push, get } from "firebase/database";

export async function createPosts(post: object, file: string) {
  try {
    const uid = await getUid();
    const reference = await ref(db, `users/${uid}/posts/`);
    const newBranch = await ref(db, `allPosts/`);
    return push(reference, post), push(newBranch, post);
  } catch (e) {
    console.log(e);
  }
}
export async function fetchPosts(){
  try{
    const reference = ref(db, `allPosts/`)
    let posts = (await get(reference)).val() || {}
    return Object.keys(posts).map(key => ({...posts[key], id: key}))
  }catch(e){
    console.log(e)
  }
}

const getUid = () => {
  const user = auth.currentUser;
  return user ? user.uid : null;
};
