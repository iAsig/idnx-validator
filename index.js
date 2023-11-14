const IDNP_REGEX = /^((2\d{12})|(09\d{11}))$/;
const IDNO_REGEX = /^(1\d{12})$/;
const IDNV_REGEX = /^(3\d{12})$/;

const validate = (value, regex) => {
  if (!regex.test(value)) {
    return false;
  }

  const crc = value
    .substring(0, 12)
    .split('')
    .reduce(
      (acc, char, i) =>
        acc + Number(char) * (i % 3 === 0 ? 7 : i % 3 === 1 ? 3 : 1),
      0,
    );

  return Number(value[12]) === crc % 10;
};

const validateIDNP = (value) => validate(value, IDNP_REGEX);
const validateIDNO = (value) => validate(value, IDNO_REGEX);
const validateIDNV = (value) => validate(value, IDNV_REGEX);
