import React, { Component } from 'react';
import MultiInput from './MultiInput';

class App extends Component {
  state = {
    savedAttrs: [],
  }

  handleSaveForm = (savedAttrs) => {
    this.setState({ savedAttrs });
  }

  render() {
    let savedAttrs;
    if (this.state.savedAttrs.length > 0) {
      savedAttrs = this.state.savedAttrs.map(cur => cur.attr).join(', ');
    } else {
      savedAttrs = 'You have no saved attributes yet.';
    }

    return (
      <div className="site">
        <div className="container">
          <h1 className="text-centre">Add your attributes</h1>
          <div>
            <strong>Your saved attributes:</strong> {savedAttrs}
          </div>
          <MultiInput handleSaveForm={this.handleSaveForm} />
        </div>
      </div>
    );
  }
}

export default App;
