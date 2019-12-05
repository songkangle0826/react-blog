import React,{ Component } from 'react';
import { Menu,Dropdown,Icon } from 'antd';

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="javascript:;">关于我</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="javascript:;">退出</a>
        </Menu.Item>
    </Menu>
);


class Header extends Component{
    render(){
        return(
            <div className="app-header">
                <div className="header-logo"><img src="" alt=""/></div>
                <div className="header-info">
                    <div style={ {width:'40px',height:'40px',background:'red'} }><img src="" alt=""/></div>
                    <Dropdown overlay={menu} overlayStyle={{width:'200px',background:'#fff','top':'60px','display':'felx'}}>
                        <a className="ant-dropdown-link" href="#">
                            <Icon type="down" />
                        </a>
                    </Dropdown>
                </div>
                
            </div>
        )
    }
}

export default Header;