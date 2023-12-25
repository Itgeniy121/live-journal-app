import { db } from "@/firebase";
import { ref, get } from "firebase/database";
import { auth } from "@/firebase";
import { useState, useEffect } from "react";
interface infoProps {
  name: string;
  password: string;
  id: string;
  email: string;
}

export default function useUserInfo() {
  const [userInfo, setUserInfo] = useState<infoProps>();

  const getUid = () => {
    const user = auth.currentUser;
    return user ? user.uid : null;
  };
  const fetchInfo = async () => {
    try {
      const uid = getUid();
      const info = ref(db, `users/${uid}/info`);
      const response = (await get(info)).val();
      setUserInfo(response);
    } catch (error) {
      console.log(error);
    }
  };
  fetchInfo()
  return { userInfo };
}
