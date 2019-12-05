/*
* 这里是路由
* */
// 异步加载
import AsyncComponent from '../components/AsyncComponent';

// 首页
const Index = AsyncComponent(()=>import(/* webpackChunkName: "Layout" */'../pages/Index.js'));

// 关于我
const About = AsyncComponent(()=>import(/* webpackChunkName: "Layout" */'../pages/About.js'));




const routs = [
    { path:'/index',name:'首页',exact: true, component: Index },
    { path:'/about',name:'关于我',exact: false, component: About },
];


export default routs;
