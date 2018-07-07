import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  React.createElement('div', null, title, null),
  document.getElementById('app')
);