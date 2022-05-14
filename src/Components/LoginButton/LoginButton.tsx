import Image from 'next/image';

interface LoginButtonProps {
  image: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

function LoginButton({
  image,
  children,
  onClick,
  type = 'button',
  ...props
}: LoginButtonProps & React.HTMLProps<HTMLButtonElement>) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="flex justify-center py-2 pr-4 pl-2 font-semibold text-zinc-900 bg-white rounded-lg shadow border items-center hover:bg-zinc-50 active:bg-zinc-50 w-full sm:w-auto"
      {...props}
    >
      <Image className="mr-4 ml-2" width="24px" height="24px" src={image} />
      {children}
    </button>
  );
}

export default LoginButton;
