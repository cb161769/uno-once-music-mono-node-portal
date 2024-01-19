import AdminPageLayout from "@/components/AdminPageLayout";
import DynamicTablet, { ITabletHead } from "@/components/DynamicTable";
import { Button } from "@/components/ui/button";
import { IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const InfoPage = () => {
  const [isLoading] = useState(false);
  const navigate = useNavigate();
  //data
  const tableHeads: ITabletHead[] = [
    {
      name: "Page",
      propName: "page",
    },
    {
      name: "Description",
      propName: "description",
    },
    {
      name: "Acciones",
      propName: "actions",
      actions: [
        {
          icon: <IconChevronRight className=" w-4 h-4 text-gray-600" />,
          name: "editar",
          tooltip: "Editar",
          // navegar a info-page-section
          onClick: () => {
            navigate("/info-page-section");
          },
        },
      ],
    },
  ];
  const tableBody = [
    {
      page: "Professional Community",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      page: "Artist Development Page",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      page: "About Us Page",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
  ];
  return (
    <AdminPageLayout>
      <header className="flex justify-between items-center">
        <h1 className="text-2xl">Info Page</h1>
        <Button>
          <Link to={"/add-studio"}>Add New</Link>
        </Button>
      </header>
      {/* table */}
      <DynamicTablet
        isLoading={isLoading}
        tableHeads={tableHeads}
        tableBody={tableBody}
        placeholder="Search Powerhouses..."
      />
    </AdminPageLayout>
  );
};

export default InfoPage;
