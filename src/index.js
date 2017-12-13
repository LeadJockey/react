import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// components - app
import App from './components/app/App';

// components - thinking in react
import FilterableProductTable from './components/example1-thinking-in-react/FilterableProductTable';
import data from './data/sendData';

// components - project to do
import ProjectTodo from './components/example2-project-todo/ProjectTodo';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<FilterableProductTable products={data} />, document.getElementById('thinkingInReact'));
ReactDOM.render(<ProjectTodo />, document.getElementById('projectTodo'));
