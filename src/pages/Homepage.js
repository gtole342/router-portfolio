import React from 'react';
import { Link } from 'react-router-dom'

class Homepage extends React.Component {
  render(){
    return(
      <div>
        <div class="row">
          <img src="#" />
        </div>
        <div class="row">
          <Link to="/about">Learn more about me</Link>
          <Link to="/blog">See my blog posts</Link>
          <Link to="/projects">See my projects</Link>
        </div>
      </div>
    )
  }
}

export default Homepage