import React, { useEffect } from 'react';

function SuccessPayment() {

    useEffect(() => {
        console.log('comp mounted')
      }, [])

    return (
        <div>
            <h1>deviaje.com has successfully processed your payment!</h1>
        </div>
    );
}

export default SuccessPayment;