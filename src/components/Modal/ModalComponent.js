
import React from 'react';

import { Modal, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme, useMediaQuery } from '@mui/material';
import { FigmaModal } from '.';
export const ModalComponent=({ open, onClose, title, children })=>{
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const getModalStyle = () => {
    if (isSmallScreen) {
      return {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%'
      };
    } else if (isMediumScreen) {
      return {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%'
      };
    } else {
      return {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '40%'
      };
    }
  }
  return(
    <Modal open={open} onClose={onClose}>
  <Box sx={{ ...getModalStyle(), position: 'absolute', bgcolor: 'background.paper', boxShadow: 24, borderRadius: 2 }}>
  <FigmaModal property1='default'/>
    {/*  <IconButton onClick={onClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
        <CloseIcon />
      </IconButton>
      <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Box>{children}</Box>*/}
    </Box> 
    
  </Modal>
  )
}


