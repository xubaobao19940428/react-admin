import React from 'react'
import ReactDOM from 'react-dom'
import './component/SvgIcon/icons.js'
import Login from './pages/login'
import Register from './pages/register'
import SiderDemo from './pages/sidBar'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'style-loader!css-loader!./index.css'
import {Parse} from 'parse'
Parse.initialize("shuwa", "webapi", "HZlora2017");
    // Parse.serverURL = "http://148.70.107.251:5080/iotapi";
    // Parse.serverURL = "http://ci.iotn2n.com:5080/iotapi";
    // Parse.serverURL = "http://192.168.2.13:5080/iotapi";//莫易的库
    // Parse.serverURL = "http://132.232.121.164:5080/iotapi";//伟星的库
    // Parse.serverURL = "http://148.70.50.192:5080/iotapi"
    // Parse.serverURL = "http://prod.iotn2n.com/iotapi";//线上环境
    // Parse.serverURL = "http://license.iotn2n.com:5080/iotapi";//建辉环境
    // Parse.serverURL = "http://192.168.2.26:5080/iotapi"
    Parse.serverURL="http://cad.iotn2n.com:5080/iotapi"
// Parse.serverURL = this.$globalConfig.serverURL;
ReactDOM.render(
   
 <Router>

    <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/dashboard" push />} />
        <Route path="/login" component={Register}></Route>
        <Route path="/app" component={SiderDemo}></Route>
        <Route path="/register" component={Login} />
    </Switch>
    </Router>,

    document.getElementById('root')
)
// ServiceWorker()