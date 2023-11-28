import React, { useReducer } from 'react';
import { ActionButton } from '../../../components';

import styles from './KarmaCounter.scss';

export interface IKarmaCounterProps {
  karmaCounter: number;
}

export function KarmaCounter(props: IKarmaCounterProps) {
  const { karmaCounter } = props;

  type TAction = {
    type: 'increment' | 'decrement';
  };

  type TState = {
    karma: number;
  };

  const initialKarmaState: TState = { karma: karmaCounter };

  const reducer = (state: TState, action: TAction) => {
    switch (action.type) {
      case 'increment':
        return { karma: state.karma + 1 };
      case 'decrement':
        return { karma: state.karma - 1 };
      default:
        return { ...state };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialKarmaState);

  const increaseKarma = () =>
    dispatch({
      type: 'increment',
    });

  const decreaseKarma = () =>
    dispatch({
      type: 'decrement',
    });

  return (
    <div className={styles.karmaCounter}>
      <ActionButton
        action={'count'}
        onClick={increaseKarma}
        textContent={false}
        translate={true}
      />
      <span className={styles.karmaValue}>{state.karma}</span>
      <ActionButton
        action={'count'}
        onClick={decreaseKarma}
        textContent={false}
        rotate={true}
      />
    </div>
  );
}
