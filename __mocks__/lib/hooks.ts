export const useBoolean = jest.fn((initialValue = false) => ({
  isTrue: initialValue,
  isFalse: !initialValue,
  setTrue: jest.fn(),
  setFalse: jest.fn(),
  toggle: jest.fn(),
}));
