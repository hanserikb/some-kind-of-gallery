import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Photo from './Photo';
import * as actionCreators from '../actions/actionCreators';

import {
  firebaseConnect,
  isLoaded,
  isEmpty,
  dataToJS,
  orderedToJS
} from 'react-redux-firebase'

class PhotoGrid extends React.Component {

  constructor() {
    super();
    this.incrementLike = this.incrementLike.bind(this);
  }

  incrementLike(key) {
   const { firebase, match: { params: { code }} } = this.props;
    return firebase.database()
      .ref('posts')
      .child(key)
      .child('likes')
      .transaction(likes => likes = (likes || 0) + 1);
  }

  render() {
    const { posts, comments } = this.props;
    function getComments(post) {
      return comments[post.code] && comments[post.code];
    }

    return (
      <div className="photo-grid">
        { (isLoaded(posts) && isLoaded(comments)) ? posts.map(p => (<Photo comments={getComments(p)} photo={p} key={p.key} incrementLike={this.incrementLike} />)) : '...Loading..' }
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    posts: orderedToJS(state.firebase, 'posts'),
    comments: dataToJS(state.firebase, 'comments'),
  };
};

function subscribeFirebase() {
  return [
    'posts',
    'comments'
  ];
}

export default compose(
  firebaseConnect(subscribeFirebase),
  connect(mapStateToProps)
)(PhotoGrid);