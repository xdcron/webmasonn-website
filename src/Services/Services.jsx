import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function Services({ children, title, img, alt }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const titleControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start({ opacity: 1, x: 0 });
      titleControls.start({ opacity: 1, x: 0 });
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="w-full flex flex-col md:flex-row  justify-between gap-12 "
    >
      <div className=" flex w-full items-center justify-center ">
        <figure>
          <motion.img
            initial={{ opacity: 0, x: -500 }}
            animate={mainControls}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="min-w-[500px] h-[240px] sm:h-[400px] object-cover rounded-lg "
            src={img}
            alt={alt}
          />
        </figure>
      </div>
      <div className="grid place-content-center gap-9">
        <motion.h3
          initial={{ opacity: 0, x: 500 }}
          animate={titleControls}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="text-center text-[1.2rem] sm:text-[1.5rem] font-bold text-secondary"
        >
          {title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, x: 500 }}
          animate={titleControls}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="text-center text-[0.8rem] sm:text-[1rem]"
        >
          {children}
        </motion.p>
      </div>
    </div>
  );
}

export default Services;
