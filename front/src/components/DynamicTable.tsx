import React from "react";
import { IconMoodEmpty } from "@tabler/icons-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Skeleton } from "./ui/skeleton";
import { Input } from "./ui/input";

interface ITabletAction {
  name: string;
  icon: any;
  tooltip?: string;
  tooltipFunc?: (value: any) => string;
  disabled?: (value: any) => boolean;
  onClick?: (id: string) => void;
}

export interface ITabletHead {
  name: string;
  propName: string;
  converter?: (value: any) => string;
  actions?: ITabletAction[];
}

interface Props {
  tableHeads: ITabletHead[];
  tableBody?: any[];
  isLoading: boolean;
  placeholder?: string;
}

const DynamicTablet = ({
  tableHeads,
  tableBody,
  isLoading,
  placeholder = "Search...",
}: Props) => {
  /**
   * render a tooltip depend if is function or text
   * @param action
   * @returns
   */
  const renderToolTips = (action: ITabletAction, item: any) => {
    return (
      <TooltipContent>
        <p>{action.tooltipFunc ? action.tooltipFunc(item) : action.tooltip}</p>
      </TooltipContent>
    );
  };

  return (
    <>
      {/* filters */}
      <div className="flex items-center gap-x-2 mt-10 mb-2">
        <Input
          className="max-w-[300px] bg-gray200 placeholder:text-white/30"
          type="text"
          placeholder={placeholder}
        />
      </div>
      <div className=" relative text-white rounded-xl h-auto min-h-[500px] overflow-x-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              {tableHeads.map((item) => (
                <TableHead
                  key={item.name}
                  className=" last:rounded-r-sm first:rounded-l-sm  text-gray-600"
                >
                  {item.name}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableBody?.map((item) => (
              <TableRow key={item.id}>
                {tableBody && (
                  <React.Fragment key={`${item.id}`}>
                    {tableHeads.map((head) =>
                      head.actions ? (
                        <TableCell key={head.name} className=" gap-x-2 flex ">
                          {head.actions.map(
                            (action) =>
                              action && (
                                <TooltipProvider key={action.name}>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <button
                                        className="bg-gray200 hover:bg-white/20 rounded-md p-2"
                                        disabled={
                                          action?.disabled &&
                                          action.disabled(item)
                                        }
                                        onClick={() => {
                                          if (action.onClick) {
                                            action.onClick(item.id);
                                          }
                                        }}
                                      >
                                        {action.icon}
                                      </button>
                                    </TooltipTrigger>
                                    {renderToolTips(action, item)}
                                  </Tooltip>
                                </TooltipProvider>
                              )
                          )}
                        </TableCell>
                      ) : (
                        <TableCell key={head.propName}>
                          {(head.converter
                            ? head.converter(item)
                            : item[head.propName]) || "N/A"}
                        </TableCell>
                      )
                    )}
                  </React.Fragment>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {isLoading && (
          <>
            {[1, 2, 3, 4, 5].map((id) => (
              <Skeleton
                key={id}
                className="h-[57px] rounded-none mb-1 w-full"
              />
            ))}
          </>
        )}
        {tableBody?.length === 0 && (
          <div className=" flex-col w-full min-h-[60vh] flex items-center justify-center h-full absolute right-0 ">
            <IconMoodEmpty className="w-14 animate-spin h-14 text-primary" />
            <span>No hay items</span>
          </div>
        )}
      </div>
    </>
  );
};

export default DynamicTablet;
