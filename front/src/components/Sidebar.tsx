import {
  IconArrowBarLeft,
  IconBrandMyOppo,
  IconCalendarEvent,
  IconChevronRight,
  IconCirclePlus,
  IconSchool,
  IconTicket,
  IconUsers,
} from "@tabler/icons-react";
import Logo from "../assets/logo.svg";
import IsoTipo from "../assets/isotipo.svg";
import { Button } from "./ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { IconMusic } from "@tabler/icons-react";
import { IconLayoutDashboard } from "@tabler/icons-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Sidebar = () => {
  const nav = [
    {
      name: "Dashboard ",
      href: "/",
      icon: <IconLayoutDashboard className="w-5 h-5" />,
    },
    {
      name: "Studios",
      href: "/studios",
      icon: <IconMusic className="w-5 h-5" />,
    },
    {
      name: "Memberships",
      href: "/memberships",
      icon: <IconBrandMyOppo className="w-5 h-5" />,
    },
    {
      name: "WorkShops",
      href: "/workshops",
      icon: <IconSchool className="w-5 h-5" />,
    },
    {
      name: "Events",
      href: "/events",
      icon: <IconTicket className="w-5 h-5" />,
    },
    {
      name: "Reservations",
      href: "/reservations",
      icon: <IconCalendarEvent className="w-5 h-5" />,
    },
    {
      name: "Users",
      href: "/users",
      icon: <IconUsers className="w-5 h-5" />,
    },
  ];
  const [isClosed, setIsClosed] = useState(false);
  const pathname = useLocation();
  return (
    <div
      className={cn(
        " flex flex-col items-center transition-all duration-500 text-sm",
        isClosed ? "w-[50px] m-3 mt-10" : "w-[200px] m-5 mt-10 "
      )}
    >
      {isClosed ? (
        <img
          className="w-10 h-10 mx-auto"
          src={IsoTipo}
          alt="Logo One Once Music"
        />
      ) : (
        <img className="mx-auto" src={Logo} alt="Logo One Once Music" />
      )}
      <CreateNew isClosed={isClosed} />
      <div className=" flex items-center justify-between w-full mt-5">
        {!isClosed && <span>Menu</span>}
        <IconArrowBarLeft
          onClick={() => setIsClosed(!isClosed)}
          className={`w-5 h-5 hover:text-primary cursor-pointer  ${
            isClosed && "rotate-180 mx-auto "
          } transition-transform duration-500`}
        />
      </div>
      <nav className=" flex flex-col items-center justify-center w-full mt-5">
        {nav.map((item) => {
          const isActive = pathname.pathname === item.href;
          return (
            <NavItem
              key={item.name}
              name={item.name}
              href={item.href}
              icon={item.icon}
              isClosed={isClosed}
              isActive={isActive}
            />
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;

const NavItem = ({
  name,
  href,
  icon,
  isClosed,
  isActive,
}: {
  name: string;
  href: string;
  icon: JSX.Element;
  isClosed: boolean;
  isActive: boolean;
}) => {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center justify-between w-full p-2 rounded-md hover:bg-gray100",
        isActive && "bg-gray100"
      )}
    >
      <div className={` mx-auto ${isActive && "text-primary"}`}>{icon}</div>
      {!isClosed && (
        <>
          <span className=" flex-1 ml-3">{name}</span>
          <IconChevronRight className="w-5 h-5" />
        </>
      )}
    </Link>
  );
};

const CreateNew = ({ isClosed }: { isClosed: boolean }) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="mt-5">
          <Button className=" w-full">
            <IconCirclePlus />
            {!isClosed && <span className="ml-2">Create new</span>}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" min-w-[12.5rem] ">
          <DropdownMenuItem>Study</DropdownMenuItem>
          <DropdownMenuItem>Workshop</DropdownMenuItem>
          <DropdownMenuItem>Event</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
