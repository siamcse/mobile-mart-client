import React from 'react';

const Banner = () => {
    return (
        // <div className="relative rounded-lg">
        //     <img
        //         src="https://img.freepik.com/free-photo/mobile-phone-cases-mockup-product-showcase_53876-96025.jpg?w=2000"
        //         className="absolute rounded-lg inset-0 object-cover w-full h-full"
        //         alt=""
        //     />
        //     <div className="relative rounded-lg bg-gray-900 bg-opacity-75 h-[500px]">
        //         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        //             <div className="flex flex-col items-center justify-between xl:flex-row">
        //                 <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
        //                     <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
        //                         Buy Your Best Phone!
        //                     </h2>
        //                     <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
        //                         Grab your phone at lowest price. Please be careful buy this second hand phone.
        //                     </p>
                            
        //                 </div>
                        
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="container px-6 py-16 mx-auto">
            <div className="items-center lg:flex">
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg">
                        <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">Best Place To choose your Phone!</h1>

                        <p className="mt-4 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>

                        <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-primary rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Shop Now</button>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                    <img className="w-full h-full lg:max-w-3xl" src="https://merakiui.com/images/components/Catalogue-pana.svg" alt="Catalogue-pana.svg"/>
                </div>
            </div>
        </div>
    );
};

export default Banner;