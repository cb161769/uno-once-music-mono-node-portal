import { createContext, useRef, ReactNode, FC } from "react";
import EditorJS, { EditorConfig } from "@editorjs/editorjs";

interface EditorContextProps {
  children: ReactNode;
}

interface EditorContextValue {
  initEditor: () => void;
  editorInstanceRef: React.MutableRefObject<EditorJS | null>;
}

export const EditorContext = createContext<EditorContextValue | null>(null);

const EditorContextProvider: FC<EditorContextProps> = ({ children }) => {
  const editorInstanceRef = useRef<EditorJS | null>(null);

  const initEditor = () => {
    const editorConfig: EditorConfig = {
      holder: "editorjs",
      placeholder: "Let's write a description",
      tools: {},
    };

    const editor = new EditorJS(editorConfig);
    editorInstanceRef.current = editor;
  };

  const contextValue: EditorContextValue = {
    initEditor,
    editorInstanceRef,
  };

  return (
    <EditorContext.Provider value={contextValue}>
      {children}
    </EditorContext.Provider>
  );
};

export default EditorContextProvider;
