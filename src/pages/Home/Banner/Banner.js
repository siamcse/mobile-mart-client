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
                src="https://img.freepik.com/free-vector/isometric-mobile-phone-background-template_52683-7075.jpg?w=1060&t=st=1669295946~exp=1669296546~hmac=ac493be5c8b9c82fea0360c95ce2e4cb0b7634e0276770f59817c116a326143f"
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-75">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                The quick, brown fox <br className="hidden md:block" />
                                jumps over a{' '}
                                <span className="text-teal-accent-400">lazy dog</span>
                            </h2>
                            <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                                quae.
                            </p>
                            <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                            >
                                Learn more
                                <svg
                                    className="inline-block w-3 ml-2"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;