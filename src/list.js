import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Tag, Space } from 'antd';
import { queryAllByAttribute } from '@testing-library/dom';
const { Column, ColumnGroup } = Table;

export default class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    key: '1',
                    firstName: 'Joh',
                    lastName: 'Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                    tags: ['nice', 'developer'],
                },
                {
                    key: '2',
                    firstName: 'Jim',
                    lastName: 'Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                    tags: ['loser'],
                },
                {
                    key: '3',
                    firstName: 'Joe',
                    lastName: 'Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                },

            ],
            update: 0
        };
       //this.handleClick = this.handleClick.bind(this);
    } 

    deletedata=(deletekey)=>{
        alert(deletekey)
        const newdata=this.state.data
        newdata.splice(deletekey,1)
        this.setState((deletekey,props)=>{
            return{
                data:newdata,
                updata: this.state.updata + 1

            }
        }
        ) 
        alert(this.state.data[0].lastName)
        //alert(newdata[0].lastName)
    }
/*         deletedata(deletekey){
            this.setState({
                data:this.state.data.splice(deletekey,1),
            })

        } */
    

/*     getdata(){
        //const {list}=this.state.data;
        return(
            this.state.data
        )
    } */
/*    delete=()=>{
        this.setState({
            this.state.data : this.state.data.splice(key,1)
        })
    } */
/*     deletedata=()=>{
        this.setState(state=>({
            data:data.splice(0,1)
        }))
    } */
    

    render(){
        return(
        <Table dataSource={this.state.data}>
            
        <ColumnGroup title="Name">
            <Column title="First Name" dataIndex="firstName" key="firstName" />
            <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup>
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
            title="Tags"
            dataIndex="tags"
            key="tags"
            render={tags => (
                <>
                    {tags.map(tag => (
                        <Tag color="blue" key={tag}>
                            {tag}
                        </Tag>
                    ))}
                </>
            )}
        />

        <Column
            title="Action"
            key="action"
            render={(text, record,index) => (
                <Space size="middle">
                    <a>Edit {record.lastName}</a>
                    <a onClick={this.deletedata.bind(this,index)}><font color="#FF0000">Delete</font></a>
                    <a>{this.state.update}</a>
                </Space>
            )}
        />
    </Table>
        )
    } 

}
//const listdata=new Data();
/* const { Column, ColumnGroup } = Table;
const data = [
    {
        key: '1',
        firstName: 'Joh',
        lastName: 'Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        firstName: 'Jim',
        lastName: 'Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
] */

//function Data(deletekey) {

//return data
/*     if(deletekey!=0){
        data.splice(deletekey,1);
        this.setstate({
            data: data,
        }
        );
        console.log(data)
    } */
/*     const { data } = this.state;
    data.splice(deletekey,1);
    this.setstate({
        data: data,
    }) */
/* if(deletekey!=0){
const newdata = data.splice(deletekey,1)
data=newdata
} */
//this.setstate({data:newdata})
/*     data.map((item, deletekey) => {
        if (item === deletekey) {
          data.splice(deletekey, 1);
          this.setState({
            data: data,
          });
      console.log(data) //这里打印发现data已经发生了变化，但是setState在页面上数据却不改变是不是很奇怪呢？
        }
      }); */
/*     return data
} */

/* 
export default function Editablelist() {

    return (

        <Table dataSource={listdata.getdata()}>
            alert(listdata.state.data.lastName);
            <ColumnGroup title="Name">
                <Column title="First Name" dataIndex="firstName" key="firstName" />
                <Column title="Last Name" dataIndex="lastName" key="lastName" />
            </ColumnGroup>
            <Column title="Age" dataIndex="age" key="age" />
            <Column title="Address" dataIndex="address" key="address" />
            <Column
                title="Tags"
                dataIndex="tags"
                key="tags"
                render={tags => (
                    <>
                        {tags.map(tag => (
                            <Tag color="blue" key={tag}>
                                {tag}
                            </Tag>
                        ))}
                    </>
                )}
            />

            <Column
                title="Action"
                key="action"
                render={(text, record) => (
                    <Space size="middle">
                        <a>Edit {record.lastName}</a>
                        <a onClick={listdata.deletedata(record.key)}><font color="#FF0000">Delete</font></a>
                    </Space>
                )}
            />
        </Table>
    )
}
 */