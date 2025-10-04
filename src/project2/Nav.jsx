import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { FiInstagram } from 'react-icons/fi';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center xl:mx-14  mt-10 xl:mb-10 mb-6 relative">
        {/* LEFT SIDE — Menu icon (mobile) + Logo */}
        <div className="flex items-center gap-4">
          {/* Menu icon: visible only on small screens */}
          <HiMenu
            className="block xl:hidden text-2xl cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <img className="h-5" src="images2/Foodieland..png" alt="Logo" />
        </div>

        {/* CENTER — Menu links (hidden on small screens) */}
        <ul className="hidden xl:flex justify-between items-center gap-x-16">
          {["Home", "Recipes", "Blog", "Contact", "About us"].map((item, id) => (
            <li key={id} className="font-medium list-none cursor-pointer hover:text-sky-500 transition">
              {item}
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE — Social icons */}
        <div className="flex justify-between items-center gap-x-6">
          <FaFacebookF className="size-4 cursor-pointer hover:text-blue-600 transition" />
          <FaTwitter className="size-4 cursor-pointer hover:text-sky-400 transition" />
          <FiInstagram className="size-4 cursor-pointer hover:text-pink-500 transition" />
        </div>
      </nav>

      {/* Divider */}
      <hr className="border border-gray-200" />

      {/* MOBILE MENU (shown when toggle is true) */}
      {toggle && (
        <div className="xl:hidden bg-white shadow-md mt-2 p-4 rounded-lg mx-6 ">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            {["Home", "Recipes", "Blog", "Contact", "About us"].map((item, id) => (
              <li
                key={id}
                className="cursor-pointer hover:text-sky-500 transition"
                onClick={() => setToggle(false)} // Close menu on click
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Nav;
