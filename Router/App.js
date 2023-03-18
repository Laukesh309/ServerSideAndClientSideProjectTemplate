import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../component/Home'
import Address from '../component/Address'
class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }
  render() {
    return (
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path="/path1" element={<Address />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    )

  }
}

export default App