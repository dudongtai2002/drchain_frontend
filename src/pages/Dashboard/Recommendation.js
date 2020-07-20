import React from 'react'
import {Card, Carousel} from 'antd'

import './Recommendation.less'
export default class Recommendation extends React.Component {
    render(){

        return (
            <Card className="dashboard-carousel" bordered={false}>
                <Carousel autoplay>
                    <div>
                      <a><img src="/assets/images/dashboard/carousel01.png"/></a>
                    </div>
                    <div>
                        <a><img src="/assets/images/dashboard/carousel01.png"/></a>
                    </div>
                    <div>
                        <a><img src="/assets/images/dashboard/carousel01.png"/></a>
                    </div>
                    <div>
                        <a><img src="/assets/images/dashboard/carousel01.png"/></a>
                    </div>
                </Carousel>
            </Card>
        );
    }
}