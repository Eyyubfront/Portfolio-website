import coper from "../../assets/Projects/coper.jpg";
import travels from "../../assets/Projects/travell.png";
import texnikamega from "../../assets/Projects/megatexnika.png";
import digital from "../../assets/Projects/digital.png";
import roadmap from "../../assets/Projects/roadmap.png";
import music from "../../assets/Projects/music.jpg";
import movie  from "../../assets/Projects/FI-Movie-ideas-2.png";
import maxresdefault from "../../assets/Projects/calcs.jpg";
import { Container } from "@mui/material";

const projects = [
    {
        image: travels,
        name: "Travel",
        skills: ["HTML", "CSS", "Redux Toolkit", "JAVASCRIPT", "React.js"],
        liveLink: "https://global-travel-aqfd.vercel.app/",
    },
    {
        image: movie,
        name: "Movie",
        skills: ["HTML", "CSS", "Redux Toolkit", "Javascript", "React.js"],
        liveLink: "https://movie-rho-nine.vercel.app/",
    },
    {
        image: texnikamega,
        name: "Mega Texnika",
        skills: ["HTML", "CSS", "AOS", "SWIPER", "Javascript", "React.js"],
        liveLink: "https://mega-texnika-flame.vercel.app/",
    },
   
    {
        image: maxresdefault,
        name: "Calculator-Js",
        skills: ["HTML", "CSS","ALGORITHM","Javascript"],
        liveLink: "https://calculator-simple-tan.vercel.app/",
    },
    {
        image: digital,
        name: "Communicat-E",
        skills: ["HTML",  "SASS/SCSS", "Javascript", "React.js"],
        liveLink: "https://communicat-e.netlify.app/",
    },
    {
        image: roadmap,
        name: "RoadMap",
        skills: ["HTML", "CSS","React","Javascript"],
        liveLink: "https://frontend-3b.vercel.app/",
    },
  
    {
        image: music,
        name: "Music Galery",
        skills: ["HTML", "CSS", "Swiper", "Javascript"],
        liveLink: "https://music-galery-game-sbgr.vercel.app/",
    },
  
    // {
    //     image: coper,
    //     name: "Coper Pro",
    //     skills: ["HTML", "CSS", "AOS", "Swiper", "Javascript", "React.js"],
    //     liveLink: "https://copper-projects-nv9q.vercel.app/",
    // },
];

const Project = () => {
    return (

        <div id="projects">
            <Container>
                <div className="projects__container">
                    <div className="projects__top">
                        <h2>Projects</h2>
                    </div>
            <div data-aos="fade-down-left">
                    <div className="projects__allcard">
                        {projects.map((project, index) => (
                            <div className="project__card" key={index}>
                                <img className="projectimg" src={project.image} alt={project.name} />
                                <h2 className="projectname">{project.name}</h2>
                                <div className="project__skils">
                                    {project.skills.map((skill, skillIndex) => (
                                        <p className="skilscolor" key={skillIndex}>{skill}</p>
                                    ))}
                                </div>
                                <a className="project__live" href={project.liveLink}>
                                    <div>
                                        View Live
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

        </div>
            </Container>
        </div>
    );
};

export default Project;
