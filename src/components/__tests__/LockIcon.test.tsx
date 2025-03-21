import { render, screen } from '@testing-library/react';
import LockIcon from '../LockIcon';

describe('LockIcon', () => {
  it('renders the lock icon with correct styling', () => {
    render(<LockIcon />);
    
    // Check if the container div exists with correct classes
    const container = screen.getByRole('presentation');
    expect(container).toHaveClass(
      'fixed',
      'top-4',
      'right-4',
      'bg-green-600',
      'p-2',
      'rounded-full',
      'shadow-lg',
      'border-2',
      'border-gold-500'
    );
    
    // Check if the Lock icon is rendered
    const lockIcon = screen.getByTestId('lock-icon');
    expect(lockIcon).toBeInTheDocument();
    expect(lockIcon).toHaveAttribute('width', '28');
    expect(lockIcon).toHaveAttribute('height', '28');
    expect(lockIcon).toHaveAttribute('stroke-width', '2.5');
    expect(lockIcon).toHaveAttribute('color', 'white');
  });
}); 