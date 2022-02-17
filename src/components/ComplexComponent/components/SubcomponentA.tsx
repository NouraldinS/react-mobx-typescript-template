import React, { useContext } from 'react'; 
import { SubComponentAType } from '../ComplexComponent.types';
import { ComplexComponentContext } from '../ComplexComponentContext';

const SubcomponentA: React.FC<SubComponentAType> = (props) => {
  const { subComponentAction } = useContext(ComplexComponentContext)

  return (
    <div>
      //
    </div>
  )
} 

export default SubcomponentA;