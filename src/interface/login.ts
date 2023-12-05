export interface LoginButtonProps {
  onClickHandler: () => void;
  disabled: boolean;
}

export interface LoginInputProps {
  userName: string;
  setUserName: (userName: string) => void;
}
