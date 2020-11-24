import React, { useReducer } from 'react';

type TAction =
  | {
      type: 'INCREMENT';
      payload: number;
    }
  | {
      type: 'DECREMENT';
      payload: number;
    }
  | {
      type: 'CLEAR';
    };

const reducer = (state: { count: number }, action: TAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + action.payload };
    case 'DECREMENT':
      return { ...state, count: state.count - action.payload };
    case 'CLEAR':
      return { ...state, count: 0 };
  }
};

const Counter = () => {
  const [{ count }, dispatch] = useReducer(reducer, {
    count: 0,
  });

  const handleCounterClick = (type: string) => {
    switch (type) {
      case 'I':
        dispatch({
          type: 'INCREMENT',
          payload: 1,
        });
        break;
      case 'D':
        dispatch({
          type: 'DECREMENT',
          payload: 1,
        });
        break;
      case 'C':
        dispatch({
          type: 'CLEAR',
        });
    }
  };

  return (
    <section className='counter-container'>
      <header className='counter-title'>
        <h1>See the count below</h1>
        <h2>{count}</h2>
      </header>
      <section className='buttons'>
        <button onClick={() => handleCounterClick('I')}>Increment</button>
        <button onClick={() => handleCounterClick('D')}>Decrement</button>
        <button onClick={() => handleCounterClick('C')}>Clear</button>
      </section>
    </section>
  );
};

export default Counter;
