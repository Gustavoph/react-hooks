import { useContext, useEffect, useRef } from 'react';
import { decrementCounter, incrementCounter } from '../../contexts/CounterProvider/CounterActions';

import { CounterContext } from '../../contexts/CounterProvider/CounterContext';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { PostsContext } from '../../contexts/PostsProvider/context';

export const Posts = () => {
  const isMounted = useRef(true);
  const postsContext = useContext(PostsContext);
  const counterContext = useContext(CounterContext);
  const {
    postsState: { posts, loading },
    postsDispatch,
  } = postsContext;

  const {
    counterState: { counter },
    dispatchCounter,
  } = counterContext;

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [postsDispatch]);
  return (
    <div>
      <h1>Posts: </h1>
      <h2>Contador: {counter}</h2>
      <span>
        <button onClick={() => incrementCounter(dispatchCounter)}>+</button>
        <button onClick={() => decrementCounter(dispatchCounter)}>-</button>
      </span>
      {loading && (
        <p>
          <strong>Loading posts...</strong>
        </p>
      )}
      {posts.map((p) => (
        <div key={p.id}>
          <p>{p.title}</p>
        </div>
      ))}
    </div>
  );
};
