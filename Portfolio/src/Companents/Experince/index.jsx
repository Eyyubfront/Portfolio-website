import { Container } from "@mui/material";
import jedacademy from "../../assets/Experience/jetacademy.jpg";
import smart from "../../assets/Experience/smart.jpg";
import guys from "../../assets/Experience/guys.jpg";
import { useState } from 'react';
const experienceData = [
  {
    image: jedacademy,
    role: "Intern • Frontend Developer",
    company: "JET Academy",
    period: "07.17.2023-10.25.2023",
    description: `I would like to share this experience with you. After completing the 5 month course, I decided to join the front-end developer internship program offered by the course. Here I wanted to show my passion and interest in this field by developing myself by developing real projects with html5 and css3. Most importantly, it helped me increase my experience, which was very important to me. I also increased my experience by participating in a hackathon competition. I began to actively work in a team to apply what I learned. I am very happy to see results in these efforts that I continue to do my best and it strengthens my passion in this field even more.`,
    skills: ["API", "Problem Solving", "Strong Search", "Game Make", "Backend Service", "Group Project"],
  },
  {
    image: guys,
    role: "Startup • Frontend Developer",
    company: "Guys Group",
    period: "May 2024 - Present",
    description: "I am currently working as a Frontend Developer at a startup called Guys Group. Here we work as a team and try to come up with interesting projects.",
    skills: ["React.js", "HTML", "CSS", "SCSS", "JavaScript", "Branch", "REST API", "Problem Solving", "Strong Search", "Game Make", "Backend Service", "Group Project"],
  },
  {
    image: smart,
    role: "Startup • Frontend Developer",
    company: "Smart-Biznes MMC",
    period: "May 2024 - Present",
    description: "I am currently working as a Frontend Developer at a startup called Smart-biznes. Here we work as a team and try to come up with interesting projects. The main goal of our team is for our property owners to easily access their information.",
    skills: ["React.js", "HTML", "CSS", "SCSS", "JavaScript", "Branch", "REST API", "Problem Solving", "Strong Search", "Game Make", "Backend Service", "Group Project"],
  },
];

const Experience = () => {
  const [readMoreStates, setReadMoreStates] = useState(
    experienceData.map(() => false)
  );

  const toggleReadMore = (index) => {
    setReadMoreStates((prevState) =>
      prevState.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div id="experience">
      <Container>
        <div className="experience__container">
          <div className="experience__top">
            <h2>Experience</h2>
          </div>

          <div className="experience__allcard">
            {experienceData.map((experience, index) => (
              <div data-aos="zoom-out-right" key={index}>
                <div className="experiencelinecards">
                  <div className="experience__carline">
                    <div className="border__card"></div>
                    <div className="card__image">
                      <img
                        className="cardsimage"
                        src={experience.image}
                        alt={experience.company}
                      />
                    </div>
                    <div className="border__card"></div>
                  </div>
                  <div className="experience__cards">
                    <div className="experience__jetcards" >
                      <div className="jetcard">
                        <div className="experience__cardtop">
                          <img
                            className="cardsimagetop"
                            src={experience.image}
                            alt={experience.company}
                          />
                          <div className="experience__cardleft">
                            <h2>{experience.role}</h2>
                            <p>{experience.company}</p>
                            <p>{experience.period}</p>
                          </div>
                        </div>
                        <p className="experience__text">
                          {readMoreStates[index]
                            ? experience.description
                            : `${experience.description.substring(0, 200)}...`}
                          <span
                            onClick={() => toggleReadMore(index)}
                            className="read-more-btn"
                          >
                            {readMoreStates[index] ? "Show Less" : "Read More"}
                          </span>
                        </p>
                        <h2 className="cardskils">Skills:</h2>
                        <div className="experience__skils">
                          {experience.skills.map((skill, skillIndex) => (
                            <p className="skilscolor" key={skillIndex}>
                              {skill}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Experience;
