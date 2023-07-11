import { useSignal, $ } from '@builder.io/qwik';

const useCounter = (initialValue = 0) => {
  // 1
  const counter = useSignal(initialValue);

  // 2
  const increment = $(() => counter.value++);
  const reset = $(() => (counter.value = 0));

  // 3
  return {
    counter,
    increment,
    reset,
  };
};

export { useCounter} ;