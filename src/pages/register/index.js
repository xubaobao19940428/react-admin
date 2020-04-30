import React, { Component,useState  } from 'react';
import 'style-loader!css-loader!../../css/register.css'
import { Form, Input, Button, Checkbox } from 'antd';
import { Carousel } from 'antd';
import Parse from 'parse'
import Cookies from 'js-cookie'
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  
class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            username:"",
            password:'',
           
        }
        // this.input = React.createRef();
    }
    componentDidMount(){
      var _this=this
    }
    onFinish = values => {
          this.setState({username:values.username})
          this.setState({password:values.password})
          Parse.User.logIn(this.state.username,this.state.password).then(response=>{
            if(response){
                Cookies.set('sessionToken',response.attributes.sessionToken)
               this.props.history.push('/app/dashboard')
            }
        }).catch(error=>{
            console.log(error)
        })
        };
      
      onFinishFailed = errorInfo => {
          console.log('Failed:', errorInfo);
    }
    render() {
        return (
            <div className="register">
                <Carousel autoplay>
                    <div>
                    <h3>1
                        <img src={require('../../img/banner1.jpg')}></img>
                    </h3>
                    </div>
                    <div>
                    <h3>2<img src={require('../../img/banner2.jpg')}></img></h3>
                    </div>
                    <div>
                    <h3>3<img src={require('../../img/banner3.jpg')}></img></h3>
                    </div>
                    <div>
                    <h3>4<img src={require('../../img/banner4.jpg')}></img></h3>
                    </div>
                </Carousel>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        username:'John钱',
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    >
                    <Form.Item
                        label="用户名"
                        name="username"
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        ]}
                    >
                        <Input placeholder="请输入用户名" id="success" ref={this.input}/>
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
                    </Form>
                    {/* <input type="text" ref={this.input} /> */}
            </div>
        );
    }
}

export default Register;