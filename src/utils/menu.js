/*
 * 项目与后台交互的菜单,由后端返回
*/

let menu = [
    {
        path: '/index',
        title: '首页',
        icom: 'home',
        children: [],
    },
    {
        path: '/about',
        title: '关于我',
        icom: 'about',
        children: [],
    },
    {
        path: '/node',
        title: 'node',
        icom: 'node',
        children: [{
            path: '/node/list',
            title: 'node中的事情',
            icom: 'node',
            children: [],
        },{
            path: '/node/fs',
            title: 'node中的fs',
            icom: 'node',
            children: [],
        }],
    },
];

export default menu;