import React,{ Component } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';


class App extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/' render={ ()=>{
                        return <Redirect to='index' />}
                     } />
                    <Route path='/login'  component={ Login } />
                    <Route path='/'  component={ Login } />
                </Switch>
            </Router>
        )
    }
}

export default App;