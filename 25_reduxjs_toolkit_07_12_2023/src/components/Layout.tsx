import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{ textAlign: 'center' }}>
        <Link className='btn btn-success' to={'/counter'}>Counter</Link>
        <Link className='btn btn-info' to={'/sandwich'}>Sandwich</Link>
        <Link className='btn btn-primary' to={'/library'}>Library</Link>
        <Outlet />
    </div>
  )
}

export default Layout