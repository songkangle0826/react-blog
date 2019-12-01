import React,{ Component } from 'react';
import { connect } from 'react-redux';
import action from '../store/action'

class Login extends Component{

    constructor(props){
        super(props)
        console.log(this.props);
    }

    render(){
        return(
            <div>登录</div>
        )
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        getMenuList(){
            dispatch(action.menu.getMenuList())
        }

    }
}

export default connect((state)=>{
    return{
        ...state.menu
    }
},mapDispatchToProps)(Login);

