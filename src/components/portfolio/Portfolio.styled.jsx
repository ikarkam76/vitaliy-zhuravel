import styled from '@emotion/styled';
import LinkIcon from '@mui/icons-material/Link';

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ProjectWrap = styled.div`
  position: relative;
  border-radius: 4px;
  margin-bottom: 10px;
  margin-right: 10px;
`;

export const ProjectImg = styled.img`
  border-radius: 4px;
`;

export const DescWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  position: absolute;
  top: 0;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  border-radius: 4px;
  background-color: var(--primary-orange);
  opacity: 0;
  transition: opacity 0.4s;
  &:hover {
    opacity: 1;
  }
`;

export const ProjectTitle = styled.p`
  font-size: 12px;
  color: var(--primary-title);
  margin-top: 8px;
  border-bottom: var(--border-bottom);
`;

export const ProjectDesc = styled.span`
  color: var(--secondary-text);
  font-size: 12px;
  font-style: italic;
  margin-top: 5px;
`;
export const ProjectLink = styled.a`
  color: var(--secondary-text);
  font-size: 12px;

  &:hover {
    color: var(--black);
    transform: scale(1.05);
    transition-duration: 100ms;
  }
`;

export const IconLink = styled(LinkIcon)`
  font-size: 13px;
  margin-right: 5px;
`;