'use client';
import Link from 'next/link';
import React from 'react';
import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import styles"./styles.css";
import Image from 'next/image';
import styles from './Slider.module.css';
import next from 'next';

const Slider = () => {
  return (
    <div className="mt-12 flex text-white">
      <div className={styles.BlocOne}>
        <div className={styles.Title}>
          <h1 className="text-[42px] font-extrabold ">
            Le <span className="text-orange-600">blog</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Libero laoreet at sed cursus
            ut mi. Lorem ipsum dolor sit amet conse. Libero laoreet at sed
            cursus ut mi.
          </p>
        </div>
        <div className={styles.recherche}>
          <p>Rejoignez pour ne pas louper pas les nouveaux articles</p>
          <div className={styles.Search}>
            {' '}
            <input type="search" placeholder="Votre adresse mail" />{' '}
            <p>Rejoindre</p>
          </div>
        </div>
      </div>

      <div className={styles.BlocTwo}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}
          className={styles.myswiper}
        >
          <SwiperSlide className={styles.sliderOne}>
            <img
              src="/images/uns.jpg"
              alt="img-slider"
              className="rounded-t-2xl"
            />
            <div className={styles.sliderBas}>
              <div className={styles.sliderDate}>22 novembre 2022</div>
              <h3>Personnaliser son cv</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Libero laoreet at sed
                cursus ut mi.
              </p>
              <Link
                href="#"
                className="flex flex-row items-center w-auto h-6 justify-between gap-2 p-0 text-base font-semibold text-dark-blue-90 group"
              >
                Lire l'article
                <span
                  aria-hidden="true"
                  className="text-arrow-forward w-6 h-6 block transition group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.sliderOne}>
            <img
              src="/images/top.jpg"
              alt="img-slider"
              className="rounded-t-2xl"
            />
            <div className={styles.sliderBas}>
              <div className={styles.sliderDate}>10 novembre 2022</div>
              <h3>Preparer son pitch</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Libero laoreet at sed
                cursus ut mi.
              </p>
              <Link
                href="#"
                className="flex flex-row items-center w-auto justify-between h-6 gap-2 p-0 text-base font-semibold text-dark-blue-90 group"
              >
                Lire l'article
                <span
                  aria-hidden="true"
                  className="text-arrow-forward w-6 h-6 block transition group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
