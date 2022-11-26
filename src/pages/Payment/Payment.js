import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_SECRET_KEY);

const Payment = () => {
    const booking = useLoaderData();
    console.log(booking);
    return (
        <div className='my-12'>
            <h2 className='text-3xl'>Payment for {booking.productName}</h2>
            <div className='w-80 mt-8'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;