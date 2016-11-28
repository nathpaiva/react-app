'use strict';

import React, { Component } from 'react';
import Title from './title';
import Square from './square';
import Twitter from './twitter';

class App extends Component {
    constructor () {
        super();
        this.state = {
            text: 'Nath 213'
        };
    }
    render () {
        return (
          <div className='container'>
            {this.state.text}
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

export default App;
