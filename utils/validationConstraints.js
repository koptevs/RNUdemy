import { validate } from 'validate.js';

export const validateString = (id, value) => {
  const constraints = {
    presence: { allowEmpty: false, message: "can't be empty!" },
  };

  if (value !== '') {
    constraints.format = {
      pattern: '[a-zа-я]+',
      flags: 'i',
      message: 'value can only contain letters',
    };
  }

  const validationResult = validate({ [id]: value }, { [id]: constraints });
  return validationResult && validationResult[id];
};

export const validateEmail = (id, value) => {
  const constraints = {
    presence: { allowEmpty: false, message: "can't be empty!" },
  };

  if (value !== '') {
    constraints.email = true;
  }

  const validationResult = validate({ [id]: value }, { [id]: constraints });
  return validationResult && validationResult[id];
};

export const validatePassword = (id, value) => {
  const constraints = {
    presence: { allowEmpty: false, message: "can't be empty!" },
  };

  if (value !== '') {
    constraints.length = {
      minimum: 5,
      tooShort: 'Karotkaja - nada %{count}',
      // message: 'fffgfgfg;;l;l',
    };
  }

  const validationResult = validate({ [id]: value }, { [id]: constraints });
  return validationResult && validationResult[id];
};
