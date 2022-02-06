import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";
import { AiFillGithub } from "react-icons/ai";
import { VscGlobe } from "react-icons/vsc";

export default function ProjectCard({ repo, theme }) {
  console.log(theme);
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: "pointer",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          {...styles}
          key={repo.id}
          // onClick={() => openRepoinNewTab(repo.url)}
          style={{ backgroundColor: theme.projectCard }}
        >
          <div className="repo-name-div mb-2">
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
            <div className="row mr-4">
              <AiFillGithub
                size="25px"
                className="project-button"
                onClick={() => openRepoinNewTab(repo.url)}
                color={
                  theme.name == "light" ? theme.lightIcon : theme.accentColor
                }
              />
              <VscGlobe
                className="project-button ml-4"
                onClick={() => openRepoinNewTab(repo.visit)}
                size="25px"
                color={
                  theme.name == "light" ? theme.lightIcon : theme.accentColor
                }
              />
            </div>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
          <div className="repo-details">
            <ProjectLanguages logos={repo.languages} />
          </div>
        </div>
      </Fade>
    </div>
  );
}
