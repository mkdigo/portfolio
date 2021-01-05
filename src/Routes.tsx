import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import DestroyerGame from './pages/DestroyerGame';
import Home from './pages/Home';
import MyHistory from './pages/MyHistory';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import SnakeGame from './pages/SnakeGame';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/snake" exact component={SnakeGame} />
      <Route path="/destroyer" exact component={DestroyerGame} />
      <Route path="/skills" exact component={Skills} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/about" exact component={About} />
      <Route path="/myhistory" exact component={MyHistory} />
      <Route path="/contact" exact component={Contact} />
    </Switch>
  );
};

export default Routes;
