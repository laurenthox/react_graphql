import React, { useContext } from 'react'

import CountryCode from "../../context";
import { ModalWrapper } from '../../styles/Modal';
import { ShowInfo } from '../ShowInfo';
import { ButtonComponent } from '../Button';

export const Modal = () => {
  const context = useContext(CountryCode);
  const { modal, showHideModal } = context;

  return (
    <ModalWrapper modal={ modal }>
      <ShowInfo/>
      <ButtonComponent onClickFn={ showHideModal } text={ 'Got it' }/>
    </ModalWrapper>
  )
};
