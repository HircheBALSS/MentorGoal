import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const BadgeLm = ({ children }: Props) => {
  return (
    <span className="gap-1 px-6 py-1 m-auto text-sm border border-solid border-badge-text-lm text-badge-text-lm bg-badge-lm whitespace-nowrap rounded-2xl">
      {children}
    </span>
  );
};

export default BadgeLm;
