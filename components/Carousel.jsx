"use client";
import React from "react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Carousel() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };
  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex content-center">
          <Swiper
            // install Swiper modules
            modules={[Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={10}
            slidesPerView={3}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="rounded-lg shadow-2xl"
          >
            <SwiperSlide>
              <Image
                src={"/assets/carousel1.jpg"}
                width="100"
                height="100"
                layout="responsive"
                objectFit="contain"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={"/assets/carousel2.jpg"}
                width="100"
                height="100"
                layout="responsive"
                objectFit="contain"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={"/assets/carousel3.jpg"}
                width="100"
                height="100"
                layout="responsive"
                objectFit="contain"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={"/assets/carousel4.jpg"}
                width="100"
                height="100"
                layout="responsive"
                objectFit="contain"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={"/assets/carousel5.jpeg"}
                width="100"
                height="100"
                layout="responsive"
                objectFit="contain"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={"/assets/carousel6.jpg"}
                width="100"
                height="100"
                layout="responsive"
                objectFit="contain"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={"/assets/carousel7.jpg"}
                width="100"
                height="100"
                layout="responsive"
                objectFit="contain"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </motion.div>
    </>
  );
}