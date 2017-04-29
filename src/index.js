import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import Toggle from './Toggle';
import LoggingButton from './LoggingButton'

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

function tick() {
    ReactDOM.render(
        <Clock />,
        document.getElementById('clock')
    );
}

setInterval(tick, 1000);

ReactDOM.render(
    <Toggle />,
    document.getElementById('toggle')
);


ReactDOM.render(
    <LoggingButton />,
    document.getElementById('loggingButton')
);

