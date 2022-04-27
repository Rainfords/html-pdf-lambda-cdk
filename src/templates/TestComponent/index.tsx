import React from 'react';
import { ComponentProps } from '../../ssRenderer/index';

export const TestComponent = (props: ComponentProps): JSX.Element => {
  return <h1>TESTING A PDF - {props.payload.name}</h1>;
};
