import heroPic from "../assets/hero-pic.png";
import demoBg from "../assets/bg-hero.jpg";
import { motion as m } from "framer-motion";
import { slideVariantsLeft, stompVariants } from "../utilities/motionVariants";

export const Hero = () => {
  const data = {
    first: "Adrian",
    last: "Parco",
    description: `Web development is not only my profession, but also my passion. I
    strive to create beautiful and user-friendly websites that not only
    look great, but also solve real-world problems and make a positive
    impact in people's lives.`,
  };
  return (
    <div className="h-screen">
      <div className="hidden md:block">
        <img
          src={demoBg}
          alt=""
          className="h-screen w-full md:absolute md:opacity-50 md:-z-40"
        />
      </div>
      <div className="relative flex flex-col items-center justify-evenly md:flex-row">
        <m.div
          variants={slideVariantsLeft}
          initial="initial"
          animate="animate"
          transition={{ duration: 2 }}
          className="text-center mt-14"
        >
          <h1 className="hero-brand text-xl md:text-2xl lg:text-4xl">
            Hi, I'm{" "}
            <span className="text-blue-900 text-2xl lg:text-4xl">{"<"}</span>{" "}
            {data.first}{" "}
            <span className="bg-blue-900 text-white px-2 rounded-md">
              {data.last}
            </span>
            <span className="text-blue-900 text-2xl md:text-4xl">{"/>"}</span>
          </h1>
          <p className="w-72 text-justify mt-5 indent-10  p-5 rounded-lg text-blue-900 md:text-white md:bg-blue-900 lg:text-xl lg:p-5 lg:w-96">
            {data.description}
          </p>
        </m.div>
        <div>
          <m.img
            src={heroPic}
            alt=""
            className="w-96"
            variants={stompVariants}
            initial="start"
            animate="stomp"
            whileHover="jump"
            style={{ fontSize: "4rem", cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};
