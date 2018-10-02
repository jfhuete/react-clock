import React, { Component } from 'react';
import moment from 'moment';

export default class ClockUTC extends Component{

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
        this.setState(
            {
                date: moment.utc()
            });
    }

    render() {
        return (
            <div>
                <h2>Time zone {this.delta}</h2>
                {this.state.date.format('LTS')}
            </div>
        );
    }
}