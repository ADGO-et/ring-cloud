import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const LoginLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center bg-primaryColor/10">
      {children}
    </div>
  );
};

export default LoginLayout;
