import React from 'react'
import './index.less'
import {Card, Button, Icon, Form, Table, message, Input} from 'antd'
import PageHeader from './PageHeader'
import Highlighter from 'react-highlight-words'
export default class Record extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            dataSource: [],
            selectedRowKeys:[],
            selectedRows:[],
            searchText: '',
            searchedColumn: '',
        };
    }

    traverseDataSource = (data)=> {
        data.map((item,index)=>{
            item.key = index;
            if (item.Flag === "true") {
                item.Flag = <button name="true" style={{backgroundColor:'transparent', border: 0}}><img className="button-flag" src="/assets/icon/Flag.svg"/></button>;
            }else if (item.Flag === "false") {
                item.Flag = <button name="false" style={{backgroundColor:'transparent', border: 0}}><img className="button-flag" src="/assets/icon/noFlag.svg"/></button>;
            }
        })
        this.setState({
            dataSource: data,
        })
    }

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={node => {
                this.searchInput = node;
              }}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Button
              type="primary"
              onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              icon="search"
              size="small"
              style={{ width: 90, marginRight: 8 }}
            >
              Search
            </Button>
            <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              Reset
            </Button>
          </div>
        ),
        filterIcon: filtered => (
          <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
          record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => this.searchInput.select());
          }
        },
        render: text =>
          this.state.searchedColumn === dataIndex ? (
            <Highlighter
              highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
              searchWords={[this.state.searchText]}
              autoEscape
              textToHighlight={text.toString()}
            />
          ) : (
            text
          ),
      });
    
      handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
          searchText: selectedKeys[0],
          searchedColumn: dataIndex,
        });
      };
    
      handleReset = clearFilters => {
        clearFilters();
        this.setState({ 
            searchText: '',
        });
      };


    componentDidMount() {
        const dataSource = [
            {  
                Flag: "true",
                Date: "04/27/2020 11:40AM",
                Department: "Audiology",
                Provider: "Dr. Ranger Lothbrook, MD",
                Clinic: "Chestnut Hills Dental",
                Dept_Phone: "412-400-4707"
            },
            {
                Flag: "false",
                Date: "03/21/2020 09:20AM",
                Department: "Dermatology",
                Provider: "Dr. Ranger Lothbrook, MD",
                Clinic: "UPMC Shadyside",
                Dept_Phone: "412-787-1286"
            },
            {
                Flag: "false",
                Date: "02/12/2020 12:10PM",
                Department: "Orthodpaedic",
                Provider: "Dr. Ranger Lothbrook, MD",
                Clinic: "West Penn Hospital",
                Dept_Phone: "412-983-2749"
            },
            {
                Flag: "true",
                Date: "12/01/2020 15:00PM",
                Department: "Gastroenterology",
                Provider: "Dr. Ranger Lothbrook, MD",
                Clinic: "UPMC Shadyside",
                Dept_Phone: "412-787-9090"
            },
            {
                Flag: "false",
                Date: "08/28/2019 10:50AM",
                Department: "Audiology",
                Provider: "Dr. Ranger Lothbrook, MD",
                Clinic: "UPMC Shadyside",
                Dept_Phone: "412-787-0101"
            },
            {
                Flag: "true",
                Date: "08/10/2019 09:50AM",
                Department: "Orthopaedic",
                Provider: "Dr. Ranger Lothbrook, MD",
                Clinic: "UPMC Shadyside",
                Dept_Phone: "412-787-0101"
            }
            ,
            {
                Flag: "false",
                Date: "08/28/2019 10:50AM",
                Department: "Dental",
                Provider: "Dr. Ranger Lothbrook, MD",
                Clinic: "UPMC Shadyside",
                Dept_Phone: "412-787-0101"
            }
            ,
            {
                Flag: "false",
                Date: "08/28/2019 10:50AM",
                Department: "Vision",
                Provider: "Dr. Ranger Lothbrook, MD",
                Clinic: "UPMC Shadyside",
                Dept_Phone: "412-787-0101"
            }
            ,
            {
                Flag: "true",
                Date: "08/28/2019 10:50AM",
                Department: "Oral Surgical",
                Provider: "Dr. Ranger Lothbrook, MD",
                Clinic: "UPMC Shadyside",
                Dept_Phone: "412-787-0101"
            },
            {
                Flag: "true",
                Date: "08/28/2019 10:50AM",
                Department: "Oral Surgical",
                Provider: "Dr. Ranger Lothbrook, MD",
                Clinic: "UPMC Shadyside",
                Dept_Phone: "412-787-0101"
            },
            {
                Flag: "false",
                Date: "08/28/2019 10:50AM",
                Department: "Oral Surgical",
                Provider: "Dr. Ranger Lothbrook, MD",
                Clinic: "UPMC Shadyside",
                Dept_Phone: "412-787-0101"
            },
            {
                Flag: "true",
                Date: "08/28/2019 10:50AM",
                Department: "Oral Surgical",
                Provider: "Dr. Ranger Lothbrook, MD",
                Clinic: "UPMC Shadyside",
                Dept_Phone: "412-787-0101"
            },
            {
                Flag: "false",
                Date: "08/28/2019 10:50AM",
                Department: "Oral Surgical",
                Provider: "Dr. Ranger Lothbrook, MD",
                Clinic: "UPMC Shadyside",
                Dept_Phone: "412-787-0101"
            },
            {
                Flag: "false",
                Date: "08/28/2019 10:50AM",
                Department: "Oral Surgical",
                Provider: "Dr. Ranger Lothbrook, MD",
                Clinic: "UPMC Shadyside",
                Dept_Phone: "412-787-0101"
            },
            {
                Flag: "false",
                Date: "08/28/2019 10:50AM",
                Department: "Oral Surgical",
                Provider: "Dr. Ranger Lothbrook, MD",
                Clinic: "UPMC Shadyside",
                Dept_Phone: "412-787-0101"
            },
            {
                Flag: "false",
                Date: "08/28/2019 10:50AM",
                Department: "Oral Surgical",
                Provider: "Dr. Ranger Lothbrook, MD",
                Clinic: "UPMC Shadyside",
                Dept_Phone: "412-787-0101"
            },
            {
                Flag: "true",
                Date: "08/28/2019 10:50AM",
                Department: "Oral Surgical",
                Provider: "Dr. Ranger Lothbrook, MD",
                Clinic: "UPMC Shadyside",
                Dept_Phone: "412-787-0101"
            }
        ];
        this.traverseDataSource(dataSource);
    }

    render(){
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectedRowKeys: selectedRowKeys,
                    selectedRows: selectedRows
                })
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User',
                name: record.name,
              }),
        };

        const columns = [
            {
              title: '',
              dataIndex: 'Flag',
              key: 'Flag',
              onCell: (record) => ({
                onClick: ()=>{
                    let data = this.state.dataSource;
                    if (record.Flag !== "true" && record.Flag !== "false") {
                        if (record.Flag.props.name === "true") {
                            record.Flag="";
                            record.Flag="false";
                        }else {
                            record.Flag="";
                            record.Flag="true";
                        }
                    }else {
                        record.Flag = "";
                        record.Flag = "true";
                    }
                    this.setState({
                        dataSource: data
                    })
                    this.traverseDataSource(data);
                }
              })
            },
            {
              title: 'Date',
              dataIndex: 'Date',
              key: 'Date',
              onCell: (record) => ({
                  onClick: ()=>{
                    window.location.href = '/#/details';
                  }
              })
            },
            {
              title: 'Department',
              dataIndex: 'Department',
              key: 'Department',
              onCell: (record) => ({
                onClick: ()=>{
                  window.location.href = '/#/details';
                }
              }),
              ...this.getColumnSearchProps('Department'),
              
            },
            {
                title: 'Provider',
                dataIndex: 'Provider',
                key: 'Provider',
                onCell: (record) => ({
                    onClick: ()=>{
                      window.location.href = '/#/details';
                    }
                  }),
                ...this.getColumnSearchProps('Provider')
            },
            {
                title: 'Clinic',
                dataIndex: 'Clinic',
                key: 'Clinic',
                onCell: (record) => ({
                    onClick: ()=>{
                      window.location.href = '/#/details';
                    }
                  }),
                ...this.getColumnSearchProps('Clinic')
            },
            {
                title: 'Dept_Phone',
                dataIndex: 'Dept_Phone',
                key: 'Dept_Phone',
                onCell: (record) => ({
                    onClick: ()=>{
                      window.location.href = '/#/details';
                    }
                  }),
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
                        pagination={{ pageSize: 8 }}
                    />
                </Card>
            </div>
        );
    }
}