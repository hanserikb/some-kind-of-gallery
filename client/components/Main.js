import React from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import Single from './Single';
import PhotoGrid from './PhotoGrid';

class Main extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <h1>
              <Link to="/">Foostagram</Link>
            </h1>
              <Route exact path="/" component={PhotoGrid} />
              <Route path="/single" component={Single} />
          </div>
        </Router>
    );
  }
};

export default Main;