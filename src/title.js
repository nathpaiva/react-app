'use strict';

import React from 'react';
// Pure function
const Title = ({name, lastname, age}) => (
  <h1>Olá {`${name} ${lastname} idade: ${age}`}</h1>
);
Title.defaultProps = {
  name: 'Desconhecido',
  lastname: 'Pure - function',
  age: 'não informada'
};
// Cretea Class React
// const Title = React.createClass({
//   getDefaultProps: function () {
//     return {
//       name: 'Desconhecido',
//       lastname: 'createClass',
//       age: 'Não informada'
//     };
//   },
//   render: function () {
//     return (
//       <h1>Olá {this.props.name} {this.props.lastname} idade: {this.props.age}</h1>
//     );
//   }
// });

export default Title;
