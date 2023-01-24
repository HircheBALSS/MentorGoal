import Footer from '@/components/Footer/Footer';
import type { ReactNode } from 'react';
import React from 'react';

type Props = {
  children: ReactNode;
};

const articleLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default articleLayout;
