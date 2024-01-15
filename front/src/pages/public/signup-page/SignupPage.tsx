import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { IconBrandGoogleFilled } from "@tabler/icons-react";
import LoginAndSignupLayout from "@/components/LoginAndSignupLayout";

const SignupPage = () => {
  return (
    <LoginAndSignupLayout>
      <h1 className="text-4xl font-semibold bg-gradient-to-br from-secondary to-primary bg-clip-text text-transparent">
        Signup
      </h1>
      <p className=" mt-3">Please sign up and use our powerfull app</p>
      <Input className=" mt-5" type="text" placeholder="Full Name" />
      <Input className=" mt-3" type="email" placeholder="Email" />
      <Input className=" mt-3" type="password" placeholder="Password" />
      <Button className=" mt-5 w-full">Sign up</Button>
      <div className="flex items-center gap-x-4 my-3">
        <hr className=" w-full h-[1px] border-gray-900" />
        <span className="text-xs">Or</span>
        <hr className=" w-full h-[1px] border-gray-900" />
      </div>
      <Button className=" w-full" variant={"outline"}>
        <IconBrandGoogleFilled className="mr-4" />
        Sign up with Google
      </Button>
      <div>
        <span className="text-xs mx-auto flex justify-center mt-3">
          Already have an account?{" "}
          <Link to={"/log-in"} className="text-secondary hover:underline ml-2">
            Login Here
          </Link>
        </span>
      </div>
    </LoginAndSignupLayout>
  );
};

export default SignupPage;
