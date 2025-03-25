import React, { Component } from 'react';
import axios from 'axios';
import ReactTypes from 'prop-types'
import { Button } from 'antd';

export default class Child extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      desc: 'child',
    }

  }

  static defaultProps = { // 父级未传 props 默认设置
    text: 'init',
  }

  static propTypes = { // 校验类型，控制台报错
    text: ReactTypes.string,
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

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter(item => item.id !== id)
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
            <li key={index} onClick={() => this.print(index, user)}>
              <span>{user.user}, {user.password}</span>
              <Button type="primary" onClick={() => this.deleteUser(user.id)}>删除</Button>
            </li>
          ))}
        </ul>
        <input type="button" value="子向父通信" onClick={() => this.submitText()} />
        <div>父级参数：{text}</div>
        <div>子级参数：{desc}</div>
      </div>
    )
  }

}
