import React from "react";
import { event as gaEvent } from "nextjs-google-analytics";
import { IoCodeSlashOutline } from "react-icons/io5";
import useEditor from "../../../store/useEditor";
import { StyledToolElement } from "./styles";

export const BeautifyButton = () => {
  const editorRef = useEditor(state => state.editorRef);

  const handleBeautify = () => {
    if (editorRef) {
      editorRef.getAction("editor.action.formatDocument")?.run();
      gaEvent("beautify_document");
    }
  };

  return (
    <StyledToolElement title="Beautify" onClick={handleBeautify}>
      <IoCodeSlashOutline size="18" />
    </StyledToolElement>
  );
};
