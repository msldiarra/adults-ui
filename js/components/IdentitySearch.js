import React from 'react'
import Relay from 'react-relay'
import AppMessage from './common/AppMessage';


class IdentityNumber extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message : "",
            document : 0
        } ;
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
                                <div className="col-md-12">
                                    <h2>Bienvenue  sur le service pour les nouveaux majeurs du CTDEC!</h2>
                                    <p className="headline">
                                        <br/><br/>
                                        Ici, vous pouvez retrouver les informations complètes relatives à vos données NINA.
                                        <br/><br/>
                                        Pour faire une recherche, il est nécessaire de fournir des informations.
                                        <br/><br/>
                                        Cliquez sur le cas vous correspondant.
                                    </p>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="btn-group btn-group-justified col-md-12" role="group" >
                                    <div className="btn-group" role="group">
                                        <button onClick={() => this.context.router.push('/search/nina')} type="button" className={"btn btn-default " + (this.state.document ==  1? "active" : "")} value="1">NINA</button>
                                    </div>
                                    <div className="btn-group" role="group">
                                        <button onClick={() => this.context.router.push('/search/ravec')} type="button" className={"btn btn-default " + (this.state.document ==  2? "active" : "")} value="2">Récipissé RAVEC</button>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="btn-group btn-group-justified col-md-12" role="group" >
                                    <div className="btn-group" role="group">
                                        <hr/>
                                        <br/>
                                        <button onClick={() => this.context.router.push('/search/default')} type="button" className={"btn btn-default " + (this.state.document ==  1? "active" : "")} value="3">
                                            Vous n'avez aucun numéro
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


IdentityNumber.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default Relay.createContainer(IdentityNumber, {

    fragments: {
        viewer: () => Relay.QL`
          fragment on Viewer {
               id
          }
    `,
    }
});