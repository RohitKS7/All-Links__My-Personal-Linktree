import TypeWriterEffect from "react-typewriter-effect";
import Tilt from "react-parallax-tilt";

import { linksName, styles } from "./constants";
import Switcher from "./components/Switcher";
import BackgroundBlob from "./components/background/BackgroundBlob";
import rohitpfp from "./assets/rohitpfp.png";
import "./normal.css";

export default function App() {
  return (
    <div className=" min-h-screen bg-[#f1f1f1] dark:bg-main-dark-bg transition-all duration-300 text-black dark:text-white ">
      <div className="relative flex justify-center items-center min-h-screen">
        <BackgroundBlob />

        <div className="absolute top-4 left-4 ">
          <Switcher />
        </div>
        <div className={`min-h-screen flex-col ${styles.flexBetween} z-[2]`}>
          <div className="flex items-center flex-col">
            <Tilt perspective={500} gyroscope={true} className="transform-gpu ">
              <div
                className={`${styles.flexCenter} flex-col w-fit p-8 rounded-[50px] mb-20 mt-20 lg:mt-8 lg:mb-8 2xl:mt-20 2xl:mb-20  dark:bg-white bg-opacity-10 bg-black dark:bg-opacity-10 shadow-normal dark:shadow-5xl backdrop-filter backdrop-blur-sm `}
              >
                <div className="mb-4 2xl:mb-8 ">
                  <img
                    src={rohitpfp}
                    alt="rohit-pfp"
                    className="w-32 h-32 md:w-40 md:h-40 lg:w-32 lg:h-32 2xl:w-40 2xl:h-40 object-fill rounded-xl"
                  />
                </div>
                <div className="text-center">
                  <h1 className="text-xl md:text-2xl lg:text-16 2xl:text-2xl font-rubik mb-[5px] ">
                    Hi, I'm Rohit a
                  </h1>
                  <span className="text-2xl md:text-[32px] lg:text-[26px] 2xl:text-[32px] font-kanit font-bold">
                    <TypeWriterEffect
                      // multiTextLoop="true"
                      startDelay={1000}
                      cursorColor="red"
                      multiText={[
                        "Web2 Frontend-Developer",
                        "Fullstack Web3 Developer",
                        "Solidity Developer",
                        "Content Creator for Fun",
                      ]}
                      multiTextDelay={1500}
                      typeSpeed={40}
                    />
                  </span>
                </div>
              </div>
            </Tilt>
            <div className="flex flex-col ">
              {linksName.map((link, i) => (
                <Tilt className="transform-gpu " key={i}>
                  <div className=" mb-8 lg:mb-[1.2rem] 2xl:mb-8 py-2 lg:py-[0.3rem] 2xl:py-2 px-20 md:px-[13rem] lg:px-80 rounded-[10px] lg:rounded-[5px] 2xl:rounded-[10px] dark:bg-white bg-opacity-10 bg-black dark:bg-opacity-10 shadow-normal dark:shadow-5xl backdrop-filter backdrop-blur-sm ">
                    <a href={link.link} className="uppercase ">
                      <div className="flex items-center gap-4">
                        <img
                          src={link.icon}
                          alt={link.name}
                          className="w-[40px] h-[40px] md:w-[45px] md:h-[45px] lg:w-[30px] lg:h-[30px] 2xl:w-[45px] 2xl:h-[45px]"
                        />
                        <div className="md:text-[22px] lg:text-[14px] 2xl:text-[22px]">
                          {link.name}
                        </div>
                      </div>
                    </a>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
          <div className="mb-8 mt-8 text-center font-rubik md:text-[18px] lg:text-[12px] 2xl:text-[18px]">
            <p>All right reserved @2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// z-2
