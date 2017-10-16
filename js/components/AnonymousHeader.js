import React from 'react';
import Relay from 'react-relay';
import {Link} from 'react-router';

export default class AnonymousHeader extends React.Component {

    render() {

        let header =
                <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
                    <div className="container-fluid">
                        <div className="navbar-header">

                            <a className="navbar-brand" href="#">CTDEC</a>
                        </div>
                    </div>
                </nav>


        return header;
    }
}
