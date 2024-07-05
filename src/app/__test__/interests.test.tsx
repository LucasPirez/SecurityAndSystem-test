import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Interests } from '../../components/Interests/Interests';

test('Interest Section', () => {
  render(<Interests />);
  expect(
    screen.getByRole('heading', { level: 3, name: 'Intereses' })
  ).toBeDefined();

  expect(screen.getByRole('list')).toBeDefined();
});
