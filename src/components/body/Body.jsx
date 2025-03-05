import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { backgroundimage, companies } from "../../assets/index";
import { IoCameraOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { serviceCards } from "../../constants/ServiceCard";
import { contactDetails } from "../../constants/contactDetails";
import {
  containerVariants,
  itemVariants,
  heroVariants,
} from "../../utils/motionUtils";

const Body = () => {
  const heroRef = useRef(null);
  const companyRef = useRef(null);
  const serviceRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.1 });
  const companyInView = useInView(companyRef, { once: true, amount: 0.1 });
  const serviceInView = useInView(serviceRef, { once: true, amount: 0.1 });

  return (
    <motion.div
      initial="hidden"
      animate={heroInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="px-4 sm:px-6 md:px-10 lg:px-20"
    >
      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        variants={heroVariants}
        style={{
          backgroundImage: `url(${backgroundimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.7,
        }}
        className="text-white flex flex-col md:flex-row h-auto md:h-[50vh] mt-4"
      >
        {/* Left column (text) */}
        <motion.div
          variants={itemVariants}
          className="w-full md:w-[60%] flex flex-col gap-4 md:gap-6 p-4 justify-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-7xl text-slate-800 text-center lg:text-right"
          >
            PHOTOGRAPHY STUDIO
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-4xl text-white text-center lg:text-right"
          >
            SINCE 2009
          </motion.p>

          {/* Search Input */}
          <motion.div variants={itemVariants} className="relative w-full">
            <input
              type="text"
              placeholder="Search by Products"
              className="w-full bg-slate-100 p-2 text-gray-800 pl-12 pr-10 rounded-md text-sm md:text-base"
            />
            <IoCameraOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-between gap-2"
          >
            {["Printing", "Farming", "Designing"].map((action, index) => (
              <motion.p
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={index}
                className="bg-red-800 text-[#FFC300] p-2 text-sm md:text-xl rounded-xl w-full sm:w-[30%] text-center cursor-pointer transition-all hover:bg-red-900"
              >
                {action}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

        {/* Right column (Book Now) */}
        <motion.div
          variants={itemVariants}
          className="w-full md:w-[40%] flex justify-center items-center p-4"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-full max-w-[24rem] rounded-xl overflow-hidden shadow-lg"
            style={{
              backgroundImage: `url(${backgroundimage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.7,
            }}
          >
            <p className="bg-[#FFC300] text-red-800 font-semibold text-xl md:text-2xl py-2 text-center">
              BOOK NOW
            </p>
            <div className="px-4 py-4 space-y-3 bg-black bg-opacity-50">
              {contactDetails.map((contact, index) => (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  key={index}
                  className="flex items-center space-x-4 rounded-lg p-2"
                  aria-label={contact.label}
                >
                  <contact.icon className="h-8 w-8 rounded-full bg-red-800 text-white p-1.5" />
                  <span className="text-white text-sm md:text-base truncate">
                    {contact.text}
                  </span>
                </motion.div>
              ))}
            </div>
            <div className="bg-[#FFC300] h-8 w-full"></div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Footer Container */}
      <motion.div
        ref={companyRef}
        variants={containerVariants}
        className="footer-container flex flex-col gap-8 pt-4 items-center lg:flex-row"
        animate={companyInView ? "visible" : "hidden"}
      >
        {/* Logo + Company Info */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center sm:w-full w-[70%] md:w-[30%] lg:w-[20%]"
        >
          <h1 className="text-sky-500 font-bold text-xl text-center lg:text-left">
            Group of Company
          </h1>
          <motion.img
            variants={itemVariants}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              companyInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.5 }}
            src={companies}
            alt="Company Logo"
          />
        </motion.div>

        {/* Service Cards */}
        <motion.div
          ref={serviceRef}
          variants={containerVariants}
          animate={serviceInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full"
        >
          {serviceCards.map((item, index) => (
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-200 rounded-xl p-1"
              key={index}
            >
              <h1 className="text-xl font-bold text-center text-red-800 bg-[#FFC300] mt-2 rounded-t-xl p-2">
                {item.title}
              </h1>
              <p className="text-sm text-center">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Body;
