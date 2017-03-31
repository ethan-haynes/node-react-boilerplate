import React from 'react'
import * as api from '../api'

const pushState = ( obj,url ) =>
  window.history.pushState( obj, '', url )

const onPopState = handler => {
  window.onpopstate = handler
}

class App extends React.Component {
  static propTypes = {
    initialData: React.PropTypes.object.isRequired
  }
  state = this.props.initialData

  currentContest( ) {
    return this.state.people[ this.state.currentPersonId ]
  }

  currentContent( ) {
    if ( this.state.currentPersonId ) {
      return <div>{this.currentContest( )} </div>
    }

    return <div>{ this.state.people }</div>
  }

  render() {
    return (
      <div className="App">
        { this.currentContent() }
      </div>
    )
  }
}

export default App
