import React from 'react';
import ReactDOM from 'react-dom';
import css from './styles/style.styl';
import Main from './components/Main';
import store from './store';

ReactDOM.render(<Main store={store} />, document.getElementById('root'));