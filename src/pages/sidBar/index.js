import { Link,Route} from 'react-router-dom'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react'
import Cookies from 'js-cookie'
import { routes } from '../../routes';
import 'style-loader!css-loader!../../css/sider.css'
import SvgIcon from '../../component/SvgIcon'
const { Header, Content, Sider } = Layout;

const { SubMenu } = Menu

class SiderDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      route: routes,
      collapsed: false,
    }
  }
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  componentWillMount(){
    var sessionToken = Cookies.get('sessionToken')
    if(!sessionToken){
      this.props.history.push('/login')
    }
  }
  componentDidMount() {
    
  }
  ChildrenMenu = (menu) => {
    if (menu.children) {
      return menu.children.map(item => {
        if (item.children) {
          return <SubMenu
            key={item.name}
            title={
              <span>
               {item.icon ?  <SvgIcon iconClass={item.icon}/> :''}
                <span>{item.name}</span>
              </span>
            }
          >
            {this.ChildrenMenu(item)}
          </SubMenu>
        } else {
          return <Menu.Item key={item.name}>
            {item.icon ?  <SvgIcon iconClass={item.icon}/> :''}
            <Link to={item.path}>{item.name}</Link>
            </Menu.Item>
        }
      })
    } else {
      return ''
    }
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  mapRoutes=(routes)=>{
   
    if(routes.children){
       return routes.children.map(item=>{
            return <Route path={item.path} component={item.component} key={item.name}>
              {this.mapRoutes(item)}
            </Route>
        })
    } else{
      return <Route path={routes.path} component={routes.component} key={routes.name}></Route>
    }
   
      
   
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {
              routes.map(item => {
                if (item.children) {
                  return <SubMenu
                    key={item.name}
                    title={
                      <span>
                       {item.icon ?  <SvgIcon iconClass={item.icon}/> :''}
                        <span>{item.name}</span>
                      </span>
                    }
                  >
                    {this.ChildrenMenu(item)}
                  </SubMenu>
                } else {
                  return <Menu.Item key={item.name}>
                    {item.icon ?  <SvgIcon iconClass={item.icon}/> :''}
                    <Link to={item.path}>{item.name}</Link>
                  </Menu.Item>
                }

              })
            }
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ paddingLeft:30  }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: this.toggle,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {routes.map(item=>{
            if(item.children){
              return <Route path={item.path} component={item.component} key={item.name}>
               
                  {this.mapRoutes(item)}
              
              </Route>
            }else{
              return <Route path={item.path} component={item.component} key={item.name}></Route>
            }
            
          })}
          
        </Content>
      </Layout>
    </Layout>
    );
  }
}

export default SiderDemo;