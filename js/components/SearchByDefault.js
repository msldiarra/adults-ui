import React from 'react'
import Relay from 'react-relay'
import AppMessage from './common/AppMessage';



class SearchByDefault extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message : ""
        } ;
    }

    onSearchByDefault(e) {

        e.preventDefault();

        console.log(this.refs.lastName.value);
        console.log(this.refs.firstName.value);
        console.log(this.refs.fatherFirstName.value);
        console.log(this.refs.motherLastName.value);
        console.log(this.refs.motherFirstName.value);

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
                                    <h3>Recherche par défaut</h3>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <div className="input-group col-md-12">
                                        <span className="input-group-addon"></span>
                                        <input type="text" ref="lastName" id="lastName" className="form-control" placeholder="Nom de famille" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <div className="input-group col-md-12">
                                        <span className="input-group-addon"></span>
                                        <input type="text" ref="firstName" id="firstName" className="form-control" placeholder="Prénom" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <div className="input-group col-md-12">
                                        <span className="input-group-addon"></span>
                                        <input type="text" ref="fatherFirstName" id="fatherFirstName" className="form-control" placeholder="Prénom du père" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <div className="input-group col-md-12">
                                        <span className="input-group-addon"></span>
                                        <input type="text" ref="motherLastName" id="motherLastName" className="form-control" placeholder="Nom de jeune fille de la mère" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <div className="input-group col-md-12">
                                        <span className="input-group-addon"></span>
                                        <input type="text" ref="motherFirstName" id="motherFirstName" className="form-control" placeholder="Prénom de la mère" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <inupt type="submit" style={{width:'100%'}}className="btn btn-default" onClick={this.onSearchByDefault.bind(this)}><b>Lancer la recherche</b></inupt>
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
