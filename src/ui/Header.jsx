import Button from "./Button";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className=" h-screen bg-header">
      <Navbar />
      <div className="h-full flex items-center justify-center flex-col px-8 sm:px-32 md:px-60 pb-20 z-10">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="text-[1.7rem] sm:text-[2.5rem] md:text-[3.5rem] text-center mb-7"
        >
          We Build Beautiful and Dynamic Web Applications
        </motion.h1>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className=" bg-green-500 self-center font-medium rounded-md px-3 py-2 sm:px-4 sm:py-3 hover:bg-transparent hover:border hover:border-secondary "
        >
          Get a Quote
        </motion.button>
      </div>
    </header>
  );
}

export default Header;
