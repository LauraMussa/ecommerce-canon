import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className=" text-blue-50 min-h-screen bg-[url('/images/NotFound.png')] bg-center bg-cover bg-no-repeat">
      <div className="flex flex-col items-center justify-center h-screen">
        <span className="text-3xl ">404</span>
        <h2 className="text-[8rem] font-bold">Page not found</h2>
        <p className="mb-8 text-xl tracking-wider font-bold text-gray-300/70">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link
          href="/"
          className="cursor-pointer hover:scale-105 transform duration-300 active:underline"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
