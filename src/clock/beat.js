import React, { Component } from 'react';
import moment from 'moment';
import Clock from './clock';

export default class Beat extends Component {

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
                <ClockTz date={this.state.date} delta={0} deltaName="UTC"/>
                <ClockTz date={this.state.date} delta={2} deltaName="Madrid"/>
                <ClockTz date={this.state.date} delta={3} deltaName="Moscu"/>
            </div>
        );
    }

}

function ClockTz(props) {
    const delta = props.delta;
    const deltaName = props.deltaName;

    return (
        <div>
            <Clock date={props.date} delta={delta} deltaName={deltaName} />
        </div>
    )
}