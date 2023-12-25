import Image from "next/image";
import donut from "@/static/donut.svg";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { createUser } from "./SignUp";
interface AuthTypes {
  email: string;
  name: string;
  passwrod: string;
}
const Fields = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AuthTypes>();

  
  const onSubmit: SubmitHandler<AuthTypes> = async () => {
    const newUser = await createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log('Тут мы зарегались')
        createUser(user, password, name);
      })
      .catch(console.error);
    toast.success("Вы успешно зарегестрировались! Войдите в аккаунт", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    setEmail("");
    setPassword("");
    router.push("/");
  };

  return (
    <div className='!flex !flex-col justify-start items-start'>
      <div className='flex flex-row justify-start items-center mart100 '>
        <h1 className='h1-60-jose'>B</h1>
        <Image src={donut} alt='logo' className='logo mb-[10px] marR' />
        <Image src={donut} alt='logo' className='logo mb-[10px]' />
        <h1 className='h1-60-jose'>BLIK</h1>
      </div>
      <div className='mart100'>
        <h1 className='h1-40-jose'>Регистрация</h1>
        <div className='mart'>
          <p className='desc'>Имя</p>
          <input
            type='text'
            className='base-input'
            placeholder='Алексей'
            {...register("name", {
              required: "Введите свое имя",
              minLength: {
                value: 4,
                message: "Имя должно содержать больше 3 символов",
              },
            })}
            onChange={e => setName(e.target.value)}
          />
          {errors?.name && <div className='error'>{errors.name?.message}</div>}
        </div>
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
        <div className='mart marb'>
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
            <button className="base-button" onClick={handleSubmit(onSubmit)}><p className='h1-20-jose'>Зарегестрироваться</p></button>
        <p className='desc2 mart2'>
          Уже есть аккаунт?{" "}
          <Link href='/' className='link'>
            На главную
          </Link>
        </p>
      </div>
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default Fields;
