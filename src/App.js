import './App.css';
import { useContext, useState, createContext } from 'react';

// eslint-disable-next-line no-unused-vars
const globalState = {
  title: 'O titulo do contexto',
  body: 'Body do contexto',
  counter: 0,
};

// eslint-disable-next-line
const GlobalContext = createContext();

// eslint-disable-next-line
const Div = ({ children }) => {
  return (
    <>
      <H1 />
      <P />
    </>
  );
};

// eslint-disable-next-line
const H1 = ({ children }) => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { title, counter },
    setContextState,
  } = theContext;
  return (
    <>
      <h1 onClick={() => setContextState((c) => ({ ...c, counter: c.counter + 1 }))}>
        {title} - {counter}
      </h1>
    </>
  );
};

// eslint-disable-next-line
const P = () => {
  const theContext = useContext(GlobalContext);
  const { contextState } = theContext;
  return <h1>{contextState.body}</h1>;
};

export default function App() {
  const [contextState, setContextState] = useState(globalState);

  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
}
