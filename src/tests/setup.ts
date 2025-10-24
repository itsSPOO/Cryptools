import '@testing-library/jest-dom';

// Mock crypto.subtle for testing
const crypto = {
  subtle: {
    digest: async (algorithm: string, data: Uint8Array) => {
      // Simple mock implementation
      return new ArrayBuffer(32);
    },
  },
};

Object.defineProperty(global, 'crypto', {
  value: crypto,
});

// Mock clipboard API
Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(() => Promise.resolve()),
  },
});
