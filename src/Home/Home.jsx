import Services from "../Services/Services";
import ServicesSEO from "../Services/ServicesSEO";
import { motion, useInView, useAnimation, easeIn } from "framer-motion";
import { useEffect, useRef } from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start({ opacity: 1 });
      console.log(isInView);
    }
  }, [isInView]);

  return (
    <>
      <Header />
      <main className="py-12 px-9 flex flex-col gap-10">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0 }}
          animate={mainControls}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center text-[1.5rem] sm:text-[2.5rem] text-secondary"
        >
          What I Offer
        </motion.h2>
        <section
          id="services"
          className="flex flex-col gap-20 sm:px-14 overflow-hidden"
        >
          <Services
            title={"Web Development"}
            alt={"web development image"}
            img={
              "https://images.unsplash.com/photo-1590608897129-79da98d15969?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          >
            Welcome to WebMason, where I transform your digital dreams into
            captivating realities. My website development services are tailored
            to suit your unique needs, employing an array of powerful tools such
            as WordPress, HTML, CSS, and JavaScript and React. At WebMason, I go beyond
            the ordinary, incorporating cutting-edge technologies like React to
            craft websites and applications that seamlessly blend aesthetics
            with functionality. Whether you're envisioning a dynamic corporate
            website or an interactive web application, I am dedicated to bringing your vision to life. Elevate
            your online presence with WebMason – where innovation meets
            excellence.
          </Services>

          <ServicesSEO
            title={"Search Engine Optimization (SEO)"}
            alt={"SEO image"}
            img={
              "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1402&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          >
            Welcome to WebMason, your gateway to heightened online visibility
            and success. Unlock the full potential of your digital presence with
            my expert SEO services. At WebMason, I meticulously optimize your
            website, utilizing proven strategies to enhance search engine
            rankings and drive organic traffic. I harnesses the
            power of SEO tools and techniques, ensuring your business stands out
            in the digital landscape. From comprehensive keyword research to
            on-page and off-page optimization, I employ a strategic approach to
            boost your online presence. Trust WebMason to elevate your search
            engine rankings and pave the way for sustained success. With me,
            your journey to SEO excellence begins.
          </ServicesSEO>
          <Services
            title={"Email Hosting"}
            alt={"digital marketing image"}
            img={
              "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          >
            Welcome to WebMason, your gateway to heightened online visibility for reliable and secure email hosting solutions!  Take your business email to the next level with our robust plans designed to keep you connected and in control. At WebMason, I understand the importance of seamless email communication for business success. I provide top-notch email hosting services to ensure your emails are always up and running, secure, and accessible.  Let us be the foundation of your professional communication, empowering you to focus on what matters most – running your business.  Partner with WebMason and experience the confidence that comes with a reliable email hosting provider.
          </Services>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
