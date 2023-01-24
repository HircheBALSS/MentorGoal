import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const BadgeCv = ({children}: Props) => {
  return (
    <span className="gap-1 px-6 py-1 text-sm border border-solid border-badge-text-cv text-badge-text-cv bg-badge-cv whitespace-nowrap rounded-2xl">
      {children}
    </span>
  );
};

export default BadgeCv;
