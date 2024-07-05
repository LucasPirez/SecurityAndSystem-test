import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from '../../components/header/Header';

test('Header Component', () => {
  render(<Header />);
  expect(
    screen.getByRole('heading', { level: 2, name: 'FirstName, LastName' })
  ).toBeDefined();
  expect(screen.getByRole('img')).toBeDefined();
});
