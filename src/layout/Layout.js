import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import MainContainer from '../components/MainContainer';

function Layout() {
  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
}

export default Layout;
