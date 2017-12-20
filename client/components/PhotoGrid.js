import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Photo from './Photo';
import * as actionCreators from '../actions/actionCreators';

class PhotoGrid extends React.Component {

  constructor() {
    super();
    this.like = this.like.bind(this);
  }

  like(id) {
    this.props.incrementLike(id);
  }

  render() {
    const { posts, comments } = this.props;

    function getComments(post) {
      return comments[post.code] && comments[post.code];
    }

    return (
      <div className="photo-grid">
        { posts.map(p => (<Photo comments={getComments(p)} photo={p} key={p.id} onLike={this.like} />)) }
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
};

function mapDispatchToProps(dispatch) {
  return {
    incrementLike: function(id) {
      dispatch(actionCreators.incrementLikes(id))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);