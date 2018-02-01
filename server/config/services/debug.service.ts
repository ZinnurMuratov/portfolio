import * as debugFactory from 'debug';

export function debugLog(name) {
  const debug = debugFactory(name);
  const error = debugFactory(name);

  error.log = (...args) => {
    console.log('====================================');
    console.log(...args);
    console.log('====================================');
  };

  return { debug, error };

}
