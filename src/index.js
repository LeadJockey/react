import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThinkingInReact from './components/thinkingInReact.js';

import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<ThinkingInReact />, document.getElementById('root'));
registerServiceWorker();
