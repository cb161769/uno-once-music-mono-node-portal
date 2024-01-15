import AdminPageLayout from "@/components/AdminPageLayout";
import DynamicTablet, { ITabletHead } from "@/components/DynamicTable";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import { useState } from "react";

const StudiosPage = () => {
  const [isLoading] = useState(false);
  //data
  const tableHeads: ITabletHead[] = [
    {
      name: "Photo",
      propName: "name",
    },
    {
      name: "Name",
      propName: "email",
    },
    {
      name: "Description",
      propName: "password",
    },
    {
      name: "Status",
      propName: "business",
    },
    {
      name: "Acciones",
      propName: "actions",
      actions: [
        {
          icon: <IconTrash className=" w-4 h-4 text-gray-600" />,
          name: "delete",
          tooltip: "Eliminar",
          onClick: () => {},
        },
        {
          icon: <IconPencil className=" w-4 h-4 text-gray-600" />,
          name: "edit",
          tooltip: "Editar",
          onClick: () => {},
        },
      ],
    },
  ];
  const tableBody = [
    {
      name: (
        <img
          className="size-10 object-cover rounded-md"
          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      ),
      email: "Studio Miami 01",
      password: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      business: <Status status="active" />,
    },
    {
      name: (
        <img
          className="size-10 object-cover rounded-md"
          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      ),
      email: "Studio Miami 05",
      password: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      business: <Status status="in repair" />,
    },
    {
      name: (
        <img
          className="size-10 object-cover rounded-md"
          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      ),
      email: "Studio Dj Joel",
      password: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      business: <Status status="inactive" />,
    },
  ];
  return (
    <AdminPageLayout>
      <header className="flex justify-between items-center">
        <h1 className="text-2xl">Studios</h1>
        <Button>Add New</Button>
      </header>
      {/* table */}
      <DynamicTablet
        isLoading={isLoading}
        tableHeads={tableHeads}
        tableBody={tableBody}
      />
    </AdminPageLayout>
  );
};

export default StudiosPage;

const Status = ({
  status,
}: {
  status: "active" | "inactive" | "in repair";
}) => {
  return (
    <div className="flex items-center">
      <div
        className={cn(
          "w-3 h-3 rounded-full mr-2",
          status === "active" && "bg-green-500",
          status === "inactive" && "bg-red-500",
          status === "in repair" && "bg-yellow-500"
        )}
      ></div>
      <span>{status}</span>
    </div>
  );
};
