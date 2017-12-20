import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { incrementLikes, addComment, removeComment } from '../actions/actionCreators';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
  constructor() {
    super();

    this.submitComment = this.submitComment.bind(this);
    this.removeComment = this.removeComment.bind(this);
  }

  submitComment(author, comment) {
    this.props.addComment(
      this.props.post.code,
      author,
      comment
    )
  }

  removeComment(index) {
    this.props.removeComment(
      this.props.post.code,
      index
    )
  }

  render() {
    const { post, incrementLike, comments } = this.props;
    const postComments = comments[post.code] || [];
    return (
      <div className="single-photo">
        <Photo comments={postComments} photo={post} />
        <Comments removeComment={this.removeComment} onSubmit={this.submitComment} comments={postComments} />
      </div>
    );
  }
};

function mapStateToProps(state, props) {
  return {
    post: state.posts.find(p => p.id === props.match.params.id),
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addComment: (code, author, comment) => {
      dispatch(addComment(
        code,
        author,
        comment
      ))
    },
    removeComment: (code, index) => {
      dispatch(removeComment(
        code,
        index
      ));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Single);