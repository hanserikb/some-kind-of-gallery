import { createStore, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import comments from './data/comments';
import posts from './data/posts';
import postReducer from './reducers/posts';
import commentsReducer from './reducers/posts';

const defaultState = {
  comments: comments,
  posts: posts
};
const store = createStore(
    combineReducers({
    routing: routerReducer,
    comments: commentsReducer,
    posts: postReducer,
  }), defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const browserHistory = createBrowserHistory();
export const history = syncHistoryWithStore(browserHistory, store);
export default store;