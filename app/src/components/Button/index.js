import React from 'react'

import { Button } from '../../styles/Button';

export const ButtonComponent = ({ onClickFn, args, text }) => <Button onClick={ () => onClickFn(args) }>{ text }</Button>;
