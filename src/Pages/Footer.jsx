import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
const  Footer=()=> {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gray-900 text-white px-6 py-10 mt-16 rounded-t-3xl shadow-inner"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        <div>
          <h2 className="text-xl font-bold mb-3">MyPortfolio</h2>
          <p className="text-gray-400">
            Creating engaging, functional and clean UIs with MERN stack.
          </p>
        </div>

        <div>
  <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
  <ul className="flex flex-row gap-2 md:flex-col md:space-y-2 text-gray-400">
    <li><a href="#" className="hover:text-white">Home</a></li>
    <li><a href="#Projects" className="hover:text-white">Projects</a></li>
    <li><a href="#Skills" className="hover:text-white">Skills</a></li>
    <li><a href="#Contacts" className="hover:text-white">Contact</a></li>
  </ul>
</div>


        <div>
          <h3 className="text-lg font-semibold mb-3">Connect with me</h3>
          <div className="flex items-center space-x-4 text-gray-400">
            <a href="https://github.com/suman9709" target="_blank" rel="noreferrer" className="hover:text-white text-xl"><FaGithub /></a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="hover:text-white text-xl"><FaLinkedin /></a>
            <a href="mailto:Suman.k9709@gmail.com" className="hover:text-white text-xl"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 text-xs">
        © {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </div>
    </motion.footer>
  );
}


export default Footer