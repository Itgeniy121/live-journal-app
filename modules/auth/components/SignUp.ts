import { db } from "@/firebase";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { ref, set, } from "firebase/database";
import { User } from "firebase/auth";

const createUser = async (user: User, password: string, name: string) => {
  const id = user.uid;
  const email = user.email;
  const reference = ref(db, `users/${id}/info`);
   await set(reference, {
    name,
    email,
    password,
    id,
  });
  logout();
  console.log('запись есть выход есть')
};

const logout = async () => {
  await signOut(auth);
};

export { createUser, logout };
