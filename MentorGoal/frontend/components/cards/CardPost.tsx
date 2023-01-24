import Image from 'next/image';
import React from 'react';

import BadgeCv from '../ui/badges/BadgeCv';

type Props = {
  props: {
    image: string;
    date: string;
    title: string;
    description: string;
    categorie: string;
    link: string;
  };
};

const CardPost = ({ props }: Props) => {
  return (
    <article className="max-w-[354px] overflow-hidden rounded-2xl shadow h-[416px] flex flex-col justify-center items-stretch p-0">
      {/* TOP */}
      <Image
        alt="Post custom your CV"
        src={props.image}
        width={500}
        height={500}
        className="object-cover w-full h-[216px]"
      />
      {/* BOTTOM */}
      <div className="flex flex-col items-start p-4 gap-4 sm:p-4 w-full h-[200px] bg-white">
        {/* TEXT CONTAINER */}
        <div className="flex flex-col justify-center items-start p-0 gap-6 sm:p-0 w-[322px] h-[168px]">
          {/* TEXT TOP */}
          <div className="flex flex-col justify-center items-start p-0 gap-6 sm:p-0 w-full h-[116px]">
            <time
              dateTime="2022-10-22"
              className="block text-sm text-dark-blue-50"
            >
              {props.date}
            </time>
            <div className="flex flex-col items-start p-0 gap-2 sm:p-0 w-full h-[88px]">
              <a href="#">
                <h3 className="-mt-4 text-2xl font-semibold text-dark-blue-90">
                  {props.title}
                </h3>
              </a>
              <p className="h-12 text-base font-normal leading-relaxed text-dark-blue-90 line-clamp-3">
                {props.description}
              </p>
            </div>
            {/* BOT */}
            <div className="flex flex-row items-center justify-between w-full gap-2 p-0 sm:p-0 h-7">
              {/* label */}
              <BadgeCv children={props.categorie} />
              {/* lire */}
              <a
                href={props.link}
                className="flex flex-row items-center w-auto h-6 gap-2 p-0 text-base font-semibold text-dark-blue-90 group"
              >
                Lire l'article
                <span
                  aria-hidden="true"
                  className="text-arrow-forward w-6 h-6 block transition group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardPost;
