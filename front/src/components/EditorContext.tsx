import { createContext, useRef, ReactNode, FC, useState } from "react";
import EditorJS, { EditorConfig } from "@editorjs/editorjs";

interface EditorContextProps {
  children: ReactNode;
}

interface EditorContextValue {
  initEditor: () => void;
  editorInstanceRef: React.MutableRefObject<EditorJS | null> | null;
  isLogin: boolean;
  setIsLogin(value: boolean): void;
}

export const EditorContext = createContext<EditorContextValue>({
  initEditor: () => {},
  editorInstanceRef: null,
  isLogin: false,
  setIsLogin: () => {},
});

const EditorContextProvider: FC<EditorContextProps> = ({ children }) => {
  const editorInstanceRef = useRef<EditorJS | null>(null);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const initEditor = () => {
    const editorConfig: EditorConfig = {
      holder: "editorjs",
      placeholder: "Let's write a description",
      tools: {},
    };

    const editor = new EditorJS(editorConfig);
    editorInstanceRef.current = editor;
  };

  return (
    <EditorContext.Provider
      value={{
        initEditor,
        editorInstanceRef,
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export default EditorContextProvider;
