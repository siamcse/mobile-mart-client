import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const CheckOutForm = ({ booking }) => {
    const [clientSecret, setClientSecret] = useState("");
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const { _id, price, name, email, productsId } = booking;

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(clientSecret);

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error);
            setCardError(error);
        }
        else {
            console.log(paymentMethod);
            setCardError('');
        }
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    }
                }
            }
        );
        if (confirmError) {
            setCardError(confirmError);
            return;
        }

        if (paymentIntent.status === "succeeded") {

            const payment = {
                name,
                price: price,
                transactionId: paymentIntent.id,
                bookingId: _id,
                productsId,
                email
            };

            axios.post('http://localhost:5000/payments', payment, {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire(
                            'Thank You',
                            "Your purchase has been success", 'success');
                        setSuccess('Congrats!! Your payment is complete.');
                        setTransactionId(paymentIntent.id);
                    }
                })
        }
        setProcessing(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className='btn btn-accent btn-sm my-5'
                    type="submit"
                    disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            <p className='text-red-600'>{cardError.message}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>
                        Transaction Id:{' '}
                        <span className='font-semibold'>{transactionId}</span>
                    </p>
                </div>
            }
        </>
    );
};

export default CheckOutForm;