import React, { Component } from 'react';
const _ = require('lodash');

export default class Clock extends Component {

    constructor(props) {
        super(props);
        this.deltaName = props.deltaName;
        this.delta = props.delta;
        this.state = {
            date: _.cloneDeep(this.props.date).add(this.delta, 'hours')
        };
    }

    static getDerivedStateFromProps(props, state) {

        if (props.date !== state.date) {
            return {
              date: _.cloneDeep(props.date).add(props.delta, 'hours')
            };
        }

        return null;
    }

    render() {
        return (
            <div>
                <h2>Time zone {this.deltaName}</h2>
                {this.state.date.format('LTS')}
            </div>
        );
    }
}