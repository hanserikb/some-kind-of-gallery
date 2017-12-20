import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { incrementLikes, addComment } from '../actions/actionCreators';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
  constructor() {
    super();

    this.submitComment = this.submitComment.bind(this);
  }

  submitComment(author, comment) {
    this.props.addComment(
      this.props.post.code,
      author,
      comment
    )
  }

  render() {
    const { post, incrementLike, comments } = this.props;
    const postComments = comments[post.code] || [];
    return (
      <div className="single-photo">
        <Photo comments={postComments} photo={post} />
        <Comments onSubmit={this.submitComment} comments={postComments} />
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
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Single);