import React, { Component } from 'react';
import Child from './Child'
import Redux from './Redux'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Page1 from './views/Page1';
import Page2 from './views/Page2';

import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      info: 'write',
    }

    this.ChildDom = React.createRef();

  }

  changeText(v) {
    this.setState({
      info: v
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
        <div style={componentStyle}>Component</div>
        <input type="button" value="父向子通信" onClick={() => this.submitDesc()} />
        <Child ref={this.ChildDom} text={this.state.info} parent={this} />
        <div style={componentStyle}>Redux</div>
        <Redux />
        <div style={componentStyle}>Router</div>
        <Router>
          <div>
            <div className="nav-bar">
              <Link className="nav-item" style={linkStyle} to="/">首页</Link>
              <Link className="nav-item" style={linkStyle} to="/news/news1/1">新闻</Link>
            </div>

            {/* exact 精确匹配 */}
            <Route path="/" exact component={Page1} />
            <Route path="/news" component={Page2} />
          </div>
        </Router>
      </div>
    )
  }

}

export default App;
