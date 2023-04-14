import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { ModalBox } from './Education.styled';
import cert from '../../images/certificate.jpg'
import { PageContainer, PageWrap } from 'components/App.styled';

export const Education = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <PageWrap>
      <PageContainer>
        <h2 className="page-title">Education</h2>
        <div className="title-divider"></div>
        <h3 className="page-subtitle">
          <a
            href="https://m.goit.global/ua/new/"
            target="_blank"
            rel="noreferrer"
          >
            GoIT
          </a>
        </h3>
        <h3 style={{ fontSize: 20 }}>Fullstack online</h3>
        <p>2022</p>
        <Button onClick={handleOpen}>
          <Box sx={{ textAlign: 'start', marginTop: '20px' }}>
            <img src={cert} alt="cert" width="10%" />
          </Box>
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalBox>
            <img src={cert} alt="cert" width="100%" />
          </ModalBox>
        </Modal>
      </PageContainer>
    </PageWrap>
  );
};
