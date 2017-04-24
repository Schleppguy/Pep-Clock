import React from 'react';

class PepListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={this.props.listItem.imgUrl}></img>
        <div>Comment: <span>{this.props.listItem.comment}</span></div>
        <div>Author: <span>{this.props.listItem.author}</span></div>
      </div>
    );
  }

}

export default PepListItem;