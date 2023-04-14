import { useState } from 'react';
import { Container, Header, MenuBtn, MobileBarTitle, MobileHeader, MenuContainer, LinkUp, Section, LogoImg, Copyright, ContentWrap, PageContainer } from './App.styled';
import { NavMenu } from './navigation/NavMenu';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Home } from './home/Home';
import { About } from './about/About';
import { Contact } from './contact/Contact';
import { Skills } from './skills/Skills';
import { Experience } from './experience/Experience';
import { Education } from './education/Education';
import { Portfolio } from './portfolio/Portfolio';
import logo from '../images/logo1.png'
import lastprofile from '../images/profile-01.jpg'

export const App = () => {
  const [isMenu, setIsMenu] = useState(false)

  const fotoWidth = window.screen.width < 768 ? '100vw' : '57vw';
  const home = document.querySelector('#home');

  const ScrollToTop = () => {
    window.scroll({
      top: home.offsetTop -50,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Container>
      <MobileHeader>
        <MobileBarTitle>Vitaliy Zhuravel</MobileBarTitle>
        <MenuBtn>
          {!isMenu ? (
            <MenuIcon fontSize="large" onClick={() => setIsMenu(true)} />
          ) : (
            <CloseIcon fontSize="large" onClick={() => setIsMenu(false)} />
          )}
        </MenuBtn>
        {isMenu && (
          <MenuContainer onClick={() => setIsMenu(false)}>
            <NavMenu />
          </MenuContainer>
        )}
          <LinkUp fontSize="large" onClick={()=>ScrollToTop()}/>
      </MobileHeader>
      <Header>
        <LogoImg src={logo} alt="logo" />
        <NavMenu />
        <Copyright>
          © Vitaliy Zhuravel
          <br />
          All rights reserved.
        </Copyright>
      </Header>
      <ContentWrap>
        <Section id="home">
          <Home />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section id="skills">
          <Skills />
        </Section>
        <Section id="experience">
          <Experience />
        </Section>
        <Section id="education">
          <Education />
        </Section>
        <Section id="portfolio">
          <Portfolio />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
        <Section>
          <PageContainer style={{width: fotoWidth, textAlign: 'center'}}>
            <img src={lastprofile} alt='foto on last page' width='100%'/>
          </PageContainer>
        </Section>
      </ContentWrap>
    </Container>
  );
};
