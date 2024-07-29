"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Grid, Pagination } from 'swiper/modules';

export default function Gridimage() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        grid={{
          rows: 2,
          fill: 'row',
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        breakpoints={{
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                },
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                },
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                },
            },
            1440: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                },
            },
        }}        
        className="mySwiper"
      >
        <SwiperSlide><img src="/imagenes/grid/project_01.jpeg" className='rounded-xl'/></SwiperSlide>
        <SwiperSlide><img src="/imagenes/grid/project_01.jpeg" className='rounded-xl'/></SwiperSlide>
        <SwiperSlide><img src="/imagenes/grid/project_01.jpeg" className='rounded-xl'/></SwiperSlide>
        <SwiperSlide><img src="/imagenes/grid/project_01.jpeg" className='rounded-xl'/></SwiperSlide>
        <SwiperSlide><img src="/imagenes/grid/project_01.jpeg" className='rounded-xl'/></SwiperSlide>
        <SwiperSlide><img src="/imagenes/grid/project_01.jpeg" className='rounded-xl'/></SwiperSlide>
        <SwiperSlide><img src="/imagenes/grid/project_01.jpeg" className='rounded-xl'/></SwiperSlide>
        <SwiperSlide><img src="/imagenes/grid/project_01.jpeg" className='rounded-xl'/></SwiperSlide>
        <SwiperSlide><img src="/imagenes/grid/project_01.jpeg" className='rounded-xl'/></SwiperSlide>
        <SwiperSlide><img src="/imagenes/grid/project_01.jpeg" className='rounded-xl'/></SwiperSlide>
        <SwiperSlide><img src="/imagenes/grid/project_01.jpeg" className='rounded-xl'/></SwiperSlide>
        <SwiperSlide><img src="/imagenes/grid/project_01.jpeg" className='rounded-xl'/></SwiperSlide>
      </Swiper>
    </>
  );
}

