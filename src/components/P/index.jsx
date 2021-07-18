import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

// eslint-disable-next-line
export const P = () => {
  const theContext = useContext(GlobalContext);
  const { state } = theContext;
  return <h1>{state.body}</h1>;
};
