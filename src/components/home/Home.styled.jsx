import styled from '@emotion/styled';

export const HomeTitleContainer = styled.div`
  position: absolute;
  top: 400px;
  left: 0;
  color: var(--primary-text);
  padding: 70px 25px 25px;

  @media screen and (max-width: 480px) {
    top: 230px;
  }

  @media screen and (max-width: 767px) {
    background-color: var(--transparent-bg);
  }
`;

export const HomeTitle = styled.h2`
    
`

export const HomeImg = styled.img`
  width: 100%;
`

export const HomeSubTitle = styled.p`
  margin-top: 20px;
  padding: 10px;
  border-top: var(--border-bottom);
  border-bottom: var(--border-bottom);
`;