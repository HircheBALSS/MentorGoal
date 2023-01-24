import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const BadgeEntretien = ({children}: Props) => {
  return (
    <span className="gap-1 px-6 py-1 m-auto text-sm border border-solid border-badge-text-entretien text-badge-text-entretien bg-badge-entretien whitespace-nowrap rounded-2xl">
      {children}
    </span>
  );
};

export default BadgeEntretien;
