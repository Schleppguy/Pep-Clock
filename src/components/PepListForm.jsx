import React from 'react';
import axios from 'axios';

class PepListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      imgUrl: '',
      comment: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
  }

 handleSubmit(event) {
   event.preventDefault();
   axios.post('/api/pepListItems', this.state)
  .then(function (response) {
    this.setState({
      author: '',
      imgUrl: '',
      comment: ''
    })
  })
  .catch(function (error) {
    console.log(error);
  });
 }
 

  handleChange(event) {

    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <div>
            <label>Your Name:
            <input type="text" name="author" value={this.state.author} onChange={this.handleChange} ></input>
            </label>
          </div>
          <div>
            <label>Image URL:
            <input type="text" name="imgUrl" value={this.state.imgUrl} onChange={this.handleChange} ></input>
            </label>
          </div>
          <div>
            <label>Message:</label>
            <textarea name="comment" value={this.state.comment} onChange={this.handleChange} ></textarea>
          </div>
          <div className="button">
            <button type="submit">Submit your Pep!</button>
          </div>
      </form>
    )
  }

}
export default PepListForm;
