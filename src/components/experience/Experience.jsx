import { PageContainer, PageWrap } from "components/App.styled";
import { WorkBlock, WorkDesc, WorkPosition } from "./Experience.styled";


export const Experience = () => {
  return (
    <PageWrap>
      <PageContainer>
        <h2 className="page-title">Experience</h2>
        <div className="title-divider"></div>
        <WorkBlock>
          <WorkPosition>
            <h3 className="page-subtitle">
              <a href="https://promdesign.ua/" target="_blank" rel="noreferrer">
                Promdesign
              </a>
            </h3>
            <h3 style={{ fontSize: 20 }}>Sales Manager</h3>
            <p>(2006-2023)</p>
          </WorkPosition>
          <WorkDesc>
            Promdesign is a company for the production and sale of materials for
            advertising and construction with branches throughout the country.
          </WorkDesc>
          <WorkDesc>
            During 16 years of working in this company, I gained rich experience
            in cooperation in a team, confidently organizing, planning and
            controlling the process of selling goods. My ability to make
            independent decisions and the ability to find non-standard solutions
            allow me to confidently approach specific situations. I am sure that
            my experience and knowledge of communication within the team will
            contribute to the successful implementation of team projects. My
            organizational and planning skills will ensure the efficiency and
            accuracy of tasks.{' '}
          </WorkDesc>
          <WorkDesc>
            In addition, I have the ability for critical thinking and analysis,
            which allows me to quickly respond to changes and propose optimal
            solutions depending on the situation. I understand the importance of
            cooperation and teamwork in projects and strive to maintain
            constructive relationships with all participants. My communication
            skills, including the ability to listen and accept the thoughts and
            ideas of others, will help me to successfully interact with the team
            and achieve my goals.
          </WorkDesc>
        </WorkBlock>
        <WorkBlock>
          <WorkPosition>
            <h3 className="page-subtitle">
              <a href="http://sm-w.com.ua/" target="_blank" rel="noreferrer">
                Specmaster
              </a>
            </h3>
            <h3 style={{ fontSize: 20 }}>Purchasing Manager</h3>
            <p>(2003-2006)</p>
          </WorkPosition>
          <WorkDesc>
            The Specmaster company is a leading manufacturer of the highest
            quality workwear, where I gained significant experience in the work
            process.{' '}
          </WorkDesc>
          <WorkDesc>
            My duties included a wide range of tasks. In particular, I was
            responsible for the supply of the necessary raw materials for
            production, controlled the entire process of manufacturing products,
            ensured the timely delivery of both raw materials for production and
            finished products to the final consumer.{' '}
          </WorkDesc>
          <WorkDesc>
            My ability to work in a team and attention to detail allowed me to
            successfully complete tasks and achieve set goals.
          </WorkDesc>
        </WorkBlock>
      </PageContainer>
    </PageWrap>
  );
};