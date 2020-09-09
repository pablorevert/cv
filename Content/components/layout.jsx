import React from 'react';
import HeaderComponent from './header.jsx';
import { Router, Route, Switch, hasHistory } from "react-router-dom";
import CVListComponent from './cv-list.jsx'
import IndexLayout from './index.jsx'


export default class LayoutComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <HeaderComponent />                
                <div className="content">
                        <Switch>
                            <Route path="/cvList" component={CVListComponent} />
                            <Route path="/" component={IndexLayout} />
                        </Switch>
                </div>
            </div>
        );
    }

    
}