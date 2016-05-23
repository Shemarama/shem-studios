import React from 'react';
import ReactDOM from 'react-dom';

// App component
// export so routes can see it
// default so no {} when importing
export default class App extends React.Component {
  // every component needs a render function
  render() {
    return (
      // can only return elements wrapped by one huge element
      // ie: <div>
      //       <h1>Hello</h1>
      //       <h2>World</h2>
      //     </div>
      <h1>Hello World</h1>
    )
  }
}
