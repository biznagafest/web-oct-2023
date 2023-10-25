import { useState, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Dialog = async ({ children }: Props) => {
  const protocol = import.meta.env.PROD ? "https" : "http";

  const isEnabled = await fetch(
    `${protocol}://${import.meta.env.PUBLIC_VERCEL_URL}/api/is-open.json`,
  )
    .then((res) => res.json())
    .then((res2) => {
      console.log(res2);

      return res2.isOpen;
    });

  const [open, setIsOpen] = useState(true);

  if (!isEnabled || !open) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
      <div className="bg-white p-6 rounded shadow-lg z-50">
        {children}
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Dialog;
