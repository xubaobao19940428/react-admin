

import Dashboard from '../pages/dashboard'
import Layout from '../component/Layout'
import Test1 from '../pages/test1'
import Test2 from '../pages/test1/test2.js'
import Test3 from '../pages/test1/test3.js'
import Product from '../pages/equipment/product'
import Devices from '../pages/equipment/devices'
import Channel from '../pages/equipment/channel'
import Project from '../pages/equipment/project'

const routes = [
    {
        path: '/app/layout',
        component: Layout,
        icon: 'user',
        name: 'layout',
    },
    {
        path: '/app/dashboard',
        name: '首页',
        icon: 'user',
        component: Dashboard,
    },
    {
        path: '/app/test',
        name: '一级菜单',
        icon: 'UserOutlined',
        children:[
            {
            path: '/app/test/test1',
            name: '二级菜单',
            icon: 'UserOutlined',
            component: Test1, 
            children:[
                {
                path: '/app/test/test1/test2',
                name: '三级菜单',
                icon: 'UserOutlined',
                component: Test2, 
                }
            ]
            },
            {
                path: '/app/test/test3',
                name: '二二级菜单',
                icon: 'UserOutlined',
                component: Test3, 
            }
            
        ]
    },
    {
        path: '/app/equipment',
        name: '设备管理',
        icon: 'UserOutlined',
        children:[
            {
                path: '/app/equipment/product',
                name: '产品',
                icon: 'UserOutlined',
                component: Product,    
            },
            {
                path: '/app/equipment/devices',
                name: '设备',
                icon: 'UserOutlined',
                component: Devices,    
            }
        ]
    },
    {
        path: '/app/equipbase',
        name: '平台概述',
        icon: 'UserOutlined',
        children:[
            {
                path: '/app/equipbase/channel',
                name: '通道管理',
                icon: 'UserOutlined',
                component: Channel,    
            },
            {
                path: '/app/equipbase/project',
                name: '工程管理',
                icon: 'UserOutlined',
                component: Project,    
            }
        ]
    },
];

export { routes }