// import * as  React from 'react';
// import * as ReactDom from 'react-dom';
// import App from './app';

// const jsx = (
//         <app />
// );

// ReactDOM.render(jsx, document.getElementById('app'));

import React from 'react';
import * as ReactDOM from 'react-dom';

ReactDOM.render(
  React.createElement("div", null, "Hello World"), // <div>Hello World</div>
  document.getElementById("root")
);