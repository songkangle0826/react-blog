import React,{ Component } from 'react';
import { Menu,Dropdown,Icon } from 'antd';
import userhead from '../assets/image/userhead-img.jpeg'
import logo from '../assets/image/logo.png';

const menu = (
    <Menu>
        <Menu.Item>
            <span>关于我</span>
        </Menu.Item>
        <Menu.Item>
            <span>退出</span>
        </Menu.Item>
    </Menu>
);


class Header extends Component{
    render(){
        return(
            <div className="app-header">
                <div className="header-logo"><img src={ logo } alt=""/></div>
                <div className="header-info">
                    <div className="header-info-img" style={ {width:'40px',height:'40px'} }><img src={ userhead } alt=""/></div>
                    <Dropdown overlay={menu} overlayStyle={{width:'200px',background:'#fff','top':'100px'}}>
                        <a className="ant-dropdown-link" href="#">
                            <span style={ { margin:'0 10px 0 20px' } }>路上,灵魂的自由者</span><Icon  type="down" />
                        </a>
                    </Dropdown>
                </div>
                
            </div>
        )
    }
}

export default Header;