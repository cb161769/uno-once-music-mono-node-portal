import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
import LoginAndSignupLayout from "@/components/LoginAndSignupLayout";

const ForgotPasswordPage = () => {
  return (
    <LoginAndSignupLayout>
      <h1 className="text-4xl font-semibold bg-gradient-to-br from-secondary to-primary bg-clip-text text-transparent">
        Forgot password
      </h1>
      <p className=" mt-3 text-center">
        No worries, we'll send you reset instructions.
      </p>
      <Input className=" mt-5" type="email" placeholder="Enter your email" />
      <Button className=" mt-5 w-full">Reset password</Button>
      <div>
        <span className="text-xs mx-auto flex items-center justify-center mt-3">
          <IconArrowLeft className="w-4 h-4" />
          <Link to={"/log-in"} className="text-secondary hover:underline ml-2">
            Back to login in
          </Link>
        </span>
      </div>
    </LoginAndSignupLayout>
  );
};

export default ForgotPasswordPage;
