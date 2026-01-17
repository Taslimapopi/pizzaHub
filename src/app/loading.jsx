
import React from "react";
import Logo from "../../../hero-kidz/src/app/components/layout/Logo";

const loading = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center gap-5">
      <h2 className="text-5xl font-bold animate-pulse">Loading</h2>
      <div className="animate-ping">
        <Logo></Logo>
      </div>
    </div>
  );
};

export default loading;