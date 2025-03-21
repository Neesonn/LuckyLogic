/// <reference types="@testing-library/jest-dom" />
import { render, screen, act } from '@/utils/test-utils';
import OptimizedImage from '../OptimizedImage';

describe('OptimizedImage', () => {
  const defaultProps = {
    src: '/test-image.jpg',
    alt: 'Test image',
    width: 800,
    height: 600,
  };

  it('renders with default props', () => {
    render(<OptimizedImage {...defaultProps} />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('alt', defaultProps.alt);
    expect(img).toHaveAttribute('width', defaultProps.width.toString());
    expect(img).toHaveAttribute('height', defaultProps.height.toString());
  });

  it('applies custom className to container', () => {
    const customClass = 'custom-image-class';
    render(<OptimizedImage {...defaultProps} className={customClass} />);
    const container = screen.getByRole('img').parentElement;
    expect(container).toHaveClass(customClass);
  });

  it('shows loading state initially', () => {
    render(<OptimizedImage {...defaultProps} />);
    const img = screen.getByRole('img');
    expect(img.className).toContain('scale-110 blur-2xl grayscale');
  });

  it('applies quality and sizes attributes', () => {
    render(<OptimizedImage {...defaultProps} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute(
      'sizes',
      '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    );
  });

  it('transitions from loading to loaded state', async () => {
    render(<OptimizedImage {...defaultProps} />);
    const img = screen.getByRole('img');

    // Initial state
    expect(img.className).toContain('scale-110 blur-2xl grayscale');

    // Wait for loading to complete
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    // Final state
    expect(img.className).toContain('scale-100 blur-0 grayscale-0');
  });
});
