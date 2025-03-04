import React, { useState, useEffect } from "react";
import { logo } from "../../assets";
import { navlists } from "../../constants/Navlists";
import { categories } from "../../constants/Categories";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import LoadingBar from "react-top-loading-bar";
import { CiShoppingCart } from "react-icons/ci";
import CartButton from "../../utils/CartButton";

const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const location = useLocation(); // hook to track route changes

  const showLoader = () => {
    setProgress(30);
    setTimeout(() => {
      setProgress(100);
    }, 500);
  };

  const navigate = useNavigate();
  const ChangeRoute = (currentRoute) => {
    navigate(currentRoute);
  };

  // Use useEffect to trigger loader when the route changes
  useEffect(() => {
    showLoader(); // Call showLoader when the route changes
  }, [location]); // Dependency array includes `location` to track route changes

  return (
    <div>
      <LoadingBar
        color="#C62828"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <div className="mt-1 flex justify-end px-4 md:px-8 lg:px-20">
        <button className="text-white cursor-pointer z-10 bg-red-800 hover:scale-105 transition-all hover:bg-red-900 p-1 px-2 font-semibold rounded-r-full">
          Sign In
        </button>
        <button className="text-white text-right cursor-pointer bg-[#FFC300] hover:bg-[#FED700] hover:scale-105 transition-all p-1 pl-5 font-semibold rounded-r-full relative right-3">
          Sign Up
        </button>
      </div>
      <Link to={"/"}>
        <div className="px-4 md:px-8 lg:px-20">
          <img src={logo} height={40} width={150} />
        </div>
      </Link>
      <div className="flex gap-6 px-4 h-8 md:px-8 lg:px-20 justify-end">
        <motion.ul className=" flex gap-6">
          {navlists.map((navList, index) => {
            return (
              <Link
                to={navList.route}
                className="bg-[#FFC300] hover:bg-[#FED700] hover:scale-105 transition-all p-0.5 cursor-pointer text-center w-28 text-red-800 rounded-xl"
                key={index}
              >
                {navList.title}
              </Link>
            );
          })}
        </motion.ul>
        <div>
          <Link to={"/cart"}>
            <CartButton itemCount={0} totalPrice={0} />
          </Link>
        </div>
      </div>
      <ul className="bg-red-800 text-[#FFC300] flex gap-12 mt-8 mx-20 p-1">
        {categories.map((item, index) => {
          return (
            <li className="cursor-pointer" key={index}>
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
