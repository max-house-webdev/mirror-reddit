import React from 'react';
import { isClient } from '../../DOM/isClient';
import ReactDOM from 'react-dom';

export interface IPortalWrapperProps {
  children: React.ReactChild;
}

export function PortalWrapper({ children }: IPortalWrapperProps) {
  let modalRootContainer = null;

  if (isClient()) {
    const modalRootElementId = 'modal-root';
    modalRootContainer = document.getElementById(modalRootElementId);
  }

  if (!modalRootContainer) {
    return <pre>ReferenceError: Document is not defined</pre>;
  }

  return ReactDOM.createPortal(children, modalRootContainer);
}
