import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import portfolio_colored_1 from "../assets/portfolio-colored-1.svg";
import twitter from "../assets/twitter.svg";

const linksName = [
  {
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com/SumanRohitK7",
    bg: "from-[#ff5f6d] to-[#ffc371]",
    delay: "700",
    direction: "fade-up-right",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://linkedin.com/in/rohit-kumar-suman",
    bg: "from-[#36d1dc] to-[#5b86e5]",
    delay: "800",
    direction: "fade-up-left",
  },
  {
    name: "Portfolio",
    icon: portfolio_colored_1,
    link: "https://my-portfolio-rohitks7.vercel.app",
    bg: "from-[#ee9ca7] to-[#ffdde1]",
    delay: "900",
    direction: "fade-up-right",
  },
  {
    name: "Github",
    icon: github,
    link: "https://github.com/RohitKS7",
    bg: "from-[#fdfc47] to-[#24fe41]",
    delay: "1000",
    direction: "fade-up-left",
  },
];

const styles = {
  appStyles:
    "overflow-x-hidden min-h-screen bg-[#f1f1f1] dark:bg-main-dark-bg transition-all duration-300 text-black dark:text-white",

  heroDivStyles:
    "flex-col w-fit p-8 rounded-[50px] mb-16 mt-[3rem] lg:mt-8 lg:mb-8 2xl:mt-20 2xl:mb-20",

  heroImage:
    "w-32 h-32 md:w-40 md:h-40 lg:w-32 lg:h-32 2xl:w-40 2xl:h-40 object-fill rounded-xl",

  linksStyles:
    "py-2 lg:py-[0.3rem] 2xl:py-2 px-20 md:px-[13rem] lg:px-80 mb-8 lg:mb-[1.2rem] 2xl:mb-8 rounded-[10px] lg:rounded-[5px] 2xl:rounded-[10px] cursor-pointer",

  linkImageWidthHeight:
    "w-[40px] h-[40px] md:w-[45px] md:h-[45px] lg:w-[30px] lg:h-[30px] 2xl:w-[45px] 2xl:h-[45px]",

  linkText: "md:text-[22px] lg:text-[14px] 2xl:text-[22px]",

  copyrightStyles:
    "mb-8 mt-8 text-center font-rubik md:text-[18px] lg:text-[12px] 2xl:text-[18px]",

  // glassmorphism
  glassEffect:
    " dark:bg-white bg-opacity-10 bg-black dark:bg-opacity-10 shadow-normal dark:shadow-5xl backdrop-filter backdrop-blur-sm ",

  // common
  flexCenter: "flex items-center justify-center",
  flexBetween: "flex justify-between items-center",
};

export { linksName, styles };
