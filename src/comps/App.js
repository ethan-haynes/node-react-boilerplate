import React from 'react'
import * as api from '../api'

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

const onPopState = handler => {
  window.onpopstate = handler;
};

class App extends React.Component {
  static propTypes = {
    initialData: React.PropTypes.object.isRequired
  }
  intData = this.props.initialData
  id = this.intData ? this.intData.currentPersonId : null
  ppl = this.intData ? this.intData.people : null
  state = this.props.initialData;
  componentDidMount() {
    onPopState((event) => {
      this.setState({
        currentPersonId: (event.state || {}).currentPersonId
      });
    });
  }

  getInitialData() {
    if (this.id) {
      return this.ppl[this.id].name
    } else {
      return this.ppl.reduce((a,b) =>  a += `${b.name}\n`, "")
    }
  }



  render() {
    return (
      <div className="App">
        { this.getInitialData() }
      </div>
    )
  }
}

export default App
