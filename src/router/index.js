/*
* 这里是路由
* */
// 异步加载
import AsyncComponent from '../components/AsyncComponent';

// 首页
const Index = AsyncComponent(()=>import(/* webpackChunkName: "Layout" */'../pages/Index.js'));

// 关于我
const About = AsyncComponent(()=>import(/* webpackChunkName: "Layout" */'../pages/About.js'));

// CSS部分
const CssWorld = AsyncComponent(()=>import(/* webpackChunkName: "Layout" */'../pages/csss/CssWorld.js'));




const routs = [
    { path:'/index',name:'首页',exact: true, component: Index },
    { path:'/about',name:'关于我',exact: false, component: About },
    { path:'/css/cssworld',name:'css世界',exact: false, component: CssWorld },
];


export default routs;
