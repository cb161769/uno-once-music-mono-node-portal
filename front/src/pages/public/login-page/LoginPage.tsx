import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { IconBrandGoogleFilled } from "@tabler/icons-react";
import LoginAndSignupLayout from "@/components/LoginAndSignupLayout";
import { useContext } from "react";
import { ILogin } from "@/interfaces/auth/login.interface";
import alertsHelper from "@/helpers/alerts.helper";
import { Formik } from "formik";
import { AuthContext } from "@/store/auth-context/auth.context";
import { AuthService } from "@/services/auth-service/auth-service.service";

const LoginPage = () => {
  //initialValues
  const initialValues = {
    email: "",
    password: "",
  } as ILogin;

  //context
  const authContext = useContext(AuthContext);

  //events
  const onSubmit = async (model: ILogin) => {
    try {
      const service = new AuthService();
      const result = await service.login(model);

      const decodedToken = service.decodeToken(result.data.data);

      const data = {
        isAdmin: false,
        isLogged: true,
        token: result.data.data,
        user: {
          email: decodedToken.email,
          id: decodedToken.id,
        },
      };

      authContext.setSession(data);

      service.storeSession(data);
    } catch (error) {
      console.log(error);
      alertsHelper.showApiError(error);
    }
  };

  return (
    <LoginAndSignupLayout>
      <h1 className="text-4xl font-semibold bg-gradient-to-br from-secondary to-primary bg-clip-text text-transparent">
        Login
      </h1>
      <p className=" mt-3">Log In to your account</p>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        {({ values, errors, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className=" mt-5"
              type="email"
              placeholder="Email"
              name="email"
            />
            <Input
              className=" mt-3"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              name="password"
              type="password"
              placeholder="Password"
            />
            <Button type="submit" className=" mt-5 w-full">
              Login
            </Button>
          </form>
        )}
      </Formik>
      <Link
        to={"/forgot-password"}
        className="flex text-xs text-secondary mt-3 hover:underline ml-auto justify-end w-full"
      >
        Forgot Password
      </Link>

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
