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
import FilterableProductTable from './FilterableProductTable';


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

let PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];


ReactDOM.render(
    <FilterableProductTable products={PRODUCTS} />,
    document.getElementById('product_card')
);



