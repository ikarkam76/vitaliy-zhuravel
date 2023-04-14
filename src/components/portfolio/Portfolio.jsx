import { teamprojects, personalprojects } from "files/datafile";
import { DescWrap, IconLink, ProjectDesc, ProjectImg, ProjectLink, ProjectTitle, ProjectWrap, ProjectsContainer } from "./Portfolio.styled";
import { PageContainer, PageWrap } from "components/App.styled";

export const Portfolio = () => {
  return (
    <PageWrap>
      <PageContainer>
        <h2 className="page-title">Portfolio</h2>
        <div className="title-divider"></div>
        <h3
          className="page-subtitle"
          style={{
            fontSize: 16,
            borderBottom: 'var(--border-bottom)',
            paddingBottom: '10px',
          }}
        >
          Team projects
        </h3>
        <ProjectsContainer>
          {teamprojects.map(item => (
            <ProjectWrap key={item.title}>
              <ProjectImg src={item.logo} alt={item.title} width="350px" />
              <DescWrap>
                <ProjectTitle>Homepage</ProjectTitle>
                <ProjectLink
                  href={item.livepage}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconLink />
                  {item.title}
                </ProjectLink>
                <ProjectTitle>Repository</ProjectTitle>
                <ProjectLink
                  href={item.codelink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconLink />
                  {item.codelink}
                </ProjectLink>
                <ProjectTitle>
                  Technologies: <ProjectDesc>{item.techs}</ProjectDesc>
                </ProjectTitle>
                <ProjectTitle>
                  My role: <ProjectDesc>{item.role}</ProjectDesc>
                </ProjectTitle>
                <ProjectTitle>
                  My part: <ProjectDesc>{item.part}</ProjectDesc>
                </ProjectTitle>
                <ProjectTitle>
                  Description:
                  <ProjectDesc> {item.desc}</ProjectDesc>
                </ProjectTitle>
              </DescWrap>
            </ProjectWrap>
          ))}
        </ProjectsContainer>
        <h3
          className="page-subtitle"
          style={{
            fontSize: 16,
            borderBottom: 'var(--border-bottom)',
            paddingBottom: '10px',
          }}
        >
          Personal projects
        </h3>
        <ProjectsContainer>
          {personalprojects.map(item => (
            <ProjectWrap key={item.title}>
              <ProjectImg src={item.logo} alt={item.title} width="350px" />
              <DescWrap>
                <ProjectTitle>Homepage</ProjectTitle>
                <ProjectLink
                  href={item.livepage}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconLink />
                  {item.title}
                </ProjectLink>
                <ProjectTitle>Repository</ProjectTitle>
                <ProjectLink
                  href={item.codelink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconLink />
                  {item.codelink}
                </ProjectLink>
                <ProjectTitle>
                  Technologies: <ProjectDesc>{item.techs}</ProjectDesc>
                </ProjectTitle>
                <ProjectTitle>
                  Description:
                  <ProjectDesc> {item.desc}</ProjectDesc>
                </ProjectTitle>
              </DescWrap>
            </ProjectWrap>
          ))}
        </ProjectsContainer>
      </PageContainer>
    </PageWrap>
  );
};
