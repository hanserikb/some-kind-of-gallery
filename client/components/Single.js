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
      //timestamp: this.props.firebase.database.ServerValue.TIMESTAMP
    };

    return firebase.push(`/posts/${match.params.code}/comments`, newComment);
  }

  removeComment(key) {
    const { firebase, match: { params: { code }} } = this.props;
    return firebase.remove(`/posts/${code}/comments/${key}`);
  }

  incrementLike() {
   const { firebase, match: { params: { code }} } = this.props;
    return firebase.database()
      .ref('posts')
      .child(code)
      .child('likes')
      .transaction(likes => likes = (likes || 0) + 1);
  }

  render() {
    const { post, incrementLike, comments, match: { params: { code }}  } = this.props;
    return (
      <div className="single-photo">
        { isLoaded(post) ? (
          <Fragment>
            <Photo incrementLike={this.incrementLike} comments={post.comments} photo={post} />
            { !post.comments ? 'No comments' : <Comments removeComment={this.removeComment} onSubmit={this.submitComment} comments={post.comments} /> }
          </Fragment>
        ) : '..Loading..'
        }
      </div>
    );
  }
};

Single.defaultProps = {
  comments: {},
  post: {}
}


function mapStateToProps(state, props) {
  return {
    post: dataToJS(state.firebase, `posts/${props.match.params.code}`),
  };
}

function subscribeFirebase(props) {
  return [
    `/posts/${props.match.params.code}`,
  ];
}

export default compose(
  firebaseConnect(subscribeFirebase),
  connect(mapStateToProps)
)(Single);
