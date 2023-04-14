import styled from '@emotion/styled';

export const AboutPage = styled.div`
  padding: 40px;
  color: var(--primary-text);
`;


export const AboutTitle = styled.h2`
    font-size: 30px;
    line-height: 30px;
`

export const AboutList = styled.ul`
    
`

export const AboutItem = styled.li`
    padding: 12px 0;
    border-bottom: var(--border-bottom);
`

export const AboutSummary = styled.p`
    margin: 1em 0;
    line-height: 22px;
`

export const ResumeLink = styled.div`
  border: var(--border-button);
  width: 240px;
  font-size: 12px;
  padding: 10px 15px;
  margin: 20px 0;
  background: none;
  color: var(--primary-text);
  text-transform: uppercase;

  &:hover {
    background-color: var(--primary-orange);
    color: var(--white);
  }
`;