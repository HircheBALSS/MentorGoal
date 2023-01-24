import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const TitleContainer = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-start p-0 gap-14 absolute w-[379px] h-[264px] left-[25px] top-[140px]">
      {children}
    </div>
  );
};

export default TitleContainer;
