import React from 'react';
import {PopularComponentType} from './PopularComponent.types';

export const PopularComponent: React.FC<PopularComponentType> = (props) => {
  const { onChange, data, onSomethingHover, onSomethingClick, onSomethingDoesSomething } = props;
  
  return (
    <div>
      // Component UI
    </div>
  )
};