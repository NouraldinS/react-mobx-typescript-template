import React, { useContext } from 'react'; 
import { SubComponentBType } from '../ComplexComponent.types';
import { ComplexComponentContext } from '../ComplexComponentContext';

export const SubcomponentB: React.FC<SubComponentBType> = (props) => {
  const { subComponentAction } = useContext(ComplexComponentContext)

  return (
    <div>
      //
    </div>
  )
} 

export default SubcomponentB;
