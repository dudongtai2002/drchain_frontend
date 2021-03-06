import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Dashboard from './pages/Dashboard/index'
import Record from './pages/Record/index'
import Details from './pages/Details/index'
import Wellness from './pages/Wellness/index'
import Account from './pages/Account/index'
import Promotion from './pages/Promotion/index'
import Vaccination from './pages/Vaccination/router'

export default class IRouter extends React.Component {

    render() {
        return (
            <HashRouter>
                <Switch>
                <Route path="/user">
                    <App>
                        <Route path="/user" render={()=>
                            <Admin>
                                <Switch>
                                    <Route path='/user/dashboard' component={Dashboard}></Route>
                                    <Route path='/user/record' component={Record}></Route>
                                    <Route path='/user/details' component={Details}></Route>
                                    <Route path='/user/wellness' component={Wellness}></Route>
                                    <Route path='/user/account' component={Account}></Route>
                                    <Route path='/user/vaccination' component={Vaccination}></Route>
                                </Switch>
                            </Admin>
                        }></Route>
                    </App>
                </Route>  
                <Route path="/" component={Promotion}></Route>
                </Switch>
                
                
            </HashRouter>
        )
    }
}