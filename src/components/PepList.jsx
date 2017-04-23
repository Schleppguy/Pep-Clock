import React from 'react';

class PepList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        Apires :  <span>{this.props.apires.comment}</span>
      </div>
    );
  }

}

export default PepList;