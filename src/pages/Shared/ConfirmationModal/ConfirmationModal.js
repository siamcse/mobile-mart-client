import React from 'react';

const ConfirmationModal = ({ title, message, successModal, modalData, closeModal,action }) => {
    return (
        <div>
            {/* <label onClick={() => setDeletingSeller(seller)}  className="btn bg-red-600 btn-sm ">Delete</label> */}
            <input type="checkbox" id="popup-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successModal(modalData)} htmlFor="popup-modal" className="btn">{action}</label>
                        <button onClick={() => closeModal(null)} className='btn btn-outline'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;