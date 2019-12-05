import React,{ Component } from 'react';
import { connect } from 'react-redux';

class About extends Component{
    
    constructor(props){
        super(props);
        this.state = {};
    }
    
    
    render(){
        return(
            <div className="app-about">
                这里是关于我
            </div>
        )
    }
}

export default connect(state=>{
    return{
        ...state
    }
})(About);