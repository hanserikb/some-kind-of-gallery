import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Photo from './Photo';
class PhotoGrid extends React.Component {
  render() {
    const { posts, comments } = this.props;

    function getCommentLength(post) {
      return comments[post.code] && comments[post.code].length || 0;
    }

    return (
      <div className="photo-grid">
        { posts.map(p => (<Photo photo={p} key={p.id} />)) }
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

export default connect(mapStateToProps)(PhotoGrid);