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
import styledcomponents from "../../assets/Skilss/styledcomponents.png";
import Bootstrap from "../../assets/Skilss/Bootstrap.png";
import branc from "../../assets/Skilss/branc.png";

const skillsData = [
  { src: html, name: "HTML" },
  { src: css, name: "CSS" },
  { src: github, name: "Github" },
  { src: js, name: "Javascript" },
  { src: react, name: "React Js" },
  { src: sass, name: "SASS/SCSS" },
  { src: responsive, name: "Responsive web design" },
  { src: branc, name: "Branches" },
  { src: figma, name: "Figma" },
  { src: materialui, name: "Material UI" },
  { src: styledcomponents, name: "Styled Components" },
  { src: redux, name: "Redux/Redux Toolkit" },
  { src: Bootstrap, name: "Bootstrap" },
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
