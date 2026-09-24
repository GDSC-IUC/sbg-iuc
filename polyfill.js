if (typeof globalThis.localStorage === 'object' && globalThis.localStorage !== null && !globalThis.localStorage.getItem) {
  Object.defineProperty(globalThis, 'localStorage', {
    value: {
      getItem: () => null,
      setItem: () => null,
      removeItem: () => null,
      clear: () => null,
      key: () => null,
      length: 0,
    },
    writable: true,
    configurable: true,
  });
}

// Guarantee this polyfill is loaded in any child process or worker thread
if (!process.env.NODE_OPTIONS || !process.env.NODE_OPTIONS.includes('./polyfill.js')) {
    process.env.NODE_OPTIONS = `${process.env.NODE_OPTIONS || ''} --require ./polyfill.js`.trim();
}
