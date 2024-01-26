import AdminPageLayout from "@/components/AdminPageLayout";
import DynamicTablet, { ITabletHead } from "@/components/DynamicTable";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-dropdown-menu";
import { IconPencil } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const InfoPageSection = () => {
  const [isLoading] = useState(false);
  const navigate = useNavigate();
  //data
  const tableHeads: ITabletHead[] = [
    {
      name: "Section",
      propName: "section",
    },
    {
      name: "Acciones",
      propName: "actions",
      actions: [
        {
          icon: <IconPencil className=" w-4 h-4 text-gray-600" />,
          name: "edit",
          tooltip: "Editar",
          onClick: () => {
            navigate("/info-page-section-edit");
          },
        },
      ],
    },
  ];
  const tableBody = [
    {
      section: "Powerhouses",
    },
    {
      section: "Locations",
    },
    {
      section: "Job Board",
    },
    {
      section: "Calendar",
    },
    {
      section: "Education",
    },
    {
      section: "Professional Databases",
    },
    {
      section: "Forum",
    },
  ];
  return (
    <AdminPageLayout>
      <header className="flex justify-between items-center">
        <h1 className="text-2xl">Professional Community</h1>
        <Button>
          <Link to={"/info-page-section-edit"}>Add New</Link>
        </Button>
      </header>
      {/* main description page  */}
      <Label className="mt-5">Description</Label>
      <Textarea
        value={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        placeholder="Type your message here."
      />
      {/* table */}
      <DynamicTablet
        isLoading={isLoading}
        tableHeads={tableHeads}
        tableBody={tableBody}
        placeholder="Search Section..."
      />
    </AdminPageLayout>
  );
};

export default InfoPageSection;
