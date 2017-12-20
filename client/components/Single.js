import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { incrementLikes } from '../actions/actionCreators';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { post, incrementLike, comments } = this.props;
    const postComments = comments[post.code] || [];
    return (
      <div className="single-photo">
        <Photo comments={postComments} photo={post} />
        <Comments comments={postComments} />
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

export default connect(mapStateToProps)(Single);