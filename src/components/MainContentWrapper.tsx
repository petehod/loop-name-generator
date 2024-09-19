import React from "react";

const MainContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-26 rounded-lg flex flex-col bg-white items-center justify-center">
      {children}
    </div>
  );
};

export default MainContentWrapper;
