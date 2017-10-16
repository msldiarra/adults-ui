import React from 'react';
import Relay from 'react-relay';
import {Link} from 'react-router';

export default class Header extends React.Component {

    render() {


        let header =
                <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target=".navbar-ex1-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href={'/#/admin'}>
                                <small>{this.props.user ? 'CTDEC (' + this.props.user.customer + ')' : 'CTDEC' }</small>
                            </a>
                        </div>
                    </div>
                </nav>


        return header;
    }
}
