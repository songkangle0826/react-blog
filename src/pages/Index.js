import React,{ Component } from 'react';
import { connect } from 'react-redux';

class Index extends Component{
    render(){
        return(
            <div className="app-index">
                这里是首页
            </div>
        )
    }
}

export default connect()(Index);