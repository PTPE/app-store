import { createPortal } from "react-dom";

export default function Loading() {
  return createPortal(
    <div className="fixed flex items-center justify-center w-screen h-screen backdrop-blur-xs">
      <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
    </div>,
    document.body
  );
}
