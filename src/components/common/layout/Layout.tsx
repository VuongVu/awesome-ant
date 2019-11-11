import React, { memo, ReactNode } from 'react';
import NextHead from 'next/head';

interface ILayoutProps {
  children?: ReactNode;
  title?: string;
}

export default memo(({ title, children }: ILayoutProps) => (
  <>
    <NextHead>
      <title>{title || `Awesome Note`}</title>
    </NextHead>

    {children}
  </>
));
