import { Dispatch, SetStateAction, useState } from 'react';

// 1.way of fixing error
// export const useHome = (): [number, Dispatch<SetStateAction<number>>] => {

export const useHome = () => {
  const [state, setState] = useState(0);

  // 2 way of fixing error
  return [state, setState] as const;
};

function Home() {
  const [state, setState] = useHome();

  setState(11);
  // error: This expression is not callable.Not all constituents of type 'number | Dispatch<SetStateAction<number>>'
  // are callable. Type 'number' has no call signatures.ts(2349)

  console.log(state);

  return <div>Home</div>;
}
