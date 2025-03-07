import { fireEvent, render } from '@testing-library/react-native';

import { CustomCheckbox } from '../components/ui/checkbox';

describe('CustomCheckbox', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(<CustomCheckbox />);
    expect(getByTestId('checkbox-pressable')).toBeTruthy();
  });

  it('displays the label and description when provided', () => {
    const { getByText } = render(
      <CustomCheckbox label="Test Label" description="Test Description" />
    );

    expect(getByText('Test Label')).toBeTruthy();
    expect(getByText('Test Description')).toBeTruthy();
  });

  it('shows the check icon when checked', () => {
    const { getByTestId } = render(<CustomCheckbox checked color="primary" />);

    expect(getByTestId('checkbox-icon')).toHaveProp(
      'className',
      expect.stringContaining('bg-primary-dark')
    );
  });

  it('calls onChange when pressed', () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(<CustomCheckbox onChange={onChangeMock} />);
    const checkbox = getByTestId('checkbox-pressable');

    fireEvent.press(checkbox);
    expect(onChangeMock).toHaveBeenCalled();
  });

  it('does not call onChange when disabled', () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(<CustomCheckbox disabled onChange={onChangeMock} />);

    fireEvent.press(getByTestId('checkbox-pressable'));
    expect(onChangeMock).not.toHaveBeenCalled();
  });

  it('shows required asterisk when required', () => {
    const { getByText } = render(<CustomCheckbox label="Required Label" required />);
    expect(getByText('Required Label *')).toBeTruthy();
  });

  it('applies error styles when error prop is set', () => {
    const { getByTestId } = render(<CustomCheckbox error />);
    expect(getByTestId('checkbox-icon')).toHaveProp(
      'className',
      expect.stringContaining('bg-error-op-8')
    );
  });
});
