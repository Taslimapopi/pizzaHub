"use client";
import { FaGoogle } from "react-icons/fa";

export const SocialButtons = () => {
  

  return (
    <div className="flex gap-3 mt-4">
      <button
        
        className="btn btn-outline btn-error flex-1"
      >
        <FaGoogle className="text-lg" />
        Google
      </button>
    </div>
  );
};