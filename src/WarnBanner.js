import React, {Component} from 'react';

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }
    return (
        <div className="warning">
            Warning!
        </div>
    );
}

class WarnBanner extends Component {


    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }



    render() {


        const numbers = [1,2,3,4,5];
        const listitems = numbers.map((number) =>
            <li>{number}</li>
        );

        return (
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
                <ul>{listitems}</ul>
            </div>
        )
    }

}

export default WarnBanner;