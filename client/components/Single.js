import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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

function mapStateToProps(state, props) {
  return {};
}

export default connect(mapStateToProps)(Single);