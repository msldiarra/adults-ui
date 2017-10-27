import React from 'react'
import Relay from 'react-relay'
import AppMessage from './common/AppMessage';
import CharsService from './service/CharsService';



class SearchByDefault extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            message : "",
            allFieldsGiven: false,
        } ;
    }

    onSearchByDefault(e) {

        e.preventDefault();

        this.setState({loading: true})

        let ln = CharsService.removeDiacritics(this.refs.lastName.value);
        let fn = CharsService.removeDiacritics(this.refs.firstName.value);
        let ffn = CharsService.removeDiacritics(this.refs.fatherFirstName.value);
        let mln = CharsService.removeDiacritics(this.refs.motherLastName.value);
        let mfn = CharsService.removeDiacritics(this.refs.motherFirstName.value);

        this.context.router.push({
            pathname: '/biography',
            query: Object.assign({}, this.props.location.query, {
                lastName: ln,
                firstName: fn,
                fatherFirstName: ffn,
                motherLastName: mln,
                motherFirstName: mfn
            } )
        })

    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleUserInput(e) {

        e.preventDefault();

        var valid = this.refs.lastName.value && this.refs.firstName.value &&
        this.refs.fatherFirstName.value && this.refs.motherLastName.value && this.refs.motherFirstName.value;
        this.setState({allFieldsGiven: valid});
    }

    render() {
        const text = this.state.message;
        const validationMessage = this.state.allFieldsGiven? '' : 'Tous les chamsp sont obligatoires';


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
                                    <h3 className={"blue-bold"}>Recherche par données biographiques</h3>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <div className={"col-md-12 opacity-54 text-center error"}>{validationMessage}</div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <label form="lastName" >Nom de famille</label>
                                    <div className="input-group col-md-12">
                                        <span className="input-group-addon"></span>
                                        <input type="text" ref="lastName" id="lastName" className="form-control" placeholder="Entrez le nom de famille" onKeyUp={this.handleUserInput.bind(this)} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <label form="firstName" >Prénoms</label>
                                    <div className="input-group col-md-12">
                                        <span className="input-group-addon"></span>
                                        <input type="text" ref="firstName" id="firstName" className="form-control" placeholder="Entrez les prénoms" onKeyUp={this.handleUserInput.bind(this)} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <label form="lastName" >Prénoms du père</label>
                                    <div className="input-group col-md-12">
                                        <span className="input-group-addon"></span>
                                        <input type="text" ref="fatherFirstName" id="fatherFirstName" className="form-control" placeholder="Entrez les prénoms du père" onKeyUp={this.handleUserInput.bind(this)} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <label form="lastName" >Nom de jeune fille de la mère</label>
                                    <div className="input-group col-md-12">
                                        <span className="input-group-addon"></span>
                                        <input type="text" ref="motherLastName" id="motherLastName" className="form-control" placeholder="Entrez le nom de jeune fille de la mère" onKeyUp={this.handleUserInput.bind(this)} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <label form="lastName" >Prénoms de la mère</label>
                                    <div className="input-group col-md-12">
                                        <span className="input-group-addon"></span>
                                        <input type="text" ref="motherFirstName" id="motherFirstName" className="form-control" placeholder="Entrez les prénoms de la mère" onKeyUp={this.handleUserInput.bind(this)} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <button type="submit" style={{width:'100%'}} className="btn btn-default" onClick={this.onSearchByDefault.bind(this)} disabled={!this.state.allFieldsGiven}>
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


SearchByDefault.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default Relay.createContainer(SearchByDefault, {

    fragments: {
        viewer: () => Relay.QL`
          fragment on Viewer {
               id,
          }
    `,
    }
});
