'use strict';

import React from 'react';

const Title = ({name, lastname, age}) => (
  <h1>Olá {`${name} ${lastname} idade: ${age}`}</h1>
);

Title.defaultProps = {
  name: 'Desconhecido',
  lastname: '',
  age: 'Não informada'
};

export default Title;
