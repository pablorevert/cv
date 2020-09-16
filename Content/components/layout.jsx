import React from 'react';
import HeaderComponent from './header.jsx';
import MenuComponent from './menu.jsx';
import { Link, BrowserRouter, Route, Switch, StaticRouter, Redirect } from "react-router-dom";
import CVComponent from './cv.jsx';
import CVListComponent from './cv-list.jsx';
import IndexLayout from './index.jsx';

export default class LayoutComponent extends React.Component {
    render() {
        const app = (
            <div className="container">
                <HeaderComponent />
                <MenuComponent />
                <div className="content">
                    <Switch>
                        <Route path="/cv/:id" component={CVComponent} />
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