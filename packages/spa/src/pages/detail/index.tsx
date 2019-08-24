import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useImmerReducer } from 'use-immer';

export const Detail = () => {
  const [state, dispatch] = useImmerReducer(
    (draft, action) => {
      switch (action.type) {
        case 'incr':
          draft.count++;
          break;
        default:
          break;
      }
    },
    {
      count: 0
    }
  );
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div
      style={props}
      onClick={() => {
        dispatch({
          type: 'incr'
        });
      }}
    >
      I will fade in:{state.count}
    </animated.div>
  );
};
