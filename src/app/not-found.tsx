import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="bg-secondary flex flex-col justify-center h-screen items-center font-bold text-black text-center">
      <h1 className="text-5xl font-montserrat">404 | PAGE NOT FOUND</h1>
      <p className="py-6 text-xl">
        Sorry, the page you requested cannot be found, Please navigate back to
        the{" "}
        <Link href="/" className="block underline">
          Home Page
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
