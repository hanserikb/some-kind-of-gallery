import React from 'react';

class Comments extends React.Component {

  constructor() {
    super();
    this.submitComment = this.submitComment.bind(this);
    this.removeComment = this.removeComment.bind(this);
  }

  submitComment(e) {
    e.preventDefault();
    const author = this.authorRef.value;
    const comment = this.commentRef.value;
    this.props.onSubmit(
      author,
      comment
    )
  }

  removeComment() {

  }

  render() {
    const { comments } = this.props;

    const Comment = (comment, index) => (
      <div key={index} className="comment">
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    );

    return (
      <div className="comments">
        { comments.map(Comment) }
        <form onSubmit={this.submitComment} className="comment-form">
          <input ref={i => this.authorRef = i} type="text" placeholder="Author"/>
          <input ref={i => this.commentRef = i} type="text" placeholder="Comment" />
          <input type="submit" hidden/>
        </form>
      </div>
    );
  }
}



export default Comments;