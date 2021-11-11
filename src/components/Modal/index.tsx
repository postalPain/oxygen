import { ModalContext } from 'components/WithModal/context';
import React, { useContext, useEffect, useState } from 'react';

interface IModal {
  children?;
}

const Modal = (props: IModal) => {
  const context = useContext(ModalContext);

  useEffect(() => {
    context.setComponent(props.children);
  }, [props.children]);

  useEffect(() => {
    return () => context.setComponent(null);
  }, []);

  return <></>;
};



export default Modal;