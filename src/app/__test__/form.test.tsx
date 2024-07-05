import { expect, test, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Form } from '../../components/form/Form';
import { FieldNames } from '@/constants';

describe('Test Form Component', () => {
  render(<Form />);

  test(`Check input ${FieldNames.NAME} exist`, () => {
    expect(
      screen.getByRole('textbox', { name: FieldNames.NAME })
    ).toBeDefined();
  });

  test(`Check input ${FieldNames.EMAIL} exist`, () => {
    expect(
      screen.getByRole('textbox', { name: FieldNames.EMAIL })
    ).toBeDefined();
  });

  test(`Check input ${FieldNames.MESSAGE} exist`, () => {
    expect(
      screen.getByRole('textbox', { name: FieldNames.MESSAGE })
    ).toBeDefined();
  });

  test(`Check button form exist`, () => {
    const button = screen.getByRole('button');
    expect(button).toBeDefined();
  });
});
