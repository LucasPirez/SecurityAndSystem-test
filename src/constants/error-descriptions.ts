export const ERROR_DESCRIPTION: Partial<Record<keyof ValidityState, string>> = {
  valueMissing: 'This field cannot be empty',
  typeMismatch: 'The field is incorrect',
  tooShort: 'This field is to short',
};
