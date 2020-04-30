import React, { Component } from 'react';
// import SvgIcon from '../../component/SvgICon/index';

class Test3 extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    componentDidMount(){
      var _this=this
       
    }
    render() {
        return (
           <div>
                <h1 >
                    这是二级菜单
                    中间包含跳转的二级菜单
                   
                </h1>
                {/* <SvgIcon iconClass="user"></SvgIcon> */}
            </div>
          
        );
    }
}

export default Test3;