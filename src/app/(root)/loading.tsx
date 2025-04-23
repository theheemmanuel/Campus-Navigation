import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center text-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#3A2D18]"></div>
    </div>
  );
};

export default Loading;
