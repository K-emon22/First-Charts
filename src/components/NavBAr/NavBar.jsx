import React, {useState} from "react";
import {GiHamburgerMenu, GiCrossedBones} from "react-icons/gi";
const NavData = [
  {name: "Home", link: "/"},
  {name: "About", link: "/about"},
  {name: "Services", link: "/services"},

  {name: "Blog", link: "/blog"},
];

const NavBar = () => {
  const links = NavData.map((NavSingleData, index) => (
    <ul key={index}>
      <li className="flex justify-center">
        <a href={NavSingleData.link}> {NavSingleData.name}</a>
      </li>
    </ul>
  ));

  const [menu, setMenu] = useState(true);

  return (
    <nav className=" grid grid-cols-3 px-[5%] mb-2 py-2  bg-[rgba(255,255,255,0.8)]">
      <div onClick={() => setMenu(!menu)} className="md:hidden my-auto">
        {menu ? <GiHamburgerMenu /> : <GiCrossedBones />}
      </div>
      <div className="font-bold text-xl my-auto lg:text-5xl   flex justify-center md:justify-start text-red-800 shadow md:shadow-none">
        ArtOfReact
      </div>
      <div className=" my-auto hidden md:block ">
        {
          <div className="flex flex-row gap-5 font-bold justify-center">
            {links}
          </div>
        }
      </div>
      <div className="flex justify-end my-auto">
        <button className="btn btn-primary bg-blue-400 hover:bg-blue-500  text-black hover:text-white  hover:scale-105  transition-transform">
          {" "}
          LogIn
        </button>
      </div>

      <div
        className={`md:hidden absolute transition-all flex flex-col gap-5 mt-5  border px-10 py-5 bg-blue-200 ${
          menu
            ? " -left-50 top-10 duration-500 "
            : " left-0.5 top-10 duration-1000"
        }`}
      >
        {links}
      </div>
    </nav>
  );
};

export default NavBar;
