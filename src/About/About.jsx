import { FaGithub, FaInstagram } from "react-icons/fa6";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Logo from "../Logo/Logo";
import Link from "../ui/Link";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

function About() {
  //Refs
  const ref = useRef(null);
  const socialRef = useRef(null);
  const contactRef = useRef(null);
  const textRef = useRef(null);
  // In View
  const textInView = useInView(textRef, { once: true });
  const contactInView = useInView(contactRef, { once: true });
  const socialInView = useInView(socialRef, { once: true });
  const isInView = useInView(ref, { once: true });

  // Controls
  const mainControls = useAnimation();
  const secondaryControls = useAnimation();
  const contactControls = useAnimation();
  const socialControls = useAnimation();

  // Effects

  useEffect(() => {
    if (isInView) {
      mainControls.start({ opacity: 1, y: 0 });
      secondaryControls.start({ opacity: 1, x: 0 });
    }
  }, [isInView]);

  useEffect(() => {
    if (textInView) {
      secondaryControls.start({ opacity: 1, x: 0 });
    }
  }, [textInView]);

  useEffect(() => {
    if (textInView) {
      mainControls.start({ opacity: 1, y: 0 });
      secondaryControls.start({ opacity: 1, x: 0 });
    }
  }, [textInView]);

  useEffect(() => {
    if (contactInView) {
      contactControls.start({ opacity: 1, y: 0 });
    }
  }, [contactInView]);

  useEffect(() => {
    if (socialInView) {
      socialControls.start({ opacity: 1, y: 0 });
    }
  }, [socialInView]);

  return (
    <>
      <header className="h-screen about-me flex justify-center items-center ">
      <Navbar />

        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="text-[1.7rem] sm:text-[2.5rem] md:text-[3.5rem] text-center place-self-center"
        >
          About
        </motion.h1>
      </header>
      <main className="flex flex-col gap-12 md:flex-row min-h-screen px-12 py-12 overflow-hidden">
        <div className="grid place-content-center gap-6 ">
          <div>
            <motion.h2 className=" flex gap-3 text-[2.6rem] font-bold">
              Hey, I'm{" "}
              <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={mainControls}
                transition={{
                  duration: 1,
                  delay: 0.5,
                }}
              >
                Caleb
              </motion.div>
            </motion.h2>
            <p className=" font-medium flex gap-2">
              I'm a{" "}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={mainControls}
                transition={{
                  duration: 1,
                  delay: 0.5,
                }}
                className="text-secondary"
              >
                Web Developer
              </motion.div>
            </p>
          </div>

          <motion.p
            ref={textRef}
            initial={{ opacity: 0, x: 400 }}
            animate={secondaryControls}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
          >
            I am a self-taught web developer based in Windhoek, Namibia. My journey
            in the tech world is all about turning passion into a fulfilling
            career. I find joy in crafting websites and diving into the
            intricacies of coding. It's not just a job; it's a genuine love for
            the creative process behind every project. Join me as I navigate the
            ever-evolving landscape of web development, aiming to make a
            meaningful impact in the digital realm.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={contactControls}
            transition={{
              duration: 0.8,
              delay: 1,
            }}
            ref={contactRef}
          >
            <p>
              Contact me at:{" "}
              <a
                href="info@webmasonn.com"
                className="text-secondary"
              >
                info@webmasonn.com
              </a>
            </p>
            <p>
              Call me at:{" "}
              <a
                href="tel:+264818710474"
                className="text-secondary"
              >
                +264 81 871 0474
              </a>
            </p>
          </motion.div>
          <div ref={socialRef} className="flex gap-3">
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              animate={socialControls}
              transition={{
                duration: 0.8,
                delay: 1,
              }}
              href="https://www.instagram.com/omfgwork_/"
            >
              <FaInstagram size={26} color="#6CDE7B" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              animate={socialControls}
              transition={{
                duration: 0.8,
                delay: 1.4,
              }}
              href="https://github.com/xdcron"
            >
              <FaGithub size={26} color="#6CDE7B" />
            </motion.a>
          </div>
        </div>

        <figure className="grid w-full  place-content-center order-[-1]">
          <motion.img
            ref={ref}
            initial={{ opacity: 0, y: 200 }}
            animate={mainControls}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className=" w-[350px] sm:min-w-[470px] h-[300px] sm:h-[500px] object-cover object-top rounded-md"
            src="img-1.jpg"
            alt="Caleb holding flowers"
          />
        </figure>
      </main>
      <Footer />
    </>
  );
}

export default About;
