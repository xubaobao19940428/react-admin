import React, { Component } from 'react';
import 'style-loader!css-loader!../../css/register.css'

class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            username:"",
            pass:'',  
        }
        this.username=''
        this.password=''
    }
    tap(){
        this.setState({username:this.refs.iphone.value})
    }
    tap1(){
        this.setState({pass:this.refs.pass.value})
    }
    componentDidMount(){
      var _this=this
       
    }
    subLogin=()=>{
        console.log(111)
       
    }
    render() {
        return (
            <div className="login">
               <div className="register" >
                    <div className="register1">
                        <div className="zhuce">
                            <div className="zclx zlogin">
                               用户登录
                            </div>
                            <div className="ke">
                            <div className="iphone">
                                用户名：
                                <input type="text" placeholder="请输入你的用户名" ref="iphone" value={this.username} onChange={this.tap.bind(this)}/>
                            </div>
                           
                            <div className="pass">
                                登录密码：
                                <input type="text" placeholder="请输入你的登录密码" ref="pass" value={this.password} onChange={this.tap1.bind(this)}/>
                            </div>
                            </div>
                            <div className="tiaokuan">
                            <input type="radio"/>我已同意<span>《服务协议》</span>和<span>《隐私条款》</span>
                            </div>
                            <button className="btn">登录</button>
                        </div>
                    </div>
                   
              </div>
            </div>
        );
    }
}

export default Login;