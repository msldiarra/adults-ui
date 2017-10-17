import React from 'react'
import Relay from 'react-relay'
import AppMessage from './common/AppMessage';


class SearchByNINA extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message : ""
        } ;
    }


    onSearchByNINA(e) {

        e.preventDefault();
        console.log(this.refs.nina.value);
        this.context.router.push('/nina/' + this.refs.nina.value);
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
                                    <h3>Recherche par numéro NINA</h3>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <div className="input-group col-md-12">
                                        <span className="input-group-addon"></span>
                                        <input type="text" ref="nina" id="nina" className="form-control" placeholder="Numéro NINA" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <inupt type="submit" style={{width:'100%'}}className="btn btn-default" onClick={this.onSearchByNINA.bind(this)}><b>Lancer la recherche</b></inupt>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


SearchByNINA.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default Relay.createContainer(SearchByNINA, {

    fragments: {
        viewer: () => Relay.QL`
          fragment on Viewer {
               id
          }
    `,
    }
});
