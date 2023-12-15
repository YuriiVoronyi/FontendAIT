import React from 'react'
import { navItems } from '../utils'
import NavItem from './NavItem'

const Navigation: React.FC<{ changePage: (title: string) => void }> = ({ changePage }) => {
  return (
    <nav>
        <ul>
            {navItems.map((navItem, index) => (
                <NavItem key={index} itemTitle={navItem} changePage={changePage} />
            ))}
          {/* <li className="commonButton">Home</li>
          <li className="commonButton">About Me</li>
          <li className="commonButton">Star Wars</li>
          <li className="commonButton">Contact</li> */}
        </ul>
    </nav>
  )
}

export default Navigation