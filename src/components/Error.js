import React from 'react';

import './styles/error.css'

class Error extends React.Component {
  render() {
    return (
      <div className="errorMessage">
        <p>😵</p>
        <p>🚫Error🚫</p>
      </div>
    )
  }
}

export default Error;