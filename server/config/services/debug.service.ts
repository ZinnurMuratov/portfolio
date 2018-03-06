import * as debugFactory from 'debug';

export function debugLog(name: string) {
  const debug = debugFactory(name);
  const error = debugFactory(name);

  error.log = (...args: any[]) => {
    console.log('====================================');
    console.log(...args);
    console.log('====================================');
  };

  return { debug, error };

}
