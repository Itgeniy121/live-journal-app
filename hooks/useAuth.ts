import { useSelector } from "react-redux";

export function useAuth() {
  const { email, password, id, name } = useSelector((state: any) => state.user);

  return {
    isAuth: !!id,
    email,
    password,
    id,
    name,
  };
}
