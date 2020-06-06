import React from "react";
import "../styles/loginPageStyles.css";
import TextInput from "../components/TextInput";
import CommonButton from "../components/CommonButton";
import logo from "../resources/images/logo.png";

export default class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: ""
    };
  }

  render() {
    return (
      <div className="main-container login-page">
        <div className="login-background"></div>
        <div className="login-form">
          <div className="app-logo">
            <img src={logo} />
          </div>
          <form className="login-form" action="">
            <h1>Sign In</h1>
            <div className="form-field">
              <TextInput
                type="text"
                className="username"
                placeholder="Username"
                value={this.state.userName}
                onChange={event =>
                  this.setState({ userName: event.target.value })
                }
              />
            </div>
            <div className="form-field">
              <TextInput
                type="password"
                className="password"
                placeholder="Password"
                value={this.state.password}
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
              />
            </div>
            <div className="form-field">
              <CommonButton
                className="primary"
                type="submit"
                value="LOGIN"
                onClick={() => this.props.history.push("/restaurantList")}
              />
            </div>
            <span className="forgot-password">Forgot Password?</span>
            <a className="link" href="">
              Click Here
            </a>
          </form>
        </div>
      </div>
    );
  }
}
