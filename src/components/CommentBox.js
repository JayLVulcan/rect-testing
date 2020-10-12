import React from 'react';

const CommentBox = (props) => {
  return <div className="container" >
      <h3>Enter a comment</h3>
      <textarea rows="8" cols="80" />
      <button type="button">Submit</button>
    </div>
}

export default CommentBox