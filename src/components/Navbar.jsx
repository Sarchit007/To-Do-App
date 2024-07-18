import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-blue-500 text-white">
      <div className="logo">
        <span className="font-bold text-xl mx-9">MyTask</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className="cursor-pointer hover:font-bold transition-all duration-100">
          Home
        </li>
        <li className="cursor-pointer hover:font-bold transition-all duration-100">
          Your Tasks
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
