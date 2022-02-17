import React, { useState } from 'react'; 
import { ComplexComponent as ComplexComponentPure } from './ComplexComponent';
import { ComplexComponentContext } from './ComplexComponentContext';

export const ComplexComponent: React.FC<never> = (props) => {
  const [state, setState] = useState(null);
  const { alphaDataStore } = useStore();

  /**
   * 
   * @param any 
   */
  const firstAction = (any) => {
    // Action
  }
  /**
   * 
   * @param any 
   */
  const secondAction = (any) => {
    // Action
  }
  /**
   * 
   * @param any 
   * @param any2 
   */
  const subComponentAction = (any, any2) => {

  }

  return (
    <ComplexComponentContext.Provider value={{dataBeta: state, updateDataBeta: setState, subComponentAction}}>
      <ComplexComponentPure
        firstAction={firstAction}
        secondAction={secondAction}
      />
    </ComplexComponentContext.Provider>
  )
}