import React from 'react';
import { Link } from 'react-router-dom';
class Single extends React.Component {
  render() {
    return (
      <div className="single-photo">
        Single here!
        <div>
          <Link to="/">Go to grid</Link>
        </div>
      </div>
    );
  }
};

export default Single;