import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { firebaseStateReducer, reduxFirebase } from 'react-redux-firebase';

import firebaseConfig from './firebaseConfig';
import createHistory from 'history/createBrowserHistory';
import comments from './data/comments';
import posts from './data/posts';
import postReducer from './reducers/posts';
import commentReducer from './reducers/comments';

const browserHistory = createHistory();

const middleware = routerMiddleware(browserHistory);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    router: routerReducer,
    comments: commentReducer,
    posts: postReducer,
    firebase: firebaseStateReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(
    reduxFirebase(firebaseConfig, { userProfile: 'users' }),
    applyMiddleware(middleware)
  ));

export const history = browserHistory;
export default store;