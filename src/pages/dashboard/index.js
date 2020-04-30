import React, { Component } from 'react';
import Test from './test'
import { Progress } from 'antd';
import { Carousel } from 'antd';

import SvgIcon from '../../component/SvgIcon';
//函数可以写在外部，然后通过Dom元素去渲染
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
    }
function App() {
    return (
        <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
        </div>
    );
}
function IsLogin(){
  return <div>我已经登录了</div>
}
function NoLogin(){
  return <div>请登录</div>
}
function ChangeLogin(props){
  var isloglogin = props.isLogin
  if(isloglogin){
    return <IsLogin></IsLogin>
  }else{
    return <NoLogin></NoLogin>
  }
}
function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        {/* <div className="Comment-date">
          {formatDate(props.date)}
        </div> */}
      </div>
    );
  }
  //条件渲染
  function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
      <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 &&
          <h2>
            You have {unreadMessages.length} unread messages.
          </h2>
        }
      </div>
    );
  }
  //列表渲染时不正确使用key
  // function ListItem(props) {
  //   const value = props.value;
  //   return (
  //     // 错误！你不需要在这里指定 key：
  //     <li key={value.toString()}>
  //       {value}
  //     </li>
  //   );
  // }
  
  // function NumberList(props) {
  //   const numbers = props.numbers;
  //   const listItems = numbers.map((number) =>
  //     // 错误！元素的 key 应该在这里指定：
  //     <ListItem value={number} />
  //   );
  //   return (
  //     <ul>
  //       {listItems}
  //     </ul>
  //   );
  // }
  //正确使用key
  function ListItem(props) {
    // 正确！这里不需要指定 key：
    return <li>{props.value}</li>;
  }
  
  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      // 正确！key 应该在数组的上下文中被指定
      <ListItem key={number.toString()}              value={number} />
  
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
  function BoilingVerdict(props){
    if(props.celsius>=100){
      return <div>水，烧开了</div>
    }else if(props.celsius>=50&&props.celsius<100){
      return <div>水，半开不开状态</div>
    }else{
      return <div>水，正在烧</div>
    }
  }
  const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };
  function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
  class TemperatureInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      this.props.onTemperatureChange(e.target.value)
    }
  
    render() {
      const temperature = this.props.temperature;
      const scale = this.props.scale;
      return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input value={temperature} onChange={this.handleChange} />
        </fieldset>
      );
    }
  }
