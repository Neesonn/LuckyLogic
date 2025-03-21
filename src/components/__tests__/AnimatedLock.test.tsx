import { render, screen, fireEvent } from '@testing-library/react';
import AnimatedLock from '../AnimatedLock';
import { useRouter } from 'next/navigation';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

describe('AnimatedLock', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the lock icon initially', () => {
    render(<AnimatedLock />);
    
    // Check if the container div exists with correct classes
    const container = screen.getByRole('presentation');
    expect(container).toHaveClass(
      'fixed',
      'top-4',
      'right-4',
      'bg-green-600',
      'p-3',
      'rounded-full',
      'shadow-lg',
      'border-2',
      'border-[#FFD700]',
      'cursor-pointer'
    );
    
    // Check if the Lock icon is initially rendered
    const lockIcon = screen.getByTestId('lock-icon');
    expect(lockIcon).toBeInTheDocument();
    expect(lockIcon).toHaveAttribute('width', '30');
    expect(lockIcon).toHaveAttribute('height', '30');
    expect(lockIcon).toHaveAttribute('stroke-width', '2.5');
    expect(lockIcon).toHaveAttribute('color', 'white');
  });

  it('changes to unlock icon on hover', () => {
    render(<AnimatedLock />);
    
    const container = screen.getByRole('presentation');
    
    // Simulate hover start
    fireEvent.mouseEnter(container);
    
    // Check if the Unlock icon is rendered
    const unlockIcon = screen.getByTestId('unlock-icon');
    expect(unlockIcon).toBeInTheDocument();
    expect(unlockIcon).toHaveAttribute('width', '30');
    expect(unlockIcon).toHaveAttribute('height', '30');
    expect(unlockIcon).toHaveAttribute('stroke-width', '2.5');
    expect(unlockIcon).toHaveAttribute('color', 'white');
  });
}); 