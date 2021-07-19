import * as types from './CounterTypes';

export const counterRecuder = (state, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNTER: {
      return { ...state, counter: state.counter + 1 };
    }

    case types.DECREMENT_COUNTER: {
      return { ...state, counter: state.counter - 1 };
    }
  }

  console.log(`Action not found!`);
  return { ...state };
};
