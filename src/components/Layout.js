import React,{ Component } from 'react';
import { Route,Rediect,Switch,withRouter } from 'react-router-dom';

// 头部组件
import Header from './Header';
import NavMenu from './NavMenu'




class Layout extends Component{
    render(){
        return(
            <div className="app-container">
                {/* 头部 */}
                <Header  />
                <div className="app-middle">
                    <NavMenu  />
                    <div className="app-content padding20">
                        这里是内容区域<br/>
                        这里是内容区域<br/>
                        这里是内容区域<br/>
                        这里是内容区域<br/>
                        这里是内容区域<br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        这里是内容区域<br/>
                        这里是内容区域<br/>
                        这里是内容区域<br/>
                        这里是内容区域<br/>
                        这里是内容区域<br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        这里是内容区域<br/>
                        这里是内容区域<br/>
                        这里是内容区域<br/>
                        这里是内容区域<br/>
                        这里是内容区域<br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        这里是内容区域<br/>
                        这里是内容区域<br/>
                        这里是内容区域<br/>
                        这里是内容区域<br/>
                        这里是内容区域<br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        这里是内容区域<br/>
                        这里是内容区域<br/>
                        这里是内容区域<br/>
                        这里是内容区域<br/>
                        这里是内容区域<br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout;