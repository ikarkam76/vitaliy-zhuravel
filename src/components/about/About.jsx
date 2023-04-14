import { ResumeLink, AboutItem, AboutSummary } from "./About.styled"
import resume from '../../files/Vitaliy Zhuravel_full stack developer.pdf'
import { PageContainer, PageWrap } from "components/App.styled";


export const About = () => {
  return (
    <PageWrap>
      <PageContainer>
        <h2 className="page-title">About</h2>
        <div className="title-divider"></div>
        <ul>
          <AboutItem>Name: Vitaliy Zhuravel</AboutItem>
          <AboutItem>
            Email:
            <a href="mailto:ikarkam76@gmail.com"> ikarkam76@gmail.com</a>
          </AboutItem>
          <AboutItem>
            Phone:
            <a href="tel:+380504030944"> +380 50 403 0944</a>
          </AboutItem>
          <AboutItem>Date of birth: 13 january</AboutItem>
          <AboutItem>Address: Kharkiv, Ukraine</AboutItem>
          <AboutItem>Nationality: Ukraine</AboutItem>
        </ul>
        <h3 className="page-subtitle">Summary</h3>
        <AboutSummary>
          I have more than 16 years of experience in professional management and
          have successfully navigated through many challenges of interacting
          with teams, relationships and achieving business goals. My dedication
          and accountability have helped me to achieve success in my past work,
          always putting the completion of tasks at the forefront. I also have
          the skills to effectively solve problems and manage complex
          situations. I have a successful track record as a Full Stack Developer
          and am currently looking for an opportunity to work in this field. My
          skills, experience and knowledge gained during my studies will allow
          me to effectively solve problems and develop as a professional. I am
          always open to new challenges and skills to grow professionally in the
          field of software development.
        </AboutSummary>
        <ResumeLink>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="resume-link"
          >
            Download resume as pdf format
          </a>
        </ResumeLink>
      </PageContainer>
    </PageWrap>
  );
}