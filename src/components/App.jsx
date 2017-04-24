import React from 'react';
import axios from 'axios';
import PepList from './PepList.jsx';
import PepListForm from './PepListForm.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pepList: []
    };
  }

componentDidMount() {
  this.getList()
  setInterval(this.getList.bind(this), 1000)
}

getList() {
  axios.get('/api/pepListItems').then( response => {
  this.setState({pepList: response.data});
  })
}
  render() {
    return (
      <div>
        <PepListForm />
        <PepList pepList={this.state.pepList}/>
      </div>
    );
  }
}

export default App;
