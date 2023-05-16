"use client";

import useRedux from "@/app/hooks/use-redux";

export default function Home() {
  const {
    actions: { decrement, increment },
    dispatch,
    state: { value: count },
  } = useRedux("counter");

  const decrementValue = () => {
    dispatch(decrement(1));
  };

  const incrementValue = () => {
    dispatch(increment(1));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={decrementValue}>Decrement</button>
      <p>{count}</p>
      <button onClick={incrementValue}>Increment</button>
    </main>
  );
}
