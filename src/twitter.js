'use strict';

import React from 'react';
import Button from './button';

// class
const Twitter = () => (
  <Button handleClick={() => console.log('Retweet')}>Retweet</Button>
);

export default Twitter;
