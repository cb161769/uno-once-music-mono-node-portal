import { IconUpload } from "@tabler/icons-react";
import { Button } from "./ui/button";

const UploadImage = () => {
  return (
    <>
      <div className="mt-2 mb-5 text-white/50 h-14 items-center flex justify-center w-full rounded-md border border-gray200 bg-black px-3 py-2 text-sm">
        <span>Drag or paste image here</span>
        <Button className=" border-gray200 ml-5" variant={"outline"}>
          <IconUpload className=" size-4 mr-2" />
          Upload
        </Button>
      </div>
    </>
  );
};

export default UploadImage;
