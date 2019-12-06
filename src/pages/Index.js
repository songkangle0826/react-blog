import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Drawer, Button } from 'antd';
import BreadNav from '../components/BreadNav';


class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            breadNav: ['首页'],
            drawer: {
                visibleleft: false,
                visibleright: false,
            },
        };
    }
    
    showDrawer = (value) => {
        let drawer = null;
        if(value=='left'){
            drawer = {
                visibleleft: true,
                visibleright: false,
            }
        }else{
            drawer = {
                visibleleft: false,
                visibleright: true,
            }
        }
        this.setState({
            drawer:drawer
        });
    };
    onClose = (e) => {
        let drawer = {
            visibleleft: false,
            visibleright: false,
        }
        this.setState({
            drawer: drawer,
        });
    };
    
    
    render(){
        let { breadNav,drawer } = this.state;
        return(
            <div className="app-index">
                <BreadNav breadNav={breadNav} />
                <div className="app-index-content box-style">
                    <pre style={{fontSize:'16px',color: '#000'}}>
                        人这短短的一生<br/>
                        不妨大胆一点<br/>
                        去攀一座山<br/>
                        去看一次海<br/>
                        去追一个梦<br/>
                    </pre>
                </div>
    
                <div className="app-index-content box-style" style={ { display:'flex',justifyContent: 'space-between' } }>
                    <Button type="primary" onClick={()=>{this.showDrawer('left') }}>左边</Button>
                    <Button type="primary" onClick={()=>{this.showDrawer('right') }}>右边</Button>
                </div>
                
                <Drawer
                    title="左边的抽屉"
                    placement="left"
                    closable={false}
                    onClose={ this.onClose }
                    visible={drawer.visibleleft }
                >
                    <p>独立之精神</p>
                </Drawer>
    
                <Drawer
                    title="右边的抽屉"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={drawer.visibleright }
                >
                    <p>自由之思想</p>
                </Drawer>
                
            </div>
        )
    }
}

export default connect()(Index);