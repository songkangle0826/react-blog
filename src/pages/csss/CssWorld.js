import React,{ Component } from 'react';
import { connect } from 'react-redux';
import BreadNav from '../../components/BreadNav';
import ContentArea from '../../components/ContentArea';


class CssWorld extends Component{
    constructor(props){
        super(props);
        this.state = {
            breadNav: ['CSS世界'],
            contentList: [{
                id: 1,
                header: 'cssshijie',
                text: '<pre>111111111</pre>',
            }],
        };
    }
    render(){
        let { breadNav,contentList } = this.state
        return (
            <div className="app-css">
                <BreadNav breadNav={ breadNav } />
                <ContentArea contentList={ contentList } />
            </div>
        )
    }
}

export default connect()(CssWorld);