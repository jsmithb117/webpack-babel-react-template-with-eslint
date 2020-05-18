import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'temp',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { target } = event.target;
    this.setState({
      value: { target },
    });
  }

  render() {
    const { value } = this.state;
    return (
      <form>
        <h1>New Heading</h1>
        <input
          type="text"
          value={value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
