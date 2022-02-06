import React, {useState} from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Fade } from "react-reveal";
import { projectsHeader, projects } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import { style } from "glamor";
import { Button } from "react-bootstrap";

function Projects(props) {
  const theme = props.theme;
  const[see, setSee] = useState(false)
  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="projects-main" id="projects">
      {/* <Header theme={theme} setTheme={props.setTheme} />s */}
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="repo-cards-div-main">
        {projects.data.map((repo, idx) => {
          if (idx < 3) return <ProjectCard repo={repo} theme={theme} />;
        })}
      </div>
      <p className="mt-5">
        {/* <button
          class="btn btn-primary general-btn p-2"
          type="button"
          data-toggle="collapse"
          data-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Button with data-target
        </button> */}
        <Button
          className="btn"
          data-toggle="collapse"
          data-target="#collapseExample"
          variant="outline-primary"
          style={{ color: "#eb6559" }}
          onClick={()=>setSee(!see)}
        >
          {(!see) ? "See More" : "See Less"}
        </Button>
      </p>
      <div class="collapse" id="collapseExample">
        <div
          class="card card-body"
          style={{ backgroundColor: `${theme.body}` }}
        >
          <div className="repo-cards-div-main">
            {projects.data.map((repo, idx) => {
              if (idx >= 3) return <ProjectCard repo={repo} theme={theme} />;
            })}
          </div>
          <div className="mt-5">
            <a
              {...styles}
              className="general-btn"
              href="https://github.com/sayantan1821"
              
            >
              More Projects (Github)
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <br />
      <br />
    </div>
  );
}

export default Projects;
