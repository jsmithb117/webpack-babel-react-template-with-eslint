import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => ({
      value,
    }));
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}// eslint-disable-line react/destructuring-assignment
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default App;

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render(<App />, wrapper) : false;// eslint-disable-line no-unused-expressions
