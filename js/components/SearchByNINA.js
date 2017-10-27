import React from 'react'
import Relay from 'react-relay'
import AppMessage from './common/AppMessage';


class SearchByNINA extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            message : "",
            pinValid: false,
        } ;
    }


    onSearchByNINA(e) {
        e.preventDefault();
        this.setState({loading: true})
        this.context.router.push('/nina/' + this.refs.nina.value);
    }

    handleUserInput(e) {
        e.preventDefault();
        this.setState({pinValid: e.target.value.match(/^[\w]{15}$/i)});
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }





    render() {

        const text = this.state.message;
        const validationMessage = this.state.pinValid? '' : 'Entrer le numéro NINA';

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
                                    <h3 className={"blue-bold"}>Recherche par NINA</h3>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <div className={"col-md-12 opacity-54 text-center error"}>{validationMessage}</div>
                                    <div className="input-group col-md-12">
                                        <span className="input-group-addon"></span>
                                        <input type="text" ref="nina" id="nina" className="form-control" placeholder="Numéro NINA" onKeyUp={this.handleUserInput.bind(this)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <button type="submit" style={{width:'100%'}} className="btn btn-default" onClick={this.onSearchByNINA.bind(this)} disabled={!this.state.pinValid}>
                                        {this.state.loading && <div className="text-center"><i className="fa fa-2x fa-spinner" /></div> }
                                        {!this.state.loading && <b>Lancer la recherche</b>}
                                    </button>
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
