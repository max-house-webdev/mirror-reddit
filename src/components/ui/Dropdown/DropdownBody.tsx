import React from 'react';

import styles from './DropdownList.scss';

import { useCallbackOnMouseClickWithRef } from '../../../../utils/hooks/useCallbackOnExternalMouseEventWithRef';

import { DropdownList } from './DropdownList';

interface IDropdownBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose: () => void;
}

export function DropdownBody(props: IDropdownBodyProps) {
  const { onClose } = props;

  const [ref] = useCallbackOnMouseClickWithRef(onClose);

  return (
    <div ref={ref} className={styles.menuBody}>
      <div className={styles.list}>
        <DropdownList />
        <button className={styles.closeButton} onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  );
}
