import React from 'react'
import Relay from 'react-relay'
import AppMessage from './common/AppMessage';


class SearchByRAVEC extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message : ""
        } ;
    }

    onSearchByRAVEC(e) {

        e.preventDefault();
        console.log(this.refs.receipt.value);
        this.context.router.push('/receipt/' + this.refs.receipt.value);
    }


    render() {

        const text = this.state.message;

        return (
            <div className="">
                <div className="page-header col-md-6 center-block row">

                </div>

                {text? <AppMessage message={text} /> : ''}

                <form className="form-horizontal padding-20" name="add-property">
                    <div className="page-content row">
                        <div className="col-md-6 center-block">
                            <div className="form-group">
                                <div className="col-md-12 text-center">
                                    <h3 className={"blue-bold"}>Recherche par numéro Récipissé RAVEC</h3>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <div className="input-group col-md-12">
                                        <span className="input-group-addon"></span>
                                        <input type="text" ref="receipt" id="receipt" className="form-control" placeholder="Numéro Récipissé RAVEC" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <inupt type="submit" style={{width:'100%'}}className="btn btn-default" onClick={this.onSearchByRAVEC.bind(this)}><b>Lancer la recherche</b></inupt>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


SearchByRAVEC.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default Relay.createContainer(SearchByRAVEC, {

    fragments: {
        viewer: () => Relay.QL`
          fragment on Viewer {
               id
          }
    `,
    }
});
