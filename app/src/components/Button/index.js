import React from 'react'

import { Button } from '../../styles/Button';

export const ButtonComponent = ({ onClickFn, args, text }) => {
  return (
    <Button
      onClick={ () => onClickFn(args) }
    >
      { text }
    </Button>
  );
};
