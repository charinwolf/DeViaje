import React, { useState } from 'react';
import PassengersInfo from '../PassengersInfo/PassengersInfo';
import StripeContainer from '../StripeContainer/StripeContainer';

function FlightDetail() {
    const [showPayment, setShowPayment] = useState(false)
    return (
        <div>
            {
                showPayment ? <StripeContainer /> 
                            : <PassengersInfo setShowPayment={setShowPayment}/>
            }
        </div>
    );
}

export default FlightDetail
