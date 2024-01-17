import AdminPageLayout from "@/components/AdminPageLayout";
import GoBack from "@/components/GoBack";
import UploadImage from "@/components/UploadImage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useContext, useEffect, useRef } from "react";
import { EditorContext } from "@/components/EditorContext";

const AddStudioPage = () => {
  const { initEditor } = useContext(EditorContext);
  const editorRef = useRef<boolean>(false);
  useEffect(() => {
    if (!editorRef.current) {
      initEditor();
      editorRef.current = true;
    }
  }, []);

  return (
    <AdminPageLayout>
      <div className="flex flex-col h-full">
        <header className=" mb-5 border-b border-gray200 pb-2">
          <GoBack />
          <div>Untitled</div>
        </header>
        <Label>Name</Label>
        <Input className="mb-5 mt-2" type="text" placeholder="Name" />
        <Label>Thumbnails</Label>
        <UploadImage />
        <Label>Description</Label>
        <div className="mt-2 flex-1 bg-black w-full flex h-[300px] p-3 rounded-md">
          <div id="editorjs" />
        </div>
      </div>
    </AdminPageLayout>
  );
};

export default AddStudioPage;
