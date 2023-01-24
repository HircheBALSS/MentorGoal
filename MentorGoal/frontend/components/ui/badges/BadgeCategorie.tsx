import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const BadgeCategorie = ({ children }: Props) => {
  return (
    <span className="gap-1 px-6 py-1 m-auto text-sm border border-solid border-badge-text-categorie text-badge-text-categorie bg-badge-categorie whitespace-nowrap rounded-2xl">
      {children}
    </span>
  );
};

export default BadgeCategorie;
