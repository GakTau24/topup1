"use client"
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="bg-white p-5 shadow-xl">
      <div className="container mx-auto flex items-center justify-between text-xl max-md:text-lg">
        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
        >
          <Link
            href={"/"}
            className="text-slate-900 font-bold max-md:font-medium md:text-2xl"
          >
            <span>Reyvin</span> <span className=" text-sky-400">Store</span>
          </Link>
        </motion.div>
        <div className="flex items-center max-md:gap-2 md:gap-5">
          <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
          >
          <Link href={"/"} className="text-sky-400 mr-4 font-semibold hover:text-sky-600">
            Home
          </Link>
          </motion.div>
          <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
          >
          <Link href={"/contact"} className="text-sky-400 mr-4 font-semibold hover:text-sky-600">
            Contact
          </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}