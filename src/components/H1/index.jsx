import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

// eslint-disable-next-line
export const H1 = ({ children }) => {
  const theContext = useContext(GlobalContext);
  const {
    state: { title, counter },
    setState,
  } = theContext;
  return (
    <>
      <h1 onClick={() => setState((c) => ({ ...c, counter: c.counter + 1 }))}>
        {title} - {counter}
      </h1>
    </>
  );
};
