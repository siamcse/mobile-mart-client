import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Swal from 'sweetalert2';

const BookingModal = ({ selectedProduct, setSelectedProduct }) => {
    const { user } = useContext(AuthContext);
    const { name, resellPrice, _id, image } = selectedProduct;

    const handleBooking = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const productName = form.productName.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const booking = {
            name,
            email,
            productName,
            price,
            phone,
            location,
            productsId: _id,
            image
        };
        console.log(booking);
        axios.post('http://localhost:5000/bookings', booking)
            .then(res => {
                if (res.data.acknowledged) {
                    setSelectedProduct(null);
                    Swal.fire(
                        'Thank You!',
                        `Your booking is ${productName} successful. Please go to My orders and pay for confirm.`,
                        'success'
                    );
                }
            })
            .catch(e => console.log(e))
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-6 mt-12'>
                        <input name='name' defaultValue={user?.displayName} disabled type="text" placeholder="Full Name" className="input input-bordered w-full" required />
                        <input name='email' defaultValue={user?.email} disabled type="email" placeholder="Email" className="input input-bordered w-full" required />
                        <input name='productName' defaultValue={name} disabled type="text" className="input input-bordered w-full" required />
                        <input name='price' defaultValue={resellPrice} disabled type="text" className="input input-bordered w-full" required />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name='location' type="text" placeholder="Location" className="input input-bordered w-full" />
                        <input className='btn btn-accent' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;