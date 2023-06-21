import {DependencyList, EffectCallback, useEffect, useRef} from 'react';

function useDidUpdate(effect: EffectCallback, deps?: DependencyList) {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;

      return;
    } // eslint-disable-next-line consistent-return

    return effect();
  }, deps);
}

export default useDidUpdate;
