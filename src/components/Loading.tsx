"use client";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <ClipLoader color="#2c2c2c" size={100} />
    </div>
  );
};

export default Loading;
