import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import portfolio_colored_1 from "../assets/portfolio-colored-1.svg";
import portfolio_colored_2 from "../assets/portfolio-colored-2.svg";
import twitter from "../assets/twitter.svg";

const linksName = [
  {
    name: "Twitter",
    icon: twitter,
    link: "",
    bg: "bg-gradient-to-r from-[#ff5f6d] to-[#ffc371]",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "",
    bg: "bg-gradient-to-r from-[#36d1dc] to-[#5b86e5]",
  },
  {
    name: "Portfolio",
    icon: portfolio_colored_1,
    link: "",
    bg: "bg-gradient-to-r from-[#ee9ca7] to-[#ffdde1]",
  },
  {
    name: "Github",
    icon: github,
    link: "",
    bg: "bg-gradient-to-r from-[#fdfc47] to-[#24fe41]",
  },
];

const styles = {
  // glassmorphism
  glassEffect:
    " dark:bg-white bg-opacity-10 bg-black dark:bg-opacity-10 shadow-normal dark:shadow-5xl backdrop-filter backdrop-blur-sm ",

  // common
  flexCenter: "flex items-center justify-center",
  flexBetween: "flex justify-between items-center",
};

export { linksName, styles };
