import React from 'react';
import { Route, Router, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { history } from '../store';
import Single from './Single';
import PhotoGrid from './PhotoGrid';

class Main extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <h1>
              <Link to="/">Foostagram</Link>
            </h1>
              <Route exact path="/" component={PhotoGrid} />
              <Route path="/view/:code" component={Single} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
};

export default Main;