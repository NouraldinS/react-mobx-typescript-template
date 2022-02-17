import React from 'react'; 
import { ComplexComponentType } from './ComplexComponent.types'
import { SubcomponentA, SubcomponentB } from './components';

export const ComplexComponent: React.FC<ComplexComponentType> = (props) => {
  return (
    <div>
      <SubcomponentA />
      <SubcomponentB />
      // UI
    </div>
  )
}