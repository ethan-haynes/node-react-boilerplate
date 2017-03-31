import React from 'react'
import * as api from '../api'

class App extends React.Component {
  static propTypes = {
    initialData: React.PropTypes.object.isRequired
  }
  state = this.props.initialData

  render() {
    return (
      <div className="App">
        { this.state.initialData }
      </div>
    )
  }
}

export default App
