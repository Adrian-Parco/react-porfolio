import kodeGo from "../assets/kodeGo.png";
import newEra from "../assets/newEra.png";
import { motion as m } from "framer-motion";
import {
  slideVariantsLeft,
  slideVariantsRight,
} from "../utilities/motionVariants";

export const About = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-xl bg-blue-900 font-semibold text-white p-3 rounded-full">
        About Me
      </h1>
      <div className="flex gap-5 mt-10">
        <m.img
          src={newEra}
          alt=""
          className="w-24 rounded-full p-2"
          variants={slideVariantsLeft}
          initial="initial"
          animate="animate"
          transition={{ duration: 1 }}
        />
        <m.img
          src={kodeGo}
          alt=""
          className="w-24 rounded-full p-2"
          variants={slideVariantsRight}
          initial="initial"
          animate="animate"
          transition={{ duration: 1 }}
        />
      </div>
      <h2 className="text-center p-12 text-blue-900">
        I am currently pursuing a degree in Computer Science at New Era
        University, and I am a graduate of the KodeGo Bootcamp's Full Stack Web
        Development program.
      </h2>
    </div>
  );
};
