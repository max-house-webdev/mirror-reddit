import React from 'react';

export interface IContainerProps {
  As?: 'div' | 'header' | 'main' | 'footer' | 'section';
  className?: string;
  children?: React.ReactNode;
}

export function Container({
  As = 'div',
  className,
  children,
}: IContainerProps) {
  return <As className={className}>{children}</As>;
}
