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
        path: '/css',
        title: 'CSS',
        icom: 'css',
        children: [{
            path: '/css/cssworld',
            title: 'css世界',
            icom: 'node',
            children: [],
        }],
    },
    {
        path: '/js',
        title: 'Javascript',
        icom: 'js',
        children: [{
            path: '/js/string',
            title: '字符串',
            icom: 'node',
            children: [],
        },{
            path: '/js/array',
            title: '数组',
            icom: 'node',
            children: [],
        },{
            path: '/js/object',
            title: '对象',
            icom: 'node',
            children: [],
        },{
            path: '/js/RegExp',
            title: '正则',
            icom: 'node',
            children: [],
        },{
            path: '/js/Math',
            title: 'Math',
            icom: 'node',
            children: [],
        },{
            path: '/js/exact',
            title: '其他',
            icom: 'node',
            children: [],
        }],
    },
    {
        path: '/typescript',
        title: 'Typescript',
        icom: 'js',
        children: [{
            path: '/typescript/string',
            title: '字符串',
            icom: 'node',
            children: [],
        },{
            path: '/typescript/array',
            title: '数组',
            icom: 'node',
            children: [],
        },{
            path: '/typescript/object',
            title: '对象',
            icom: 'node',
            children: [],
        },{
            path: '/typescript/RegExp',
            title: '正则',
            icom: 'node',
            children: [],
        },{
            path: '/typescript/Math',
            title: 'Math',
            icom: 'node',
            children: [],
        },{
            path: '/typescript/exact',
            title: '其他',
            icom: 'node',
            children: [],
        }],
    },
    {
        path: '/vues',
        title: 'Vue',
        icom: 'vues',
        children: [{
            path: '/vues/instruct',
            title: '指令',
            icom: 'node',
            children: [],
        },{
            path: '/node/cycle',
            title: '生命周期',
            icom: 'node',
            children: [],
        },{
            path: '/node/router',
            title: '路由',
            icom: 'node',
            children: [],
        },{
            path: '/node/vuex',
            title: 'vuex',
            icom: 'node',
            children: [],
        }],
    },
    {
        path: '/react',
        title: 'React',
        icom: 'vues',
        children: [{
            path: '/react/jsx',
            title: 'JSX',
            icom: 'node',
            children: [],
        },{
            path: '/react/cycle',
            title: '生命周期',
            icom: 'node',
            children: [],
        },{
            path: '/react/router',
            title: '路由',
            icom: 'node',
            children: [],
        },{
            path: '/react/redux',
            title: 'vuex',
            icom: 'node',
            children: [],
        }],
    },
    {
        path: '/node',
        title: 'Node',
        icom: 'node',
        children: [{
            path: '/node/buffer',
            title: 'Buffer',
            icom: 'node',
            children: [],
        },{
            path: '/node/fs',
            title: 'Fs',
            icom: 'node',
            children: [],
        },{
            path: '/node/stream',
            title: 'Stream',
            icom: 'node',
            children: [],
        },{
            path: '/node/eventEmitter',
            title: 'EventEmitter',
            icom: 'node',
            children: [],
        }],
    },
    {
        path: '/http',
        title: 'Http',
        icom: 'http',
        children: [{
            path: '/http/tcp',
            title: 'TCP/IP',
            icom: 'node',
            children: [],
        }],
    },
];

export default menu;