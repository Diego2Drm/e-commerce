'use client';
import { useState } from 'react';
// Import Swiper React components
import { Swiper as SwiperObject } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slideshow.css';
import Image from 'next/image';

interface Props {
  images: string[]
  title: string
  className?: string
}

export const ProductSlideShow = ({ images, title, className }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

  return (
    <section>
      <Swiper
        style={{
          '--swiper-navigation-color': '#000',
          '--swiper-pagination-color': '#000',
        } as React.CSSProperties}

        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {
          images.map(img => (
            <SwiperSlide key={img}>
              <Image
                src={`/products/${img}`}
                alt={title}
                width={500}
                height={500}
                className='rounded-lg object-fill'
              />
            </SwiperSlide>
          ))
        }

      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
          images.map(img => (
            <SwiperSlide key={img}>
              <Image
                src={`/products/${img}`}
                alt={title}
                width={300}
                height={300}
                className='rounded-lg object-fill'
              />
            </SwiperSlide>
          ))
        }

      </Swiper>
    </section>
  );
};