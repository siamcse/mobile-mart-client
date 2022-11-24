import React from 'react';

const Banner = () => {
    return (
        <div className="hero my-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://img.freepik.com/free-vector/isometric-mobile-phone-background-template_52683-7075.jpg?w=1060&t=st=1669295946~exp=1669296546~hmac=ac493be5c8b9c82fea0360c95ce2e4cb0b7634e0276770f59817c116a326143f" className="lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Buy Your Phone!</h1>
                    <p className="py-6">Get your phone at lowest price.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;