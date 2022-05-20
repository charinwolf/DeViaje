import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import PaymentForm from '../PaymentForm/PaymentForm';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const PUBLIC_KEY = "pk_test_51KkACPCSks2szT4NgRjgmTwfeTH2yWzfGx85nGO2x19qPXlG59wFepywgIGJ38L7P7wakg5Cr1yHnmUEfMbjV5JB003sFeCc5S"

const stripePromise = loadStripe(PUBLIC_KEY)

function StripeContainer() {
    const flights = useSelector(state => state.allFlights)
    const pasa = useSelector(state => state.passengers)
    const {id} = useParams()
    const flight = flights?.filter(f => f.id === id)
    
    window.scrollTo(0, 0) // para llevar la ventana arriba
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm price={(pasa * flight[0].price * 1.8).toFixed()} />
        </Elements>
    );
}

export default StripeContainer;