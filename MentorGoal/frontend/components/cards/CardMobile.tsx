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

const CardMobile = ({ props }: Props) => {
  return (
    <article className="group flex-col flex items-start p-0">
      <img
        alt="Lava"
        src={props.image}
        className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
      />

      {/* BOTTOM */}
      <div className="flex flex-col items-start p-4 gap-4 w-full h-[188px] text-white rounded-2xl">
        {/* TEXT CONTAINER */}
        <div className="flex flex-col justify-center items-center p-0 gap-6 w-[347px] h-[156px]">
          {/* TEXT TOP */}
          <div className="flex flex-col items-start p-0 gap-2 h-[108px] flex-none order-none self-stretch flex-grow-0">
            <time
              dateTime="2022-10-22"
              className="block text-sm text-dark-blue-60 flex-none order-none self-stretch flex-grow-0"
            >
              22 novembre 2022
            </time>
            <div className="flex flex-col items-start p-0 gap-2 sm:p-0 w-full h-[80px] flex-none order-1 self-stretch flex-grow-0">
              <h3 className="-mt-2 text-lg font-semibold">{props.title}</h3>
              <p className="h-12 text-base font-normal leading-relaxed line-clamp-3">
                {props.description}
              </p>
            </div>
          </div>
          {/* BOT */}
          <div className="flex flex-row items-center justify-between w-full gap-2 p-0 h-6 flex-none order-1 self-stretch flex-grow-0">
            {/* label */}
            <BadgeCv children={undefined} />
            {/* lire */}
            <a
              href={props.link}
              className="flex flex-row items-center h-6 gap-2 p-0 text-base font-semibold flex-none order-1 flex-grow-0 group"
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
    </article>
  );
};

export default CardMobile;
