import React,{Component} from 'react'

class Test extends Component{
    constructor(props){
        super(props)
         this.state={
             test:'子组件'
         }
    }
    componentDidMount(){
        this.setState({'test':this.props.test.name})
        console.log(this.state.test)
    }
    handleClick = () => {
        this.props.data("zizhoutong");
        console.log(this.props.data)
    };
    render(){
        return(
           
            <div>
                 1111
                 <p>{this.props.test.name}</p>
                 <button onClick={this.handleClick}>change parent</button>
            </div>
        )
    }
}
export default Test