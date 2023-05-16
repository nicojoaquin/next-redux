"use client";

import useRedux from "@/app/hooks/use-redux";

export default function Home() {
  const {
    actions: { decrement, increment },
    dispatch,
    state: { value: count },
  } = useRedux("counter");

  const {
    actions: { login, logout },
    dispatch: dispatchUser,
    state: { user },
  } = useRedux("user");

  const decrementValue = () => {
    dispatch(decrement(1));
  };

  const incrementValue = () => {
    dispatch(increment(1));
  };

  const loginUser = () => {
    dispatch(login({ username: "nico", password: "1234" }));
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={decrementValue}>Decrement</button>
      <p>{count}</p>
      <button onClick={incrementValue}>Increment</button>
      {user && <p>{user.username}</p>}
    </main>
  );
}
