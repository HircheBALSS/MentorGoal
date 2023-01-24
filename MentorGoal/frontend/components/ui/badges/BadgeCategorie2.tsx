import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const BadgeCategorie2 = ({ children }: Props) => {
  return (
    <span className="gap-1 px-6 py-1 m-auto text-sm border border-solid border-badge-text-categorie2 text-badge-text-categorie2 bg-badge-categorie2 whitespace-nowrap rounded-2xl">
      {children}
    </span>
  );
};

export default BadgeCategorie2;
