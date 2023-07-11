import { component$ } from '@builder.io/qwik';
import {useCounter} from '../../hooks/useCounter';

export const Counter = component$(() => {
  // Start custom hook to take state and functions
  const { counter, increment, reset } = useCounter();
  return (
    <>
      <h4>Counter Value : {counter.value}</h4>
      <button onClick$={increment}>+1</button>&nbsp;
      <button onClick$={reset}>Reset</button>
    </>
  );
});
