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
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "",
  },
  {
    name: "Portfolio",
    icon: portfolio_colored_1,
    // icon: portfolio_colored_2,
    link: "",
  },
  {
    name: "Github",
    icon: github,
    link: "",
  },
];

const styles = {
  // glassmorphism
  glassEffect:
    "bg-slate-800 dark:bg-slate-500 backdrop-filter backdrop-blur-lg bg-opacity-10",

  // common
  flexCenter: "flex items-center justify-center",
  flexBetween: "flex justify-between items-center",
};

export { linksName, styles };
