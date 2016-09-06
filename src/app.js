'use strict';

import React, { Component } from 'react';
import Title from './title';

// class
class App extends Component {
  render () {
    return (
      <div className='container'>
        <Title name='Nath' age={28} />
      </div>
    );
  }
}

// const App = React.createClass({
//   render: function () {
//     return (
//       <div className='container'>
//         <Title name='Nath' age={29} />
//       </div>
//     );
//   }
// });

export default App;
