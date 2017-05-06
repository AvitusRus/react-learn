import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import Toggle from './Toggle';
import LoggingButton from './LoggingButton';
import LoginControl from './LoginControl';
import WarnBanner from './WarnBanner';
import NameForm from './NameForm';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';
import Reservation from './Reservation';
import Calculator from './Calculator';
import Calculator2 from './Calculator2';
import Signup from './Signup';


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

ReactDOM.render(
    <LoginControl />,
    document.getElementById('loginControl')
);

ReactDOM.render(
    <WarnBanner />,
    document.getElementById('warningBanner')
);

ReactDOM.render(
    <NameForm />,
    document.getElementById('nameForm')
);

ReactDOM.render(
    <EssayForm />,
    document.getElementById('textarea')
);

ReactDOM.render(
    <FlavorForm />,
    document.getElementById('flavorform')
);

ReactDOM.render(
    <Reservation />,
    document.getElementById('reservation')
);

ReactDOM.render(
    <Calculator />,
    document.getElementById('calculator')
);

ReactDOM.render(
    <Calculator2 />,
    document.getElementById('calculator2')
);

ReactDOM.render(
    <Signup />,
    document.getElementById('signup')
);