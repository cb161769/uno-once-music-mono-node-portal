import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  const nav = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Professional Community",
      path: "/professional-community",
    },
    {
      name: "About US",
      path: "/about-uS",
    },
    {
      name: "Contact US",
      path: "/Contact-uS",
    },
  ];
  return (
    <header className=" absolute left-0 right-0 items-center text-white z-10 container mt-8 flex justify-between">
      <Link to={"/"}>
        <img src={Logo} alt="Logo Uno Once Music" />
      </Link>

      <div className=" hidden lg:flex items-center gap-x-8 ">
        <nav>
          <ul className="flex justify-between gap-x-8">
            {nav.map((item) => (
              <li
                className=" hover:text-primary transition-colors"
                key={item.name}
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <Button variant={"ghost"}>
            <Link to="/log-in">Log In</Link>
          </Button>
          <Button>
            <Link to="/sign-up">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
