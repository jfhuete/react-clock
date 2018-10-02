import React, { Component } from 'react';
import moment from 'moment';
import ClockMadrid from './madrid';

export default class Clock extends Component {

    constructor(props) {
        super(props);
        this.delta = "UTC";
        this.state = {
            date: moment.utc()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({date: moment.utc()});
    }

    render() {
        return (
            <div>
                <h2>Time zone {this.delta}</h2>
                {this.state.date.format('LTS')}
                <ClockMadrid date={this.state.date} />
            </div>
        );
    }

}