import React from 'react';

const Logo = () => {
  return (
    <p className='text-[28px] italic font-bold text-white p-0 m-0'>GeoCall</p>
  );
};

const LoginInput = () => {
  return (
    <input
      className='w-[300px] h-[60px] rounded-[8px] border-none outline-none'
      type='text'
    />
  );
};

const LoginButton = () => {
  return (
    <button className='w-[300px] h-[50px] rounded-[8px] border border-[#ccc]'>
      Login
    </button>
  );
};

function LoginPage() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-[#80a5e5]'>
      <div className='w-[400px] h-[400px] bg-[#1081E0] flex flex-col justify-evenly items-center'>
        <Logo />
        <LoginInput />
        <LoginButton />
      </div>
    </div>
  );
}

export default LoginPage;
