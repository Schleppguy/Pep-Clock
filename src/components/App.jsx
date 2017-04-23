import React from 'react';
import axios from 'axios';
import PepList from './PepList.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apires: 'Steve'
    };
  }

componentDidMount() {
  axios.get('/api/pepListItems').then( response => {
    this.setState({apires: response.data});
  });
}
  render() {
    return (
      <div>
        <p>Application</p>
        <PepList apires={this.state.apires}/>
      </div>
    );
  }
}

export default App;
