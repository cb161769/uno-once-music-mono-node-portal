import IsoTipo from "../assets/isotipo.svg";
import ImageLogin from "../assets/bg-login.png";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const LoginAndSignupLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className=" h-screen flex items-center justify-center">
      <img className="lg:w-[60%]" src={IsoTipo} alt="Logo One Once Music" />
      <div className=" rounded-xl overflow-hidden flex justify-between w-full lg:w-[800px] h-full md:h-[500px] bg-black  absolute">
        <div className=" relative w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={cn(
              "p-10 relative z-20 w-full h-full flex flex-col justify-center items-center md:max-w-[50%]"
            )}
          >
            {children}
          </motion.div>
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

export default LoginAndSignupLayout;
