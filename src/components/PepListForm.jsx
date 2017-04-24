import React from 'react';

class PepListForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form method="post">
          <div>
            <label for="name">Your Name:</label>
            <input type="text" id="name" name="user_name"></input>
          </div>
          <div>
            <label for="mail">Image URL:</label>
            <input type="text" id="image" name="user_mail"></input>
          </div>
          <div>
            <label for="msg">Message:</label>
            <textarea id="msg" name="user_message"></textarea>
          </div>
      </form>
    )
  }

}
export default PepListForm;
