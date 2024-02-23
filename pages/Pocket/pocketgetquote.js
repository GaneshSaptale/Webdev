import React from 'react';

class PocketGetQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      mobileNumber: '',
      deviceName: '',
      manufacturerId: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // Send form data to server
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={this.state.fullName}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Mobile Number:
          <input
            type="text"
            name="mobileNumber"
            value={this.state.mobileNumber}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Device Name:
          <input
            type="text"
            name="deviceName"
            value={this.state.deviceName}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Manufacturer ID:
          <input
            type="text"
            name="manufacturerId"
            value={this.state.manufacturerId}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default PocketGetQuote;
