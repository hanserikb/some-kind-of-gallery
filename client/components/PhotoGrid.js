import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class PhotoGrid extends React.Component {
  render() {
    const { posts, comments } = this.props;

    function getCommentLength(post) {
      return comments[post.code] && comments[post.code].length || 0;
    }

    return (
      <div className="photo-grid">
        { posts.map(p => (
          <Link className="grid-figure" to={`view/${p.id}`} key={p.id}>
            <div className="grid-photo-wrap">
              <img src={p.display_src} alt=""/>
            </div>
            { getCommentLength(p) } comments
          </Link>
        )) }
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