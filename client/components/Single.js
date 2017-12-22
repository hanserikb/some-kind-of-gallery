import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Photo from './Photo';
import Comments from './Comments';

import {
  firebaseConnect,
  isLoaded,
  isEmpty,
  orderedToJS,
  dataToJS
} from 'react-redux-firebase';

class Single extends React.Component {

  constructor() {
    super();
    this.submitComment = this.submitComment.bind(this);
    this.removeComment = this.removeComment.bind(this);
    this.incrementLike = this.incrementLike.bind(this);
  }

  submitComment(author, comment) {
    const { firebase, match } = this.props;
    const newComment = {
      user: author,
      text: comment,
      timestamp: this.props.firebase.database.ServerValue.TIMESTAMP
    };

    return firebase.push(`/comments/${match.params.code}`, newComment);
  }

  removeComment(key) {
    const { firebase, match: { params: { code }} } = this.props;
    return firebase.remove(`/comments/${code}/${key}`);
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
    const { post, incrementLike, comments, match: { params: { code }}  } = this.props;
    const postPost = post && post.find(p => p.code === code);

    return (
      <div className="single-photo">
        { isLoaded(post, comments) ? (
          <Fragment>
            <Photo incrementLike={this.incrementLike} comments={comments} photo={postPost} />
            { isEmpty(comments) ? '' : <Comments removeComment={this.removeComment} onSubmit={this.submitComment} comments={comments} /> }
          </Fragment>
        ) : '..Loading..'
        }
      </div>
    );
  }
};


function mapStateToProps(state, props) {
  return {
    post: orderedToJS(state.firebase, `posts`),
    comments: orderedToJS(state.firebase, `comments/${props.match.params.code}`),
  };
}

function subscribeFirebase(props) {
  return [
    `posts`,
    `comments/${props.match.params.code}`
  ]
}

export default compose(
  firebaseConnect(subscribeFirebase),
  connect(mapStateToProps)
)(Single);
