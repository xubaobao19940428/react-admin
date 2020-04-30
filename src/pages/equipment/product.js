import React, { Component } from 'react';
import { Table } from 'antd';
import Parse from 'parse'
const columns = [
    {
      title: '产品ID',
      dataIndex: 'id',
      key: 'id',
      render: text => <span>{text}</span>
    },
    {
      title: '产品名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '产品分组',
      dataIndex: 'devType',
      key: 'devType',
    },
    {
      title: '节点类型',
      key: 'nodeType',
      render:text=>{
        if(text==1){
          return <span>网关</span>
        }else{
          return <span>设备</span>
        }
      }
    },
    // {
    //   title: '添加时间',
    //   key: 'action',
    //   dataIndex:'action'
    // },
    // {
    //   title: '操作',
    //   key: 'action',
    //   dataIndex:'action'
    // },
  ];
class Product extends Component {
    constructor(props){
        super(props)
        this.state={
            start:0,
            pagesize:10,
            total:0,
            tableData:[]
        }
    }
    componentDidMount(){
      this.getProduct()
       
    }
    getProduct=()=>{
        var Product = Parse.Object.extend("Product");
        var product = new Parse.Query(Product);
        product.skip(this.state.start);
        product.limit(this.state.pagesize);
        product.notEqualTo("devType", "report");
        product.count().then(
          count => {
            this.setState({total:count});
            product.find().then(resultes => {
              if (resultes) {
                var arr=[]
                var obj={}
                resultes.map((item,index)=>{
                  for(var key in item.attributes){
                    obj[key] = item.attributes[key]
                  }
                  obj.id = item.id
                  obj.key=index
                  arr.push(obj)
                })
                this.setState({tableData:arr})
                console.log(this.state.tableData)
              }
            });
          },
          error => {
           
          }
        );
    }
    render() {
        return (
           <div>
              <Table columns={columns} dataSource={this.state.tableData} />
            </div>
          
        );
    }
}

export default Product;