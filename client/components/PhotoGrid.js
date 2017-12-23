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
  orderedToJS,
  populatedDataToJS
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
    const { posts } = this.props;
    return (
      <div className="photo-grid">
        { isLoaded(posts) ? posts.map(p => (<Photo comments={p.comments} photo={p} key={p.key} incrementLike={this.incrementLike} />)) : '...Loading..' }
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    posts: orderedToJS(state.firebase, 'posts'),
  };
};

function subscribeFirebase() {
  return [
    '/posts',
  ];
}

export default compose(
  firebaseConnect(subscribeFirebase),
  connect(mapStateToProps)
)(PhotoGrid);