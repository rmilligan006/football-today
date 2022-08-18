import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <>
      <div className="sticky top-0 z-50 w-full flex justify-between items-center p-4 bg-[#193498] text-white ">
        <h1 className="text-3xl font-serif ">FootBall Today</h1>
        <div>
          <ul className="hidden md:flex">
            <li className="m-2 font-serif">
              <Link to="/">Home</Link>
            </li>
            <li className="m-2 font-serif">
              <Link to="/Standings">Standings</Link>
            </li>
            <li className="m-2 font-serif">
              <Link to="/Scores">Upcoming Games</Link>
            </li>
          </ul>
        </div>
        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <AiOutlineMenu /> : <AiOutlineClose />}
        </div>
        {/* Mobile Menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#193498] flex flex-col justify-center items-center transition-all ease-in delay-75 "
          }
        >
          <h1 className="text-5xl font-serif pb-10">FootBall Today</h1>
          <li className="m-2 font-serif text-3xl">
            <Link onClick={handleClick} to="/">
              Home
            </Link>
          </li>
          <li className="m-2 font-serif text-3xl">
            <Link onClick={handleClick} to="/Standings">
              Standings
            </Link>
          </li>
          <li className="m-2 font-serif text-3xl">
            <Link onClick={handleClick} to="/News">
              Upcoming games
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
