import IsoTipo from "../../../assets/isotipo.svg";
import ImageLogin from "../../../assets/bg-login.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { IconBrandGoogleFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const LoginPage = () => {
  return (
    <section className=" h-screen flex items-center justify-center">
      <img className="lg:w-[60%]" src={IsoTipo} alt="Logo One Once Music" />
      <div className=" rounded-xl overflow-hidden flex justify-between w-full lg:w-[800px] h-full md:h-[500px] bg-black  absolute">
        <div className=" relative w-full">
          <div
            className={cn(
              "p-10 relative z-20 w-full h-full flex flex-col justify-center items-center md:max-w-[50%]"
            )}
          >
            <h1 className="text-4xl font-semibold bg-gradient-to-br from-secondary to-primary bg-clip-text text-transparent">
              Login
            </h1>
            <p className=" mt-3">Log In to your account</p>
            <Input className=" mt-5" type="email" placeholder="Email" />
            <Input className=" mt-3" type="password" placeholder="Password" />
            <Link
              to={"/forgot-password"}
              className="flex text-xs text-secondary mt-3 hover:underline ml-auto justify-end w-full"
            >
              Forgot Password
            </Link>
            <Button className=" mt-5 w-full">Login</Button>
            <div className="flex items-center gap-x-4 my-3">
              <hr className=" w-full h-[1px] border-gray-900" />
              <span className="text-xs">Or</span>
              <hr className=" w-full h-[1px] border-gray-900" />
            </div>
            <Button className=" w-full" variant={"outline"}>
              <IconBrandGoogleFilled className="mr-4" />
              Login with Google
            </Button>
            <div>
              <span className="text-xs mx-auto flex justify-center mt-3">
                Don't have an account?{" "}
                <Link
                  to={"/sign-up"}
                  className="text-secondary hover:underline ml-2"
                >
                  Sign Up
                </Link>
              </span>
            </div>
          </div>
          <img
            className=" absolute right-0 bottom-0 top-0 h-full opacity-15 md:opacity-100 object-cover"
            src={ImageLogin}
            alt="Rapper Image"
          />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
