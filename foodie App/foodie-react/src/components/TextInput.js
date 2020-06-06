import React from "react";
import PropTypes from "prop-types";
import "../styles/textInputStyles.css";

export default class TextInput extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
  };

  constructor() {
    super();
  }

  render() {
    return (
      <input
        type={this.props.type}
        className={this.props.className}
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={event => this.props.onChange(event)}
      />
    );
  }
}
