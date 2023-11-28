import React from 'react';

export interface IItem {
  id: string;
  text: string;
  onClick?: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  child?: React.ReactElement;
}

export interface IGenericListProps {
  list: IItem[];
}

export function GenericList({ list }: IGenericListProps) {
  const noop = () => {
    return null;
  };

  return (
    <>
      {list.map(
        ({
          As = 'div',
          text,
          onClick = noop,
          className,
          id,
          href,
          type,
          child,
        }) => (
          <As
            className={className}
            onClick={() => onClick(id)}
            key={id}
            href={href}
            type={type}
          >
            {child}
            {text}
          </As>
        )
      )}
    </>
  );
}
