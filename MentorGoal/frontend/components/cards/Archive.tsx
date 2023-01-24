import Link from 'next/link';
import React from 'react';
type Props = {
  categorie: string;
  id: number;
  slug: string;
};
const Archive = ({ categorie, id, slug }: Props) => {
  return (
    <div className="flex flex-col justify-center p-0 gap-6 w-[322px] h-[168px] flex-none flex-grow-0">
      {/* TEXTCONTAINER */}
      <div className="flex flex-col justify-center items-center p-0 gap-6 w-[322px] h-[168px]">
        {/* TEXTTOP */}
        <div className="flex flex-col items-center p-0 gap-2 w-[322px] h-[116px]"></div>
        {/* TEXTBOT */}
        <div className="flex flex-row justify-between items-center p-0 gap-2 w-[322px] h-7">
          {/* Badge */}
          <span className="gap-1 px-6 py-1 m-auto text-sm border border-solid border-badge-text-categorie text-badge-text-categorie bg-badge-categorie whitespace-nowrap rounded-2xl">
            {categorie}
          </span>
          <div
            key={id}
            className="flex flex-row items-center p-0 gap-2 w-[119px] h-6 order-1 flex-grow-0 flex-none"
          >
            <Link
              href={`/blog/attributes.${slug}`}
              className="flex flex-row items-center w-auto h-6 gap-2 p-0 text-base font-semibold text-dark-blue-90 group"
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
        </div>
      </div>
    </div>
  );
};

export default Archive;
