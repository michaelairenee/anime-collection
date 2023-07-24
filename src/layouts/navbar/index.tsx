import React, { useState } from 'react'
import { Hamburger, Nav, NavLink, NavMenu, Title } from '../../styles/navbar'
import { useLocation } from 'react-router-dom'

const Navbar: React.FC = () => {
  const { pathname } = useLocation()
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <Nav>
      <Title>Anime Collection Project Assignment</Title>
      <Hamburger
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </Hamburger>
      <NavMenu expanded={isNavExpanded}>
        <ul>
          <li>
            <NavLink
              to="/"
              onClick={() => setIsNavExpanded(!isNavExpanded)}
              active={pathname === '/' ? 'true' : 'false'}
            >
              Anime
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/collection"
              onClick={() => setIsNavExpanded(!isNavExpanded)}
              active={pathname === '/collection' ? 'true' : 'false'}
            >
              Collection
            </NavLink>
          </li>
        </ul>
      </NavMenu>
    </Nav>
  )
}

export default Navbar
