import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { profile } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute  sm:inset-0 top-[90px] sm:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row justify-center items-center sm:items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <img
            src={profile}
            alt="profile"
            className=" w-46 h-52 sm:w-64 sm:h-72 rounded-full object-cover border-4 border-[#915EFF]"
          />
        </div>
        <div className=" hidden sm:flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className=" mt-5">
          <h1 className={`${styles.heroHeadText} text-center  sm:text-left text-[26px] xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Moshe Brim</span>
          </h1>
          <p className={`${styles.heroSubText} text-center sm:text-left sm:w-full mt-2 text-white-100`}>
            I develop full-stack applications &nbsp;
            <br className="sm:block hidden" />
            and user interfaces
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
