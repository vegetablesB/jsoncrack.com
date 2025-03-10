import type { OnMount } from "@monaco-editor/react";
import { create } from "zustand";

interface EditorState {
  editorRef: Parameters<OnMount>[0] | null;
  setEditorRef: (editor: Parameters<OnMount>[0]) => void;
}

const useEditor = create<EditorState>(set => ({
  editorRef: null,
  setEditorRef: editor => set({ editorRef: editor }),
}));

export default useEditor;
