import React, { Component } from 'react';

class Page1 extends Component {
  // constructor(...args) {
  //   super(...args);
  // }

  render() {
    console.log('新闻2路由')
    const params = this.props.match.params;
    console.log('params:', params.id)
    return (
      <div>
        我是新闻2
      </div>
    );
  }
}

export default Page1;
