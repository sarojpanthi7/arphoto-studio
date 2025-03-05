import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import CartButton from "../../../utils/CartButton";
import { logo } from "../../../assets";

const MobileNavbar = ({ isMobileMenuOpen, setIsMobileMenuOpen, navlists }) => {
  // Sidebar animation variants
  const sidebarVariants = {
    hidden: { x: "100%", transition: { type: "tween", duration: 0.3 } },
    visible: { x: 0, transition: { type: "tween", duration: 0.3 } },
  };

  return (
    <>
      {/* Mobile Navbar Header */}
      <div className="md:hidden flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10 w-auto max-w-[150px]" />
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-red-800 text-3xl p-2"
        >
          <CiMenuBurger />
        </button>
      </div>

      {/* Sidebar Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={sidebarVariants}
            className="fixed top-0 right-0 w-3/4 h-full bg-white z-50 shadow-lg flex flex-col justify-between"
          >
            {/* Close Button */}
            <div className="p-6">
              <div className="flex justify-end">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-red-800 text-3xl"
                >
                  <IoIosClose />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="space-y-4 mt-6">
                {navlists.map((navList, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={navList.route}
                      className="block bg-[#FFC300] text-red-800 p-3 rounded-xl text-center hover:bg-[#FED700] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {navList.title}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Cart Button */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navlists.length * 0.1 }}
                className="mt-10"
              >
                <Link to="/cart" onClick={() => setIsMobileMenuOpen(false)}>
                  <CartButton
                    itemCount={1}
                    totalPrice={500}
                    className="w-full"
                  />
                </Link>
              </motion.div>
            </div>

            {/* Sign In & Sign Up Buttons */}
            <div className="p-6 bg-gray-100 w-full flex flex-col gap-2">
              <button className="bg-red-800 text-white p-2 rounded-xl text-center hover:bg-red-900 transition-colors">
                Sign In
              </button>
              <button className="bg-[#FFC300] text-red-800 p-2 rounded-xl text-center hover:bg-[#FED700] transition-colors">
                Sign Up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavbar;
