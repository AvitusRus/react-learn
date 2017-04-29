import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Clock from './Clock';
import './index.css';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

function tick() {
    ReactDOM.render(
        <Clock />,
        document.getElementById('app2')
    );
}

setInterval(tick, 1000);



