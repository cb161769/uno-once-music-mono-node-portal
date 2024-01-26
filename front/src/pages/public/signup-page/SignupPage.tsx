import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { IconBrandGoogleFilled } from "@tabler/icons-react";
import LoginAndSignupLayout from "@/components/LoginAndSignupLayout";
import { Formik } from "formik";
import { ISignUp } from "./interfaces/signup.interface";
import { AuthService } from "@/services/auth-service/auth-service.service";
import alertsHelper from "@/helpers/alerts.helper";

const SignupPage = () => {
  //initialValues
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
  } as ISignUp;

  //router
  const navigate = useNavigate();

  //events
  const onSubmit = async (model: ISignUp) => {
    try {
      const service = new AuthService();
      const result = await service.register(model);
      if (result.status === 201) {
        alertsHelper.show("Usuario registrado!");
        navigate("/log-in");
      } else {
        alertsHelper.show("ha ocurrido un error", "error");
      }
    } catch (error: unknown) {
      alertsHelper.showApiError(error);
    }
  };

  return (
    <LoginAndSignupLayout>
      <h1 className="text-4xl font-semibold bg-gradient-to-br from-secondary to-primary bg-clip-text text-transparent">
        Signup
      </h1>
      <p className=" mt-3">Please sign up and use our powerfull app</p>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        {({ values, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Input
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              className=" mt-5"
              type="text"
              placeholder="Full Name"
            />
            <Input
              className=" mt-3"
              value={values.email}
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              placeholder="Email"
            />
            <Input
              className=" mt-3"
              value={values.password}
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              placeholder="Password"
            />

            <Button type="submit" className=" mt-5 w-full">
              Sign up
            </Button>
          </form>
        )}
      </Formik>
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
