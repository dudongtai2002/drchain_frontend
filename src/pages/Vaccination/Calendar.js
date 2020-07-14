import React from 'react'
import { Row, Col, List, Icon } from 'antd'
import Scheduler from '../../components/Scheduler'
import './Calendar.less'

let resources = [
    {
        id: 'r0',
        name: 'Influenza',
        color: '#b0c9ff'
    },
    {
        id: 'r1',
        name: 'LAIV',
        color: '#b0c9ff'
    },
    {
        id: 'r2',
        name: 'Pneumococcal',
        color: '#b0c9ff'
    },
    {
        id: 'r3',
        name: 'Polio',
        color: '#b0c9ff'
    },
    {
        id: 'r4',
        name: 'MMR',
        color: '#b0c9ff'
    },
    {
        id: 'r5',
        name: 'Varicella',
        color: '#ffc3bb'
    },
    {
        id: 'r6',
        name: 'HepA',
        color: '#b0c9ff'
    },
    {
        id: 'r7',
        name: 'Tdap',
        color: '#99dee2'
    },
    {
        id: 'r8',
        name: 'HPV',
        color: '#ffe3a0'
    },
    {
        id: 'r9',
        name: 'MenACWY',
        color: '#b0c9ff'
    },
];
//the event array should be sorted in ascending order by event.start property, otherwise there will be some rendering errors
let events = [
    {
        id: 'e0',
        start: '2015-03-18 09:30:00',
        end: '2015-10-18 23:30:00',
        resourceId: 'r0',
        tag: 'Single dose',
        status: 'done',
        provider: 'Steven Chen',
        requirement: 'This vaccination is recommended'
    },
    {
        id: 'e1',
        start: '2016-03-18 09:30:00',
        end: '2016-10-18 23:30:00',
        resourceId: 'r0',
        tag: 'Single dose',
        status: 'done',
        provider: 'Steven Chen',
        requirement: 'This vaccination is recommended'
    },
    {
        id: 'e2',
        start: '2017-03-18 09:30:00',
        end: '2017-10-18 23:30:00',
        resourceId: 'r0',
        tag: 'Single dose',
        status: 'done',
        provider: 'Steven Chen',
        requirement: 'This vaccination is recommended'
    },
    {
        id: 'e3',
        start: '2018-03-18 09:30:00',
        end: '2018-10-18 23:30:00',
        resourceId: 'r0',
        tag: 'Single dose',
        status: 'done',
        provider: 'Steven Chen',
        requirement: 'This vaccination is recommended'
    },
    {
        id: 'e4',
        start: '2019-03-18 09:30:00',
        end: '2019-10-18 23:30:00',
        resourceId: 'r0',
        tag: 'Single dose',
        status: 'done',
        provider: 'Steven Chen',
        requirement: 'This vaccination is recommended'
    },
    {
        id: 'e5',
        start: '2020-03-18 09:30:00',
        end: '2020-10-18 23:30:00',
        resourceId: 'r0',
        tag: 'Single dose',
        status: 'todo',
        provider: 'Steven Chen',
        requirement: 'This vaccination is recommended'
    },
    {
        id: 'e6',
        start: '2017-03-18 09:30:00',
        end: '2017-10-18 23:30:00',
        resourceId: 'r5',
        tag: 'Single dose',
        status: 'done',
        provider: 'Steven Chen',
        requirement: 'This vaccination is recommended'
    },
    {
        id: 'e7',
        start: '2016-09-18 09:30:00',
        end: '2020-11-18 23:30:00',
        resourceId: 'r7',
        tag: '1st dose',
        status: 'todo',
        provider: 'Steven Chen',
        requirement: 'This vaccination is recommended'
    },
    {
        id: 'e7',
        start: '2017-06-18 09:30:00',
        end: '2017-12-18 23:30:00',
        resourceId: 'r8',
        tag: '1st dose',
        status: 'done',
        provider: 'Steven Chen',
        requirement: 'This vaccination is recommended'
    },
    {
        id: 'e7',
        start: '2019-01-18 09:30:00',
        end: '2020-03-18 23:30:00',
        resourceId: 'r8',
        tag: '2nd dose',
        status: 'overdue',
        provider: 'Steven Chen',
        requirement: 'This vaccination is recommended'
    },
];

let todos = [
    {
        name: "MenACWY 2nd Dose",
        status: "missed"
    },
    {
        name: "HPV",
        status: "todo"
    },
    {
        name: "Influenza",
        status: "todo"
    }
]

class Calendar extends React.Component {
    render() {
        return (
            <div className="vaccination-calendar">
                <Row type="flex" justify={"space-between"}>
                    <Col className="vaccination-calendar-card" xs={24} sm={24} md={24} lg={17} xl={18}>
                        <div className="vaccination-scheduler">
                            <Scheduler
                                resources={resources}
                                events={events}
                                cellUnit="1 year"
                                calendarStart="10-10-2010"
                                calendarEnd="10-10-2030"
                                interval={1}
                                unit="year"
                            />
                        </div>
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={1} xl={1}></Col>
                    {/* The list on the right side will be hidden if the screen is too small */}
                    <Col className="vaccination-calendar-card" xs={0} sm={0} md={0} lg={6} xl={5}>
                        <div className="card-title">
                            To-do list
                        </div>
                        <List
                            className="vaccination-list"
                            itemLayout="horizontal"
                            dataSource={todos}
                            renderItem={item => (
                                <List.Item className="vaccination-list-item">
                                    <div className={"status-indicator " + item.status + "-ind"} />
                                    <div className="vaccination-title">{item.name}</div>
                                    <Icon type="more" className="icon" />
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Calendar