import React from 'react';
import PepListItem from './PepListItem.jsx';

class PepList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Here's Some Love!</h2> 
          {this.props.pepList.map(item => (<PepListItem key={item._id} listItem={item}/>))}
      </div>
    );
  }

}

export default PepList;