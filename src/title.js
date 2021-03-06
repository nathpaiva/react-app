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

export default Title;
