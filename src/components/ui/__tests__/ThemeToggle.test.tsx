import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeToggle } from '../ThemeToggle';
import * as nextThemes from 'next-themes';

jest.mock('next-themes', () => ({
  useTheme: jest.fn(),
}));

jest.mock('@/components/ui/icon', () => ({
  Icon: (props: { name: string }) => <svg data-testid={`icon-${props.name}`} />,
}));

const useThemeMock = nextThemes.useTheme as jest.Mock;

describe('ThemeToggle', () => {
  it('calls setTheme to switch to dark mode when clicked', () => {
    const setThemeMock = jest.fn();
    useThemeMock.mockReturnValue({
      theme: 'light',
      setTheme: setThemeMock,
    });

    render(<ThemeToggle />);
    const toggleButton = screen.getByRole('button', { name: /toggle theme/i });
    fireEvent.click(toggleButton);
    expect(setThemeMock).toHaveBeenCalledWith('dark');
  });
});
