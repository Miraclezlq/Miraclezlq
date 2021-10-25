import React, { Component } from 'react'
import "whatwg-fetch"
import "./index.css"

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", password: "" };

    this.changeName = this.changeName.bind(this);
    this.changePasw = this.changePasw.bind(this);
    this.login = this.login.bind(this);
    this.cancle = this.cancle.bind(this);
  }

  changeName(e) {
    this.setState({ name: e.target.value });
    e.preventDefault();
  }

  changePasw(e) {
    this.setState({ password: e.target.value });
    e.preventDefault();
  }

  login() {
    if (this.state.name === "") {
      alert("用户名不能为空");
    } else if (this.state.password === "") {
      alert("密码不能为空");
    } else {
      fetch("url", {
        method: "get",
        headers: {
          userName: this.state.name
        }
      })
        .then((res) => {
          res.json().then((data) => {
            console.log(data);
          });
        })
        .then((err) => {
          console.log(err);
        });
    }
  }

  cancle() {
    this.setState({ name: "", password: "" });
  }

  render() {
    return (
      <div className="Login">
        <h3>
          用户名：
          <input
            type="text"
            value={this.state.name}
            onChange={this.changeName}
          ></input>
        </h3>
        <h3>
          密&nbsp;&nbsp;&nbsp;码：
          <input
            type="password"
            value={this.state.password}
            onChange={this.changePasw}
          ></input>
        </h3>
        <br />
        <button onClick={this.login}>登录</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.cancle}>取消</button>
      </div>
    );
  }
}
