import { useEffect } from "react";
import TypeWriterEffect from "react-typewriter-effect";

import { linksName, styles } from "./constants";
import Switcher from "./components/Switcher";
import BackgroundBlob from "./components/background/BackgroundBlob";
import rohitpfp from "./assets/rohitpfp.png";
import "./normal.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={styles.appStyles}>
      <div className={`relative ${styles.flexCenter} min-h-screen`}>
        <BackgroundBlob />

        <div className="absolute top-4 left-4 ">
          <Switcher />
        </div>
        <div className={`min-h-screen flex-col ${styles.flexBetween} z-[2]`}>
          <div className="flex items-center flex-col">
            <div
              data-aos="fade-down"
              className={`${styles.flexCenter} ${styles.glassEffect} ${styles.heroDivStyles}`}
            >
              <div className="mb-4 2xl:mb-8 ">
                <img
                  src={rohitpfp}
                  alt="rohit-pfp"
                  className={styles.heroImage}
                />
              </div>
              <div className="text-center">
                <h1 className="text-xl md:text-2xl lg:text-16 2xl:text-2xl font-rubik mb-[5px] ">
                  Hi, I'm Rohit a
                </h1>
                <span className="text-2xl md:text-[32px] lg:text-[26px] 2xl:text-[32px] font-kanit font-bold">
                  <TypeWriterEffect
                    multiTextLoop="true"
                    startDelay={300}
                    cursorColor="red"
                    multiText={[
                      "Web2 Frontend-Developer",
                      "Fullstack Web3 Developer",
                      "Solidity Developer",
                    ]}
                    multiTextDelay={1000}
                    typeSpeed={40}
                  />
                </span>
              </div>
            </div>
            <div className="flex flex-col ">
              {linksName.map((link, i) => (
                <div
                  key={i}
                  data-aos={link.direction}
                  data-aos-delay={link.delay}
                  className={`hoverEffect ${styles.linksStyles} ${styles.glassEffect} before:bg-gradient-to-r ${link.bg} hover:text-black `}
                >
                  <a href="" className="uppercase ">
                    <div className="flex items-center gap-4">
                      <img
                        src={link.icon}
                        alt={link.name}
                        className={styles.linkImageWidthHeight}
                      />
                      <div className={styles.linkText}>{link.name}</div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.copyrightStyles}>
            <p>All right reserved @2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// z-2
