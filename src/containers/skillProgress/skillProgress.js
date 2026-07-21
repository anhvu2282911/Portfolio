import React, {useContext} from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function StackProgress() {
  const {isDark} = useContext(StyleContext);
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              SKILLS
            </h1>
            <div className={`skills-table ${isDark ? "dark-mode" : ""}`}>
              {techStack.experience.map((exp, i) => {
                return (
                  <div
                    key={i}
                    className={`skills-row ${isDark ? "dark-mode" : ""}`}
                  >
                    <div
                      className={`skills-category ${isDark ? "dark-mode" : ""}`}
                    >
                      {exp.Stack}
                    </div>
                    <div className={`skills-list ${isDark ? "dark-mode" : ""}`}>
                      {exp.skills}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={require("../../assets/images/skill.svg")}
              />
            )}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
