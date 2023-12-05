import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import LoginInput from './LoginInput';
import LoginButton from './LoginButton';

const isUserNameValid = (userName: string) => {
  return userName.length > 0 && userName.length < 10 && !userName.includes(' ');
};

function LoginPage() {
  const [userName, setUserName] = useState<string>('');

  const navigate = useNavigate();

  const handleLogin = () => {
    if (isUserNameValid(userName)) {
      navigate('/map');
    }
  };

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600'>
      <div className='w-[400px] h-[350px] bg-white rounded-lg shadow-xl flex flex-col justify-evenly items-center p-8'>
        <Logo />
        <LoginInput userName={userName} setUserName={setUserName} />
        <LoginButton
          disabled={!isUserNameValid(userName)}
          onClickHandler={handleLogin}
        />
      </div>
    </div>
  );
}

export default LoginPage;
