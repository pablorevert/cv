import React from 'react';
import { Router, Route, Switch, hasHistory } from "react-router-dom";
import CVListComponent from './cv-list.jsx'
import IndexLayout from './index.jsx'

export default class MenuComponent extends React.Component {
    render() {
        return (
            <div className="menu">
                <Router history={hasHistory}>
                    <Switch>
                        <Route path="/cvList" component={CVListComponent} />
                        <Route path="/" component={IndexLayout} />
                    </Switch>
                </Router>
            </div>
        );
    }
}
