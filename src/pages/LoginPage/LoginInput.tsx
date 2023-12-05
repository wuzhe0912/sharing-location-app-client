import { LoginInputProps } from '@/interface/login';

const LoginInput = (props: LoginInputProps) => {
  const { userName, setUserName } = props;

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  return (
    <input
      className='w-[300px] h-[60px] rounded-[8px] border border-gray-300 shadow-sm outline-none p-2'
      value={userName}
      onChange={handleValueChange}
      type='text'
    />
  );
};

export default LoginInput;
