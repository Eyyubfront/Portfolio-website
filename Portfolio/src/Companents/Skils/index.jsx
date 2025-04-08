import { Container } from "@mui/material";
import react from "../../assets/Skilss/react.png";
import html from "../../assets/Skilss/html.png";
import css from "../../assets/Skilss/css.png";
import js from "../../assets/Skilss/js.png";
import github from "../../assets/Skilss/github.svg";
import sass from "../../assets/Skilss/sass.png";
import figma from "../../assets/Skilss/figma.png";
import materialui from "../../assets/Skilss/materialui.svg";
import redux from "../../assets/Skilss/redux.svg";
import responsive from "../../assets/Skilss/responsive.svg";
import restapi from "../../assets/Skilss/restapi.svg";
import gitlab from "../../assets/Skilss/gitlab.svg";
import styledcomponents from "../../assets/Skilss/styledcomponents.png";
import Bootstrap from "../../assets/Skilss/Bootstrap.png";
import branc from "../../assets/Skilss/branc.png";
import typescript from "../../assets/Skilss/Typescriptlogo.png";
import tailwind from "../../assets/Skilss/tailwind.png";

const skillsData = [
  { src: html, name: "HTML" },
  { src: css, name: "CSS" },
  { src: sass, name: "SASS/SCSS" },
  { src: tailwind, name: " Tailwind Css" },
  { src: styledcomponents, name: "Styled Components" },
  { src: gitlab, name: "Gitlub" },
  { src: github, name: "Github" },
  { src: js, name: "Javascript" },
  { src: typescript, name: "Typescript" },
  { src: react, name: "React Js" },
  { src: redux, name: "Redux/Redux Toolkit" },
  { src: redux, name: "Redux Thunk" },
  { src: materialui, name: "Material UI" },
  { src: Bootstrap, name: "Bootstrap" },
  { src: responsive, name: "Responsive web design" },
  { src: branc, name: "Branches" },
  { src: figma, name: "Figma" },
  { src: restapi, name: "Rest API", imgClass: "skilscardsphotoapi" },
];

const Skils = () => {
  return (
    <div id="skils">
      <Container>
        <div className="skills__container">
          <div className="skils__top">
            <h2>Skills</h2>
          </div>
          <div className="skills__buttom">
            {skillsData.map((skill, index) => (
              <div key={index} className="card__skils">
                <img
                  className={skill.imgClass ? skill.imgClass : "skilscardsphoto"}
                  src={skill.src}
                  alt={skill.name}
                />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skils;
