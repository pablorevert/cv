import React from 'react';
import HeaderComponent from './header.jsx';
import { Link, BrowserRouter, Route, Switch, StaticRouter, Redirect } from "react-router-dom";
import CvPage from './pages/cvs.jsx'
import IndexLayout from './index.jsx'
import { ThemeProvider } from 'styled-components';
import theme from './themes/aqua.jsx'


export default class LayoutComponent extends React.Component {
    render() {
        const app = (
            <div className="container">
                <HeaderComponent />
                <ThemeProvider theme={theme}>
                    <div className="content">
                        <Switch>
                            <Route path="/cvs" component={CvPage} />
                            <Route path="/" component={IndexLayout} />
                        </Switch>
                    </div>
                </ThemeProvider>
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