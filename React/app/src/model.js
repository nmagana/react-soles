import React from 'react';
import ReactDOM from 'react-dom';
import DysfunctionalApp from './components/DysfunctionalApp';

// this imports the style sheet that has the other imports
import './styles/styles.scss'
// this is something that was downloaded in order to keep more consitency between multiple web browsers
import 'normalize.css/normalize.css'

ReactDOM.render(<DysfunctionalApp />, document.getElementById('app'));