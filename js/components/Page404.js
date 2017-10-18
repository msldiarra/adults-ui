import React from 'react'
import Relay from 'react-relay'
import AppMessage from './common/AppMessage';


export default class Page404 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message : "",
            document : 0
        } ;
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const text = this.state.message;


        return (
            <div className="">
                <div className="page-header col-md-6 center-block row">

                </div>
                <div className="page-header col-md-6 center-block row">
                </div>
                <div className="page-content row">
                    <div className="col-md-6 center-block text-center opacity-54">
                        <img src={"/images/oops.jpg"} width={"90px"} height={"90px"}/>
                        <h1>404</h1>
                        <h2>Cette page n'existe pas.</h2>
                    </div>
                </div>
            </div>

        );
    }
}
