import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Record from './pages/Record/index'
import Details from './pages/Details/index'
import Wellness from './pages/Wellness/index'
import Account from './pages/Account/index'
import Promotion from './pages/Promotion/index'

export default class IRouter extends React.Component {

    render() {
        return (
            <HashRouter>
                <Switch>
                <Route path="/dashBoard">
                    <App>
                        <Route path="/dashBoard" render={()=>
                            <Admin>
                                <Switch>
                                    <Route path='/dashBoard/record' component={Record}></Route>
                                    <Route path='/dashBoard/details' component={Details}></Route>
                                    <Route path='/dashBoard/wellness' component={Wellness}></Route>
                                    <Route path='/dashBoard/account' component={Account}></Route>
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