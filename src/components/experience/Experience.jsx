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
              <a href="https://immersetech.co/" target="_blank" rel="noreferrer">
                Immersetech
              </a>
            </h3>
            <h3 style={{ fontSize: 13 }}>Software Engineer</h3>
            <p>(2020-up to now)</p>
          </WorkPosition>
          <WorkDesc>
            During my tenure at this company, I've traversed a path from a front-end developer
             to a full-stack engineer. I've gained extensive experience in crafting applications
              using React and Node.js, working with various frameworks like Next.js, Vue,
               and pure React. Actively integrating MongoDB and PostgreSQL databases, 
               my backend typically relies on Express and Nest.js.
          </WorkDesc>
          <WorkDesc>
            Regularly engaging with multiple libraries and UI interfaces, 
            I adeptly apply these tools in my projects. My work primarily involves 
            team collaborations, enabling me to work both independently and collaboratively, 
            efficiently utilizing my work hours.
          </WorkDesc>
          <WorkDesc>
             Furthermore, I continuously refine my skill set, exploring new technologies, 
             ensuring I remain at the forefront of the latest trends in the development landscape.
          </WorkDesc>
        </WorkBlock>
        <WorkBlock>
          <WorkPosition>
            <h3 className="page-subtitle">
              <a href="https://promdesign.ua/" target="_blank" rel="noreferrer">
                Promdesign
              </a>
            </h3>
            <h3 style={{ fontSize: 13 }}>Sales Manager</h3>
            <p>(2006-2020)</p>
          </WorkPosition>
          <WorkDesc>
            Promdesign is a company for the production and sale of materials for
            advertising and construction with branches throughout the country.
          </WorkDesc>
          <WorkDesc>
            During 14 years of working in this company, I gained rich experience
            in cooperation in a team, confidently organizing, planning and
            controlling the process of selling goods. My ability to make
            independent decisions and the ability to find non-standard solutions
            allow me to confidently approach specific situations. I am sure that
            my experience and knowledge of communication within the team will
            contribute to the successful implementation of team projects. My
            organizational and planning skills will ensure the efficiency and
            accuracy of tasks.
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
            <h3 style={{ fontSize: 13 }}>Purchasing Manager</h3>
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
