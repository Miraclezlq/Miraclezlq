import React from "react";
import "whatwg-fetch";
import "./index.css"

export default class Sign extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userName: "", password1: "", password2: "" };

    this.changeName = this.changeName.bind(this);
    this.changePassword1 = this.changePassword1.bind(this);
    this.changePassword2 = this.changePassword2.bind(this);
    this.sign = this.sign.bind(this);
  }

  changeName(e) {
    this.setState({ userName: e.target.value });
    e.preventDefault();
  }

  changePassword1(e) {
    this.setState({ password1: e.target.value });
    e.preventDefault();
  }

  changePassword2(e) {
    this.setState({ password2: e.target.value });
    e.preventDefault();
  }

  sign() {
    const { password1 } = this.state;
    const { password2 } = this.state;
    if (password1 !== password2) {
      alert("两次密码不同");
    } else {
      fetch("url", {
        method: "post",
        headers: {
          userName: this.state.userName,
          password: this.state.password1
        }
      }).then((res) => {
        res
          .json()
          .then((data) => {
            console.log(data);
          })
          .then((err) => {
            console.log(err);
          });
      });
    }
  }

  render() {
    return (
      <div>
        <h3 className="Sign">
          账号：
          <input
            type="text"
            value={this.state.userName}
            onChange={this.changeName}
          ></input>
          <br />
          密码：
          <input
            type="password"
            value={this.state.password1}
            onChange={this.changePassword1}
          ></input>
          <br />
          确认密码：
          <input
            type="password"
            value={this.state.password2}
            onChange={this.changePassword2}
          ></input>
          <br />
          <input type="button" value="注册" onClick={this.sign}></input>
        </h3>
      </div>
    );
  }
}