class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state={
            user:{
                firstName: 'Harper',
                lastName:'Perez'
            },
            name:'1111',
            isToggleOn: true,
            time: new Date().toLocaleTimeString(),
            value:'',
            temperature:0,
            scale:'c',
            log:false
        }
        this.toggleContainer =React.createRef()
        this.timeOutId = null
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }
    formatName(user) {
        return user.firstName + ' ' +user.lastName;
      }
      componentDidMount() {
        
        // this.timer = window.setInterval(()=>{
        //     this.tick()
        // },1000)
    }
  
    componentWillUnmount() {
        window.clearInterval(this.timer)
    }
    Foo=(data)=> {
        
        this.setState({'name': data});
       
        setTimeout(() => {
            console.log(this.state)  
        }, 1000);
       
      }
    tick() {
        this.setState({
          time: new Date().toLocaleTimeString()
        });
      }
      changeChildren=()=>{
         this.setState({
             'name':'222'
         })
      }
      handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
      }
      toggle() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
        
      }
      handleChange=(event)=> {
        this.setState({value: event.target.value});
      }
      handleChangeValue=(event)=> {
        this.setState({temperature: event.target.value});
      }
      handleSubmit=(event)=> {
        alert('提交的名字: ' + this.state.value);
        event.preventDefault();
      }
      //二者是相等的
    //   toggle=()=>{
    //     this.setState(state => ({
    //         isToggleOn: !state.isToggleOn
    //       }));
    //   }
    handleCelsiusChange(temperature) {
    
      this.setState({scale: 'c', temperature:temperature});
    //   setTimeout(() => {
    //     console.log(this.state)
    // }, 1000);
    }
  
    handleFahrenheitChange(temperature) {
      this.setState({scale: 'f', temperature:temperature});
    }
    onclickLog=()=>{
      this.setState(currentstate=>({
        log:!currentstate.log
      }))
    }
    buttonFocus=()=>{
      console.log('获取焦点')
      clearTimeout(this.timeOutId)
    }
    buttonBlur=()=>{
      this.timeOutId = setTimeout(() => {
        this.setState(currentstate=>({
          log:false
        }))
      },100);
    }
    render() {
      
      const messages = ['React', 'Re: React', 'Re:Re: React'];
        const element1 = (
            <div>
            <h1>{this.state.name}</h1>
            <h2>It is {this.state.time}.</h2>
            
            </div>
        )
        const element2=(
            <Comment text="2" author={{name:'222'}} date="2020年"/>
        )
        const loginInformation=<ChangeLogin isLogin={this.state.isToggleOn}></ChangeLogin>
        const numbers = [1, 2, 3, 4, 5];
        const listItems = numbers.map((number,index) =>
          <li key={index}>{number}</li>
        );
        const element = <App name="sear"></App>
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
               <Carousel autoplay>
               <div>
                    <h3>
                        <img src={require('@/img/banner1.jpg')}></img>
                    </h3>
                    </div>
                    <div>
                    <h3><img src={require('@/img/banner2.jpg')}></img></h3>
                    </div>
                    <div>
                    <h3><img src={require('@/img/banner3.jpg')}></img></h3>
                    </div>
                    <div>
                    <h3><img src={require('@/img/banner4.jpg')}></img></h3>
                    </div>
                </Carousel>
                <div className="dashboard">
                    {element1}
                     {this.formatName(this.state.user)}
                    {element}
                    {element2}
                </div>
                {/* 父子组件之间的通信，父到子通过props传参 子到父通过事件调用在子组件中调用方法然后通过this.props.DOM（props）参数('要传的值') */}
                <button onClick={this.changeChildren}>我要向子组件传值</button>
                {/* 这个事件证明组件之间的独立性，相互不受影响 */}
                <Test test={{name:this.state.name}} data={this.Foo}></Test>
                <Test test={{name:'我是不变的子组件'}} data={this.Foo}></Test>
                {/* 阻止默认事件 */}
                <a href="#" onClick={this.handleClick}>阻止默认事件</a>
                {/* 箭头函数和在DOM元素上使用bind改变this指向是一样的 */}
                <button onClick={this.toggle.bind(this)}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                {loginInformation}
                <Mailbox unreadMessages={messages} />
                <div>
                The user is <b>{this.state.isToggleOn ? 'currently' : 'not'}</b> logged in.
                
              </div>
              <ul>{listItems}</ul>
              <NumberList numbers={numbers} />
              {/* 表单 */}
              <form onSubmit={this.handleSubmit}>
                <label>
                  名字:
                  <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="提交" />
              </form>
              {/* 状态提升 */}
              <input value={this.state.temperature} onChange={this.handleChangeValue} type="number"></input>
              <BoilingVerdict celsius={this.state.temperature}></BoilingVerdict>
              <Progress percent={this.state.temperature} size="small" />
              <TemperatureInput scale="c"
              temperature={celsius}
              onTemperatureChange={this.handleCelsiusChange} />
                  <TemperatureInput scale="f" 
              temperature={fahrenheit}
              onTemperatureChange={this.handleFahrenheitChange}/>
              <div onFocus={this.buttonFocus} onBlur={this.buttonBlur}>
                <button onClick={this.onclickLog} aria-expanded={this.state.log}  aria-haspopup="true">show log</button>
               
                {
                  this.state.log &&(
                    <ul style={{"width":'100px',"height":"200px","position":"absolute","background":"red","left":"100px"}}>
                      <li>show log 1</li>
                      <li>show log 2</li>
                      <li>show log 3</li>
                    </ul>
                  )
                }
              </div>
              <div>
              <button >remove log</button>
            
              </div>
              <div>
              <button >remove log</button>
              <SvgIcon iconClass="user"></SvgIcon>
              </div>
              
      </div>
        );
    }
}

export default Dashboard;