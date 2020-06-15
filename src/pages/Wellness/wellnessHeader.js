import React from 'react'
import {Button, Divider, Dropdown, Icon, Menu, Modal, Row} from 'antd'
import './wellnessHeader.less'

export default class WellnessHeader extends React.Component{

    constructor(props) {
        super(props);
    }

    state = {
        visible: false,
        confirmLoading: false,
    };

    showWellnessModification = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({
            confirmLoading: true,
        });
        setTimeout(()=>{
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 1000);
    };

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };

    getSelectedMenuKeys(){
        let i=0;
        const selectedKeys = [];
        for(i=0;i<this.props.dataCategories.length;i++){
            if(this.props.catagoryVisibility[i]){
                selectedKeys.push(i.toString());
            }
        }
        return selectedKeys;
    };

    handleDropdownItemClick(item, key){
        this.props.dropdownOnClick(key);
    }

    render(){
        const menus = this.props.dataCategories.map((category, index) => {
            return (
                <Menu.Item key={index}>
                    {category}
                </Menu.Item>
            )
        });
        const skeys = this.getSelectedMenuKeys();
        const menu = (
            <Menu selectedKeys       ={skeys}
                  multiple           ={true}
                  onClick            ={({key}) => this.props.dropdownOnClick(key)}>
                {menus}
            </Menu>
        );
        return (
            <Row className="wellness-header">
                <Menu className = "wellness-header-menu" mode="horizontal">
                    <Menu.Item disabled>
                        <span className="wellness-header-title"><b>Wellness Data</b></span>
                    </Menu.Item>
                    <Divider className="wellness-header-divider" type="vertical"/>
                    <Menu.Item disabled className="menu-item">
                        <Button className="wellness-button-left" size={"large"} shape = "circle"><Icon type="reload" /></Button>
                    </Menu.Item>
                    <Menu.Item disabled className="menu-item">
                        <Button className="wellness-button-left" size={"large"} shape = "circle"><Icon type="more" /></Button>
                    </Menu.Item>
                    <Menu.Item disabled className="menu-item">  
                         {/* here, use an extra dev to enable dropdown inside a menu.item */}
                        <dev>  
                        <Dropdown className="wellness-dropdown" overlay = {menu}><a className="ant-dropdown-link" onClick={e => e.preventDefault()}> All Records <Icon type="down"/></a></Dropdown>
                        </dev>
                    </Menu.Item>
                    <Menu.Item disabled className="menu-item" style={{float: "right"}}>
                        <Button className="wellness-button-right" type="primary" shape="round" size={"large"} onClick={this.showWellnessModification}><Icon type="edit" />Customize</Button>
                    </Menu.Item>
                    </Menu>
                <Modal
                        title={<span>Customization</span>}
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        confirmLoading={this.state.confirmLoading}
                        onCancel={this.handleCancel}
                >
                </Modal>
            </Row>
        );
    };
}