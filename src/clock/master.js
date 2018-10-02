import React, { Component } from 'react';
import moment from 'moment';

export default class MasterClock extends Component {

    constructor(props) {
        super(props);
        this.deltaName = "UTC";
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
        const date = moment.utc();
        this.setState({date: date});
        this.props.updateDate(date);
    }

    render() {
        return (
            <div>
                <h2>Time zone {this.deltaName}</h2>
                {this.state.date.format('LTS')}
            </div>
        )
    }
}
