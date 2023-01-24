import React from 'react';
import BadgeLm from '../ui/badges/BadgeLm';

const Cards = () => {
  return (
    <article className="rounded-2xl p-0.5 shadow-xl transition hover:shadow-sm">
      <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
        <time dateTime="2022-10-10" className="block text-xs text-gray-500">
          10 Novembre 2022
        </time>

        <a href="#">
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            Preparer son pitch
          </h3>
        </a>

        <p className="h-12 text-base font-normal leading-relaxed text-dark-blue-90 line-clamp-3 w-80">
          Lorem ipsum dolor sit amet consectetur. Libero laoreet at sed cursus
          ut mi.
        </p>

        <div className="mt-4 flex flex-wrap gap-1">
          <BadgeLm children={'Lettre de Motivation'} />

          <a
            href="/article"
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
    </article>
  );
};

export default Cards;
