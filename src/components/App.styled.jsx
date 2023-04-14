import styled from '@emotion/styled';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export const Container = styled.div`
  padding-left: 200px;
  padding-top: 0;
  @media screen and (max-width: 767px) {
    padding-top: 50px;
    padding-left: 0;
  }
`;

export const ContentWrap = styled.div`
  display: block;

  @media screen and (min-width: 768px) {
    display: flex;
    width: calc(904px * 9);
    height: 100vh;
    position: relative;
  }
`;

export const Section = styled.section`
  &:nth-of-type(odd) {
    background-color: var(--secondary-bg);
  }

  &:nth-of-type(even) {
    background-color: var(--primary-bg);
  }

  @media screen and (min-width: 768px) {
    overflow-x: hidden;
    overflow-y: auto;
  }
`;

export const PageWrap = styled.div`
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`;

export const PageContainer = styled.div`
  width: 100vw;
  @media screen and (min-width: 768px) {
    width: 824px;
  }
`;

export const Header = styled.aside`
  position: fixed;
  left: 0;
  width: 200px;
  height: 100vh;
  z-index: 3;
  text-align: start;
  background-color: var(--black);
  overflow: auto;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const MobileHeader = styled.aside`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 3;
  width: 100%;
  height: 50px;
  background-color: var(--black);
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MenuBtn = styled.div`
  position: absolute;
  top: 3%;
  right: 10%;
  text-align: left;
  color: var(--primary-title);
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MenuContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50px;
  right: 0;
  text-align: start;
  z-index: 5;
  @media screen and (min-width: 768px) {
    display: none;

  }
`;

export const LinkUp = styled(ArrowUpwardIcon)`
  position: fixed;
  bottom: 3%;
  right: 3%;
  color: var(--primary-title);
  z-index: 5;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;


export const MobileBarTitle = styled.h2`
  display: block;
  font-family: 'Oswald', sans-serif;
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--primary-title);
`;

export const LogoImg = styled.img`
  width: 140px;
  height: 140px;
  margin: 20px auto;
`;

export const Copyright = styled.div`
  position: absolute;
  bottom: 5px;
  padding: 20px 30px;
  font-family: 'Oswald', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  color: var(--secondary-text);
  line-height: 18px;
  letter-spacing: 1px;
`;