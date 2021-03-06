import React from 'react'
import { Link } from 'react-router-dom'

const Nav = props => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav