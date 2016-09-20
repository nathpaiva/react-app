'use strict';

import React, { Component } from 'react';
import Title from './title';
import Square from './square';
import Twitter from './twitter';

class App extends Component {
  render () {
    return (
      <div className='container'>
        <Title name='Nath' age={28} />
        <Twitter />
        <Square />
        {['orange', 'red', 'green'].map((square, index) => (
          <Square key={index} color={square} />
        ))}
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
