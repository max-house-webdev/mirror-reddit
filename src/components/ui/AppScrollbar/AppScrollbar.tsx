import React from 'react';
import Scrollbar from 'react-scrollbars-custom';

export interface IAppScrollbarProps {
  height: number;
  children: React.ReactNode;
}

export function AppScrollbar(props: IAppScrollbarProps) {
  const { height, children } = props;
  return (
    <Scrollbar
      style={{ height }}
      trackYProps={{
        renderer: (props) => {
          const { elementRef, style, ...restProps } = props;

          return (
            <div
              {...restProps}
              ref={elementRef}
              className='trackY'
              style={{
                ...style,
                width: '5px',
                backgroundColor: 'rgba(255, 210, 188, 1)',
              }}
            />
          );
        },
      }}
      thumbYProps={{
        renderer: (props) => {
          const { elementRef, style, ...restProps } = props;

          return (
            <div
              {...restProps}
              ref={elementRef}
              style={{ ...style, backgroundColor: 'hsl(20, 60%, 50%)' }}
            />
          );
        },
      }}
    >
      {children}
    </Scrollbar>
  );
}
