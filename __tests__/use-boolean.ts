import { act, renderHook } from '@testing-library/react-native';

import { useBoolean } from '../lib/hooks/use-boolean'; // Adjust the path accordingly

describe('useBoolean', () => {
  test('should initialize with default value (false)', () => {
    const { result } = renderHook(() => useBoolean());
    expect(result.current.isTrue).toBe(false);
    expect(result.current.isFalse).toBe(true);
  });

  test('should initialize with provided value', () => {
    const { result } = renderHook(() => useBoolean(true));
    expect(result.current.isTrue).toBe(true);
    expect(result.current.isFalse).toBe(false);
  });

  test('should set value to true', () => {
    const { result } = renderHook(() => useBoolean());
    act(() => {
      result.current.setTrue();
    });
    expect(result.current.isTrue).toBe(true);
  });

  test('should set value to false', () => {
    const { result } = renderHook(() => useBoolean(true));
    act(() => {
      result.current.setFalse();
    });
    expect(result.current.isTrue).toBe(false);
  });

  test('should toggle the value', () => {
    const { result } = renderHook(() => useBoolean());
    act(() => {
      result.current.toggle();
    });
    expect(result.current.isTrue).toBe(true);

    act(() => {
      result.current.toggle();
    });
    expect(result.current.isTrue).toBe(false);
  });

  test('should update state when initialValue changes', () => {
    const { result, rerender } = renderHook(({ value }) => useBoolean(value), {
      initialProps: { value: false },
    });

    expect(result.current.isTrue).toBe(false);

    rerender({ value: true });
    expect(result.current.isTrue).toBe(true);

    rerender({ value: false });
    expect(result.current.isTrue).toBe(false);
  });
});
