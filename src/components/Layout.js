import React,{ Component } from 'react';
import { Route,Switch,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import action from '../store/action';


// 头部组件
import Header from './Header';
// 左侧组件
import NavMenu from './NavMenu';
// 核心组件
import routs from '../router/index';

// 引入菜单文件
import menu from '../utils/menu';




class Layout extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    
    componentDidMount(){
        setTimeout(()=>{
            this.props.getMenuList(menu);
        },1000)
        
    }
    render(){
        return(
            <div className="app-container">
                {/* 头部 */}
                <Header  />
                <div className="app-middle">
                    <NavMenu  />
                    <div className="app-content padding20">
                        <Switch>
                            {
                                routs.map((item)=>{
                                    return (
                                        <Route
                                            path={ item.path }
                                            exact={ item.exact }
                                            key={ item.path }
                                            render={ (props)=>{
                                                    return(
                                                        <item.component {...props} />
                                                    )
                                                }
                                            }
                                        >
                                        </Route>
                                    )
                                })
                            }
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(
    connect(state=>{
        return {
            ...state
        }
    },action.menu)(Layout)
);