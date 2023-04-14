import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: var(--primary-bg);
  border: 2px solid #000;
  box-shadow: 24px;
  padding: 4px;
`;