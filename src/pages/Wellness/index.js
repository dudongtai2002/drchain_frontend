import React from 'react'
import './index.less'
import WellnessHeader from './wellnessHeader'
import {Button, Card, Col, Icon, Row, Table} from 'antd'
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
    Legend,
  } from "bizcharts";


export default class Wellness extends React.Component {

    dataCategories= ["Weekly Blood Pressure", "Weekly Stress Level",
    "Vaccination Records"];

    constructor(props) {
        super(props);

        let i=0
        const defaultCatagoryVisibility = [];

        for (i=0; i<this.dataCategories.length; i++){
            defaultCatagoryVisibility.push(true);
        }

        this.state = {
            catagoryVisibility:defaultCatagoryVisibility
        };

    };
    
    renderAllrecordsDropdown(key){
        const i = parseInt(key)
        const visibility = this.state.catagoryVisibility[i];
        const updatedVisibility = [...this.state.catagoryVisibility];
        updatedVisibility[i] = !visibility;
        this.setState({
            catagoryVisibility: updatedVisibility
        });
    };

    render(){
        const category1 = (this.state.catagoryVisibility[0]?
            (<div>
                <span className="title">Weekly Blood Presure <Icon type="caret-down" /></span>
                <Button className='plusbutton' type={"primary"} size="small" icon="plus" />
                <Card className='chart' bordered={false} >
                    <Curved/>
                </Card>
             </div>
           ):null);

        const category2 = (this.state.catagoryVisibility[1]?
            (<div>
                <span className="title">Weekly Stress Level <Icon type="caret-down" /></span>
                <Button className='plusbutton' type={"primary"} size="small" icon="plus" />
                <Card className='chart' bordered={false} >
                    <Stress/>
                </Card>
             </div>
           ):null);

        const category3 = (this.state.catagoryVisibility[2]?
            (<div>
                <span className="title">Vaccination Records <Icon type="caret-down" /></span>
                <Button className='plusbutton' type={"primary"} size="small" icon="plus" />
                <Card className='chart' bordered={false} >
                    <Vaccination className="table"/>
                </Card>
             </div>
           ):null);

        return (
            <div className="container">
                <WellnessHeader
                        dataCategories={this.dataCategories} 
                        catagoryVisibility={this.state.catagoryVisibility}
                        dropdownOnClick={(i) => this.renderAllrecordsDropdown(i)}/>
            
                <Card className="cardWrap" bordered={false}>
                    <Row justify="space-around" gutter={30} align="middle">
                        <Col span={14}>
                            {category1}
                            <br /><br />
                            {category2}
                        </Col>
                        <Col span={10}>
                            {category3}
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    };
}


//HeaderForm = Form.create({})(HeaderForm);


class Curved extends React.Component {
    render() {
        const data = [
        {
            day: "Sat",
            type: "Systolic",
            value: 108
        },
        {
            day: "Sat",
            type: "Diastolic",
            value: 85
        },
        {
            day: "Sun",
            type: "Systolic",
            value: 110
        },
        {
            day: "Sun",
            type: "Diastolic",
            value: 94
        },
        {
            day: "Mon",
            type: "Systolic",
            value: 116
        },
        {
            day: "Mon",
            type: "Diastolic",
            value: 86
        },
        {
            day: "Tue",
            type: "Systolic",
            value: 115
        },
        {
            day: "Tue",
            type: "Diastolic",
            value: 93
        },
        {
            day: "Wed",
            type: "Systolic",
            value: 105
        },
        {
            day: "Web",
            type: "Diastolic",
            value: 82
        },
        {
            day: "Thu",
            type: "Systolic",
            value: 115
        },
        {
            day: "Thu",
            type: "Diastolic",
            value: 90
        },
        {
            day: "Fri",
            type: "Systolic",
            value: 113
        },
        {
            day: "Fri",
            type: "Diastolic",
            value: 87
        },
        ];
        const cols = {
            day: {
                range: [0, 1]
            }
        };
        return (
            <div>
                <Chart height={270} data={data} scale={cols} forceFit>
                    <Legend />
                    <Axis name="days" />
                    <Axis
                        name="pressure"
                    />
                    <Tooltip
                        crosshairs={{
                        type: "y"
                    }}
                    />
                    <Geom
                        type="line"
                        position="day*value"
                        size={2}
                        color={"type"}
                        shape={"smooth"}
                    />
                    <Geom
                        type="point"
                        position="day*value"
                        size={4}
                        shape={"circle"}
                        color={"type"}
                        style={{
                            stroke: "#fff",
                            lineWidth: 1
                        }}
                    />
                </Chart>
             </div>
        );
    }
  }


  class Stress extends React.Component {
        render() {
            const data = [
            {
                day: "Sat",
                value: 108
            },
            {
                day: "Sun",
                value: 110
            },
            {
                day: "Mon",
                value: 116
            },
            {
                day: "Tue",
                value: 115
            },
            {
                day: "Wed",
                value: 105
            },
            {
                day: "Thu",
                value: 115
            },
            {
                day: "Fri",
                value: 113
            },
        ];
        const cols = {
            day: {
                range: [0, 1]
            },
            value: {
                min:  50
            }
        };
        return (
            <div>
                <Chart height={270} data={data} scale={cols} forceFit>
                <Legend />
                <Axis name="days" />
                <Axis
                    name="stresslevel"
                />
                <Tooltip
                    crosshairs={{type: "y"}}
                />
                <Geom
                    type="area"
                    position="day*value"
                />
                <Geom
                    type="line"
                    position="day*value"
                    size={2}
                />
                </Chart>
            </div>
        );
    }
  }



  class Vaccination extends React.Component {
    render(){
        const columns = [
            {
              title: 'Vaccine',
              dataIndex: 'Vaccine',
              key: 'Vaccine',
              align: 'center',
            },
            {
              title: 'Dose',
              dataIndex: 'Dose',
              key: 'Dose',
              align: 'center',
            },
            {
              title: 'Date',
              dataIndex: 'Date',
              key: 'Date',
              align: 'center',
            },
            {
              title: 'Provider',
              dataIndex: 'Provider',
              key: 'Provider',
              align: 'center',
            },
        ];
        const dataSource = [
            {
                Vaccine: "MMR SC",
                Dose: "0.5ml",
                Date: "05/23/2020",
                Provider: "Steve Chen",
            },
            {
                Vaccine: "BCG SC",
                Dose: "0.25ml",
                Date: "05/23/2020",
                Provider: "Austin Van",
            },
            {
                Vaccine: "DTP TM",
                Dose: "0.5ml",
                Date: "09/20/2018",
                Provider: "Xuanfeng Zhang",
            },
            {
                Vaccine: "DT TM",
                Dose: "0.25ml",
                Date: "04/08/2017",
                Provider: "Shrey Wilson",
            },
            {
                Vaccine: "MMR SC",
                Dose: "0.5ml",
                Date: "10/02/2015",
                Provider: "Steve Chen",
            },
        ];
        return (
            <Table 
            forceFit 
                size="middle"
                loading={false}
                dataSource={dataSource}
                columns={columns}
                aligh= {"center"}
                rowClassName = {(record, index) => 'table-row-style'}
            />
        )
    }
  }