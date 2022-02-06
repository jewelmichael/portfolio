import React from 'react';
import { Outlet } from 'react-router';
import Content from '../Content/Content';
import Header from '../Header/Header';

function Layout() {
  return (
    <div className="Layout">
      <Header />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
}

export default Layout;
