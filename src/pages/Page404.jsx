import React from "react";
import { useNavigate } from "react-router-dom";

function Page404() {
  const navigate = useNavigate();

  return (
    <div className="mt-20 min-h-sceen flex items-center">
      <p className="text-red-500 font-medium text-3xl">
        This page does not exist.
      </p>
      <p
        onClick={navigate("/")}
        className='text-sm text-white "bg-green-500 hover:bg-green-400 active:bg-green-300" p-2 rounded-lg cursor-pointer'
      >
        Return Home
      </p>
    </div>
  );
}

export default Page404;
