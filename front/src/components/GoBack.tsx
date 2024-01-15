import { IconArrowBackUp } from "@tabler/icons-react";

const GoBack = () => {
  return (
    <button
      onClick={() => {
        window.history.back();
      }}
      className="text-sm flex items-center gap-x-2 mb-5 opacity-50 hover:opacity-100"
    >
      <IconArrowBackUp />
      Go Back
    </button>
  );
};

export default GoBack;
