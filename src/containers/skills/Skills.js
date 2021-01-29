import React, { useContext } from 'react';
import './Skills.css';
import SoftwareSkill from '../../components/softwareSkills/SoftwareSkill';
import { illustration, skillsSection, skills } from '../../portfolio';
import { Fade } from 'react-reveal';
import light from "../../assets/images/drone-animation-light.gif"
import dark from "../../assets/images/drone-animation-dark.gif"
import DisplayLottie from '../../components/displayLottie/DisplayLottie';
import StyleContext from '../../contexts/StyleContext';

export default function Skills() {
  const { isDark } = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? 'dark-mode main' : 'main'} id="skills">
      {skills.data.map((skill, i) => {
        return (
          <div className="skills-main-div" key={i}>
            <Fade left duration={1000}>
              <div className="skills-image-div">
                {illustration.animated ? (
                  <DisplayLottie animationData={skill.illustration} />
                ) : (
                  <img
                    alt="Man Working"
                    src={isDark ? dark : light}
                  ></img>
                )}
              </div>
            </Fade>
            <Fade right duration={1000}>
              <div className="skills-text-div">
                <h1
                  className={isDark ? 'dark-mode skills-heading' : 'skills-heading'}
                >
                  {skill.title}{' '}
                </h1>
                <SoftwareSkill />
                <div>
                  {skill.skills.map((skills, j) => {
                    return (
                      <p
                        key={j}
                        className={
                          isDark
                            ? 'dark-mode subTitle skills-text'
                            : 'subTitle skills-text'
                        }
                      >
                        {skills}
                      </p>
                    );
                  })}
                </div>
              </div>
            </Fade>
          </div>
        );
      })}
    </div>
  );
}
