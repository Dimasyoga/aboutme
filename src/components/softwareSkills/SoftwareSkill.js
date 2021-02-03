import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
// import { skillsSection } from "../../portfolio";

export default function SoftwareSkill({softwareSkills}) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {softwareSkills.map((skill,i) => {
            return (
              <li key={i} className="software-skill-inline" name={skill.skillName}>
                <a
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={skill.fontIcon}></img>
                  {/* <p>{skill.skillName}</p> */}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
