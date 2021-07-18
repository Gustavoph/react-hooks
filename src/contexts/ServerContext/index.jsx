import { createContext, useState } from 'react';

import { ServerState } from './data';

export const ContextServer = createContext();

// eslint-disable-next-line
export const ServerContext = ({ children }) => {
  const [serverState, setServerState] = useState(ServerState);
  return <ContextServer.Provider value={{ serverState, setServerState }}>{children}</ContextServer.Provider>;
};
