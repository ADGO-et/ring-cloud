import Link from "next/link";
import Image from "next/image";
import LoginForm from "./LoginForm";
import Logo from "../../../public/assets/ringLogo.svg";

const LoginPage = () => {
  return (
    <main className="flex flex-col md:flex-row gap-6 w-[400px] md:w-[600px] lg:w-[1000px] h-[550px] md:h-[500px] rounded-xl bg-white shadow-xl">
      <nav className="container  flex justify-center items-center rounded-xl">
        <Link href="/home" className="bg-[#003366] rounded-xl">
          <Image
            src={Logo}
            alt="company logo"
            width={170}
            height={170}
            className="relative  w-[150px] h-[150px] md:w-[200px] md:h-[200px] "
          />
        </Link>
      </nav>
      <div className="w-full flex flex-col justify-center items-center">
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
