import React from 'react';
import {render} from 'react-dom';

import Example from '../../src';

const Demo = () => {
  return (
    <div>
      <h1>React Component Demo</h1>
      <Example />
    </div>
  );
};

render(<Demo />, document.querySelector('#root'));
