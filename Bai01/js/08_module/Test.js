"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MModule = require("./MModule");
// // Some samples to try
// let strings = ["Hello", "98052", "101"];
// // Validators to use
// let validators: { [s: string]: StringValidator; } = {};
// validators["ZIP code"] = new ZipCodeValidator();
// validators["Letters only"] = new LettersOnlyValidator();
// Show whether each string passed each validator
// for (let s of strings) {
//     for (let name in validators) {
//         console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
//     }
// }
let Obj = new MModule.Abc;
MModule.Abc.showInfo();