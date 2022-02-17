import React from 'react'; 
import { noop } from 'lodash'; 

export const ComplexComponentContext = React.createContext({ dataBeta: null, updateDataBeta: noop, subComponentAction: noop });


