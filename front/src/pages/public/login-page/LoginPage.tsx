import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { IconBrandGoogleFilled } from "@tabler/icons-react";
import LoginAndSignupLayout from "@/components/LoginAndSignupLayout";
import { useContext } from "react";
import { EditorContext } from "@/components/EditorContext";

const LoginPage = () => {
  const { setIsLogin } = useContext(EditorContext);
  return (
    <LoginAndSignupLayout>
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
      <Button onClick={() => setIsLogin(true)} className=" mt-5 w-full">
        Login
      </Button>
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
          <Link to={"/sign-up"} className="text-secondary hover:underline ml-2">
            Sign Up
          </Link>
        </span>
      </div>
    </LoginAndSignupLayout>
  );
};

export default LoginPage;
