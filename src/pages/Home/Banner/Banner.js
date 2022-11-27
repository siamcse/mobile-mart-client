import React from 'react';

const Banner = () => {
    return (
        // <div className="hero my-12">
        //     <div className="hero-content flex-col lg:flex-row-reverse">
        //         <img src="https://img.freepik.com/free-vector/isometric-mobile-phone-background-template_52683-7075.jpg?w=1060&t=st=1669295946~exp=1669296546~hmac=ac493be5c8b9c82fea0360c95ce2e4cb0b7634e0276770f59817c116a326143f" className="lg:w-1/2 rounded-lg shadow-2xl" alt='' />
        //         <div>
        //             <h1 className="text-5xl font-bold">Buy Your Phone!</h1>
        //             <p className="py-6">Get your phone at lowest price.</p>
        //             <button className="btn btn-primary">Get Started</button>
        //         </div>
        //     </div>
        // </div>
        <div className="relative rounded-lg">
            <img
                src="https://img.freepik.com/free-photo/mobile-phone-cases-mockup-product-showcase_53876-96025.jpg?w=2000"
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-75 h-[500px]">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                Buy Your Best Phone!
                            </h2>
                            <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                                Grab your phone at lowest price. Please be careful buy this second hand phone.
                            </p>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;