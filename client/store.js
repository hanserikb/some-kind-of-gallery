import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import comments from './data/comments';
import posts from './data/posts';
import postReducer from './reducers/posts';
import commentReducer from './reducers/comments';

const browserHistory = createHistory();

const middleware = routerMiddleware(browserHistory);
const defaultState = {
  comments: comments,
  posts: posts
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
    router: routerReducer,
    comments: commentReducer,
    posts: postReducer,
  }), defaultState, composeEnhancers(
    applyMiddleware(middleware)
  ));

export const history = browserHistory;
export default store;