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
                                    <h2 className={"text-center"}>BIENVENUE !</h2>
                                    <p className="headline">
                                        <br/>
                                        Ici, vous pouvez retrouver <span className={"blue-bold"}>les informations complètes relatives à vos données NINA</span>.
                                        <br/><br/>
                                        La recherche peut se faire par <span className={"blue-bold"}>identifiants</span> ou par <span className={"blue-bold"}>données biographiques</span>.
                                        <br/><br/>
                                        Pour commencer, cliquez sur le cas vous correspondant <i className="fa fa-2x fa-arrow-circle-o-down blue" aria-hidden="true"></i>
                                    </p>
                                </div>
                            </div>
                            <div className="bkg-img">
                            <div className="form-group">
                                <div className="btn-group btn-group-justified col-md-12" role="group" >
                                    <div className="btn-group" role="group">
                                        <button onClick={() => this.context.router.push('/search/nina')} type="button" className={"btn btn-default " + (this.state.document ==  1? "active" : "")} value="1"><b>NINA</b></button>
                                    </div>
                                    <div className="btn-group" role="group">
                                        <button onClick={() => this.context.router.push('/search/ravec')} type="button" className={"btn btn-default " + (this.state.document ==  2? "active" : "")} value="2"><b>Récipissé RAVEC</b></button>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="btn-group btn-group-justified col-md-12" role="group" >
                                    <div className="btn-group" role="group">
                                        <hr/>
                                        <br/>
                                        <button onClick={() => this.context.router.push('/search/default')} type="button" className={"btn btn-default " + (this.state.document ==  1? "active" : "")} value="3">
                                            <b>Vous n'avez pas d'itentifiant</b>
                                        </button>
                                    </div>
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
