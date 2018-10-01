import React, { Component } from 'react';
import moment from 'moment';

export default class Clock extends Component {

    constructor(props) {
        super(props);
        this.delta = "UTC";
        this.state = {
            date: moment.utc().format('LTS')
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
                date: moment.utc().format('LTS')
            });
    }

    render() {
        return (
            <div>
                <h1>Time zone {this.delta}</h1>
                {this.state.date.toString()}
            </div>
        );
    }

}