import React from 'react'
import Index from './index'
import List from './List'
import Calendar from './Calendar'
import { HashRouter, Switch, Route } from 'react-router-dom';


export default class Vaccination extends React.Component {

    render() {

        return (
            <HashRouter>
                <Index>
                    <Switch>
                        <Route path='/dashBoard/vaccination/list' component={List}></Route>
                        <Route path='/dashBoard/vaccination/calendar' component={Calendar}></Route>
                    </Switch>
                </Index>
            </HashRouter>
        );
    }
}