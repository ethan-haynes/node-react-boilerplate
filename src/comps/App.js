import React, { Component } from 'react'
import * as api from '../api'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.initialData || {}
  }
  getInitialData( ) {
    return !!this.state.currentPersonId
    ? this.state.people[this.state.currentPersonId].name
    : this.state.people.reduce((a,b) =>  a += `${b.name}\n`, "")
  }

  componentDidMount() {
    if (!!this.state.currentPersonId) {
      api.fetchPeopleList().then(({currentPersonId, people}) => {
        this.setState({
          currentPersonId,
          people
        })
      })
    }
  }

  render() {
    const { initialData } = this.props
    return (
      <div className="App">
        { !!this.state.people
          ? this.getInitialData(initialData)
          : "bloading..." }
      </div>
    )
  }
}

export default App
