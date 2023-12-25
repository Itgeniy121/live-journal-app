"use client"
import donut from "../static/donut.svg";
import avatar from "../static/avatar.jpg";
import logoutImage from "../static/logoutImage.png";
import Image from "next/image";
import Link from "next/link";
import LoginModal from "./UI/LoginModal";
import { logout } from "@/modules/auth/components/SignUp";
import useAuth from "@/hooks/IsAuth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useUserInfo from "@/API/userInfo";

const Header = () => {
  const openModal = () => {
    const modal = document.getElementById("modal");
    modal?.classList.add("active");
  };
  const LogOut = () => {
    logout();
    toast.success("Вы вышли из аккаунта.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const { user } = useAuth();
  const { userInfo } = useUserInfo();
  return (
    <div
      id='header'
      className='py-[15px] bg-[#1A78F7] flex flex-row justify-between items-center px-[35px] w-full'
    >
      <LoginModal />
      <div className='flex flex-row justify-start items-center'>
        <h1 className='h1-30-jose'>B</h1>
        <Image src={donut} alt='logo' className='w-[40px] h-[40px] mb-[10px]' />
        <Image src={donut} alt='logo' className='w-[40px] h-[40px] mb-[10px]' />
        <h1 className='h1-30-jose'>blik</h1>
        <div className='flex flex-row ml-[100px] w-[200px] justify-between'>
          <Link href='/' className='hover:underline'>
            <p className='h1-18-mont'>Blog</p>
          </Link>
          <Link href='/test' className='hover:underline'>
            <p className='h1-18-mont'>Test</p>
          </Link>
          <Link href='/test' className='hover:underline'>
            <p className='h1-18-mont'>Test</p>
          </Link>
          <Link href='/about' className='hover:underline'>
            <p className='h1-18-mont'>About</p>
          </Link>
        </div>
      </div>

      {user === null ? (
        <div id='buttons' className='flex flex-row justify-center items-center'>
          <button onClick={openModal}>Войти</button>
          <Link
            href='/auth'
            className='bg-[#0532B2] hover:bg-[#264DBB] h-[40px] rounded-[5px] ml-[30px] pt-[10px] px-[40px]'
          >
            <p className='h1-18-mont'>Регистрация</p>
          </Link>
        </div>
      ) : (
        <div id='avatar' className='flex flex-row justify-center items-center'>
          <Image
            src={avatar}
            alt='avatar'
            className='w-[55px] h-[55px] mr-[20px] rounded-[30px]'
          />
          <h1 className="h1-17-jose mr-[15px]">{userInfo?.name}</h1>
          <Image
            src={logoutImage}
            alt='logout'
            className='w-[30px] h-[30px] cursor-pointer'
            onClick={LogOut}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
