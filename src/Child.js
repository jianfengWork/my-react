import React, { Component } from 'react';
import axios from 'axios';

export default class Child extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      desc: 'child',
    }

  }

  async componentDidMount() {
    try {
      const { data } = await axios.get('/mock/data.json');
      this.setState({
        users: data
      });
    } catch (e) {
      console.log('出错');
    }
  }

  print(i, v) {
    console.log(i, v)
  }

  submitText() {
    this.props.parent.changeText('write code')
  }

  changeDesc(v) {
    this.setState({
      desc: v
    })
  }

  render() {
    const { text } = this.props
    const { desc } = this.state
    // console.log(text)
    return (
      <div>
        <ul>
          {this.state.users.map((user, index) => (
            <li key={index} onClick={() => this.print(index, user)}>{user.user}, {user.password}</li>
          ))}
        </ul>
        <input type="button" value="子向父通信" onClick={() => this.submitText()} />
        <div>父级参数：{text}</div>
        <div>子级参数：{desc}</div>
      </div>
    )
  }

}
