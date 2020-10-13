// cnpm i redux react-redux -S
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Redux extends Component {
  constructor(props) {
    super(props)

  }

  changeName() {
    this.props.setName('jianfeng')
  }

  render() {
    console.log('Redux:', this.props)
    return (
      <div>
        <input type="button" value="修改姓名" onClick={() => this.changeName()} />
        <div>姓名：{this.props.name}</div>
        <input type="button" value="修改年龄" onClick={() => this.props.addAge(2)} />
        <div>年龄：{this.props.age}</div>
      </div>
    )
  }
}

export default connect(function (state, props) { // 会融合到 props
  // return {
  //   ...state,
  //   name: [state.name, props.name]
  // };
  return state.user;
  // return state.admin;
}, {
  setName(name) {
    return {
      type: 'R_SET_NAME',
      name,
    };
  },
  addAge(n) {
    return {
      type: 'R_ADD_AGE',
      n,
    }
  }
})(Redux);
