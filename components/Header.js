import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header class="bg-white dark:bg-gray-800 shadow-lg">
      <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <Link
          href="/"
          class="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
        >
          Home
        </Link>

        <Link
          href={"/todos"}
          class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          My Todolist
        </Link>

        <Link
          href="/Contactus"
          class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Header;
