import React from 'react';
import { Link } from "react-router-dom";

export default class HeaderComponent extends React.Component {
    render() {
        return (
            <div className="header">
                <h4 className="title">Mi CV</h4>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/cvs">CVs</Link>
                    </li>
                </ul >
            </div >
        );
    }
}