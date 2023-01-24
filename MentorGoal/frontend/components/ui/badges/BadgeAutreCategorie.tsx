import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const BadgeAutreCategorie = ({ children }: Props) => {
  return (
    <span className="gap-1 px-6 py-1 m-auto text-sm border border-solid border-badge-text-autre_categorie text-badge-text-autre_categorie bg-badge-autre_categorie whitespace-nowrap rounded-2xl">
      {children}
    </span>
  );
};

export default BadgeAutreCategorie;
