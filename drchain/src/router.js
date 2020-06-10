import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Record from './pages/Record/index'
<<<<<<< HEAD
import Details from './pages/Details/index'
=======
import Wellness from './pages/Wellness/index'
import Account from './pages/Account/index'
>>>>>>> 03c660bb8fe778833b10e1e0104a53e3d5bf13dc
export default class IRouter extends React.Component {

    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Switch>
                                <Route path='/admin/record' component={Record}></Route>
<<<<<<< HEAD
                                <Route path='/admin/details' component={Details}></Route>
=======
                                <Route path='/admin/wellness' component={Wellness}></Route>
                                <Route path='/admin/account' component={Account}></Route>
>>>>>>> 03c660bb8fe778833b10e1e0104a53e3d5bf13dc
                            </Switch>
                        </Admin>
                    }></Route>
                </App>
            </HashRouter>
        )
    }
}