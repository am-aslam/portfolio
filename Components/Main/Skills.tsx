import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from '../../constants/Index';
import React from 'react';
import SkillDataProvider from '../Sub/SkillsDataProvider';
import SkillText from '../Sub/SkillText';

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 px-4 pb-40 md:pb-80"
      style={{ transform: 'scale(0.9)' }}
    >
      <SkillText />

      {[Skill_data, Frontend_skill, Backend_skill, Full_stack, Other_skill].map((skillGroup, idx) => (
        <div key={idx} className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {skillGroup.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      ))}

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto object-cover"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};
export default Skills;