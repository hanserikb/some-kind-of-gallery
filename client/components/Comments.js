import React from 'react';

class Comments extends React.Component {

  render() {
    const { comments } = this.props;

    return (
      <div className="comments">
        { comments.map((c, i) => (
          <div key={i} className="comment">{c.text} <span className="remove-comment">X</span></div>
        )) }
      </div>
    );
  }
}

export default Comments;