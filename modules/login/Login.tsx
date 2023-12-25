import React, { useReducer, useState } from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import {signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "@/firebase";
import useUserInfo from "@/API/userInfo";
interface AuthTypes {
  email: string;
  passwrod: string;
}
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AuthTypes>();

  const onSubmit: SubmitHandler<AuthTypes> = () => {
    // const swapHeader = document.getElementById("buttons");
    // const ava = document.getElementById("avatar");
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(typeof user)
        setEmail("");
        setPassword("");
        let modal = document.getElementById("modal");
        modal?.classList.remove("active");
      })
      .catch(() => {
        toast.error("Пользователь с такими данными не найден!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  return (
    <div className='!flex flex-col justify-start items-start w-full h-full'>
      <h1 className='h1-40-jose'>Войти</h1>
      <div className='mart'>
        <p className='desc'>Email</p>
        <input
          type='email'
          className='base-input'
          placeholder='vasya1337@gmail.com'
          {...register("email", {
            required: "Введите Email",
            pattern: {
              value:
                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
              message: "Введите корректный Email",
            },
          })}
          onChange={e => setEmail(e.target.value)}
        />
        {errors?.email && <div className='error'>{errors.email.message}</div>}
      </div>
      <div className='mart'>
        <p className='desc'>Пароль</p>
        <input
          type='password'
          className='base-input'
          placeholder='******'
          {...register("passwrod", {
            required: "Введите пароль",
            minLength: {
              value: 5,
              message: "Пароль должен содержать более 4 символов",
            },
          })}
          onChange={e => setPassword(e.target.value)}
        />
        {errors?.passwrod && (
          <div className='error'>{errors.passwrod.message}</div>
        )}
      </div>
      <button className='mart base-button' onClick={handleSubmit(onSubmit)}>
        <p className='h1-20-jose'>Войти</p>
      </button>
      <p className='desc2 mart2'>
        Бублик, у тебя нет аккаунта?{" "}
        <Link href='/auth' className='link'>
          Зарегестрироваться
        </Link>
      </p>
    </div>
  );
};

export default Login;
