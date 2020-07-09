import React from 'react'
import './accountWellnessChart.less'
import { Icon, Row, Divider } from 'antd'
import { ResponsiveLine } from '@nivo/line'

export default class AccountWellnessChart extends React.Component {

    constructor(props){
        super(props);
        this.title = (this.props.title)?this.props.title:"Basic Info";
        this.y_label = (this.props.y_label)?this.props.y_label:"value";
    }

    renderChart(data){
        if(!data) return null;
        const alteredData = [];
        let y_min = Number.MIN_SAFE_INTEGER;
        let y_max = Number.MAX_SAFE_INTEGER;
        for (let dataOfTheDay of data){
            alteredData.push({"x":dataOfTheDay['day'], "y":dataOfTheDay['value']});
            if(dataOfTheDay['value'] > y_min){
                y_min = dataOfTheDay['value']; 
            }
            if(dataOfTheDay['value'] < y_max){
                y_max = dataOfTheDay['value']; 
            }
        }
        const chartData = [{"id":this.title, 
                            "color":"hsl(343, 70%, 50%)", 
                            "data":alteredData}];

        return (
        <ResponsiveLine 
                    data = {chartData}
                    margin = {{ top: 20, right: 20, bottom: 30, left: 50 }}
                    xScale={{ type: 'point' }}
                    yScale={{ type: 'linear', min: y_min - 15 , max: y_max + 13, stacked: true, reverse: false }}
                    curve="monotoneX"
                    height = {380}
                    axisTop={null}
                    axisRight={null}
                    colors ={['#5789DB']}
                    axisBottom={{
                        orient: 'bottom',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'day',
                        legendOffset: 36,
                        legendPosition: 'middle'
                    }}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 6,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: this.y_label,
                        legendOffset: -45,
                        legendPosition: 'middle'
                    }}
                    isInteractive={true}
                    pointSize={10}
                    pointColor={{ theme: 'background'}}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabel="y"
                    pointLabelYOffset={-12}
                    enableArea={true}
                    areaOpacity={0.5}
                    areaBaselineValue={y_min - 14.5}
                    areaBlendMode="normal"
                    useMesh={true}
                    defs={[{
                        id: 'gradient',
                        type: 'linearGradient',
                        colors: [
                            { offset: 0, color: '#5789DB' },
                            { offset: 100, color: '#fff'},
                        ],
                    },]}
                    fill={[
                        { match: '*', id: 'gradient' },
                    ]}
                />);    
    }

    render(){
        return (
            <div className="account-wellness-chart">
                <Row className="info-header">
                    <span>{this.title}</span>
                    <Icon type="form" className="edit-icon"/>
                    </Row>
                <Divider/>
                {this.renderChart(this.props.data)}
            </div>  
        );
    }
}