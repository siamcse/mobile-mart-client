import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { Box, Rating } from '@mui/material';


const CustomerReview = () => {
    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
    };
    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }
    const reviews = [
        {
            customerName: "Maria Smantha",
            image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg",
            designation: "Web Developer",
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
            rating: 4
        },
        {
            customerName: "Lisa Cudrow",
            image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg",
            designation: "Graphic Designer",
            message: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.",
            rating: 4.5
        },
        {
            customerName: "John Smith",
            image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg",
            designation: "Marketing Specialist",
            message: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
            rating: 5
        },
        {
            customerName: "Maria Smantha",
            image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg",
            designation: "Web Developer",
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
            rating: 4
        },
    ]
    return (
        <div className="bg-gray-100 py-20 w-full overflow-hidden">
            <div className="lg:w-3/4 m-auto ">
                <div className="m-auto text-center lg:w-8/12 xl:w-7/12 relative overflow-hidden">
                    <h2 className="text-2xl text-accent text-shadow font-bold md:text-4xl">What Customers Say About Us</h2>

                </div>
                <div className="  mt-12 m-auto items-center justify-center md:flex md:space-y-0 md:-space-x-6">
                    <div className="w-full md:w-3/4" data-aos='fade-left'
                        data-aos-duration='1000'
                        data-aos-delay='100'
                    >
                        <div aria-hidden="true" className=" w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105"></div>

                        <>
                            <Swiper
                                breakpoints={{
                                    320: { slidesPerView: 1, spaceBetween: 30 },
                                    480: { slidesPerView: 1, spaceBetween: 30 },
                                    768: { slidesPerView: 2, spaceBetween: 30 },
                                    1024: { slidesPerView: 2, spaceBetween: 30 },

                                }}
                                spaceBetween={30}
                                freeMode={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[FreeMode, Pagination]}
                                className="mySwiper"
                            >
                                <div className="relative ">
                                    {
                                        reviews.map((review, i) =>
                                            <SwiperSlide key={i}>
                                                <div className=" p-5 m-5 md:mb-6">
                                                    <div className="w-2/4 mx-auto flex justify-center mb-6">
                                                        <img
                                                            src={review.image}
                                                            className="rounded-full shadow-lg w-32 " alt='user'
                                                        />
                                                    </div>
                                                    <h5 className="text-xl font-semibold mb-4">{review.customerName}</h5>
                                                    <h6 className="font-semibold text-secondary mb-4">{review.designation}</h6>
                                                    <p className="mb-4">
                                                        <svg
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="quote-left"
                                                            className="w-6 pr-2 inline-block"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 512 512"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                                                            ></path>
                                                        </svg>
                                                        {review.message}
                                                    </p>
                                                    <Box
                                                        sx={{
                                                            width: 200,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                        }}
                                                    >
                                                        <Rating
                                                            name="hover-feedback"
                                                            value={review.rating}
                                                            precision={0.5}
                                                            getLabelText={getLabelText}
                                                            readOnly />
                                                        {review.rating !== null && (
                                                            <Box sx={{ ml: 2 }}>{labels[review.rating !== -1 ? review.rating : review.rating]}</Box>
                                                        )}
                                                    </Box>
                                                </div>

                                            </SwiperSlide>
                                        )
                                    }
                                </div>
                            </Swiper>
                        </>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;