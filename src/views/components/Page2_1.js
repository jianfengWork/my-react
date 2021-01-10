import React, { Component } from 'react';

class Page1 extends Component {
  // constructor(...args) {
  //   super(...args);
  // }

  componentDidUpdate(oldProps, oldState) {
    console.log(oldProps, oldState)
  }

  render() {
    console.log('新闻1路由')
    const params = this.props.match.params;
    console.log('params:', params.id)
    console.log('history:', this.props)
    return (
      <div>
        我是新闻1
      </div>
    );
  }
}

export default Page1;
