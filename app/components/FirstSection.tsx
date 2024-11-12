/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import "../styles/firstsection.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slideImage from "../json/slides.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
export default function FirstSection() {
  return (
    <div className="first-section">
      <div className="msg">
        Welcome to<span> Real Estate </span> Company Step into a world of luxury
        living, where sophistication meets comfort in stunning homes that blend
        modern elegance with timeless design. Imagine grand entryways, expansive
        open-plan spaces flooded with natural light, and meticulously crafted
        interiors that offer both style and function. Each property is a
        sanctuary of refinement, with custom finishes, high-end materials, and
        cutting-edge technology tailored for convenience and security. Whether
        you dream of panoramic views, private pools, or state-of-the-art
        amenities, we’re here to make your vision a reality. Welcome to a new
        standard in luxury living—welcome home.
      </div>
      <div className="swiper-slides">
        <Swiper
          className="swiper-component"
          pagination={{ el: ".pagination", clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
        >
          {slideImage.map((img, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <Image
                className="img"
                loading="lazy"
                width={300}
                height={320}
                src={img.src}
                alt={img.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="pagination"></div>
      </div>
    </div>
  );
}
