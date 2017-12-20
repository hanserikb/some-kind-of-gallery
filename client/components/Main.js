import React from 'react';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
//import { history } from '../store';
import Single from './Single';
import PhotoGrid from './PhotoGrid';

class Main extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router>
          <div>
            <h1>
              <Link to="/">Foostagram</Link>
            </h1>
              <Route exact path="/" component={PhotoGrid} />
              <Route path="/view/:id" component={Single} />
          </div>
        </Router>
      </Provider>
    );
  }
};

export default Main;