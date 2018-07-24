import React from 'react';
import { hot } from 'react-hot-loader'

const title = 'Application as a module';

const App = (props) => (
    <div>{title}</div>
);

export default hot(module)(App);