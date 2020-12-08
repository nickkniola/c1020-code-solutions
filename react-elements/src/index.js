import React from 'react';
import ReactDOM from 'react-dom';

const h1Element = React.createElement('h1', null, ['Hello, React!']);

ReactDOM.render(h1Element, document.querySelector('#root'));
