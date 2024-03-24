import Services from "../Services/Services";
import ServicesSEO from "../Services/ServicesSEO";
import { motion, useInView, useAnimation, easeIn } from "framer-motion";
import { useEffect, useRef } from "react";
import Header from "../ui/Header";

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
          What We Offer
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
            Welcome to WebMason, where we transform your digital dreams into
            captivating realities. Our website development services are tailored
            to suit your unique needs, employing an array of powerful tools such
            as WordPress, HTML, CSS, and JavaScript. At WebMason, we go beyond
            the ordinary, incorporating cutting-edge technologies like React to
            craft websites and applications that seamlessly blend aesthetics
            with functionality. Whether you're envisioning a dynamic corporate
            website or an interactive web application, our team of skilled
            developers is dedicated to bringing your vision to life. Elevate
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
            our expert SEO services. At WebMason, we meticulously optimize your
            website, utilizing proven strategies to enhance search engine
            rankings and drive organic traffic. Our dedicated team harnesses the
            power of SEO tools and techniques, ensuring your business stands out
            in the digital landscape. From comprehensive keyword research to
            on-page and off-page optimization, we employ a strategic approach to
            boost your online presence. Trust WebMason to elevate your search
            engine rankings and pave the way for sustained success. With us,
            your journey to SEO excellence begins.
          </ServicesSEO>
          <Services
            title={"Digital Marketing"}
            alt={"digital marketing image"}
            img={
              "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          >
            Welcome to WebMason, where we go beyond just crafting stunning
            websites. Elevate your business with our expert digital marketing
            services, including targeted Google and Facebook Ads. At WebMason,
            we understand the power of strategic advertising to drive traffic
            and boost your online presence. Our team harnesses the capabilities
            of Google and Facebook to deliver impactful campaigns tailored to
            your business goals. Let us be the architects of your digital
            success, ensuring that your brand shines brightly in the vast online
            landscape. Partner with WebMason and watch as your business reaches
            new heights through effective and engaging online advertising.
          </Services>
        </section>
      </main>
    </>
  );
}

export default Home;
