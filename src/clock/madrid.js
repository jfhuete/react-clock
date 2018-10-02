import React, { Component } from 'react';
const _ = require('lodash');

export default class ClockMadrid extends Component {

    constructor(props) {
        super(props);
        this.delta = "Madrid";
        this.state = {
            date: _.cloneDeep(this.props.date).add(2, 'hours')
        };
    }

    static getDerivedStateFromProps(props, state) {

        if (props.date !== state.date) {
            return {
              date: _.cloneDeep(props.date).add(2, 'hours')
            };
        }

        return null;
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