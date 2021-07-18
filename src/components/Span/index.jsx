import { useContext } from 'react';

import { ContextServer } from '../../contexts/ServerContext';

export const Span = () => {
  const serveContext = useContext(ContextServer);
  const {
    serverState: { users, comments },
    setServerState,
  } = serveContext;

  return (
    <div>
      {comments}
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>Idade: {user.age}</p>
            <button onClick={(s) => setServerState({ ...s, comments: s.comments + 1 })}>Muda Idade</button>
          </div>
        );
      })}
    </div>
  );
};
