import React from 'react';
import HeaderComponent from './header.jsx';
import { Link, BrowserRouter, Route, Switch, StaticRouter, Redirect } from "react-router-dom";
import CVListComponent from './cv-list.jsx'
import IndexLayout from './index.jsx'


export default class LayoutComponent extends React.Component {
    render() {
        const app = (
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

        if (typeof window === 'undefined') {
            return (
                <StaticRouter
                    context={this.props.context}
                    location={this.props.location}
                >
                    {app}
                </StaticRouter>
            );
        }
        return <BrowserRouter>{app}</BrowserRouter>;
    }


}