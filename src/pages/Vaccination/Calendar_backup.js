import React from 'react'
import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import {Row, Col, List, Icon} from 'antd'
import moment from 'moment'
import Scheduler, {SchedulerData, ViewTypes, CellUnits, DATE_FORMAT} from 'react-big-scheduler'
import 'react-big-scheduler/lib/css/style.css'
import './Calendar.less'

let resources = [
    {
        id: 'r0',
        name: 'Influenza'
    },
    {
        id: 'r1',
        name: 'LAIV'
    },
    {
        id: 'r2',
        name: 'Pneumococcal'
    },
    {
        id: 'r3',
        name: 'Polio'
    },
    {
        id: 'r4',
        name: 'MMR'
    },
    {
        id: 'r5',
        name: 'Varicella'
    },
    {
        id: 'r6',
        name: 'HepA'
    },
    {
        id: 'r7',
        name: 'Tdap'
    },
    {
        id: 'r8',
        name: 'HPV'
    },
    {
        id: 'r9',
        name: 'MenACWY'
    },
];
//the event array should be sorted in ascending order by event.start property, otherwise there will be some rendering errors
let events = [
    {
         id: 1,
         start: '2017-12-18 09:30:00',
         end: '2017-12-19 23:30:00',
         resourceId: 'r1',
         title: 'I am finished',
         bgColor: '#D9D9D9'
     },
     {
         id: 2,
         start: '2017-12-18 12:30:00',
         end: '2017-12-26 23:30:00',
         resourceId: 'r2',
         title: 'I am not resizable',
         resizable: false
     },
     {
         id: 3,
         start: '2017-12-19 12:30:00',
         end: '2017-12-20 23:30:00',
         resourceId: 'r3',
         title: 'I am not movable',
         movable: false
     },
     {
         id: 4,
         start: '2017-12-19 14:30:00',
         end: '2017-12-20 23:30:00',
         resourceId: 'r1',
         title: 'I am not start-resizable',
         startResizable: false
     },
     {
         id: 5,
         start: '2017-12-19 15:30:00',
         end: '2017-12-20 23:30:00',
         resourceId: 'r2',
         title: 'R2 has recurring tasks every week on Tuesday, Friday',
         rrule: 'FREQ=WEEKLY;DTSTART=20171219T013000Z;BYDAY=TU,FR',
         bgColor: '#f759ab'
     }
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
    getCustomDate = (schedulerData, num, date = undefined) => {
        const {viewType} = schedulerData;
        let selectDate = schedulerData.startDate;
        if(date != undefined)
            selectDate = date;   
    
        let startDate = num === 0 ? selectDate : 
            schedulerData.localeMoment(selectDate).add(num, 'months').format(DATE_FORMAT),
            endDate = schedulerData.localeMoment(startDate).add(1, 'months').format(DATE_FORMAT),
            cellUnit = CellUnits.Day;
        if(viewType === ViewTypes.Custom1) {
            let monday = schedulerData.localeMoment(selectDate).startOf('week').format(DATE_FORMAT);
            startDate = num === 0 ? monday : schedulerData.localeMoment(monday).add(num, 'years').format(DATE_FORMAT);
            endDate = schedulerData.localeMoment(startDate).add(1, 'weeks').endOf('week').format(DATE_FORMAT);
            cellUnit = CellUnits.Day;
        } else if(viewType === ViewTypes.Custom2) {
            let firstDayOfMonth = schedulerData.localeMoment(selectDate).startOf('month').format(DATE_FORMAT);
            startDate = num === 0 ? firstDayOfMonth : schedulerData.localeMoment(firstDayOfMonth).add(num, 'years').format(DATE_FORMAT);
            endDate = schedulerData.localeMoment(startDate).add(1, 'months').endOf('month').format(DATE_FORMAT);
            cellUnit = CellUnits.Day;
        }
            
        return {
            startDate,
            endDate,
            cellUnit
        };
    }
    
    isNonWorkingTime = (schedulerData, time) => {
        const { localeMoment } = schedulerData;
        if(schedulerData.cellUnit === CellUnits.Hour){
            let hour = localeMoment(time).hour();
            if(hour < 1)
                return true;
        }
        else {
            let dayOfWeek = localeMoment(time).weekday();
            if (dayOfWeek === 0 || dayOfWeek === 6)
                return true;
        }
    
        return false;
    }

    resizeScheduler = (e) => {
        let schedulerData = this.state.schedulerData;
        schedulerData.config.schedulerWidth = this.schedulerContainer.clientWidth
        this.setState({
            schedulerData: schedulerData
        });
    }

    nonAgendaCellHeaderTemplateResolver = (schedulerData, item, formattedDateItems, style) => {
        let datetime = schedulerData.localeMoment(item.time);
        let isCurrentDate = false;
  
        if (schedulerData.viewType === ViewTypes.Day) {
            isCurrentDate = datetime.isSame(new Date(), 'hour');
        }
        else {
            isCurrentDate = datetime.isSame(new Date(), 'day');
        }
  
        if (isCurrentDate) {
            style.backgroundColor = '#118dea';
            style.color = 'white';
        }
  
        return (
            <th key={item.time} className={`header3-text`} style={style}>
                {
                    formattedDateItems.map((formattedItem, index) => (
                        <div key={index}
                             dangerouslySetInnerHTML={{__html: formattedItem.replace(/[0-9]/g, '<b>$&</b>')}}/>
                    ))
                }
            </th>
        );
    }

    onScrollRight = (schedulerData, schedulerContent, maxScrollLeft) => {
        schedulerData.next();
        schedulerData.setEvents(events);
        this.setState({
            viewModel: schedulerData
        });
  
        schedulerContent.scrollLeft = maxScrollLeft - 10;
    }
  
    onScrollLeft = (schedulerData, schedulerContent, maxScrollLeft) => {
        schedulerData.prev();
        schedulerData.setEvents(events);
        this.setState({
            viewModel: schedulerData
        });
  
        schedulerContent.scrollLeft = 10;
    }
    
    constructor(props){
        super(props);

        let schedulerData = new SchedulerData(moment().format(DATE_FORMAT), ViewTypes.Custom, false, false, {
            customCellWidth: 100,
            views: [
                {viewName: '< 18 Months', viewType: ViewTypes.Custom, showAgenda: false, isEventPerspective: false},
                {viewName: '18 Months - 18 Years', viewType: ViewTypes.Custom1, showAgenda: false, isEventPerspective: false},
                {viewName: '18 Years +', viewType: ViewTypes.Custom2, showAgenda: false, isEventPerspective: false},
            ],
        }, {
            getCustomDateFunc: this.getCustomDate,
            isNonWorkingTimeFunc: this.isNonWorkingTime
        });
        schedulerData.setResources(resources)
        schedulerData.setEvents(events)
        this.state = {
            schedulerData: schedulerData
        }
    }
    componentDidMount(){
        this.resizeScheduler()
        window.addEventListener("resize", this.resizeScheduler);
    }

    render() {
        return (
            <div className="vaccination-calendar">
                <Row type="flex" justify={"space-between"}>
                    <Col className="vaccination-calendar-card" xs={24} sm={24} md={24} lg={17} xl={18}>
                        <div className="vaccination-scheduler">
                            <div ref={schedulerContainer => {this.schedulerContainer = schedulerContainer}}>
                                <Scheduler 
                                    schedulerData={this.state.schedulerData}
                                    nonAgendaCellHeaderTemplateResolver = {this.nonAgendaCellHeaderTemplateResolver}
                                    onScrollLeft={this.onScrollLeft}
                                    onScrollRight={this.onScrollRight}
                                />
                            </div>
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
                            renderItem={item=>(
                                <List.Item className="vaccination-list-item">
                                    <div className={"status-indicator " + item.status +"-ind"} />
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

export default DragDropContext(HTML5Backend)(Calendar)