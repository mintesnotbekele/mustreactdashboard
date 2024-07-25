import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';

const MainLayout = () => {
  return (
    <div>
  
        <Outlet />
    </div>
  );
};

export default MainLayout;
