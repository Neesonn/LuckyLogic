import { render, screen, fireEvent } from '@testing-library/react';
import { LockButton } from '@/components/ui/LockButton';

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
    const mockRouter = { push: jest.fn() };
    jest.spyOn(require('next/navigation'), 'useRouter').mockReturnValue(mockRouter);

    render(<LockButton />);
    const button = screen.getByTestId('lock-button');
    fireEvent.click(button);

    expect(mockRouter.push).toHaveBeenCalledWith('/login');
  });
}); 