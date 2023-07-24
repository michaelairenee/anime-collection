import { Link } from 'react-router-dom'
import styled from '@emotion/styled/macro'

interface NavMenuProps {
  expanded: boolean
}

export const Nav = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 0rem;
  background-color: #fff;
  color: black;
  box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
`

export const Title = styled.label`
  text-decoration: none;
  color: black;
  font-size: 1.3rem;
  margin-left: 1rem;

  @media screen and (max-width: 768px) {
    width: 70%;
    line-height: 1.8rem;
  }
`

export const Hamburger = styled.button`
  border: 0;
  height: 40px;
  width: 40px;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: #00aa5b;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
  display: none;

  &:hover {
    background-color: #00aa5b;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`

export const NavMenu = styled.div<NavMenuProps>`
  margin-left: auto;

  ul {
    display: flex;
    padding: 0;
  }

  li {
    list-style-type: none;
    margin: 0 1rem;
  }

  @media screen and (max-width: 768px) {
    ul {
      position: absolute;
      top: 60px;
      left: 0;
      flex-direction: column;
      width: 100%;
      height: calc(100vh - 77px);
      background-color: white;
      border-top: 1px solid black;
    }

    @media screen and (max-width: 768px) {
      display: ${(props) => (props.expanded ? 'block' : 'none')};
    }

    li {
      text-align: center;
      margin: 0;
    }

    li:hover {
      background-color: #b6d7a8;
    }
  }
`

type LinkProps = {
  active?: string
}

export const NavLink = styled(Link)<LinkProps>`
  text-decoration: none;
  display: block;
  width: 100%;
  color: #00aa5b;
  font-weight: ${(props) => (props.active === 'true' ? 600 : 400)};

  @media screen and (max-width: 768px) {
    color: black;
    width: 100%;
    padding: 1.5rem 0;
  }
`
