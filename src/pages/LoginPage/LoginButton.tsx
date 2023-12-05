import { LoginButtonProps } from '@/interface/login';

const LoginButton = ({ onClickHandler, disabled }: LoginButtonProps) => {
  const buttonClass = `w-[300px] h-[50px] rounded-[8px] ${
    disabled ? 'bg-gray-400 text-white' : 'bg-blue-600 text-white'
  } hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300`;

  return (
    <button
      disabled={disabled}
      onClick={onClickHandler}
      className={buttonClass}>
      Login
    </button>
  );
};

export default LoginButton;
