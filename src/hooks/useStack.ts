import { ReactChild, useCallback, useState } from "react";

interface Screens {
  name: string;
  component: ReactChild;
  index: number;
}

export const useStack = (initialValue: Screens) => {
  const [stack, setStack] = useState<Screens[]>(new Array(1).fill(initialValue));


  const push = useCallback((value: Screens) => {
    setStack(oldState => [...oldState, value])
  }, []);

  const pop = useCallback(() => {
    setStack(oldState => oldState.filter(element => element.index !== oldState.length - 1))
  }, []);


  return { stack, push, pop }
};