import React, { Component } from 'react';
import moment from 'moment';
import Clock from './clock';
import Master from './master';

export default class Beat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: moment.utc()
        };
        this.updateDate = this.updateDate.bind(this);
    }

    updateDate(date) {
        this.setState({'date': date});
    }

    render() {
        return (
            <div>
                <Master updateDate={this.updateDate}/>
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