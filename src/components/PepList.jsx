import React from 'react';

class PepList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Apires :  <span>{this.props.apires}</span>
      </div>
    );
  }

}

export default PepList;