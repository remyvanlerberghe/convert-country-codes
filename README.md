# convert-country-codes

> Convert ISO 3166-1 Alpha-2, ISO 3166-1 Alpha-3 and IOC country codes

## Install

```sh
$ npm install convert-country-codes
```

or

```sh
$ yarn add convert-country-codes
```

## Usage

```js
const {
  convertIocCode,
  convertIso2Code,
  convertIso3Code
} = require("convert-country-codes");

convertIocCode("BRA");
// { iso2: 'BR', iso3: 'BRA' }

convertIso2Code("BR");
// { ioc: 'BRA', iso3: 'BRA' }

convertIso3Code("BRA");
// { ioc: 'BRA', iso2: 'BR' }
```

## API

### convertIocCode(iocCode)

**Parameter**:
A string with an IOC country code

**Returns**:
An object with the corresponding ISO 3166-1 Alpha-2 and ISO 3166-1 Alpha-3 country codes

### convertIso2Code(iso2Code)

**Parameter**:
A string with an ISO 3166-1 Alpha-2 country code

**Returns**:
An object with the corresponding IOC and ISO 3166-1 Alpha-3 country codes

### convertIso3Code(iso3Code)

**Parameter**:
A string with an ISO 3166-1 Alpha-3 country code

**Returns**:
An object with the corresponding IOC and ISO 3166-1 Alpha-2 country codes

---

## License

MIT ©
