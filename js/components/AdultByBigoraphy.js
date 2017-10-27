import React from 'react'
import Relay from 'react-relay'
import AppMessage from './common/AppMessage';
import moment from 'moment';

class AdultByBiography extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message : ""
        } ;
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        const text = this.state.message;

        var adultInfo = <div>
            <div className="page-header col-md-6 center-block row">

            </div>
            <div className="page-content row">
                <div className="col-md-6 center-block text-center opacity-54">
                    <img src={"/images/oops.jpg"} width={"90px"} height={"90px"}/>
                    <h2>Désolé. Nous ne sommes pas en mesure de vous fournir vos données NINA avec les informations fournies.</h2>
                </div>
            </div>
        </div>;


        if(this.props.viewer.adultByBiography) {

            let adult = this.props.viewer.adultByBiography;
            adultInfo = <div>
                <div className="page-header col-md-6 center-block row">

                </div>
                <div className="page-content row">
                    <div className="col-md-6 center-block">

                        <div className={"panel panel-default"}>
                            <div className={"panel-heading"}>
                                <h4>{adult.firstName + ' ' + adult.lastName}</h4>
                            </div>
                            <div className={"panel-body"}>
                                <dl>
                                    <dt></dt>
                                    <dd>
                                        <div><label>Numéro NINA: </label> {adult.ninaNumber}</div>
                                        <div><label>Numéro de récipissé RAVEC: </label> {adult.receiptNumber}</div>
                                        <div><label>Date de naissance : </label> {moment(adult.birthDate).format('DD/MM/YYYY')}</div>
                                        <div><label>Prénom du père : </label> {adult.fatherFirstName}</div>
                                        <div><label>Prénom de la mère : </label> {adult.motherFirstName}</div>
                                        <div><label>Nom de la mère : </label> {adult.motherLastName}</div>
                                        <div><label>Lieu de naissance : </label> {adult.placeOfBirth}</div>
                                        <div><label>Lieu de residence : </label> {adult.placeOfResidence}</div>
                                    </dd>
                                </dl>
                            </div>
                        </div>

                    </div>
                </div>
            </div>;
        }

        return (
            <div className="">
                <div className="page-header col-md-6 center-block row">
                    <br/>
                </div>

                {text? <AppMessage message={text} /> : ''}

                {adultInfo}
            </div>
        );
    }
}


AdultByBiography.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default Relay.createContainer(AdultByBiography, {


    initialVariables: {firstName: "", lastName: "", fatherFirstName: "", motherFirstName: "", motherLastName: ""},

    fragments: {
        viewer: () => Relay.QL`
          fragment on Viewer {
               id
               adultByBiography(firstName: $firstName, lastName: $lastName, fatherFirstName: $fatherFirstName, motherFirstName: $motherFirstName, motherLastName: $motherLastName) {
                  firstName
                  lastName
                  fatherFirstName
                  motherFirstName
                  motherLastName
                  birthDate
                  ninaNumber
                  receiptNumber
                  placeOfBirth
                  placeOfResidence
               }
          }
    `,
    }
});
