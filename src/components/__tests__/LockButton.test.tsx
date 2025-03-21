import { render, screen, fireEvent } from '@testing-library/react';
import { LockButton } from '@/components/ui/LockButton';
import { useRouter } from 'next/navigation';

// Mock the useRouter hook
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('LockButton', () => {
  it('renders the lock button', () => {
    render(<LockButton />);
    const button = screen.getByTestId('lock-button');
    expect(button).toBeInTheDocument();
  });

  it('has correct accessibility label', () => {
    render(<LockButton />);
    const button = screen.getByLabelText('Go to login');
    expect(button).toBeInTheDocument();
  });

  it('navigates to login page when clicked', () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockImplementation(() => ({
      push: mockPush,
    }));

    render(<LockButton />);
    const button = screen.getByTestId('lock-button');
    fireEvent.click(button);

    expect(mockPush).toHaveBeenCalledWith('/login');
  });
});
