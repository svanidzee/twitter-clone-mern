import { useRef } from 'react';

export default function Home() {
  // if you dont specify type, it would be undefined
  // const ref = useRef();
  // ref.current = 123; cannt reassign

  // const ref = useRef<number>(1212);

  // if we provide null
  // when pe pass null to useref, we are saying to react is that
  // i want you to take care of this ref
  const ref = useRef<HTMLDivElement>(null);

  return <div ref={ref}></div>;
}
