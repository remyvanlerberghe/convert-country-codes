var lib = require("./index");

var iso3Result = lib.convertIso3Code("BRA");
console.assert(iso3Result.iso2 === "BR");
console.assert(iso3Result.ioc === "BRA");

var iso2Result = lib.convertIso2Code("BR");
console.assert(iso2Result.iso3 === "BRA");
console.assert(iso2Result.ioc === "BRA");

var iocResult = lib.convertIocCode("BRA");
sconsole.assert(iocResult.iso2 === "BR");
console.assert(iocResult.iso3 === "BRA");
