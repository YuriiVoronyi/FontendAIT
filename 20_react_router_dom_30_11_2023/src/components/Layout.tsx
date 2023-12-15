import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <ul>
        <li>
            <Link to='/'>Users</Link>
        </li>
        <li>
            <Link to='/posts'>Posts</Link>
        </li>
        <li>
            <Link to='/todos'>Todos</Link>
        </li>

        <Outlet />
    </ul>
  )
}

export default Layout