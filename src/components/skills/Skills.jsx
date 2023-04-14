import { ProgressBar } from "components/progressBar/ProgressBar";
import { Skill, SkillsList, SkillsTitle } from "./Skills.styled";
import CheckIcon from '@mui/icons-material/Check';
import { softskills, techskills } from "files/datafile";
import { PageContainer, PageWrap } from "components/App.styled";

export const Skills = () => {
  return (
    <PageWrap>
      <PageContainer>
        <h2 className="page-title">Skills</h2>
        <div className="title-divider"></div>
        <h3 className="page-subtitle">Just my awesome skills</h3>
        <SkillsTitle className="page-subtitle">Soft skills</SkillsTitle>
        <SkillsList>
          {softskills.map(item => (
            <li key={item}>
              <Skill>
                <CheckIcon
                  sx={{
                    fontSize: 15,
                    color: '#ee6817',
                    marginRight: 1,
                  }}
                />
                {item}
              </Skill>
            </li>
          ))}
        </SkillsList>
        <SkillsTitle className="page-subtitle">Tech skills</SkillsTitle>
        <SkillsList>
          {techskills.map(item => (
            <li key={item}>
              <Skill>
                <CheckIcon
                  sx={{
                    fontSize: 15,
                    color: '#ee6817',
                    marginRight: 1,
                  }}
                />
                {item}
              </Skill>
            </li>
          ))}
        </SkillsList>
        <SkillsTitle className="page-subtitle">Language skills</SkillsTitle>
        <Skill>Ukrainian (native)</Skill>
        <ProgressBar percentage={100} />
        <Skill>English (intermediate)</Skill>
        <ProgressBar percentage={50} />
      </PageContainer>
    </PageWrap>
  );
};