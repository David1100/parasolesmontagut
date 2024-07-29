"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import './../styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function Sliderprojects() {
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={0}
                centeredSlides={false}
                navigation={true}
                loop={true}
                modules={[Navigation]}
                breakpoints={{
                    769: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                    },
                }}
                className="mySwiper"
            >
                <SwiperSlide className='relative cursor-pointer group'>
                    <div className='bg-[#00000067] group-hover:bg-transparent w-full h-full absolute transition-colors duration-300 ease-in-out'></div>
                    <h1 className='absolute left-6 bottom-7 lg:text-2xl text-xl text-gray-300 font-semibold group-hover:text-gray-200'>PARASOL <br />   ENROLLABLE</h1>

                    <img src="/imagenes/slider/slide_01.webp" /></SwiperSlide>
                <SwiperSlide className='relative cursor-pointer group'>
                    <div className='bg-[#00000067] group-hover:bg-transparent w-full h-full absolute transition-colors duration-300 ease-in-out'></div>
                    <h1 className='absolute left-6 bottom-7 lg:text-2xl text-xl text-gray-300 font-semibold group-hover:text-gray-200'>PARASOL <br /> RETRACTIL</h1>

                    <img src="/imagenes/slider/slide_02.webp" /></SwiperSlide>
                <SwiperSlide className='relative cursor-pointer group'>
                    <div className='bg-[#00000067] group-hover:bg-transparent w-full h-full absolute transition-colors duration-300 ease-in-out'></div>
                    <h1 className='absolute left-6 bottom-7 lg:text-2xl text-xl text-gray-300 font-semibold group-hover:text-gray-200'>PARASOL <br /> FIJO CON ESTRUCTURA</h1>

                    <img src="/imagenes/slider/slide_03.webp" /></SwiperSlide>
                <SwiperSlide className='relative cursor-pointer group'>
                    <div className='bg-[#00000067] group-hover:bg-transparent w-full h-full absolute transition-colors duration-300 ease-in-out'></div>
                    <h1 className='absolute left-6 bottom-7 lg:text-2xl text-xl text-gray-300 font-semibold group-hover:text-gray-200'>PARASOL <br /> FIJO TIPO BANETA</h1>

                    <img src="/imagenes/slider/slide_04.webp" /></SwiperSlide>
            </Swiper>
        </>
    );
}

