import React, { useContext } from 'react';
import './Skills.css';
import SoftwareSkill from '../../components/softwareSkills/SoftwareSkill';
import { illustration, skills } from '../../portfolio';
import { Fade } from 'react-reveal';
import light from "../../assets/images/programmer.svg"
import dark from "../../assets/images/programmer.svg"
import DisplayLottie from '../../components/displayLottie/DisplayLottie';
import StyleContext from '../../contexts/StyleContext';

export default function Skills() {
  const { isDark } = useContext(StyleContext);
  if (!skills.display) {
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
                  <DisplayLottie animationData={isDark ? skill.illustrationDark : skill.illustration} />
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
                <SoftwareSkill softwareSkills={skill.softwareSkills}/>
                <div>
                  {skill.skills.map((skill, j) => {
                    return (
                      <p
                        key={j}
                        className={
                          isDark
                            ? 'dark-mode subTitle skills-text'
                            : 'subTitle skills-text'
                        }
                      >
                        {skill}
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
