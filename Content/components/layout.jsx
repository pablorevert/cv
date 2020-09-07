import React from 'react';
import MenuComponent from './menu.jsx';
import HeaderComponent from './header.jsx';
import CVListComponent from './cv-list.jsx'

export default class LayoutComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <MenuComponent />
                <div className="content">
                    <HeaderComponent />
                    <div className="body">
                        <h4 className="commentBox"></h4>
                        <CVListComponent />
                    </div>
                </div>
            </div>
        );
    }
}