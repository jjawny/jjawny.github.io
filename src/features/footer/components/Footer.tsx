import React from "react";

const Footer: React.FC = () => {
  const thisYear = new Date().getFullYear();

  return (
    <footer className="pointer-events-none fixed bottom-0 left-0 z-50 flex w-full select-none items-center justify-between px-4 py-2 font-syne font-extrabold text-stone-700">
      <p className="flex-1"></p>
      <p className="flex-1 text-center text-[0.75rem]">&copy; {thisYear} johnnymadigan</p>
      <div className="flex flex-1 flex-col text-end">
        <p className="text-[0.5rem]">
          {import.meta.env.VITE_ENVIRONMENT || "johnny broke something don't look here 🤦"}
        </p>
        <p className="text-[0.5rem]">build {import.meta.env.VITE_BUILD_NUMBER || "n/a"}</p>
      </div>
    </footer>
  );
};

export default Footer;
