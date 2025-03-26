import React, { Component } from 'react';
import Child from './Child'
import Redux from './Redux'
import MobX from './MobX'
import todoStore from './store/mobx';
import { observer } from "mobx-react";

import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Page1 from './views/Page1';
import Page2 from './views/Page2';

import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      info: 'write',
      inputVal: '',
    }

    this.ChildDom = React.createRef();

  }

  changeText(v) {
    this.setState({
      info: v
    })
  }

  changeInputVal(type, event) { // 最后一个参数是 event
    // console.log(type, event)
    this.setState({
      inputVal: event.target.value
    })
  }

  submitDesc() {
    this.ChildDom.current.changeDesc('good child')
  }

  render() {
    const componentStyle = {
      color: '#e62340',
      padding: '20px 0 10px',
    }
    const linkStyle = {
      paddingRight: '20px',
    }
    return (
      <div className="App">
        <header className="App-header">
          hello react!
          <DatePicker />
        </header>
        {/* this.changeInputVal, this => App */}
        {/* bind(this, 'type') this => input */}
        <input type="text" value={this.state.inputVal} onChange={this.changeInputVal.bind(this, 'type')} />
        <div style={componentStyle}>Component</div>
        <input type="button" value="父向子通信" onClick={() => this.submitDesc()} />
        <h1>App Todo List</h1>
        <ul>
          {todoStore.todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <div style={componentStyle}>Child</div>
        <Child ref={this.ChildDom} text={this.state.info} parent={this} />
        <div style={componentStyle}>Redux</div>
        <Redux />
        <div style={componentStyle}>MobX</div>
        <MobX />
        <div style={componentStyle}>Router</div>
        <Router>
          <div>
            <div className="nav-bar">
              <NavLink className="nav-item" style={linkStyle} activeClassName="nav-active" exact to="/">首页</NavLink>
              <NavLink className="nav-item" style={linkStyle} activeClassName="nav-active" to="/news/news1/1">新闻</NavLink>
            </div>

            {/* Switch，禁止匹配多条路由 */}
            <Switch>
              {/* exact 精确匹配 */}
              <Route path="/" exact component={Page1} />
              <Route path="/news" component={Page2} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }

}

export default observer(App);
