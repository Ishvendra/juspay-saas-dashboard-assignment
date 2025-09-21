import React from 'react';
import { render, screen } from '@testing-library/react';
import { OrderStatusBadge } from '../OrderStatusBadge';

jest.mock('../../ui/icon', () => ({
  Icon: ({ name }: { name: string }) => (
    <span data-testid={`icon-${name}`} className='icon' />
  ),
}));

describe('OrderStatusBadge', () => {
  it('renders the correct text and applies the correct color for "Complete" status', () => {
    // We get the container to inspect the element's classes
    const { container } = render(<OrderStatusBadge status='Complete' />);

    // Check 1: The text is correct
    expect(screen.getByText('Complete')).toBeInTheDocument();

    // Check 2: The parent span has the correct color class
    const badgeElement = container.querySelector('span');
    expect(badgeElement).toHaveClass('text-secondary-green');

    // Check 3: The icon is rendered
    expect(screen.getByTestId('icon-dot')).toBeInTheDocument();
  });

  it('renders the correct color for different statuses', () => {
    // Test In Progress status
    const { rerender } = render(<OrderStatusBadge status='In Progress' />);
    expect(document.querySelector('span')).toHaveClass('text-secondary-indigo');

    // Test Pending status
    rerender(<OrderStatusBadge status='Pending' />);
    expect(document.querySelector('span')).toHaveClass('text-secondary-blue');

    // Test Approved status
    rerender(<OrderStatusBadge status='Approved' />);
    expect(document.querySelector('span')).toHaveClass('text-secondary-yellow');

    // Test Rejected status
    rerender(<OrderStatusBadge status='Rejected' />);
    expect(document.querySelector('span')).toHaveClass('text-black-40');
  });
});
