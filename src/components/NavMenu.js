import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd';


class NavMenu extends Component{
    
    
    // 单级
    returnMenuItem = (item)=>{
        return(
            <Menu.Item key={ item.path }>
                <Link to={ item.path }>
                    <Icon type="pie-chart" />
                    <span>{ item.title }</span>
                </Link>
            </Menu.Item>
        )
    }
    
    // 多级
    returnSubMenuItem = (item)=>{
        return (
            <Menu.SubMenu
                key={ item.path }
                title={
                    <span>
                        <Icon type="mail" />
                        <span>{ item.title }</span>
                    </span>
                }
            >
                {
                    item.children.map(itemChild=>{
                        return itemChild.children.length === 0 ? this.returnMenuItem(itemChild) : this.returnSubMenuItem(itemChild)
                    })
                }
            </Menu.SubMenu>
        )
    }
    
    
    
    render(){
        let menu = this.props.menu;
        return(
            <div className="app-menu">
                <Menu
                    mode="inline"
                    theme="dark"
                >
                    {
                        menu.map(item=>{
                            return item.children.length === 0 ? this.returnMenuItem(item) : this.returnSubMenuItem(item);
                        })
                    }
                </Menu>
            </div>
        )
    }
}

export default connect(state=>{
    return {
        ...state.menu
    }
})(NavMenu);