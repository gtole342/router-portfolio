import React from 'react';
import { Route } from 'react-router-dom';

import About from './pages/About';
import Blog from './pages/Blog';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';

const Content = props => { 
  return(
    <div>
      <Route exact path="/" component={Homepage} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/projects" component={Projects} />
    </div>
  )
}

export default Content