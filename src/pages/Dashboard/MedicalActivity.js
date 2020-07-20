import React from 'react'
import {Card, Row, Col, Popover, Icon, Button} from 'antd'
import CalendarHeatmap from 'react-calendar-heatmap';

import EventDetail from './EventDetail'
import './MedicalActivity.less'
export default class MedicalActivity extends React.Component {

    render(){
        const values = [
            { 
                date: '2020-01-03',
                status: 1,
                details: [
                    {
                        category: "Surgical",
                        Date: "07/18/2019",
                        Institute: "UPMC Shadyside",
                        Doctor: "Rangar Lothbrook"
                    }
                ]
              },
            { 
                date: '2020-01-22',
                status: 2,
                details: [
                    {
                        category: "Surgical",
                        Date: "07/18/2019",
                        Institute: "UPMC Shadyside",
                        Doctor: "Rangar Lothbrook"
                    }
                ]
              },
            { 
                date: '2020-01-30',
                status: 4,
                details: [
                    {
                        category: "Surgical",
                        Date: "07/18/2019",
                        Institute: "UPMC Shadyside",
                        Doctor: "Rangar Lothbrook"
                    }
                ]
              },
              { 
                date: '2020-02-15',
                status: 3,
                details: [
                    {
                        category: "Surgical",
                        Date: "07/18/2019",
                        Institute: "UPMC Shadyside",
                        Doctor: "Rangar Lothbrook"
                    }
                ]
              },
              { 
                date: '2020-02-28',
                status: 1,
                details: [
                    {
                        category: "Surgical",
                        Date: "07/18/2019",
                        Institute: "UPMC Shadyside",
                        Doctor: "Rangar Lothbrook"
                    }
                ]
              },
              { 
                date: '2020-03-11',
                status: 1,
                details: [
                    {
                        category: "Surgical",
                        Date: "07/18/2019",
                        Institute: "UPMC Shadyside",
                        Doctor: "Rangar Lothbrook"
                    }
                ]
              },
              { 
                date: '2020-03-31',
                status: 4,
                details: [
                    {
                        category: "Surgical",
                        Date: "07/18/2019",
                        Institute: "UPMC Shadyside",
                        Doctor: "Rangar Lothbrook"
                    }
                ]
              },
              { 
                date: '2020-05-15',
                status: 3,
                details: [
                    {
                        category: "Surgical",
                        Date: "07/18/2019",
                        Institute: "UPMC Shadyside",
                        Doctor: "Rangar Lothbrook"
                    }
                ]
              },
          ]
        return (
            <Card className="medical-activity" title="Medical Activities" 
                extra={
                    <div>
                        <Button onclick={this.showFirstSixMonth}><Icon type="left" /></Button>
                        <Button onclick={this.showLastSixMonth}><Icon type="right" /></Button>
                        <a><img src="/assets/icon/dashboard/setting.svg" alt="setting"/></a>
                    </div>
                }
            >
                <Row>
                    <Col className="medical-activity-days">
                    <CalendarHeatmap
                        startDate={new Date('2020-01-01')}
                        endDate={new Date('2020-07-01')}
                        showWeekdayLabels={true}
                        gutterSize ={7}
                        values= {values}
                        classForValue={(value) => {
                            if (!value) {
                              return 'color-empty';
                            }
                            return `color-scale-${value.status}`;
                        }}
                        transformDayElement={(element, value, index) => (
                            <Popover 
                                content={(<EventDetail element ={element} value={value}/>)} trigger="click"
                            >
                                {element}
                            </Popover>
                        )}
                    ></CalendarHeatmap>
                    </Col>
                </Row>
                <Row className="medical-activity-mark">
                    <span style={{float:'right'}}>
                        <img src="/assets/images/dashboard/vaccinationTodo.svg" />Vaccination(To-do)
                    </span>
                    <span style={{float:'right'}}>
                        <img src="/assets/images/dashboard/vaccinationDone.svg" />Vaccination(Done)
                    </span>
                    <span style={{float:'right'}}>
                        <img src="/assets/images/dashboard/doctor.svg" />Doctor visiting
                    </span>
                </Row>
            </Card>
        );
    }
}