import React, { Component } from 'react';
import Child from './Child'
import Redux from './Redux'

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
    return (
      <div className="App">
        <header className="App-header">
          hello react!
        </header>
        <div style={componentStyle}>Component</div>
        <input type="button" value="父向子通信" onClick={() => this.submitDesc()} />
        <Child ref={this.ChildDom} text={this.state.info} parent={this} />
        <div style={componentStyle}>Redux</div>
        <Redux />
      </div>
    )
  }
  
}

export default App;
