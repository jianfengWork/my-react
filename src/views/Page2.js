import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom';
import Page2_1 from './components/Page2_1';
import Page2_2 from './components/Page2_2';

class Page1 extends Component {
  // constructor(...args) {
  //   super(...args);
  // }

  render() {
    const path = this.props.match.path;
    console.log(path, this.props.match)
    const linkStyle = {
      paddingRight: '20px',
    }
    return (
      <div>
        <div>我是新闻</div>
        <Link to={`${path}/news1/1`} style={linkStyle}>新闻1</Link>
        <Link to={`${path}/news2/2`} style={linkStyle}>新闻2</Link>

        <Route path={`${path}/news1/:id`} component={Page2_1} />
        <Route path={`${path}/news2/:id`} component={Page2_2} />
      </div>
    );
  }
}

export default Page1;
