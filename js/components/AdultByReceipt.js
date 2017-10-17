import React from 'react'
import Relay from 'react-relay'
import AppMessage from './common/AppMessage';
import moment from 'moment';

class AdultByReceipt extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message : ""
        } ;
    }


    render() {

        const text = this.state.message;

        var adultInfo = <div className="page-content row">
                <div className="col-md-6 center-block text-center opacity-54">
                <h1>Désolé. Nous ne sommes pas en mesure de vous fournir vos information NINA.</h1>
                </div>
            </div>;


        if(this.props.viewer.adultByReceipt) {

            let adult = this.props.viewer.adultByReceipt;

            adultInfo = <div className="page-content row">
                <div className="col-md-6 center-block">

                    <h4>{adult.firstName + ' ' + adult.lastName}</h4><br/>
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


AdultByReceipt.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default Relay.createContainer(AdultByReceipt, {


    initialVariables: {receiptNumber: "" },

    fragments: {
        viewer: () => Relay.QL`
          fragment on Viewer {
               id
               adultByReceipt(search: $receiptNumber) {
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
