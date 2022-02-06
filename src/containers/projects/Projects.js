import React, { useState } from "react";
import "./Project.css";
import ProjectCard from "../../components/ProjectCard/";

export default function Projects() {
  const [repo, _] = useState([]);

  return (
    <div className="main" id="opensource">
      <h1 className="project-title">Open Source Projects</h1>
      <div className="repo-cards-div-main">
        {/* {repo.map((v, i) => {
          return <ProjectCard repo={v} key={v.node.id} />;
        })} */}
        <p>
          <a
            class="btn btn-primary"
            data-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Link with href
          </a>
          <button
            class="btn btn-primary"
            type="button"
            data-toggle="collapse"
            data-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Button with data-target
          </button>
        </p>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
      </div>
      <a className="resume-btn" href="https://github.com/sayantan1821">
        More Projects (Github)
      </a>
    </div>
  );
}
