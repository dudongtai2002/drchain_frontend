import React from 'react'
import {Button} from 'antd'
import './demo.less'
export default class Demo extends React.Component {

    render(){
        return (
            <div className="demo">
                <p>This is the home page for Dr.Chain</p>
                <Button>Antd Design</Button>
            </div>
        )
    }
}