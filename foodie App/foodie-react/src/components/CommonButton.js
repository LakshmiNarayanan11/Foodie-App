import React from "react";
import PropTypes from "prop-types";
import "../styles/commonButtonStyles.css";

export default class CommonButton extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func
  };

  constructor() {
    super();
  }

  //Pass primary class for PrimaryButton Styles
  render() {
    return (
      <button
        type={this.props.type}
        className={this.props.className}
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}
