import React from 'react'
import './index.less'
import {Card, Button, Icon, Form, Table, message} from 'antd'
import PageHeader from './PageHeader'
export default class Record extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            dataSource: [],
            selectedRowKeys:[],
            selectedRows:[],
        };
    }
    componentDidMount() {
        const dataSource = [
            {  
                Flag: "true",
                Date: "2020/01/20",
                Institute: "UMPC",
                Department: "CMU",
                Dept_Phone: "765-325-6984",
                Status: "Finished"
            },
            {
                Flag: "false",
                Date: "2020/01/20",
                Institute: "UMPC",
                Department: "CMU",
                Dept_Phone: "765-325-6984",
                Status: "Finished"
            },
            {
                Flag: "true",
                Date: "2020/01/20",
                Institute: "UMPC",
                Department: "CMU",
                Dept_Phone: "765-325-6984",
                Status: "Finished"
            },
            {
                Flag: "false",
                Date: "2020/01/20",
                Institute: "UMPC",
                Department: "CMU",
                Dept_Phone: "765-325-6984",
                Status: "Finished"
            },
            {
                Flag: "false",
                Date: "2020/01/20",
                Institute: "UMPC",
                Department: "CMU",
                Dept_Phone: "765-325-6984",
                Status: "Finished"
            },
            {
                Flag: "true",
                Date: "2020/01/20",
                Institute: "UMPC",
                Department: "CMU",
                Dept_Phone: "765-325-6984",
                Status: "Finished"
            }
            ,
            {
                Flag: "true",
                Date: "2020/01/20",
                Institute: "UMPC",
                Department: "CMU",
                Dept_Phone: "765-325-6984",
                Status: "Finished"
            }
            ,
            {
                Flag: "false",
                Date: "2020/01/20",
                Institute: "UMPC",
                Department: "CMU",
                Dept_Phone: "765-325-6984",
                Status: "Finished"
            }
            ,
            {
                Flag: "true",
                Date: "2020/01/20",
                Institute: "UMPC",
                Department: "CMU",
                Dept_Phone: "765-325-6984",
                Status: "Finished"
            }
            ,
            {
                Flag: "true",
                Date: "2020/01/20",
                Institute: "UMPC",
                Department: "CMU",
                Dept_Phone: "765-325-6984",
                Status: "Finished"
            }
        ];
        dataSource.map((item,index)=>{
            item.key = index;
            if (item.Flag === "true") {
                item.Flag = <span><Icon type="flag" theme="filled" /></span>;
            }else {
                item.Flag = ""
            }
        })
        this.setState({
            dataSource: dataSource
        })
    }

    render(){
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectedRowKeys: selectedRowKeys,
                    selectedRows: selectedRows
                })
            },
        };

        const columns = [
            {
              title: '',
              dataIndex: 'Flag',
              key: 'Flag',
            },
            {
              title: 'Date',
              dataIndex: 'Date',
              key: 'Date',
            },
            {
              title: 'Institute',
              dataIndex: 'Institute',
              key: 'Institute',
            },
            {
              title: 'Department',
              dataIndex: 'Department',
              key: 'Department',
            },
            {
                title: 'Dept_Phone',
                dataIndex: 'Dept_Phone',
                key: 'Dept_Phone',
            },
            {
                title: 'Status',
                dataIndex: 'Status',
                key: 'Status',
            },
        ];
        return (
            <div class="record-container">
                <PageHeader />
                <Card className="cardWrap" bordered={false}>
                    <Table
                        className="table-style"
                        loading={false}
                        dataSource={this.state.dataSource}
                        columns={columns}
                        align= {"left"}
                        rowSelection={rowSelection}
                        rowClassName = {(record, index) => 'table-row-style'}
                        onRow={record => {
                            return {
                              onClick: event => 
                              window.location.href = '/#/details',
                            };
                        }}
                    />
                </Card>
            </div>
        );
    }
}