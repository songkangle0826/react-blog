import React,{ Component } from 'react';
import { connect } from 'react-redux';
import BreadNav from '../components/BreadNav';
import '../assets/css/about.less';

class About extends Component{
    constructor(props){
        super(props);
        this.state = {
            breadNav: ['关于我']
        };
    }
    
    render(){
        let { breadNav } = this.state
        return(
            <div className="app-about">
                <BreadNav breadNav={ breadNav } />
                <div className="about-info box-style">
                    <ul className="about-info-ul">
                        <li className="about-info-li">
                            <h3 className="about-info-li-title">个人资料: </h3>
                            <div className="about-info-li-text">路上~灵魂的自由者,男,95后,不知道什么星座。一个不着调的程序猿.</div>
                        </li>
                        <li className="about-info-li">
                            <h3 className="about-info-li-title">个人爱好: </h3>
                            <div className="about-info-li-text">旅行 ,爬山 ,读史书 ,写代码 ,产生奇奇怪怪的想法</div>
                        </li>
                        <li className="about-info-li">
                            <h3 className="about-info-li-title">个人简介: </h3>
                            <div className="about-info-li-text">这个家伙很懒,什么也没有留下~~有条不紊得奋斗前行,舒展从容的恬静生活.</div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(state=>{
    return{
        ...state
    }
})(About);