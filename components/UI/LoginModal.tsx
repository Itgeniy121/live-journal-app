"use client";

import Login from "@/modules/login/Login";

const LoginModal = () => {
  const handler = () => {
    let modal = document.getElementById("modal");
    modal?.classList.remove("active");
  };

  return (
    <div
      id='modal'
      className='top-0 bottom-0 right-0 left-0 fixed hidden authModal justify-center items-center'
      onClick={handler}
    >
      <div
        onClick={e => e.stopPropagation()}
        className='bg-white w-[450px] h-[630px] rounded-[15px] pt-[48px] px-[35px]'
      >
        <Login />
      </div>
    </div>
  );
};

export default LoginModal;
