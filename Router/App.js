import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'



class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }
  render() {
    return (<div>
      <h1>this is server side rendering</h1>
    </div>
    )

  }
}

export default App