import React from 'react';

export default function preventDefault<T extends (event: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(event: E) => {
    event.preventDefault();
    fn(event);
  };
}
