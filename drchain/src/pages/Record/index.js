import React from 'react'
import './index.less'
import {Card, Button, message} from 'antd'
export default class Record extends React.Component {

    handleClick=()=> {
        message.success("HAHAHAH");
    }
    operations = (
        <Button onClick={this.handleClick} type="danger">
          Extra Action — this button doesn't work
        </Button>
      );

    render(){
        return (
            <div class="container">
                <Card 
                    title = "Medical Record" 
                    className="cardWrap" 
                    bordered={false}
                    tabBarExtraContent={this.operations}
                >
                </Card>
            </div>
        );
    }
}