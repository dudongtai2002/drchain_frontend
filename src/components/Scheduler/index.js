import React from 'react'
import { Icon } from 'antd'
import moment from 'moment'
import './index.less'
import SchedulerRow from './SchedulerRow'
import EventRow from './EventRow'

const getMoments = (start, end, interval, unit) => {
    let moments = [];
    let startMoment = new moment(start, "MM-DD-YYYY");
    let endMoment = new moment(end, "MM-DD-YYYY");
    let current = startMoment;
    while (current < endMoment) {
        moments.push(current.clone());
        current.add(interval, unit);
    }
    moments.push(current);
    return moments;
}

export default class Scheduler extends React.Component {
    constructor(props) {
        super(props);
        const { resources, events, calendarStart, calendarEnd, interval, unit } = props;
        //generate the moments between calendarStart and calendarEnd with the given interval and unit
        const momentArray = getMoments(calendarStart, calendarEnd, interval, unit);
        //group the events by resourceId
        this.eventMap = events.reduce((o, cur) => {
            o[cur.resourceId] = o[cur.resourceId] || [];
            o[cur.resourceId].push(cur)
            return o
        }, {});
        //creat ref mapp for schedulerRow which will be used for positioning the events
        this.schedulerRowMap = resources.reduce(
            (o, cur) => ({ ...o, [cur.id]: React.createRef() }), {}
        );
        //calculate the actual start moment and end moment of the current calendar
        this.startMoment = moment(momentArray[0]).startOf(unit)
        this.endMoment = moment(momentArray[momentArray.length - 1]).endOf(unit)

        this.state = {
            momentArray: momentArray,
            displayUnit: unit,
            resources: resources,
            events: events,
            renderEvents: false
        }
    }

    componentDidMount() {
        this.setState({
            renderEvents: true
        })
    }

    render() {
        const calendarHeader = this.state.momentArray.map((item) =>
            <div className="scheduler-header-cell">{this.state.displayUnit === "month" ? item.format("MMMM-YYYY") : item.format("YYYY")}</div>
        );
        const calendarBody = this.state.resources.map((item) =>
            <SchedulerRow
                momentArray={this.state.momentArray}
                resource={item}
                ref={this.schedulerRowMap[item.id]}
            />
        )
        return (
            <div className="scheduler-wrapper">
                <div className="scheduler-top">
                    <div className="scheduler-title">
                        Calendar
                    </div>
                    <div className="scheduler-button-group">
                        <div className="scheduler-button">
                            &lt; 18 Months
                        </div>
                        <div className="scheduler-button">
                            18 Months - 18 Years
                        </div>
                        <div className="scheduler-button">
                            18 Years +
                        </div>
                    </div>
                    <div className="scheduler-operation-group">
                        <Icon type="setting" />
                        <Icon type="control" />
                    </div>
                </div>
                <div className="scheduler-container">
                    <div className="scheduler-table">
                        <div className="scheduler-header">
                            <div className="scheduler-row">
                                <div className="scheduler-header-cell"></div>
                                {calendarHeader}
                            </div>
                        </div>
                        <div className="scheduler-body">
                            {calendarBody}
                        </div>
                    </div>
                    {this.state.renderEvents && (
                        this.state.resources.map((item) =>
                            <EventRow
                                resource={item}
                                events={this.eventMap[item.id]}
                                startMoment={this.startMoment}
                                endMoment={this.endMoment}
                                schedulerRow={this.schedulerRowMap[item.id].current}
                            />
                        )
                    )}
                </div>
            </div>
        )
    }
}