# Moldova National IDs - validator

## Overview
IDNX-Validator is a JavaScript library designed for validating different types of IDs from the Republic of Moldova's national registry. This library efficiently validates personal national IDs (`validateIDNP`), organisation IDs (`validateIDNO`), and vehicle IDs (`validateIDNV`), ensuring their compliance with specific format and checksum standards.

```js
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
```


## Features
- **Personal National ID Validation (`validateIDNP`):** Validates IDs assigned to individuals, ensuring they follow a specific 13-digit format and pass checksum verification.
- **Organization ID Validation (`validateIDNO`):** Checks organization IDs for format compliance and accuracy based on their unique 13-digit structure.
- **Vehicle ID Validation (`validateIDNV`):** Ensures vehicle IDs adhere to the prescribed 13-digit format and pass the checksum test.

## How It Works
The library employs regular expressions and a checksum calculation method to validate the IDs. It uses three different regular expressions, each tailored to a specific type of ID:
- **IDNP_REGEX:** For personal national IDs.
- **IDNO_REGEX:** For organization IDs.
- **IDNV_REGEX:** For vehicle IDs.

The validation process involves checking the format using these regular expressions and then verifying the checksum, which is calculated based on the first 12 digits of the ID.

## Installation
You can easily incorporate IDNX-Validator into your JavaScript project. Simply include the provided code in your project, and you are ready to validate different types of national registry IDs.

## Usage
To use IDNX-Validator, call the respective function with the ID you want to validate. For example:
- `validateIDNP('YourPersonalIDHere')`
- `validateIDNO('YourOrganizationIDHere')`
- `validateIDNV('YourVehicleIDHere')`

## License
IDNX-Validator is open-source and available under [LICENSE]. Feel free to use, modify, and distribute it as per the license terms.
