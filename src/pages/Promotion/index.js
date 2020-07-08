import React from 'react'
import {Row} from 'antd'
import Header from "./Header"
import Content from './Content'
import Footer from './Footer'
export default class Promotion extends React.Component {
    


    render() {
        return(
            <div>
                <Row>
                    <Header/>
                </Row>
                <Row>
                    <Content/>
                </Row>
                <Row>
                    <Footer/>
                </Row>
            </div>
        );
    }
}