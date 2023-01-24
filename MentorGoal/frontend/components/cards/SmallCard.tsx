import React from 'react';

type Props = {
  props: any;
};

const SmallCard = ({ props }: Props) => {
  return (
    <article className="rounded-xl border-2 bg-white w-[380px] h-[108px]">
      <div className="flex items-start">
        <a href="#" className="block shrink-0">
          <img
            alt="Speaker"
            src={props.image}
            className="h-[92px] w-[82px] rounded-lg object-cover gap-7 mt-1.5 ml-1.5"
          />
        </a>

        <div className="ml-4 mt-1.5">
          <time
            dateTime={props.date}
            className="block text-sm text-dark-blue-50"
          >
            {props.date}
          </time>
          <h3 className="font-medium sm:text-lg">
            <a href="#" className="hover:underline">
              {props.title}
            </a>
          </h3>

          <p className="text-sm text-dark-blue-90 line-clamp-2">
            {props.description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default SmallCard;
