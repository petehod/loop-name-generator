import React from "react";

const MainContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-20 bg-dark text-white p-2 rounded-lg flex flex-col  items-center justify-center">
      {children}
    </div>
  );
};

export default MainContentWrapper;
