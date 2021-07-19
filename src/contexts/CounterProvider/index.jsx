import P from 'prop-types';
import { useReducer } from 'react';

import { CounterContext } from './CounterContext';
import { counterRecuder } from './CounterReducer';
import { CounterData } from './CounterData';

export const CounterProvider = ({ children }) => {
  const [counterState, dispatchCounter] = useReducer(counterRecuder, CounterData);

  return <CounterContext.Provider value={{ counterState, dispatchCounter }}>{children}</CounterContext.Provider>;
};

CounterProvider.propTypes = {
  children: P.node.isRequired,
};
