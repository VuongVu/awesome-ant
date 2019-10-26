import React, { memo, ReactNode } from 'react';
import NextHead from 'next/head';

interface ILayoutProps {
  children?: ReactNode;
  title?: string;
}

export default memo(({ title, children }: ILayoutProps) => {
  return (
    <>
      <NextHead>
        <title>{title || `That's Awesome :)`}</title>
      </NextHead>

      {children}
    </>
  );
});
