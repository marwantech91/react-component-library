import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../components/Button/Button';
import { Badge } from '../components/Badge/Badge';
import { Input } from '../components/Input/Input';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../components/Card/Card';
import { cn } from '../utils/cn';

// === cn utility ===

describe('cn', () => {
  it('merges class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('filters falsy values', () => {
    expect(cn('foo', false, null, undefined, 'bar')).toBe('foo bar');
  });

  it('returns empty string for no args', () => {
    expect(cn()).toBe('');
  });
});

// === Button ===

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('applies variant class', () => {
    const { container } = render(<Button variant="danger">Delete</Button>);
    expect(container.firstChild).toHaveClass('bg-red-600');
  });

  it('applies size class', () => {
    const { container } = render(<Button size="lg">Large</Button>);
    expect(container.firstChild).toHaveClass('h-12');
  });

  it('is disabled when isLoading', () => {
    render(<Button isLoading>Save</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('sets aria-busy when loading', () => {
    render(<Button isLoading>Save</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
  });

  it('handles click events', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});

// === Badge ===

describe('Badge', () => {
  it('renders children text', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('renders dot indicator when dot prop is true', () => {
    const { container } = render(<Badge dot>Status</Badge>);
    const dotEl = container.querySelector('.rounded-full');
    expect(dotEl).toBeInTheDocument();
  });

  it('renders remove button when removable', () => {
    render(<Badge removable>Tag</Badge>);
    expect(screen.getByLabelText('Remove')).toBeInTheDocument();
  });

  it('calls onRemove when dismiss is clicked', () => {
    const onRemove = jest.fn();
    render(<Badge removable onRemove={onRemove}>Tag</Badge>);
    fireEvent.click(screen.getByLabelText('Remove'));
    expect(onRemove).toHaveBeenCalledTimes(1);
  });

  it('applies rounded-full when rounded is true', () => {
    const { container } = render(<Badge rounded>Pill</Badge>);
    expect(container.firstChild).toHaveClass('rounded-full');
  });
});

// === Input ===

describe('Input', () => {
  it('renders with label', () => {
    render(<Input label="Email" />);
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('shows required asterisk', () => {
    render(<Input label="Name" isRequired />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('displays error message', () => {
    render(<Input error="Required field" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Required field');
  });

  it('sets aria-invalid on error', () => {
    render(<Input error="Invalid" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('shows helper text when no error', () => {
    render(<Input helperText="Enter your email" />);
    expect(screen.getByText('Enter your email')).toBeInTheDocument();
  });

  it('hides helper text when error is present', () => {
    render(<Input helperText="Hint" error="Wrong" />);
    expect(screen.queryByText('Hint')).not.toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});

// === Card ===

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies outlined variant', () => {
    const { container } = render(<Card variant="outlined">Test</Card>);
    expect(container.firstChild).toHaveClass('border');
  });

  it('applies hover class when hoverable', () => {
    const { container } = render(<Card hoverable>Hover me</Card>);
    expect(container.firstChild).toHaveClass('cursor-pointer');
  });
});

describe('Card sub-components', () => {
  it('renders CardHeader', () => {
    render(<CardHeader data-testid="header">Header</CardHeader>);
    expect(screen.getByTestId('header')).toHaveTextContent('Header');
  });

  it('renders CardTitle as heading', () => {
    render(<CardTitle>Title</CardTitle>);
    expect(screen.getByText('Title').tagName).toBe('H3');
  });

  it('renders CardContent', () => {
    render(<CardContent data-testid="content">Body</CardContent>);
    expect(screen.getByTestId('content')).toHaveTextContent('Body');
  });

  it('renders CardFooter', () => {
    render(<CardFooter data-testid="footer">Footer</CardFooter>);
    expect(screen.getByTestId('footer')).toHaveTextContent('Footer');
  });
});
