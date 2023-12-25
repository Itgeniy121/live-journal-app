import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/firebase";

export default function useAuth(onLogin?: (user?: User) => void) {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    setIsLoading(true);
    const unsub = onAuthStateChanged(auth, user => {
      setUser(user);
      setIsLoading(false);
    });
    return () => {
      unsub();
    };
  }, []);
  return { user, isLoading };
}
