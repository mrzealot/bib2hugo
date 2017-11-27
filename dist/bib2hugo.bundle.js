(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["bib2hugo"] = factory();
	else
		root["bib2hugo"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function lookupOrAppend(conversionTable, _default_append) {
    return function (string) {
        if (conversionTable.hasOwnProperty(string))
            return conversionTable[string];
        if (!_default_append)
            throw new Error("I do not know how to modify the following string: "
                + string +
                ". "
                + "Change your TeX file or submit a feature request at "
                + "https://github.com/digitalheir/tex-to-unicode/issues.");
        return string + _default_append;
    };
}
exports.lookupOrAppend = lookupOrAppend;
//# sourceMappingURL=command-expander.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.simpleSuffix = function (modifier) {
    return function (char) {
        return char + modifier;
    };
};
exports.isSingleTerm = /^.$|^[0-9]+$/;
function addParenthesis(n) {
    return "(" + n + ")";
}
exports.addParenthesis = addParenthesis;
//# sourceMappingURL=util.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function updateProperties(target, values, opt_keys, opt_attributes) {
    if (opt_attributes === void 0) { opt_attributes = {
        writable: true,
        enumerable: true,
        configurable: true
    }; }
    if (!(target instanceof Object))
        throw new TypeError('"target" isn\'t an Object instance');
    if (values === undefined)
        return;
    if (!(values instanceof Object))
        throw new TypeError('"properties" isn\'t an Object instance');
    if (opt_attributes === undefined) {
        opt_attributes = { writable: true, enumerable: true, configurable: true };
    }
    else if (!(opt_attributes instanceof Object)) {
        throw new TypeError('"attributes" isn\'t an Object instance');
    }
    if (opt_keys === undefined) {
        for (var key in values) {
            if (values[key] !== undefined) {
                Object.defineProperty(target, key, Object.create(opt_attributes, { value: { value: values[key] } }));
            }
        }
    }
    else if (opt_keys instanceof Array) {
        opt_keys.forEach(function (key) {
            if (values[key] !== undefined) {
                Object.defineProperty(target, key, Object.create(opt_attributes, { value: { value: values[key] } }));
            }
        });
    }
    else if (opt_keys instanceof Object) {
        for (var targetKey in opt_keys) {
            var key = opt_keys[targetKey];
            if (values[key] !== undefined)
                Object.defineProperty(target, targetKey, Object.create(opt_attributes, { value: { value: values[key] } }));
        }
    }
    else {
        throw new TypeError('"keys" isn\'t an Object instance');
    }
}
exports.updateProperties = updateProperties;
function testProperties(target, values, opt_keys, opt_skipUndefined) {
    if (opt_skipUndefined === void 0) { opt_skipUndefined = true; }
    if (!(target instanceof Object))
        throw new TypeError('"target" isn\'t an Object instance');
    if (values === undefined)
        return true;
    if (!(values instanceof Object))
        throw new TypeError('"properties" isn\'t an Object instance');
    if (opt_skipUndefined === undefined)
        opt_skipUndefined = true;
    if (opt_keys === undefined) {
        for (var key in values) {
            if (target[key] !== values[key]
                && !(values[key] === undefined && opt_skipUndefined))
                return false;
        }
    }
    else if (opt_keys instanceof Array) {
        return opt_keys.every(function (key) {
            return target[key] === values[key] || (values[key] === undefined && opt_skipUndefined);
        });
    }
    else if (opt_keys instanceof Object) {
        for (var targetKey in opt_keys) {
            var key = opt_keys[targetKey];
            if (target[targetKey] !== values[key] && !(values[key] === undefined && opt_skipUndefined))
                return false;
        }
    }
    else {
        throw new TypeError('"keys" isn\'t an Object instance');
    }
    return true;
}
exports.testProperties = testProperties;
exports.mustBeNumber = function (a, msg) {
    if (!(isNumber(a)))
        throw new TypeError(msg ? msg : "Expected number");
    return a;
};
function isNumber(x) {
    return typeof x === "number";
}
exports.isNumber = isNumber;
function isString(x) {
    return typeof x === "string";
}
exports.isString = isString;
function mustNotBeUndefined(x, msg) {
    if (!x)
        throw new Error(msg);
    return x;
}
exports.mustNotBeUndefined = mustNotBeUndefined;
function mustBeObject(o, msg) {
    if (!(o instanceof Object))
        throw new TypeError(msg ? msg : "Expected Object");
    return o;
}
exports.mustBeObject = mustBeObject;
function mustBeString(o, msg) {
    if (typeof o !== "string")
        throw new TypeError(msg ? msg : "Expected string");
    return o;
}
exports.mustBeString = mustBeString;
function mustBeArray(a, msg) {
    if (!(isArray(a)))
        throw new TypeError(msg ? msg : "Expected Array");
    return a;
}
exports.mustBeArray = mustBeArray;
function isArray(x) {
    return !!x && x.constructor === Array;
}
exports.isArray = isArray;
exports.mconcat = function (mappend) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args.reduceRight(mappend);
};
exports.snd = function (pair) { return pair[1]; };
function concatMap(arr, f) {
    return [].concat.apply([], arr.map(f));
}
exports.concatMap = concatMap;
//# sourceMappingURL=Utils.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(2);
var CategoryCode_1 = __webpack_require__(6);
function isMeasure(x) {
    return isBuiltInMeasure(x) || isCustomMeasure(x);
}
exports.isMeasure = isMeasure;
exports.measureTypes = {
    "pt": true,
    "mm": true,
    "cm": true,
    "in": true,
    "ex": true,
    "em": true,
};
function isMeasureType(x) {
    return exports.measureTypes.hasOwnProperty(x);
}
exports.isMeasureType = isMeasureType;
function isBuiltInMeasure(x) {
    return isMeasureType(x.type) && Utils_1.isNumber(x.value);
}
exports.isBuiltInMeasure = isBuiltInMeasure;
function isCustomMeasure(x) {
    return isLaTeXBlock(x.expression);
}
exports.isCustomMeasure = isCustomMeasure;
exports.mathTypes = {
    Parentheses: "Parentheses",
    Square: "Square",
    Dollar: "Dollar"
};
function isMathType(x) {
    if (x === undefined)
        return false;
    else
        switch (x) {
            case "Parentheses":
            case "Square":
            case "Dollar":
                return true;
            default:
                return false;
        }
}
exports.isMathType = isMathType;
function isNameHaving(x, name) {
    return x !== undefined && (name === undefined
        ? typeof x.name === "string"
        : name === x.name);
}
exports.isNameHaving = isNameHaving;
function isTextHaving(x) {
    return x !== undefined && typeof x.text === "string";
}
exports.isTextHaving = isTextHaving;
function isLaTeXHaving(x) {
    return x !== undefined && Utils_1.isArray(x.latex);
}
exports.isLaTeXHaving = isLaTeXHaving;
function isArgumentHaving(x) {
    return x.arguments instanceof Array;
}
exports.isArgumentHaving = isArgumentHaving;
exports.typeTeXSeq = "TeXSeq";
exports.typeTeXEnv = "TeXEnv";
exports.typeTeXBraces = "TeXBraces";
exports.typeTeXComment = "TeXComment";
exports.typeTeXRaw = "TeXRaw";
exports.typeTeXComm = "TeXComm";
exports.typeTeXCommS = "TeXCommS";
var SubOrSuperSymbol;
(function (SubOrSuperSymbol) {
    SubOrSuperSymbol[SubOrSuperSymbol["SUP"] = 0] = "SUP";
    SubOrSuperSymbol[SubOrSuperSymbol["SUB"] = 1] = "SUB";
})(SubOrSuperSymbol = exports.SubOrSuperSymbol || (exports.SubOrSuperSymbol = {}));
function isSubOrSuperSymbol(x) {
    return x === SubOrSuperSymbol.SUP || x === SubOrSuperSymbol.SUB;
}
exports.isSubOrSuperSymbol = isSubOrSuperSymbol;
exports.fromStringLaTeX = function (x) { return newTeXRaw(exports.protectString(x)); };
exports.protectString = function (s) {
    var newString = [];
    for (var i = 0; i < s.length; i++)
        newString.push(protectChar(s.charAt(i)));
    return newString.join();
};
function protectChar(c) {
    switch (c) {
        case "#":
            return "\\#";
        case "$":
            return "\\$";
        case "%":
            return "\\%";
        case "^":
            return "\\^{}";
        case "&":
            return "\\&";
        case "{":
            return "\\{";
        case "}":
            return "\\}";
        case "~":
            return "\\~{}";
        case "\\":
            return "\\textbackslash{}";
        case "_":
            return "\\_{}";
        default:
            return c;
    }
}
exports.protectChar = protectChar;
function isTypeHaving(x) {
    var anyOfTypes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        anyOfTypes[_i - 1] = arguments[_i];
    }
    return anyOfTypes.length === 0 ? typeof x.type === "string" : anyOfTypes.some(function (type) { return x.type === type; });
}
exports.isTypeHaving = isTypeHaving;
function isLaTeXBlock(x) {
    return isLaTeXRaw(x) || isLaTeXNoRaw(x);
}
exports.isLaTeXBlock = isLaTeXBlock;
function isLaTeXNoRaw(x) {
    return isTeXEmpty(x)
        || isTeXChar(x)
        || isTeXComm(x)
        || isTeXEnv(x)
        || isTeXMath(x)
        || isTeXLineBreak(x)
        || isTeXBraces(x)
        || isTeXComment(x);
}
exports.isLaTeXNoRaw = isLaTeXNoRaw;
function isLaTeXRaw(x) {
    return isTeXEmpty(x)
        || isTeXRaw(x)
        || isTeXComm(x)
        || isTeXEnv(x)
        || isTeXMath(x)
        || isTeXLineBreak(x)
        || isTeXBraces(x)
        || isTeXComment(x);
}
exports.isLaTeXRaw = isLaTeXRaw;
function isTeXRaw(x) {
    return x !== undefined
        && x.type !== undefined
        && isTextHaving(x) && isTypeHaving(x, exports.typeTeXRaw);
}
exports.isTeXRaw = isTeXRaw;
function isTeXChar(x) {
    return x !== undefined
        && typeof x.string === "string"
        && typeof x.category === "number";
}
exports.isTeXChar = isTeXChar;
function isTeXComm(x) {
    return isNameHaving(x)
        && isArgumentHaving(x)
        && isTypeHaving(x, exports.typeTeXComm, exports.typeTeXCommS);
}
exports.isTeXComm = isTeXComm;
function isTeXCommS(x) {
    return isTeXComm(x) && x.arguments.length === 0;
}
exports.isTeXCommS = isTeXCommS;
function isTeXEnv(x, name) {
    return isTypeHaving(x, exports.typeTeXEnv);
}
exports.isTeXEnv = isTeXEnv;
function isTeXMath(x) {
    return isLaTeXHaving(x) && isTypeHaving(x) && isMathType(x.type);
}
exports.isTeXMath = isTeXMath;
function isTeXLineBreak(x) {
    return x !== undefined && typeof x.noNewPage === "boolean" && (x.measure === undefined || isMeasure(x.measure));
}
exports.isTeXLineBreak = isTeXLineBreak;
function isSubOrSuperScript(x) {
    return isSubOrSuperSymbol(x.type);
}
exports.isSubOrSuperScript = isSubOrSuperScript;
function isTeXBraces(x) {
    return isLaTeXHaving(x) && isTypeHaving(x, exports.typeTeXBraces);
}
exports.isTeXBraces = isTeXBraces;
function isFixArg(x) {
    return isTypeHaving(x, "FixArg");
}
exports.isFixArg = isFixArg;
function isOptArg(x) {
    return isTypeHaving(x, "OptArg");
}
exports.isOptArg = isOptArg;
function isTeXComment(x) {
    return isTextHaving(x) && isTypeHaving(x, exports.typeTeXComment);
}
exports.isTeXComment = isTeXComment;
function isTeXEmpty(e) {
    return e !== undefined && Object.keys(e).length === 0;
}
exports.isTeXEmpty = isTeXEmpty;
function newFixArg(l) {
    return { type: "FixArg", latex: l };
}
exports.newFixArg = newFixArg;
function newOptArg(l) {
    return l.length === 1 ? { type: "OptArg", latex: l } : { type: "MOptArg", latex: l };
}
exports.newOptArg = newOptArg;
function newSymArg(l) {
    return { type: "SymArg", latex: [l] };
}
exports.newSymArg = newSymArg;
function newParArg(l) {
    return { type: "ParArg", latex: [l] };
}
exports.newParArg = newParArg;
function newMOptArg(l) {
    return { type: "MOptArg", latex: l };
}
exports.newMOptArg = newMOptArg;
function newMSymArg(l) {
    return { type: "MSymArg", latex: l };
}
exports.newMSymArg = newMSymArg;
function newMParArg(l) {
    return { type: "MParArg", latex: l };
}
exports.newMParArg = newMParArg;
function newCommandS(name) {
    return {
        name: name,
        arguments: [],
        type: exports.typeTeXCommS
    };
}
exports.newCommandS = newCommandS;
function newTeXRaw(text) {
    return {
        text: text,
        type: exports.typeTeXRaw,
        characterCategories: CategoryCode_1.convertToTeXCharsDefault(text)
    };
}
exports.newTeXRaw = newTeXRaw;
function newTeXMath(type, startSymbol, endSymbol, latex) {
    return {
        latex: latex,
        type: type,
        startSymbol: startSymbol,
        endSymbol: endSymbol
    };
}
exports.newTeXMath = newTeXMath;
function newTeXBraces(latex) {
    return {
        latex: [latex],
        type: exports.typeTeXBraces
    };
}
exports.newTeXBraces = newTeXBraces;
exports.newTeXMathDol = function (latex) {
    return newTeXMath("Dollar", "$", "$", latex);
};
function newTeXComment(text) {
    return {
        text: text,
        type: exports.typeTeXComment
    };
}
exports.newTeXComment = newTeXComment;
function newTeXComm(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return {
        name: name,
        arguments: args,
        type: exports.typeTeXComm
    };
}
exports.newTeXComm = newTeXComm;
function newSubOrSuperScript(type, symbol, args) {
    return {
        type: type,
        symbol: symbol,
        arguments: args
    };
}
exports.newSubOrSuperScript = newSubOrSuperScript;
function newTeXEnv(name, latex) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return {
        name: name,
        latex: latex,
        arguments: args,
        type: exports.typeTeXEnv
    };
}
exports.newTeXEnv = newTeXEnv;
function stringifyLaTeX(tex) {
    var arr = [];
    (stringifyLaTeXInner(tex, arr));
    return arr.join("");
}
exports.stringifyLaTeX = stringifyLaTeX;
function stringifyLaTeXInner(tex, soFar) {
    if (isTeXComm(tex)) {
        soFar.push("\\", tex.name);
        tex.arguments.forEach(function (l) { return stringifyLaTeXInner(l, soFar); });
    }
    else if (isTeXEnv(tex))
        throw new Error("not supported yet");
    else if (isTeXMath(tex)) {
        soFar.push(tex.startSymbol);
        tex.latex.forEach(function (t) { return stringifyLaTeXInner(t, soFar); });
        soFar.push(tex.endSymbol);
    }
    else if (isTeXLineBreak(tex))
        soFar.push("\n");
    else if (isSubOrSuperScript(tex)) {
        soFar.push(tex.symbol);
        if (tex.arguments)
            tex.arguments.forEach(function (arg) { return (stringifyLaTeXInner(arg, soFar)); });
    }
    else if (isTeXBraces(tex)) {
        soFar.push("{");
        tex.latex.forEach(function (t) { return stringifyLaTeXInner(t, soFar); });
        soFar.push("}");
    }
    else if (isTeXComment(tex)) {
        soFar.push("%" + tex.text + "\n");
    }
    else if (isTeXRaw(tex))
        soFar.push(tex.text);
    else if (isTeXChar(tex))
        throw new Error("not supported yet");
    else if (isFixArg(tex)) {
        soFar.push("{");
        tex.latex.forEach(function (t) { return stringifyLaTeXInner(t, soFar); });
        soFar.push("}");
    }
    else if (isOptArg(tex)) {
        soFar.push("[");
        tex.latex.forEach(function (t) { return stringifyLaTeXInner(t, soFar); });
        soFar.push("]");
    }
    else
        throw new Error("Did not recognize " + JSON.stringify(tex));
}
//# sourceMappingURL=Syntax.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.supportedMarkups = {
    "ascii": true,
    "unicode": true,
    "html": true
};
//# sourceMappingURL=options.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(2));
__export(__webpack_require__(3));
__export(__webpack_require__(20));
//# sourceMappingURL=main.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultCategories = function (char) {
    switch (char) {
        case "\\":
            return 0;
        case "{":
            return 1;
        case "}":
            return 2;
        case "$":
            return 3;
        case "&":
            return 4;
        case "\r":
            return 5;
        case "#":
            return 6;
        case "^":
            return 7;
        case "_":
            return 8;
        case "\0":
            return 9;
        case " ":
            return 10;
        case "~":
            return 13;
        case "%":
            return 14;
        case "\d":
            return 15;
        default:
            return 11;
    }
};
function convertToTeXCharsDefault(str) {
    return convertToTeXChars(exports.defaultCategories, str);
}
exports.convertToTeXCharsDefault = convertToTeXCharsDefault;
function convertToTeXChars(categoryMap, str) {
    var chars = [];
    for (var i = 0; i < str.length; i++) {
        var charAt = str.charAt(i);
        chars.push({
            string: charAt,
            category: categoryMap(charAt)
        });
    }
    return chars;
}
exports.convertToTeXChars = convertToTeXChars;
//# sourceMappingURL=CategoryCode.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Parsimmon(action) {
  if (!(this instanceof Parsimmon)) {
    return new Parsimmon(action);
  }
  this._ = action;
}

var _ = Parsimmon.prototype;

// -*- Helpers -*-

function isParser(obj) {
  return obj instanceof Parsimmon;
}

function isArray(x) {
  return {}.toString.call(x) === '[object Array]';
}

function makeSuccess(index, value) {
  return {
    status: true,
    index: index,
    value: value,
    furthest: -1,
    expected: []
  };
}

function makeFailure(index, expected) {
  return {
    status: false,
    index: -1,
    value: null,
    furthest: index,
    expected: [expected]
  };
}

function mergeReplies(result, last) {
  if (!last) {
    return result;
  }
  if (result.furthest > last.furthest) {
    return result;
  }
  var expected = (result.furthest === last.furthest)
    ? unsafeUnion(result.expected, last.expected)
    : last.expected;
  return {
    status: result.status,
    index: result.index,
    value: result.value,
    furthest: last.furthest,
    expected: expected
  };
}

function makeLineColumnIndex(input, i) {
  var lines = input.slice(0, i).split('\n');
  // Note that unlike the character offset, the line and column offsets are
  // 1-based.
  var lineWeAreUpTo = lines.length;
  var columnWeAreUpTo = lines[lines.length - 1].length + 1;
  return {
    offset: i,
    line: lineWeAreUpTo,
    column: columnWeAreUpTo
  };
}

// Returns the sorted set union of two arrays of strings. Note that if both
// arrays are empty, it simply returns the first array, and if exactly one
// array is empty, it returns the other one unsorted. This is safe because
// expectation arrays always start as [] or [x], so as long as we merge with
// this function, we know they stay in sorted order.
function unsafeUnion(xs, ys) {
  // Exit early if either array is empty (common case)
  var xn = xs.length;
  var yn = ys.length;
  if (xn === 0) {
    return ys;
  } else if (yn === 0) {
    return xs;
  }
  // Two non-empty arrays: do the full algorithm
  var obj = {};
  for (var i = 0; i < xn; i++) {
    obj[xs[i]] = true;
  }
  for (var j = 0; j < yn; j++) {
    obj[ys[j]] = true;
  }
  var keys = [];
  for (var k in obj) {
    if (obj.hasOwnProperty(k)) {
      keys.push(k);
    }
  }
  keys.sort();
  return keys;
}

function assertParser(p) {
  if (!isParser(p)) {
    throw new Error('not a parser: ' + p);
  }
}

// TODO[ES5]: Switch to Array.isArray eventually.
function assertArray(x) {
  if (!isArray(x)) {
    throw new Error('not an array: ' + x);
  }
}

function assertNumber(x) {
  if (typeof x !== 'number') {
    throw new Error('not a number: ' + x);
  }
}

function assertRegexp(x) {
  if (!(x instanceof RegExp)) {
    throw new Error('not a regexp: '+x);
  }
  var f = flags(x);
  for (var i = 0; i < f.length; i++) {
    var c = f.charAt(i);
    // Only allow regexp flags [imu] for now, since [g] and [y] specifically
    // mess up Parsimmon. If more non-stateful regexp flags are added in the
    // future, this will need to be revisited.
    if (c !== 'i' && c !== 'm' && c !== 'u') {
      throw new Error('unsupported regexp flag "' + c + '": ' + x);
    }
  }
}

function assertFunction(x) {
  if (typeof x !== 'function') {
    throw new Error('not a function: ' + x);
  }
}

function assertString(x) {
  if (typeof x !== 'string') {
    throw new Error('not a string: ' + x);
  }
}

function formatExpected(expected) {
  if (expected.length === 1) {
    return expected[0];
  }
  return 'one of ' + expected.join(', ');
}

function formatGot(input, error) {
  var index = error.index;
  var i = index.offset;
  if (i === input.length) {
    return ', got the end of the input';
  }
  var prefix = (i > 0 ? '\'...' : '\'');
  var suffix = (input.length - i > 12 ? '...\'' : '\'');
  return ' at line ' + index.line + ' column ' + index.column
    +  ', got ' + prefix + input.slice(i, i + 12) + suffix;
}

function formatError(input, error) {
  return 'expected ' +
    formatExpected(error.expected) +
    formatGot(input, error);
}

function flags(re) {
  var s = '' + re;
  return s.slice(s.lastIndexOf('/') + 1);
}

function anchoredRegexp(re) {
  return RegExp('^(?:' + re.source + ')', flags(re));
}

// -*- Combinators -*-

function seq() {
  var parsers = [].slice.call(arguments);
  var numParsers = parsers.length;
  for (var j = 0; j < numParsers; j += 1) {
    assertParser(parsers[j]);
  }
  return Parsimmon(function(input, i) {
    var result;
    var accum = new Array(numParsers);
    for (var j = 0; j < numParsers; j += 1) {
      result = mergeReplies(parsers[j]._(input, i), result);
      if (!result.status) {
        return result;
      }
      accum[j] = result.value;
      i = result.index;
    }
    return mergeReplies(makeSuccess(i, accum), result);
  });
}

function seqObj() {
  var seenKeys = {};
  var totalKeys = 0;
  var parsers = [].slice.call(arguments);
  var numParsers = parsers.length;
  for (var j = 0; j < numParsers; j += 1) {
    var p = parsers[j];
    if (isParser(p)) {
      continue;
    }
    if (isArray(p)) {
      var isWellFormed =
        p.length === 2 &&
        typeof p[0] === 'string' &&
        isParser(p[1]);
      if (isWellFormed) {
        var key = p[0];
        if (seenKeys[key]) {
          throw new Error('seqObj: duplicate key ' + key);
        }
        seenKeys[key] = true;
        totalKeys++;
        continue;
      }
    }
    throw new Error(
      'seqObj arguments must be parsers or ' +
      '[string, parser] array pairs.'
    );
  }
  if (totalKeys === 0) {
    throw new Error('seqObj expects at least one named parser, found zero');
  }
  return Parsimmon(function(input, i) {
    var result;
    var accum = {};
    for (var j = 0; j < numParsers; j += 1) {
      var name;
      var parser;
      if (isArray(parsers[j])) {
        name = parsers[j][0];
        parser = parsers[j][1];
      } else {
        name = null;
        parser = parsers[j];
      }
      result = mergeReplies(parser._(input, i), result);
      if (!result.status) {
        return result;
      }
      if (name) {
        accum[name] = result.value;
      }
      i = result.index;
    }
    return mergeReplies(makeSuccess(i, accum), result);
  });
}

function seqMap() {
  var args = [].slice.call(arguments);
  if (args.length === 0) {
    throw new Error('seqMap needs at least one argument');
  }
  var mapper = args.pop();
  assertFunction(mapper);
  return seq.apply(null, args).map(function(results) {
    return mapper.apply(null, results);
  });
}

// TODO[ES5]: Revisit this with Object.keys and .bind.
function createLanguage(parsers) {
  var language = {};
  for (var key in parsers) {
    if ({}.hasOwnProperty.call(parsers, key)) {
      (function(key) {
        var func = function() {
          return parsers[key](language);
        };
        language[key] = lazy(func);
      }(key));
    }
  }
  return language;
}

function alt() {
  var parsers = [].slice.call(arguments);
  var numParsers = parsers.length;
  if (numParsers === 0) {
    return fail('zero alternates');
  }
  for (var j = 0; j < numParsers; j += 1) {
    assertParser(parsers[j]);
  }
  return Parsimmon(function(input, i) {
    var result;
    for (var j = 0; j < parsers.length; j += 1) {
      result = mergeReplies(parsers[j]._(input, i), result);
      if (result.status) {
        return result;
      }
    }
    return result;
  });
}

function sepBy(parser, separator) {
  // Argument asserted by sepBy1
  return sepBy1(parser, separator).or(succeed([]));
}

function sepBy1(parser, separator) {
  assertParser(parser);
  assertParser(separator);
  var pairs = separator.then(parser).many();
  return parser.chain(function(r) {
    return pairs.map(function(rs) {
      return [r].concat(rs);
    });
  });
}

// -*- Core Parsing Methods -*-

_.parse = function(input) {
  if (typeof input !== 'string') {
    throw new Error('.parse must be called with a string as its argument');
  }
  var result = this.skip(eof)._(input, 0);
  if (result.status) {
    return {
      status: true,
      value: result.value
    };
  }
  return {
    status: false,
    index: makeLineColumnIndex(input, result.furthest),
    expected: result.expected
  };
};

// -*- Other Methods -*-

_.tryParse = function(str) {
  var result = this.parse(str);
  if (result.status) {
    return result.value;
  } else {
    var msg = formatError(str, result);
    var err = new Error(msg);
    err.type = 'ParsimmonError';
    err.result = result;
    throw err;
  }
};

_.or = function(alternative) {
  return alt(this, alternative);
};

_.trim = function(parser) {
  return this.wrap(parser, parser);
};

_.wrap = function(leftParser, rightParser) {
  return seqMap(
    leftParser,
    this,
    rightParser,
    function(left, middle) {
      return middle;
    }
  );
};

_.thru = function(wrapper) {
  return wrapper(this);
};

_.then = function(next) {
  assertParser(next);
  return seq(this, next).map(function(results) { return results[1]; });
};

_.many = function() {
  var self = this;

  return Parsimmon(function(input, i) {
    var accum = [];
    var result = undefined;

    for (;;) {
      result = mergeReplies(self._(input, i), result);
      if (result.status) {
        i = result.index;
        accum.push(result.value);
      } else {
        return mergeReplies(makeSuccess(i, accum), result);
      }
    }
  });
};

_.tie = function() {
  return this.map(function(args) {
    assertArray(args);
    var s = '';
    for (var i = 0; i < args.length; i++) {
      assertString(args[i]);
      s += args[i];
    }
    return s;
  });
};

_.times = function(min, max) {
  var self = this;
  if (arguments.length < 2) {
    max = min;
  }
  assertNumber(min);
  assertNumber(max);
  return Parsimmon(function(input, i) {
    var accum = [];
    var result = undefined;
    var prevResult = undefined;
    for (var times = 0; times < min; times += 1) {
      result = self._(input, i);
      prevResult = mergeReplies(result, prevResult);
      if (result.status) {
        i = result.index;
        accum.push(result.value);
      } else {
        return prevResult;
      }
    }
    for (; times < max; times += 1) {
      result = self._(input, i);
      prevResult = mergeReplies(result, prevResult);
      if (result.status) {
        i = result.index;
        accum.push(result.value);
      } else {
        break;
      }
    }
    return mergeReplies(makeSuccess(i, accum), prevResult);
  });
};

_.result = function(res) {
  return this.map(function() {
    return res;
  });
};

_.atMost = function(n) {
  return this.times(0, n);
};

_.atLeast = function(n) {
  return seqMap(this.times(n), this.many(), function(init, rest) {
    return init.concat(rest);
  });
};

_.map = function(fn) {
  assertFunction(fn);
  var self = this;
  return Parsimmon(function(input, i) {
    var result = self._(input, i);
    if (!result.status) {
      return result;
    }
    return mergeReplies(makeSuccess(result.index, fn(result.value)), result);
  });
};

_.skip = function(next) {
  return seq(this, next).map(function(results) { return results[0]; });
};

_.mark = function() {
  return seqMap(index, this, index, function(start, value, end) {
    return {
      start: start,
      value: value,
      end: end
    };
  });
};

_.node = function(name) {
  return seqMap(index, this, index, function(start, value, end) {
    return {
      name: name,
      value: value,
      start: start,
      end: end
    };
  });
};

_.sepBy = function(separator) {
  return sepBy(this, separator);
};

_.sepBy1 = function(separator) {
  return sepBy1(this, separator);
};

_.lookahead = function(x) {
  return this.skip(lookahead(x));
};

_.notFollowedBy = function(x) {
  return this.skip(notFollowedBy(x));
};

_.desc = function(expected) {
  var self = this;
  return Parsimmon(function(input, i) {
    var reply = self._(input, i);
    if (!reply.status) {
      reply.expected = [expected];
    }
    return reply;
  });
};

_.fallback = function(result) {
  return this.or(succeed(result));
};

_.ap = function(other) {
  return seqMap(other, this, function(f, x) {
    return f(x);
  });
};

_.chain = function(f) {
  var self = this;
  return Parsimmon(function(input, i) {
    var result = self._(input, i);
    if (!result.status) {
      return result;
    }
    var nextParser = f(result.value);
    return mergeReplies(nextParser._(input, result.index), result);
  });
};

// -*- Constructors -*-

function string(str) {
  assertString(str);
  var expected = '\'' + str + '\'';
  return Parsimmon(function(input, i) {
    var j = i + str.length;
    var head = input.slice(i, j);
    if (head === str) {
      return makeSuccess(j, head);
    } else {
      return makeFailure(i, expected);
    }
  });
}

function regexp(re, group) {
  assertRegexp(re);
  if (arguments.length >= 2) {
    assertNumber(group);
  } else {
    group = 0;
  }
  var anchored = anchoredRegexp(re);
  var expected = '' + re;
  return Parsimmon(function(input, i) {
    var match = anchored.exec(input.slice(i));
    if (match) {
      if (0 <= group && group <= match.length) {
        var fullMatch = match[0];
        var groupMatch = match[group];
        return makeSuccess(i + fullMatch.length, groupMatch);
      }
      var message =
        'valid match group (0 to ' + match.length + ') in ' + expected;
      return makeFailure(i, message);
    }
    return makeFailure(i, expected);
  });
}

function succeed(value) {
  return Parsimmon(function(input, i) {
    return makeSuccess(i, value);
  });
}

function fail(expected) {
  return Parsimmon(function(input, i) {
    return makeFailure(i, expected);
  });
}

function lookahead(x) {
  if (isParser(x)) {
    return Parsimmon(function(input, i) {
      var result = x._(input, i);
      result.index = i;
      result.value = '';
      return result;
    });
  } else if (typeof x === 'string') {
    return lookahead(string(x));
  } else if (x instanceof RegExp) {
    return lookahead(regexp(x));
  }
  throw new Error('not a string, regexp, or parser: ' + x);
}

function notFollowedBy(parser) {
  assertParser(parser);
  return Parsimmon(function(input, i) {
    var result = parser._(input, i);
    var text = input.slice(i, result.index);
    return result.status
      ? makeFailure(i, 'not "' + text + '"')
      : makeSuccess(i, null);
  });
}

function test(predicate) {
  assertFunction(predicate);
  return Parsimmon(function(input, i) {
    var char = input.charAt(i);
    if (i < input.length && predicate(char)) {
      return makeSuccess(i + 1, char);
    } else {
      return makeFailure(i, 'a character matching ' + predicate);
    }
  });
}

function oneOf(str) {
  return test(function(ch) {
    return str.indexOf(ch) >= 0;
  });
}

function noneOf(str) {
  return test(function(ch) {
    return str.indexOf(ch) < 0;
  });
}

function custom(parsingFunction) {
  return Parsimmon(parsingFunction(makeSuccess, makeFailure));
}

// TODO[ES5]: Improve error message using JSON.stringify eventually.
function range(begin, end) {
  return test(function(ch) {
    return begin <= ch && ch <= end;
  }).desc(begin + '-' + end);
}

function takeWhile(predicate) {
  assertFunction(predicate);

  return Parsimmon(function(input, i) {
    var j = i;
    while (j < input.length && predicate(input.charAt(j))) {
      j++;
    }
    return makeSuccess(j, input.slice(i, j));
  });
}

function lazy(desc, f) {
  if (arguments.length < 2) {
    f = desc;
    desc = undefined;
  }

  var parser = Parsimmon(function(input, i) {
    parser._ = f()._;
    return parser._(input, i);
  });

  if (desc) {
    return parser.desc(desc);
  } else {
    return parser;
  }
}

// -*- Fantasy Land Extras -*-

function empty() {
  return fail('fantasy-land/empty');
}

_.concat = _.or;
_.empty = empty;
_.of = succeed;
_['fantasy-land/ap'] = _.ap;
_['fantasy-land/chain'] = _.chain;
_['fantasy-land/concat'] = _.concat;
_['fantasy-land/empty'] = _.empty;
_['fantasy-land/of'] = _.of;
_['fantasy-land/map'] = _.map;

// -*- Base Parsers -*-

var index = Parsimmon(function(input, i) {
  return makeSuccess(i, makeLineColumnIndex(input, i));
});

var any = Parsimmon(function(input, i) {
  if (i >= input.length) {
    return makeFailure(i, 'any character');
  }
  return makeSuccess(i + 1, input.charAt(i));
});

var all = Parsimmon(function(input, i) {
  return makeSuccess(input.length, input.slice(i));
});

var eof = Parsimmon(function(input, i) {
  if (i < input.length) {
    return makeFailure(i, 'EOF');
  }
  return makeSuccess(i, null);
});

var digit = regexp(/[0-9]/).desc('a digit');
var digits = regexp(/[0-9]*/).desc('optional digits');
var letter = regexp(/[a-z]/i).desc('a letter');
var letters = regexp(/[a-z]*/i).desc('optional letters');
var optWhitespace = regexp(/\s*/).desc('optional whitespace');
var whitespace = regexp(/\s+/).desc('whitespace');

Parsimmon.all = all;
Parsimmon.alt = alt;
Parsimmon.any = any;
Parsimmon.createLanguage = createLanguage;
Parsimmon.custom = custom;
Parsimmon.digit = digit;
Parsimmon.digits = digits;
Parsimmon.empty = empty;
Parsimmon.eof = eof;
Parsimmon.fail = fail;
Parsimmon.formatError = formatError;
Parsimmon.index = index;
Parsimmon.isParser = isParser;
Parsimmon.lazy = lazy;
Parsimmon.letter = letter;
Parsimmon.letters = letters;
Parsimmon.lookahead = lookahead;
Parsimmon.makeFailure = makeFailure;
Parsimmon.makeSuccess = makeSuccess;
Parsimmon.noneOf = noneOf;
Parsimmon.notFollowedBy = notFollowedBy;
Parsimmon.of = succeed;
Parsimmon.oneOf = oneOf;
Parsimmon.optWhitespace = optWhitespace;
Parsimmon.Parser = Parsimmon;
Parsimmon.range = range;
Parsimmon.regex = regexp;
Parsimmon.regexp = regexp;
Parsimmon.sepBy = sepBy;
Parsimmon.sepBy1 = sepBy1;
Parsimmon.seq = seq;
Parsimmon.seqMap = seqMap;
Parsimmon.seqObj = seqObj;
Parsimmon.string = string;
Parsimmon.succeed = succeed;
Parsimmon.takeWhile = takeWhile;
Parsimmon.test = test;
Parsimmon.whitespace = whitespace;
Parsimmon['fantasy-land/empty'] = empty;
Parsimmon['fantasy-land/of'] = succeed;

module.exports = Parsimmon;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function unknownCommandError(cmd) {
    return new Error("I do not know command " + cmd);
}
exports.unknownCommandError = unknownCommandError;
//# sourceMappingURL=unknown-command.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function createCommandHandler(name, optionalArguments, argumentCount, apply) {
    return { name: name, optionalArguments: optionalArguments, argumentCount: argumentCount, apply: apply };
}
exports.createCommandHandler = createCommandHandler;
function createKnownCommandWithOptArgs(name, optionalArguments, argumentCount) {
    return { name: name, optionalArguments: optionalArguments, argumentCount: argumentCount };
}
exports.createKnownCommandWithOptArgs = createKnownCommandWithOptArgs;
function createKnownCommandWithArgs(name, argumentCount) {
    return {
        name: name,
        optionalArguments: 0,
        argumentCount: argumentCount
    };
}
exports.createKnownCommandWithArgs = createKnownCommandWithArgs;
//# sourceMappingURL=KnownCommand.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.formattingText = {
    textbb: true,
    textbf: true,
    textfrak: true,
    textit: true,
    texttt: true,
    textcal: true,
    textsup: true,
    textsub: true,
    textsuperscript: true,
    textsubscript: true,
};
exports.formattingNoMode = {
    bb: true,
    bf: true,
    frak: true,
    it: true,
    tt: true,
    cal: true,
    mono: true,
    sup: true,
    sub: true,
    superscript: true,
    subscript: true,
};
exports.formattingMath = {
    mathbb: true,
    mathbf: true,
    mathfrak: true,
    mathit: true,
    mathtt: true,
    mathcal: true,
    mathsup: true,
    mathsub: true,
    mathsuperscript: true,
    mathsubscript: true,
};
function isBbCmd(x) {
    return x === "bb" || x === "mathbb" || x === "textbb";
}
exports.isBbCmd = isBbCmd;
function isBfCmd(x) {
    return x === "bf" || x === "mathbf" || x === "textbf";
}
exports.isBfCmd = isBfCmd;
function isMonoCmd(x) {
    return x === "mono";
}
exports.isMonoCmd = isMonoCmd;
function isFrakCmd(x) {
    return x === "frak" || x === "mathfrak" || x === "textfrak";
}
exports.isFrakCmd = isFrakCmd;
function isItCmd(x) {
    return x === "it" || x === "mathit" || x === "textit";
}
exports.isItCmd = isItCmd;
function isTtCmd(x) {
    return x === "tt" || x === "mathtt" || x === "texttt";
}
exports.isTtCmd = isTtCmd;
function isCalCmd(x) {
    return x === "cal" || x === "mathcal" || x === "textcal";
}
exports.isCalCmd = isCalCmd;
function isSupCmd(x) {
    return x === "sup"
        || x === "mathsup"
        || x === "textsup"
        || x === "superscript"
        || x === "mathsuperscript"
        || x === "textsuperscript";
}
exports.isSupCmd = isSupCmd;
function isSubCmd(x) {
    return x === "sub"
        || x === "mathsub"
        || x === "textsub"
        || x === "subscript"
        || x === "mathsubscript"
        || x === "textsubscript";
}
exports.isSubCmd = isSubCmd;
function isFormattingCmd(x) {
    return exports.formattingText.hasOwnProperty(x) ||
        exports.formattingMath.hasOwnProperty(x) ||
        exports.formattingNoMode.hasOwnProperty(x);
}
exports.isFormattingCmd = isFormattingCmd;
//# sourceMappingURL=formatting.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.superscriptCharacters = {
    "0": "⁰",
    "1": "¹",
    "2": "²",
    "3": "³",
    "4": "⁴",
    "5": "⁵",
    "6": "⁶",
    "7": "⁷",
    "8": "⁸",
    "9": "⁹",
    "+": "⁺",
    "-": "⁻",
    "=": "⁼",
    "(": "⁽",
    ")": "⁾",
    "a": "ᵃ",
    "b": "ᵇ",
    "c": "ᶜ",
    "d": "ᵈ",
    "e": "ᵉ",
    "f": "ᶠ",
    "g": "ᵍ",
    "h": "ʰ",
    "i": "ⁱ",
    "j": "ʲ",
    "k": "ᵏ",
    "l": "ˡ",
    "m": "ᵐ",
    "n": "ⁿ",
    "o": "ᵒ",
    "p": "ᵖ",
    "r": "ʳ",
    "s": "ˢ",
    "t": "ᵗ",
    "u": "ᵘ",
    "v": "ᵛ",
    "w": "ʷ",
    "x": "ˣ",
    "y": "ʸ",
    "z": "ᶻ",
    "A": "ᴬ",
    "B": "ᴮ",
    "D": "ᴰ",
    "E": "ᴱ",
    "G": "ᴳ",
    "H": "ᴴ",
    "I": "ᴵ",
    "J": "ᴶ",
    "K": "ᴷ",
    "L": "ᴸ",
    "M": "ᴹ",
    "N": "ᴺ",
    "O": "ᴼ",
    "P": "ᴾ",
    "R": "ᴿ",
    "T": "ᵀ",
    "U": "ᵁ",
    "V": "ⱽ",
    "W": "ᵂ",
    "α": "ᵅ",
    "β": "ᵝ",
    "γ": "ᵞ",
    "δ": "ᵟ",
    "∊": "ᵋ",
    "θ": "ᶿ",
    "ι": "ᶥ",
    "Φ": "ᶲ",
    "φ": "ᵠ",
    "χ": "ᵡ"
};
function isSuperscriptCharacter(x) {
    return exports.superscriptCharacters.hasOwnProperty(x);
}
exports.isSuperscriptCharacter = isSuperscriptCharacter;
exports.translateCharToSuperscript = function (char) { return isSuperscriptCharacter(char) ? exports.superscriptCharacters[char] : undefined; };
//# sourceMappingURL=superscript.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var space_1 = __webpack_require__(55);
var diacritic_1 = __webpack_require__(56);
var formatting_1 = __webpack_require__(10);
exports.oneArgsCommands = Object.assign({}, space_1.spaceCmds1arg, formatting_1.formattingText, formatting_1.formattingMath, formatting_1.formattingNoMode, diacritic_1.diacriticsTextMode, diacritic_1.diacriticsMathMode, {
    "cyrchar": true,
    "vec": true,
    "mono": true,
    "ding": true,
    "dingbat": true,
    "ElsevierGlyph": true,
    "elsevierglyph": true,
    "elsevier": true,
    "Elsevier": true,
});
function is1argsCommand(name) {
    return exports.oneArgsCommands.hasOwnProperty(name);
}
exports.is1argsCommand = is1argsCommand;
//# sourceMappingURL=index.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fs = __webpack_require__(14);
var path = __webpack_require__(15);
var bibtex = __webpack_require__(16);
var converter = __webpack_require__(17);

//
// ARGS
//

if (process.argv.length < 4) {
    console.error('Usage: bib2hugo inputBib outputFolder [configJSON]');
    process.exit();
}

var input = process.argv[2];
var outputFolder = process.argv[3];

try {
    fs.accessSync(outputFolder);
} catch (e) {
    fs.mkdirSync(outputFolder);
}

var config = {};
if (process.argv[4]) {
    try {
        config = JSON.parse(fs.readFileSync(process.argv[4]).toString());
    } catch (e) {
        console.log('Unable to open config file <' + process.argv[4] + '>, continuing with defaults...');
    }
}

var params = Object.assign({}, {
    pdfLink: 'pdf',
    pptLink: 'presentation'
}, config);

//
// SHARED STUFF
//

function convert(val) {
    return converter.convertLaTeX({
        onError: function onError(error, latex) {
            return latex;
        }
    }, val);
}

function str(val) {
    var ret = val || '';
    ret = ret.replace(/\\&/g, '&');
    ret = ret.replace(/\\%/g, '%');
    ret = ret.replace(/\\#/g, '#');
    ret = ret.replace(/--/g, '–');
    ret = convert(ret);
    return ret;
}

function authorize(name) {
    return str(name.split(',').map(function (e) {
        return e.trim();
    }).reverse().join(' '));
}

function abstractize(val) {
    return str(val).replace(/(?:\r\n|\r|\n)/g, '<br />').replace(/"/g, '\\"');
}

function findFile(folder, needle) {
    var pattern = new RegExp('^(.*[^a-zA-z0-9])?' + needle + '([^a-zA-Z0-9].*)?$');
    var result = null;
    try {
        fs.readdirSync(folder).forEach(function (file) {
            if (file.match(pattern)) {
                result = file;
                return false;
            }
        });
    } catch (e) {
        console.error('Unable to open folder <' + folder + '>');
    }
    return result;
}

var months = {
    'jan': '01',
    'feb': '02',
    'mar': '03',
    'apr': '04',
    'may': '05',
    'jun': '06',
    'jul': '07',
    'aug': '08',
    'sep': '09',
    'oct': '10',
    'nov': '11',
    'dec': '12'

    //
    // PROCESSING
    //

};var bib = bibtex.toJSON(fs.readFileSync(input).toString());
var count = 0;

bib.forEach(function (entry) {

    var key = entry.citationKey;
    var type = entry.entryType.toLowerCase();

    // FILTERING

    if (type == 'comment') return;

    if (params.whitelist && params.whitelist.indexOf(key) === -1) {
        console.log('Whitelist filtered: ' + key);
        return;
    }

    if (params.blacklist && params.blacklist.indexOf(key) !== -1) {
        console.log('Blacklist filtered: ' + key);
        return;
    }

    console.log('Processing: ' + key);
    count++;

    // BASIC OUTPUT

    var output = "+++\n";
    output += 'title = "' + str(entry.entryTags.title) + '"\n';
    var authorField = type == 'book' || type == 'proceedings' ? 'editor' : 'author';
    var authors = entry.entryTags[authorField].split('and').map(function (name) {
        return authorize(name);
    });
    output += 'authors = ' + JSON.stringify(authors) + '\n';
    output += 'abstract = "' + abstractize(entry.entryTags.abstract || '') + '"\n';
    output += 'date = "' + entry.entryTags.year + '-' + (months[entry.entryTags.month] || '01') + '-01"\n';

    // LINKS

    if (entry.entryTags.url) {
        output += 'url_custom = [{name = "Online", url = "' + entry.entryTags.url + '"}]\n';
    }

    if (params.pdfFolder) {
        var pdf = findFile(params.pdfFolder, key);
        if (pdf) {
            console.log('PDF link: ' + pdf);
            output += 'url_pdf = "' + params.pdfLink + '/' + pdf + '"\n';
        }
    }

    if (params.pptFolder) {
        var ppt = findFile(params.pptFolder, key);
        if (ppt) {
            console.log('PPT link: ' + ppt);
            output += 'url_slides = "' + params.pptLink + '/' + ppt + '"\n';
        }
    }

    // TYPE DEPENDENT OUTPUT

    var pagePlural = entry.entryTags.pages && entry.entryTags.pages.indexOf('-') !== -1 ? 's' : '';

    if (type == 'inproceedings') {
        output += 'publication = "' + str(entry.entryTags.booktitle) + ', ' + str(entry.entryTags.address) + ', ';
        if (entry.entryTags.pages) {
            output += 'Page' + pagePlural + ' ' + str(entry.entryTags.pages) + '"\n';
        } else {
            // if there is no "pages" for a conference paper, there'd better be an explanation
            output += entry.entryTags.note + '"\n';
        }
        output += 'publication_types = ["1"]\n';
    } else if (type == 'article') {
        output += 'publication = "' + str(entry.entryTags.journal) + ', ' + str(entry.entryTags.volume) + (
        // html entities for left/right parens to avoid incorrect markdownification
        entry.entryTags.number ? '&#40;' + str(entry.entryTags.number) + '&#41;' : '') + ':' + str(entry.entryTags.pages) + '"\n';
        output += 'publication_types = ["2"]\n';
    } else if (type == 'incollection') {
        output += 'publication = "' + str(entry.entryTags.booktitle) + ', ' + 'Page' + pagePlural + ' ' + str(entry.entryTags.pages) + '"\n';
        output += 'publication_types = ["3"]\n';
    } else if (type == 'proceedings') {
        output += 'publication_types = ["4"]\n';
    } else if (type == 'book') {
        output += 'publication = "' + str(entry.entryTags.series) + ', ' + str(entry.entryTags.volume) + (
        // html entities for left/right parens to avoid incorrect markdownification
        entry.entryTags.number ? '&#40;' + str(entry.entryTags.number) + '&#41;' : '') + '"\n';
        output += 'publication_types = ["5"]\n';
    } else if (type == 'techreport') {
        output += 'publication_types = ["8"]\n';
    } else if (type == 'mastersthesis') {
        output += 'publication_types = ["6"]\n';
    } else if (type == 'phdthesis') {
        output += 'publication_types = ["7"]\n';
    } else if (type == 'misc') {
        output += 'publication_types = ["0"]\n';
    }

    // BiBTeX OUTPUT

    var max = Object.keys(entry.entryTags).reduce(function (a, b) {
        return Math.max(a, b.length);
    }, 0);

    output += '+++\n\n';
    output += 'BibTeX:\n';
    output += '```tex\n';
    output += '@' + entry.entryType + '{' + key + ',\n';
    Object.keys(entry.entryTags).forEach(function (field) {
        if (field == 'abstract') return;
        if (field == 'month') {
            output += '    ' + field.padEnd(max + 1) + '= ' + entry.entryTags[field] + ',\n';
        } else {
            output += '    ' + field.padEnd(max + 1) + '= {' + entry.entryTags[field] + '},\n';
        }
    });
    output += '}\n';
    output += '```\n';

    // DONE

    fs.writeFileSync(path.join(outputFolder, key + '.md'), output);
});

console.log('Done, processed ' + count + ' entries.');

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* start bibtexParse 0.0.24 */

//Original work by Henrik Muehe (c) 2010
//
//CommonJS port by Mikola Lysenko 2013
//
//Port to Browser lib by ORCID / RCPETERS
//
//Issues:
//no comment handling within strings
//no string concatenation
//no variable values yet
//Grammar implemented here:
//bibtex -> (string | preamble | comment | entry)*;
//string -> '@STRING' '{' key_equals_value '}';
//preamble -> '@PREAMBLE' '{' value '}';
//comment -> '@COMMENT' '{' value '}';
//entry -> '@' key '{' key ',' key_value_list '}';
//key_value_list -> key_equals_value (',' key_equals_value)*;
//key_equals_value -> key '=' value;
//value -> value_quotes | value_braces | key;
//value_quotes -> '"' .*? '"'; // not quite
//value_braces -> '{' .*? '"'; // not quite
(function(exports) {

    function BibtexParser() {

        this.months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
        this.notKey = [',','{','}',' ','='];
        this.pos = 0;
        this.input = "";
        this.entries = new Array();

        this.currentEntry = "";

        this.setInput = function(t) {
            this.input = t;
        };

        this.getEntries = function() {
            return this.entries;
        };

        this.isWhitespace = function(s) {
            return (s == ' ' || s == '\r' || s == '\t' || s == '\n');
        };

        this.match = function(s, canCommentOut) {
            if (canCommentOut == undefined || canCommentOut == null)
                canCommentOut = true;
            this.skipWhitespace(canCommentOut);
            if (this.input.substring(this.pos, this.pos + s.length) == s) {
                this.pos += s.length;
            } else {
                throw "Token mismatch, expected " + s + ", found "
                        + this.input.substring(this.pos);
            };
            this.skipWhitespace(canCommentOut);
        };

        this.tryMatch = function(s, canCommentOut) {
            if (canCommentOut == undefined || canCommentOut == null)
                canCommentOut = true;
            this.skipWhitespace(canCommentOut);
            if (this.input.substring(this.pos, this.pos + s.length) == s) {
                return true;
            } else {
                return false;
            };
            this.skipWhitespace(canCommentOut);
        };

        /* when search for a match all text can be ignored, not just white space */
        this.matchAt = function() {
            while (this.input.length > this.pos && this.input[this.pos] != '@') {
                this.pos++;
            };

            if (this.input[this.pos] == '@') {
                return true;
            };
            return false;
        };

        this.skipWhitespace = function(canCommentOut) {
            while (this.isWhitespace(this.input[this.pos])) {
                this.pos++;
            };
            if (this.input[this.pos] == "%" && canCommentOut == true) {
                while (this.input[this.pos] != "\n") {
                    this.pos++;
                };
                this.skipWhitespace(canCommentOut);
            };
        };

        this.value_braces = function() {
            var bracecount = 0;
            this.match("{", false);
            var start = this.pos;
            var escaped = false;
            while (true) {
                if (!escaped) {
                    if (this.input[this.pos] == '}') {
                        if (bracecount > 0) {
                            bracecount--;
                        } else {
                            var end = this.pos;
                            this.match("}", false);
                            return this.input.substring(start, end);
                        };
                    } else if (this.input[this.pos] == '{') {
                        bracecount++;
                    } else if (this.pos >= this.input.length - 1) {
                        throw "Unterminated value";
                    };
                };
                if (this.input[this.pos] == '\\' && escaped == false)
                    escaped = true;
                else
                    escaped = false;
                this.pos++;
            };
        };

        this.value_comment = function() {
            var str = '';
            var brcktCnt = 0;
            while (!(this.tryMatch("}", false) && brcktCnt == 0)) {
                str = str + this.input[this.pos];
                if (this.input[this.pos] == '{')
                    brcktCnt++;
                if (this.input[this.pos] == '}')
                    brcktCnt--;
                if (this.pos >= this.input.length - 1) {
                    throw "Unterminated value:" + this.input.substring(start);
                };
                this.pos++;
            };
            return str;
        };

        this.value_quotes = function() {
            this.match('"', false);
            var start = this.pos;
            var escaped = false;
            while (true) {
                if (!escaped) {
                    if (this.input[this.pos] == '"') {
                        var end = this.pos;
                        this.match('"', false);
                        return this.input.substring(start, end);
                    } else if (this.pos >= this.input.length - 1) {
                        throw "Unterminated value:" + this.input.substring(start);
                    };
                }
                if (this.input[this.pos] == '\\' && escaped == false)
                    escaped = true;
                else
                    escaped = false;
                this.pos++;
            };
        };

        this.single_value = function() {
            var start = this.pos;
            if (this.tryMatch("{")) {
                return this.value_braces();
            } else if (this.tryMatch('"')) {
                return this.value_quotes();
            } else {
                var k = this.key();
                if (k.match("^[0-9]+$"))
                    return k;
                else if (this.months.indexOf(k.toLowerCase()) >= 0)
                    return k.toLowerCase();
                else
                    throw "Value expected:" + this.input.substring(start) + ' for key: ' + k;

            };
        };

        this.value = function() {
            var values = [];
            values.push(this.single_value());
            while (this.tryMatch("#")) {
                this.match("#");
                values.push(this.single_value());
            };
            return values.join("");
        };

        this.key = function(optional) {
            var start = this.pos;
            while (true) {
                if (this.pos >= this.input.length) {
                    throw "Runaway key";
                };
                                // а-яА-Я is Cyrillic
                //console.log(this.input[this.pos]);
                if (this.notKey.indexOf(this.input[this.pos]) >= 0) {
                    if (optional && this.input[this.pos] != ',') {
                        this.pos = start;
                        return null;
                    };
                    return this.input.substring(start, this.pos);
                } else {
                    this.pos++;

                };
            };
        };

        this.key_equals_value = function() {
            var key = this.key();
            if (this.tryMatch("=")) {
                this.match("=");
                var val = this.value();
                key = key.trim()
                return [ key, val ];
            } else {
                throw "... = value expected, equals sign missing:"
                        + this.input.substring(this.pos);
            };
        };

        this.key_value_list = function() {
            var kv = this.key_equals_value();
            this.currentEntry['entryTags'] = {};
            this.currentEntry['entryTags'][kv[0]] = kv[1];
            while (this.tryMatch(",")) {
                this.match(",");
                // fixes problems with commas at the end of a list
                if (this.tryMatch("}")) {
                    break;
                }
                ;
                kv = this.key_equals_value();
                this.currentEntry['entryTags'][kv[0]] = kv[1];
            };
        };

        this.entry_body = function(d) {
            this.currentEntry = {};
            this.currentEntry['citationKey'] = this.key(true);
            this.currentEntry['entryType'] = d.substring(1);
            if (this.currentEntry['citationKey'] != null) {
                this.match(",");
            }
            this.key_value_list();
            this.entries.push(this.currentEntry);
        };

        this.directive = function() {
            this.match("@");
            return "@" + this.key();
        };

        this.preamble = function() {
            this.currentEntry = {};
            this.currentEntry['entryType'] = 'PREAMBLE';
            this.currentEntry['entry'] = this.value_comment();
            this.entries.push(this.currentEntry);
        };

        this.comment = function() {
            this.currentEntry = {};
            this.currentEntry['entryType'] = 'COMMENT';
            this.currentEntry['entry'] = this.value_comment();
            this.entries.push(this.currentEntry);
        };

        this.entry = function(d) {
            this.entry_body(d);
        };

        this.alernativeCitationKey = function () {
            this.entries.forEach(function (entry) {
                if (!entry.citationKey && entry.entryTags) {
                    entry.citationKey = '';
                    if (entry.entryTags.author) {
                        entry.citationKey += entry.entryTags.author.split(',')[0] += ', ';
                    }
                    entry.citationKey += entry.entryTags.year;
                }
            });
        }

        this.bibtex = function() {
            while (this.matchAt()) {
                var d = this.directive();
                this.match("{");
                if (d.toUpperCase() == "@STRING") {
                    this.string();
                } else if (d.toUpperCase() == "@PREAMBLE") {
                    this.preamble();
                } else if (d.toUpperCase() == "@COMMENT") {
                    this.comment();
                } else {
                    this.entry(d);
                }
                this.match("}");
            };

            this.alernativeCitationKey();
        };
    };

    exports.toJSON = function(bibtex) {
        var b = new BibtexParser();
        b.setInput(bibtex);
        b.bibtex();
        return b.entries;
    };

    /* added during hackathon don't hate on me */
    exports.toBibtex = function(json) {
        var out = '';
        for ( var i in json) {
            out += "@" + json[i].entryType;
            out += '{';
            if (json[i].citationKey)
                out += json[i].citationKey + ', ';
            if (json[i].entry)
                out += json[i].entry ;
            if (json[i].entryTags) {
                var tags = '';
                for (var jdx in json[i].entryTags) {
                    if (tags.length != 0)
                        tags += ', ';
                    tags += jdx + '= {' + json[i].entryTags[jdx] + '}';
                }
                out += tags;
            }
            out += '}\n\n';
        }
        return out;

    };

})( false ? this['bibtexParse'] = {} : exports);

/* end bibtexParse */


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(18));
__export(__webpack_require__(19));
__export(__webpack_require__(4));
__export(__webpack_require__(8));
__export(__webpack_require__(1));
__export(__webpack_require__(9));
__export(__webpack_require__(63));
__export(__webpack_require__(64));
__export(__webpack_require__(12));
//# sourceMappingURL=index.js.map


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.aliases = {
    "mathfrak": "frak",
    "mathcal": "cal",
    "mathbb": "bb",
    "mathbf": "bf",
    "dfrac": "frac",
    "ldots": "dots"
};
//# sourceMappingURL=command-aliases.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var options_1 = __webpack_require__(4);
var latex_parser_1 = __webpack_require__(5);
var convert_1 = __webpack_require__(21);
function convertLaTeX(options, src) {
    return convertLaTeXBlocks(options, latex_parser_1.mustNotBeUndefined(latex_parser_1.mustBeOk(latex_parser_1.latexParser.parse(src)).value));
}
exports.convertLaTeX = convertLaTeX;
function convertLaTeXToUnicode(src) {
    return convertLaTeXBlocks({
        translateTo: "unicode",
        mode: "Any",
    }, latex_parser_1.mustNotBeUndefined(latex_parser_1.mustBeOk(latex_parser_1.latexParser.parse(src)).value));
}
exports.convertLaTeXToUnicode = convertLaTeXToUnicode;
function convertLaTeXBlocks(options, latex) {
    var translateTo = options.translateTo;
    switch (translateTo) {
        case "html":
            throw new Error("Unsupported format: '"
                + translateTo
                + "'. Use one of: "
                + Object.keys(options_1.supportedMarkups));
        case "unicode":
        default:
            return convert_1.convertLaTeXBlocksToUnicode(options, latex).result;
    }
}
exports.convertLaTeXBlocks = convertLaTeXBlocks;
//# sourceMappingURL=convert.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var parsimmon_1 = __webpack_require__(7);
var Syntax_1 = __webpack_require__(3);
var Syntax_2 = __webpack_require__(3);
var Utils_1 = __webpack_require__(2);
var parsimmon_2 = __webpack_require__(7);
exports.defaultParserConf = {
    verbatimEnvironments: ["verbatim"]
};
exports.takeTill = function (predicate) { return parsimmon_1.takeWhile(function (c) { return !predicate(c); }); };
var takeTillNewline = parsimmon_1.regexp(/[^\n]*/);
var maybeNewline = parsimmon_1.regexp(/\n?/);
var whitespace = parsimmon_1.regexp(/\s*/m);
var commentSymbol = parsimmon_1.string("%");
function unsafeUnion(xs, ys) {
    var xn = xs.length;
    var yn = ys.length;
    if (xn === 0) {
        return ys;
    }
    else if (yn === 0) {
        return xs;
    }
    var obj = {};
    for (var i = 0; i < xn; i++) {
        obj[xs[i]] = true;
    }
    for (var j = 0; j < yn; j++) {
        obj[ys[j]] = true;
    }
    var keys = [];
    for (var k in obj) {
        if (obj.hasOwnProperty(k)) {
            keys.push(k);
        }
    }
    keys.sort();
    return keys;
}
function mergeReplies(result, last) {
    if (!last) {
        return result;
    }
    if (result.furthest > last.furthest) {
        return result;
    }
    var expected = (result.furthest === last.furthest)
        ? unsafeUnion(result.expected, last.expected)
        : last.expected;
    return {
        status: result.status,
        index: result.index,
        value: result.value,
        furthest: last.furthest,
        expected: expected
    };
}
function manyTillAndMap(manyOf, till, map, initial) {
    return parsimmon_1.Parser(function (input, i) {
        var accum = initial;
        var j = 0;
        var result = undefined;
        while (i < input.length) {
            var endCodonFound = till._(input, i);
            if (endCodonFound.status) {
                i = Utils_1.mustBeNumber(endCodonFound.index);
                break;
            }
            var bigParse = manyOf._(input, i);
            if (isNotOk(bigParse))
                return bigParse;
            result = Utils_1.mustNotBeUndefined(mergeReplies(bigParse, result));
            if (isNotOk(result)) {
                return result;
            }
            j++;
            var value = Utils_1.mustNotBeUndefined(result.value);
            accum = map(accum, value);
            i = Utils_1.mustBeNumber(result.index);
        }
        var result2 = parsimmon_1.makeSuccess(i, accum);
        return mustBeOk(mergeReplies(result2, result));
    });
}
function manyTill(manyOf, till) {
    return manyTillAndMap(manyOf, till, function (a, el) { return a.concat([el]); }, []);
}
function token(parser) {
    return parser.skip(whitespace);
}
function word(str) {
    return parsimmon_1.string(str).thru(token);
}
var lbrace = "{";
var rbrace = "}";
var lbracket = "[";
var rbracket = "]";
var comma = ",";
var colon = ":";
var openingBracket = parsimmon_1.string(lbracket);
var closingBracket = parsimmon_1.string(rbracket);
var isClosingbracket = function (str) { return str === (rbracket); };
exports.notTextDefault = {
    "$": true,
    "%": true,
    "\\": true,
    "{": true,
    "]": true,
    "}": true
};
exports.notTextMathMode = {
    "^": true,
    "_": true,
    "$": true,
    "%": true,
    "\\": true,
    "{": true,
    "]": true,
    "}": true
};
exports.notTextMathModeAndNotClosingBracket = {
    "^": true,
    "_": true,
    "$": true,
    "%": true,
    "\\": true,
    "{": true,
    "}": true
};
exports.notTextDefaultAndNotClosingBracket = {
    "$": true,
    "%": true,
    "\\": true,
    "{": true,
    "}": true
};
function takeAtLeastOneTill(till) {
    return parsimmon_1.Parser(function (str, i) {
        var firstChar = str.charAt(i);
        if (i >= str.length || till(firstChar)) {
            return parsimmon_2.makeFailure(i, "text character");
        }
        else {
            var strz = [firstChar];
            i++;
            var char = str.charAt(i);
            while (!till(char) && i < str.length) {
                strz.push(char);
                i++;
                char = str.charAt(i);
            }
            return parsimmon_1.makeSuccess(i, strz.join(""));
        }
    });
}
function textParser(notText) {
    return takeAtLeastOneTill(isNotText(notText))
        .map(function (match) { return Syntax_2.newTeXRaw(match); });
}
exports.textParser = textParser;
var text = textParser(exports.notTextDefault);
var text2 = textParser(exports.notTextDefaultAndNotClosingBracket);
var spaces = parsimmon_1.regexp(/ */)
    .map(Syntax_2.newTeXRaw);
exports.comment = commentSymbol
    .then(takeTillNewline)
    .skip(maybeNewline)
    .map(Syntax_1.newTeXComment);
exports.specialCharsDefault = {
    "'": true,
    "(": true,
    ")": true,
    ",": true,
    ".": true,
    "-": true,
    '"': true,
    "!": true,
    "^": true,
    "$": true,
    "&": true,
    "#": true,
    "{": true,
    "}": true,
    "%": true,
    "~": true,
    "|": true,
    "/": true,
    ":": true,
    ";": true,
    "=": true,
    "[": true,
    "]": true,
    "\\": true,
    "`": true,
    " ": true
};
function isSpecialCharacter(char, specialChars) {
    var chars = specialChars === undefined ? exports.specialCharsDefault : specialChars;
    return chars.hasOwnProperty(char);
}
exports.isSpecialCharacter = isSpecialCharacter;
function isNotText(notText) {
    return function (char) { return notText.hasOwnProperty(char); };
}
exports.isNotText = isNotText;
exports.mathSymbol = parsimmon_1.string("$");
exports.commandSymbol = parsimmon_1.string("\\");
function latexBlockParser(mode, sub, sup) {
    if (sub === void 0) { sub = "_"; }
    if (sup === void 0) { sup = "^"; }
    switch (mode) {
        case "Math":
            return exports.latexBlockParserMathMode(sub, sup);
        default:
            return exports.latexBlockParserTextMode;
    }
}
exports.latexBlockParser = latexBlockParser;
exports.latexBlockParserTextMode = parsimmon_1.lazy(function () { return parsimmon_1.alt(parsimmon_1.alt(textParser(exports.notTextDefault), exports.dolMath, exports.comment, textParser(exports.notTextDefaultAndNotClosingBracket), exports.environment, command("Paragraph"))); });
exports.latexBlockParserMathMode = function (sub, sup) {
    return parsimmon_1.lazy(function () { return parsimmon_1.alt(parsimmon_1.alt(shiftedScript("Math", sub, sup), textParser(exports.notTextMathMode), exports.dolMath, exports.comment, textParser(exports.notTextMathModeAndNotClosingBracket), exports.environment, command("Math"))); });
};
exports.latexParser = exports.latexBlockParserTextMode.many();
var anonym = parsimmon_1.string(lbrace)
    .then(exports.latexBlockParserTextMode.many())
    .skip(parsimmon_1.string(rbrace));
exports.env = parsimmon_1.Parser(function (input, i) {
    var beginFound = parsimmon_1.string("\\begin")
        .then(parsimmon_1.string(lbrace))
        .then(spaces)
        .then(parsimmon_1.regexp(/[a-zA-Z]+/))
        .skip(spaces)
        .skip(parsimmon_1.string(rbrace))
        ._(input, i);
    if (isNotOk(beginFound))
        return beginFound;
    i = Utils_1.mustBeNumber(beginFound.index);
    var envName = beginFound.value;
    return manyTill(exports.latexBlockParserTextMode, parsimmon_1.string("\\end")
        .then(parsimmon_1.string(lbrace))
        .then(spaces)
        .then(parsimmon_1.string(envName))
        .then(spaces)
        .then(parsimmon_1.string(rbrace))).map(function (latex) { return Syntax_1.newTeXEnv(envName, latex); })._(input, i);
});
exports.environment = parsimmon_1.alt(anonym, exports.env);
exports.specialChar = parsimmon_1.test(isSpecialCharacter);
function isUppercaseAlph(c) {
    return c >= "A" && c <= "Z";
}
function isLowercaseAlph(c) {
    return c >= "a" && c <= "z";
}
exports.endCmd = function (c) { return !isLowercaseAlph(c) && !isUppercaseAlph(c); };
var openingBrace = parsimmon_1.string("{");
var closingBrace = parsimmon_1.string("}");
var isClosingBrace = function (str) { return str === ("}"); };
function fixArg(mode) {
    return openingBrace
        .then(manyTill(latexBlockParser(mode, "_"), closingBrace)).map(Syntax_1.newFixArg);
}
exports.fixArg = fixArg;
function optArg(mode) {
    return openingBracket
        .then(manyTill(latexBlockParser(mode), closingBracket))
        .map(Syntax_1.newOptArg);
}
exports.optArg = optArg;
function cmdArg(mode) {
    return parsimmon_1.alt(fixArg(mode), optArg(mode));
}
exports.cmdArg = cmdArg;
function cmdArgs(mode) {
    return parsimmon_1.alt(parsimmon_1.string("{}").map(function () { return []; }), cmdArg(mode).map(function (s) { return s; }).atLeast(0)).map(function (e) { return e; });
}
exports.cmdArgs = cmdArgs;
function command(mode) {
    return parsimmon_1.seqMap(exports.commandSymbol, parsimmon_1.alt(exports.specialChar, exports.takeTill(exports.endCmd)), cmdArgs(mode), function (ignored, name, argz) {
        return argz !== undefined ? Syntax_1.newTeXComm.apply(void 0, [name].concat(argz)) : Syntax_1.newTeXComm(name);
    }).map(function (res) {
        return res;
    });
}
exports.command = command;
exports.subOrSuperscriptSymbolParser = function (subscriptSymbol, superscriptSymbol) {
    return parsimmon_1.alt(parsimmon_1.string(subscriptSymbol), parsimmon_1.string(superscriptSymbol)).map(function (parsedStr) { return (parsedStr === subscriptSymbol ? Syntax_1.SubOrSuperSymbol.SUB : Syntax_1.SubOrSuperSymbol.SUP); });
};
function shiftedScript(mode, sub, sup) {
    return parsimmon_1.seqMap(exports.subOrSuperscriptSymbolParser(sub, sup), cmdArgs(mode), function (symbol, argz) {
        return Syntax_1.newSubOrSuperScript(symbol, symbol === Syntax_1.SubOrSuperSymbol.SUB ? sub : sup, argz);
    }).map(function (res) {
        return res;
    });
}
exports.shiftedScript = shiftedScript;
exports.dolMath = math();
function math(mathType, sMath, eMath) {
    if (mathType === void 0) { mathType = "Dollar"; }
    if (sMath === void 0) { sMath = "$"; }
    if (eMath === void 0) { eMath = "$"; }
    return parsimmon_1.string(sMath)
        .then(latexBlockParser("Math", "_")
        .many()
        .map(function (str) { return Syntax_1.newTeXMath(mathType, sMath, eMath, str); }))
        .skip(parsimmon_1.string(eMath));
}
function isOk(parse) {
    return parse !== undefined && parse.status === true;
}
exports.isOk = isOk;
function isNotOk(parse) {
    return parse !== undefined && parse.status === false;
}
exports.isNotOk = isNotOk;
function mustBeOk(parse) {
    if (!isOk(parse))
        throw new Error("Expected parse to be success: " + JSON.stringify(parse));
    return parse;
}
exports.mustBeOk = mustBeOk;
//# sourceMappingURL=Parser.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var latex_parser_1 = __webpack_require__(5);
var unknown_command_1 = __webpack_require__(8);
var index_1 = __webpack_require__(22);
var KnownCommand_1 = __webpack_require__(9);
var index_2 = __webpack_require__(29);
var index_3 = __webpack_require__(12);
var sqrt_1 = __webpack_require__(57);
var index_4 = __webpack_require__(58);
var index_5 = __webpack_require__(61);
var CategoryCode_1 = __webpack_require__(6);
function isString(x) {
    return typeof x === "string";
}
function convertChars(blockIndex, latex) {
    var start = blockIndex;
    do
        blockIndex++;
    while (latex_parser_1.isTeXChar(latex[blockIndex]));
    var chars = latex.slice(start, blockIndex);
    var result = chars.map(function (s) { return s.string; }).join("");
    return {
        result: result,
        blockIndex: blockIndex
    };
}
var regexStartingWhitespace = /^\s*/;
function convertTeXCommand(options, blockIndex, latex, current) {
    var value = convertCommand(options, current);
    if (isString(value)) {
        return {
            result: value,
            blockIndex: blockIndex + 1
        };
    }
    else {
        var gobbledArguments = [];
        var rest = [];
        while (gobbledArguments.length < value.argumentCount && blockIndex < latex.length - 1) {
            blockIndex++;
            var nextWordToGobble = blockIndex;
            if (latex.length < nextWordToGobble - 1)
                throw new Error("Could not gobble " + value.argumentCount + " arguments for " + current.name);
            var nextLaTeXBlock = latex[nextWordToGobble];
            if (latex_parser_1.isTeXRaw(nextLaTeXBlock)) {
                var whitespaces = /\s+/g;
                var followingText = nextLaTeXBlock.text.replace(regexStartingWhitespace, "");
                var restIndex = -1;
                var lastIndex = 0;
                while (gobbledArguments.length < value.argumentCount) {
                    var argMatch = whitespaces.exec(followingText);
                    if (argMatch) {
                        var match = followingText.substring(lastIndex, argMatch.index);
                        restIndex = argMatch.index;
                        lastIndex = argMatch.index + match.length;
                        gobbledArguments.push.apply(gobbledArguments, CategoryCode_1.convertToTeXCharsDefault(match));
                    }
                    else {
                        gobbledArguments.push.apply(gobbledArguments, CategoryCode_1.convertToTeXCharsDefault(followingText));
                        break;
                    }
                }
                if (restIndex >= 0)
                    rest.push((followingText.substring(restIndex)));
            }
            else
                gobbledArguments.push(nextLaTeXBlock);
        }
        blockIndex++;
        var argumentsToApply = gobbledArguments
            .map(function (lll) { return convertLaTeXBlocksToUnicode(options, [lll]).result; })
            .map(latex_parser_1.newTeXRaw)
            .map(function (latex) { return latex_parser_1.newFixArg([latex]); });
        if (argumentsToApply.length < value.argumentCount)
            throw new Error("Could not find enough arguments for command \\" + value.name + ". Expected " + value.argumentCount + ", but found " + argumentsToApply.length);
        var result = [value.apply(function () {
            }, argumentsToApply)];
        if (rest.length > 0)
            result.push(rest.join(""));
        return {
            result: result.join(""),
            blockIndex: blockIndex
        };
    }
}
function isTeXChar2(x) {
    return x !== undefined
        && typeof x.string === "string"
        && typeof x.category === "number";
}
exports.isTeXChar2 = isTeXChar2;
function convertLaTeXBlocksToUnicode(options, latex) {
    var blockIndex = 0;
    if (latex.length <= 0)
        return {
            result: "",
            blockIndex: blockIndex
        };
    var finalConversion = [];
    while (blockIndex < latex.length) {
        var l = latex[blockIndex];
        try {
            if (isTeXChar2(l)) {
                var convertedChars = convertChars(blockIndex, latex);
                blockIndex = convertedChars.blockIndex;
                finalConversion.push(convertedChars.result);
            }
            else if (latex_parser_1.isTeXComm(l)) {
                var res = convertTeXCommand(options, blockIndex, latex, l);
                blockIndex = res.blockIndex;
                finalConversion.push(res.result);
            }
            else if (latex_parser_1.isFixArg(l) || latex_parser_1.isOptArg(l)) {
                var res = convertLaTeXBlocksToUnicode(options, l.latex);
                finalConversion.push(res.result);
                blockIndex++;
            }
            else if (latex_parser_1.isTextHaving(l)) {
                finalConversion.push(l.text);
                blockIndex++;
            }
            else if (latex_parser_1.isTeXMath(l)) {
                return convertLaTeXBlocksToUnicode(options, l.latex);
            }
            else if (latex_parser_1.isTeXRaw(l)) {
                finalConversion.push(l.text);
                blockIndex++;
            }
            else if (latex_parser_1.isSubOrSuperScript(l)) {
                var args = l.arguments ? l.arguments : [];
                var res = convertTeXCommand(options, blockIndex, latex, latex_parser_1.newTeXComm.apply(void 0, [l.type === latex_parser_1.SubOrSuperSymbol.SUB ? "mathsubscript" : "mathsuperscript"].concat(args)));
                blockIndex = res.blockIndex;
                finalConversion.push(res.result);
            }
            else if (latex_parser_1.isArray(l)) {
                var res = convertLaTeXBlocksToUnicode(options, l);
                finalConversion.push(res.result);
                blockIndex++;
            }
            else {
                throw new Error("Can't handle LaTeX block yet: " + (JSON.stringify(l)) + ". Leave an issue at https://github.com/digitalheir/tex-to-unicode/issues");
            }
        }
        catch (e) {
            if (options.onError !== undefined) {
                var saved = options.onError(e, l);
                if (saved !== undefined) {
                    finalConversion.push(saved);
                    blockIndex++;
                }
                else
                    throw e;
            }
            else
                throw e;
        }
    }
    return {
        result: finalConversion.join(""),
        blockIndex: blockIndex
    };
}
exports.convertLaTeXBlocksToUnicode = convertLaTeXBlocksToUnicode;
function convert1ArgCommand(options, cmd) {
    if (cmd.arguments.length > 0) {
        var expanded = index_2.expand1argsCommand(cmd.name, convertLaTeXBlocksToUnicode(options, [cmd.arguments[0]]).result || "");
        if (cmd.arguments.length > 1)
            return expanded + convertLaTeXBlocksToUnicode(options, cmd.arguments.slice(1)).result;
        else
            return expanded;
    }
    else
        return KnownCommand_1.createCommandHandler(cmd.name, 0, 1, function (cb, texArgs) {
            var firstArg = texArgs[0];
            var rest = texArgs.slice(1);
            var a = index_2.expand1argsCommand(cmd.name, convertLaTeXBlocksToUnicode(options, [firstArg]).result);
            var b = convertLaTeXBlocksToUnicode(options, rest).result;
            return a + b;
        });
}
function convert2ArgCommand(options, cmd) {
    if (cmd.arguments.length > 1) {
        var expanded = index_4.expand2argsCommand(cmd.name, convertLaTeXBlocksToUnicode(options, [cmd.arguments[0]]).result || "", convertLaTeXBlocksToUnicode(options, [cmd.arguments[1]]).result || "");
        if (cmd.arguments.length > 2)
            return expanded + convertLaTeXBlocksToUnicode(options, cmd.arguments.slice(1)).result;
        else
            return expanded;
    }
    else
        return KnownCommand_1.createCommandHandler(cmd.name, 0, 2, function (cb, texArgs) {
            var firstArg = texArgs[0];
            var secondArg = texArgs[1];
            var rest = texArgs.slice(2);
            var a = index_4.expand2argsCommand(cmd.name, convertLaTeXBlocksToUnicode(options, [firstArg]).result, convertLaTeXBlocksToUnicode(options, [secondArg]).result);
            var b = convertLaTeXBlocksToUnicode(options, rest).result;
            return a + b;
        });
}
function convertSqrt(options, cmd) {
    var base = undefined;
    var nucleus = undefined;
    var argIndex = 0;
    while (nucleus === undefined && argIndex < cmd.arguments.length) {
        var arg = cmd.arguments[argIndex];
        var argAsString = convertLaTeXBlocksToUnicode(options, [arg]).result;
        if (latex_parser_1.isOptArg(arg) && !base) {
            base = argAsString;
        }
        else {
            nucleus = argAsString;
        }
        argIndex++;
    }
    if (nucleus)
        return sqrt_1.convertSqrtToUnicode(nucleus, base);
    else
        return KnownCommand_1.createCommandHandler(cmd.name, 1, 1, function (cb, texArgs) {
            var firstArg = texArgs[0];
            var a = sqrt_1.convertSqrtToUnicode(convertLaTeXBlocksToUnicode(options, [firstArg]).result);
            if (texArgs.length > 1) {
                var rest = texArgs.slice(1);
                var b = convertLaTeXBlocksToUnicode(options, rest).result;
                return a + b;
            }
            return a;
        });
}
function convertCommand(options, cmd) {
    var commandName = cmd.name;
    var expanded0args = index_1.expand0argsCommand(commandName);
    if (!!expanded0args)
        if (cmd.arguments && cmd.arguments.length > 0)
            return expanded0args + convertLaTeXBlocksToUnicode(options, cmd.arguments).result;
        else
            return expanded0args;
    else if (index_3.is1argsCommand(commandName)) {
        return convert1ArgCommand(options, cmd);
    }
    else if (index_5.is2argsCommand(commandName)) {
        return convert2ArgCommand(options, cmd);
    }
    else if (commandName === "sqrt") {
        return convertSqrt(options, cmd);
    }
    else {
        throw unknown_command_1.unknownCommandError(commandName);
    }
}
exports.convertCommand = convertCommand;
//# sourceMappingURL=convert.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var space_1 = __webpack_require__(23);
var symbols_1 = __webpack_require__(24);
var barred_letter_1 = __webpack_require__(25);
var slashed_1 = __webpack_require__(26);
var cyrillic_1 = __webpack_require__(27);
var specialchars_1 = __webpack_require__(28);
exports.expand0argsCommand = function (name) {
    for (var _i = 0, _a = [
        barred_letter_1.barredLUnicode,
        space_1.spaceUnicode,
        slashed_1.slashedOUnicode,
        symbols_1.characterUnicode,
        specialchars_1.specialCharacter,
        cyrillic_1.cyrillicUnicode
    ]; _i < _a.length; _i++) {
        var fn = _a[_i];
        var result = fn(name);
        if (!!result)
            return result;
    }
};
//# sourceMappingURL=index.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.mathSpace = "\u8287";
exports.spaceCharactersUnicode = {
    ",": "\u2009",
    "quad": "\u2003",
    "qquad": "\u2003\u2003",
    " ": " ",
    "space": " ",
    ";": "　",
    ":": "　",
    "hfill": "\t"
};
function isSpaceCharactersUnicode(x) {
    return exports.spaceCharactersUnicode.hasOwnProperty(x);
}
exports.isSpaceCharactersUnicode = isSpaceCharactersUnicode;
exports.spaceUnicode = function (name) { return isSpaceCharactersUnicode(name) ? exports.spaceCharactersUnicode[name] : undefined; };
//# sourceMappingURL=space.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.characterUnicodeChart = {
    "leftrightsquigarrow": "↭",
    "Longleftrightarrow": "⟺",
    "blacktriangleright": "▶",
    "longleftrightarrow": "⟷",
    "blacktriangledown": "▼",
    "blacktriangleleft": "◀",
    "leftrightharpoons": "⇋",
    "rightleftharpoons": "⇌",
    "twoheadrightarrow": "↠",
    "circlearrowright": "↻",
    "downharpoonright": "⇂",
    "rightharpoondown": "⇁",
    "rightrightarrows": "⇉",
    "twoheadleftarrow": "↞",
    "vartriangleright": "⊳",
    "bigtriangledown": "▽",
    "circlearrowleft": "↺",
    "curvearrowright": "↷",
    "downharpoonleft": "⇃",
    "leftharpoondown": "↽",
    "leftrightarrows": "⇆",
    "rightleftarrows": "⇄",
    "rightsquigarrow": "⇝",
    "rightthreetimes": "⋌",
    "trianglerighteq": "⊵",
    "vartriangleleft": "⊲",
    "Leftrightarrow": "⇔",
    "Longrightarrow": "⟹",
    "curvearrowleft": "↶",
    "dashrightarrow": "⇢",
    "doublebarwedge": "⩞",
    "downdownarrows": "⇊",
    "hookrightarrow": "↪",
    "leftleftarrows": "⇇",
    "leftrightarrow": "↔",
    "leftthreetimes": "⋋",
    "longrightarrow": "⟶",
    "looparrowright": "↬",
    "rightarrowtail": "↣",
    "rightharpoonup": "⇀",
    "sphericalangle": "∢",
    "textregistered": "®",
    "trianglelefteq": "⊴",
    "upharpoonright": "↾",
    "Longleftarrow": "⟸",
    "bigtriangleup": "△",
    "blacktriangle": "▲",
    "dashleftarrow": "⇠",
    "divideontimes": "⋇",
    "fallingdotseq": "≒",
    "hookleftarrow": "↩",
    "leftarrowtail": "↢",
    "leftharpoonup": "↼",
    "longleftarrow": "⟵",
    "looparrowleft": "↫",
    "measuredangle": "∡",
    "shortparallel": "∥",
    "smallsetminus": "∖",
    "texttrademark": "™",
    "triangleright": "▷",
    "upharpoonleft": "↿",
    "blacklozenge": "◆",
    "risingdotseq": "≓",
    "triangledown": "▽",
    "triangleleft": "◁",
    "Rrightarrow": "⇛",
    "Updownarrow": "⇕",
    "backepsilon": "∍",
    "blacksquare": "■",
    "circledcirc": "⊚",
    "circleddash": "⊝",
    "curlyeqprec": "⋞",
    "curlyeqsucc": "⋟",
    "diamondsuit": "♢",
    "preccurlyeq": "≼",
    "succcurlyeq": "≽",
    "textgreater": ">",
    "thickapprox": "≈",
    "updownarrow": "↕",
    "vartriangle": "△",
    "Lleftarrow": "⇚",
    "Rightarrow": "⇒",
    "circledast": "⊛",
    "complement": "∁",
    "curlywedge": "⋏",
    "longmapsto": "⟼",
    "registered": "®",
    "rightarrow": "→",
    "smallfrown": "⌢",
    "smallsmile": "⌣",
    "sqsubseteq": "⊑",
    "sqsupseteq": "⊒",
    "textlangle": "〈",
    "textrangle": "〉",
    "upuparrows": "⇈",
    "varepsilon": "ε",
    "varnothing": "∅",
    "Downarrow": "⇓",
    "Leftarrow": "⇐",
    "backprime": "‵",
    "bigotimes": "⨂",
    "centerdot": "⋅",
    "copyright": "©",
    "downarrow": "↓",
    "gtreqless": "⋛",
    "heartsuit": "♡",
    "leftarrow": "←",
    "lesseqgtr": "⋚",
    "pitchfork": "⋔",
    "spadesuit": "♠",
    "therefore": "∴",
    "trademark": "™",
    "triangleq": "≜",
    "varpropto": "∝",
    "approxeq": "≊",
    "barwedge": "⊼",
    "bigoplus": "⨁",
    "bigsqcup": "⨆",
    "biguplus": "⨄",
    "bigwedge": "⋀",
    "boxminus": "⊟",
    "boxtimes": "⊠",
    "circledS": "Ⓢ",
    "clubsuit": "♣",
    "curlyvee": "⋎",
    "doteqdot": "≑",
    "emptyset": "∅",
    "intercal": "⊺",
    "leqslant": "⩽",
    "multimap": "⊸",
    "parallel": "∥",
    "setminus": "∖",
    "sqsubset": "⊏",
    "sqsupset": "⊐",
    "subseteq": "⊆",
    "supseteq": "⊇",
    "textless": "<",
    "thicksim": "∼",
    "triangle": "△",
    "varkappa": "ϰ",
    "varsigma": "ς",
    "vartheta": "ϑ",
    "Diamond": "◇",
    "Uparrow": "⇑",
    "Upsilon": "Υ",
    "backsim": "∽",
    "because": "∵",
    "between": "≬",
    "bigodot": "⨀",
    "bigstar": "★",
    "boxplus": "⊞",
    "ddagger": "‡",
    "diamond": "⋄",
    "digamma": "Ϝ",
    "dotplus": "∔",
    "epsilon": "∊",
    "gtrless": "≷",
    "implies": "⇒",
    "leadsto": "↝",
    "lessdot": "⋖",
    "lessgtr": "≶",
    "lesssim": "≲",
    "lozenge": "◊",
    "natural": "♮",
    "nearrow": "↗",
    "nexists": "∄",
    "nwarrow": "↖",
    "partial": "∂",
    "pilcrow": "¶",
    "precsim": "≾",
    "searrow": "↘",
    "section": "§",
    "succsim": "≿",
    "swarrow": "↙",
    "textbar": "|",
    "uparrow": "↑",
    "upsilon": "υ",
    "Bumpeq": "≎",
    "Lambda": "Λ",
    "Subset": "⋐",
    "Supset": "⋑",
    "Vvdash": "⊪",
    "approx": "≈",
    "bigcap": "⋂",
    "bigcup": "⋃",
    "bigvee": "⋁",
    "bowtie": "⋈",
    "boxdot": "⊡",
    "bullet": "∙",
    "bumpeq": "≏",
    "circeq": "≗",
    "coprod": "∐",
    "dagger": "†",
    "daleth": "ד",
    "degree": "°",
    "eqcirc": "≖",
    "exists": "∃",
    "forall": "∀",
    "gtrdot": "⋗",
    "gtrsim": "≳",
    "hslash": "ℏ",
    "lambda": "λ",
    "lfloor": "⌊",
    "ltimes": "⋉",
    "mapsto": "↦",
    "models": "⊨",
    "ominus": "⊖",
    "oslash": "⊘",
    "otimes": "⊗",
    "preceq": "⪯",
    "propto": "∝",
    "rfloor": "⌋",
    "rtimes": "⋊",
    "square": "□",
    "subset": "⊂",
    "succeq": "⪰",
    "supset": "⊃",
    "varphi": "φ",
    "varrho": "ϱ",
    "veebar": "⊻",
    "Delta": "Δ",
    "Gamma": "Γ",
    "Omega": "Ω",
    "Theta": "Θ",
    "Vdash": "⊩",
    "aleph": "ℵ",
    "Alpha": "Α",
    "alpha": "α",
    "angle": "∠",
    "asymp": "≍",
    "cdots": "⋯",
    "cents": "¢",
    "dashv": "⊣",
    "ddots": "⋱",
    "delta": "δ",
    "doteq": "≐",
    "equiv": "≡",
    "frown": "⌢",
    "gamma": "γ",
    "gimel": "ℷ",
    "infty": "∞",
    "kappa": "κ",
    "Kappa": "Κ",
    "lceil": "⌈",
    "nabla": "∇",
    "notin": "∉",
    "omega": "ω",
    "oplus": "⊕",
    "pound": "£",
    "prime": "′",
    "qquad": "  ",
    "rceil": "⌉",
    "sharp": "♯",
    "sigma": "σ",
    "simeq": "≃",
    "smile": "⌣",
    "space": "␣",
    "sqcap": "⊓",
    "sqcup": "⊔",
    "theta": "θ",
    "times": "×",
    "unlhd": "⊴",
    "unrhd": "⊵",
    "uplus": "⊎",
    "vDash": "⊨",
    "varpi": "ϖ",
    "vdash": "⊢",
    "vdots": "⋮",
    "wedge": "∧",
    "Finv": "Ⅎ",
    "Join": "⋈",
    "atop": "¦",
    "beta": "β",
    "Beta": "Β",
    "beth": "ב",
    "cdot": "⋅",
    "circ": "∘",
    "cong": "≅",
    "dots": "…",
    "euro": "€",
    "flat": "♭",
    "geqq": "≧",
    "hbar": "ℏ",
    "iota": "ι",
    "leqq": "≦",
    "odot": "⊙",
    "oint": "∮",
    "perp": "⊥",
    "prec": "≺",
    "prod": "∏",
    "quad": " ",
    "star": "⋆",
    "succ": "≻",
    "surd": "√",
    "zeta": "ζ",
    "Box": "□",
    "Cap": "⋒",
    "Cup": "⋓",
    "Lsh": "↰",
    "Phi": "Φ",
    "Psi": "Ψ",
    "Rsh": "↱",
    "ast": "∗",
    "bot": "⊥",
    "cap": "∩",
    "chi": "χ",
    "Chi": "Χ",
    "cup": "∪",
    "div": "÷",
    "ell": "ℓ",
    "eta": "η",
    "eth": "ð",
    "geq": "≥",
    "ggg": "⋙",
    "int": "∫",
    "leq": "≤",
    "lhd": "⊲",
    "lll": "⋘",
    "mho": "℧",
    "mid": "∣",
    "neg": "¬",
    "neq": "≠",
    "phi": "ϕ",
    "psi": "ψ",
    "rhd": "⊳",
    "rho": "ρ",
    "Rho": "Ρ",
    "sim": "∼",
    "sum": "∑",
    "tau": "τ",
    "Tau": "Τ",
    "top": "⊤",
    "vee": "∨",
    "Im": "ℑ",
    "Pi": "Π",
    "Re": "ℜ",
    "Xi": "Ξ",
    "ge": "≥",
    "gg": "≫",
    "in": "∈",
    "le": "≤",
    "ll": "≪",
    "mp": "∓",
    "mu": "μ",
    "Mu": "Μ",
    "ni": "∋",
    "nu": "ν",
    "Nu": "Ν",
    "pi": "π",
    "pm": "±",
    "wp": "℘",
    "wr": "≀",
    "xi": "ξ",
    "Omicron": "Ο",
    "omicron": "ο",
    "textdollar": "$",
    "textquotesingle": "'",
    "textbackslash": "\\",
    "textasciigrave": "`",
    "lbrace": "{",
    "vert": "|",
    "rbrace": "}",
    "textasciitilde": "~",
    "textexclamdown": "¡",
    "textcent": "¢",
    "textsterling": "£",
    "textcurrency": "¤",
    "textyen": "¥",
    "textbrokenbar": "¦",
    "textsection": "§",
    "textasciidieresis": "¨",
    "textcopyright": "©",
    "textordfeminine": "ª",
    "guillemotleft": "«",
    "lnot": "¬",
    "textasciimacron": "¯",
    "textdegree": "°",
    "textasciiacute": "´",
    "textparagraph": "¶",
    "textordmasculine": "º",
    "guillemotright": "»",
    "textonequarter": "¼",
    "textonehalf": "½",
    "textthreequarters": "¾",
    "textquestiondown": "¿",
    "AA": "Å",
    "AE": "Æ",
    "DH": "Ð",
    "texttimes": "×",
    "TH": "Þ",
    "ss": "ß",
    "aa": "å",
    "ae": "æ",
    "dh": "ð",
    "th": "þ",
    "DJ": "Đ",
    "dj": "đ",
    "Elzxh": "ħ",
    "i": "ı",
    "NG": "Ŋ",
    "ng": "ŋ",
    "OE": "Œ",
    "oe": "œ",
    "texthvlig": "ƕ",
    "textnrleg": "ƞ",
    "textdoublepipe": "ǂ",
    "Elztrna": "ɐ",
    "Elztrnsa": "ɒ",
    "Elzopeno": "ɔ",
    "Elzrtld": "ɖ",
    "Elzschwa": "ə",
    "Elzpgamma": "ɣ",
    "Elzpbgam": "ɤ",
    "Elztrnh": "ɥ",
    "Elzbtdl": "ɬ",
    "Elzrtll": "ɭ",
    "Elztrnm": "ɯ",
    "Elztrnmlr": "ɰ",
    "Elzltlmr": "ɱ",
    "Elzltln": "ɲ",
    "Elzrtln": "ɳ",
    "Elzclomeg": "ɷ",
    "textphi": "ɸ",
    "Elztrnr": "ɹ",
    "Elztrnrl": "ɺ",
    "Elzrttrnr": "ɻ",
    "Elzrl": "ɼ",
    "Elzrtlr": "ɽ",
    "Elzfhr": "ɾ",
    "Elzrtls": "ʂ",
    "Elzesh": "ʃ",
    "Elztrnt": "ʇ",
    "Elzrtlt": "ʈ",
    "Elzpupsil": "ʊ",
    "Elzpscrv": "ʋ",
    "Elzinvv": "ʌ",
    "Elzinvw": "ʍ",
    "Elztrny": "ʎ",
    "Elzrtlz": "ʐ",
    "Elzyogh": "ʒ",
    "Elzglst": "ʔ",
    "Elzreglst": "ʕ",
    "Elzinglst": "ʖ",
    "textturnk": "ʞ",
    "Elzdyogh": "ʤ",
    "Elztesh": "ʧ",
    "textasciicaron": "ˇ",
    "Elzverts": "ˈ",
    "Elzverti": "ˌ",
    "Elzlmrk": "ː",
    "Elzhlmrk": "ˑ",
    "Elzsbrhr": "˒",
    "Elzsblhr": "˓",
    "Elzrais": "˔",
    "Elzlow": "˕",
    "textasciibreve": "˘",
    "textperiodcentered": "˙",
    "texttildelow": "˜",
    "Epsilon": "Ε",
    "Zeta": "Ζ",
    "Eta": "Η",
    "Iota": "Ι",
    "Sigma": "Σ",
    "texttheta": "θ",
    "textvartheta": "ϑ",
    "Stigma": "Ϛ",
    "Digamma": "Ϝ",
    "Koppa": "Ϟ",
    "Sampi": "Ϡ",
    "textTheta": "ϴ",
    "textendash": "–",
    "textemdash": "—",
    "Vert": "‖",
    "Elzreapos": "‛",
    "textquotedblleft": "“",
    "textquotedblright": "”",
    "textdagger": "†",
    "textdaggerdbl": "‡",
    "textbullet": "•",
    "ldots": "…",
    "textperthousand": "‰",
    "textpertenthousand": "‱",
    "guilsinglleft": "‹",
    "guilsinglright": "›",
    "nolinebreak": "⁠",
    "Elzxrat": "℞",
    "nleftarrow": "↚",
    "nrightarrow": "↛",
    "arrowwaveleft": "↜",
    "arrowwaveright": "↝",
    "nleftrightarrow": "↮",
    "dblarrowupdown": "⇅",
    "nLeftarrow": "⇍",
    "nLeftrightarrow": "⇎",
    "nRightarrow": "⇏",
    "DownArrowUpArrow": "⇵",
    "rightangle": "∟",
    "nmid": "∤",
    "nparallel": "∦",
    "surfintegral": "∯",
    "volintegral": "∰",
    "clwintegral": "∱",
    "Colon": "∷",
    "homothetic": "∻",
    "lazysinv": "∾",
    "NotEqualTilde": "≂",
    "approxnotequal": "≆",
    "tildetrpl": "≋",
    "allequal": "≌",
    "NotHumpDownHump": "≎",
    "NotHumpEqual": "≏",
    "estimates": "≙",
    "starequal": "≛",
    "lneqq": "≨",
    "lvertneqq": "≨",
    "gneqq": "≩",
    "gvertneqq": "≩",
    "NotLessLess": "≪",
    "NotGreaterGreater": "≫",
    "lessequivlnt": "≲",
    "greaterequivlnt": "≳",
    "notlessgreater": "≸",
    "notgreaterless": "≹",
    "precapprox": "≾",
    "NotPrecedesTilde": "≾",
    "succapprox": "≿",
    "NotSucceedsTilde": "≿",
    "subsetneq": "⊊",
    "varsubsetneqq": "⊊",
    "supsetneq": "⊋",
    "varsupsetneq": "⊋",
    "NotSquareSubset": "⊏",
    "NotSquareSuperset": "⊐",
    "truestate": "⊧",
    "forcesextra": "⊨",
    "VDash": "⊫",
    "nvdash": "⊬",
    "nvDash": "⊭",
    "nVdash": "⊮",
    "nVDash": "⊯",
    "original": "⊶",
    "image": "⊷",
    "hermitconjmatrix": "⊹",
    "rightanglearc": "⊾",
    "backsimeq": "⋍",
    "verymuchless": "⋘",
    "verymuchgreater": "⋙",
    "Elzsqspne": "⋥",
    "lnsim": "⋦",
    "gnsim": "⋧",
    "precedesnotsimilar": "⋨",
    "succnsim": "⋩",
    "ntriangleleft": "⋪",
    "ntriangleright": "⋫",
    "ntrianglelefteq": "⋬",
    "ntrianglerighteq": "⋭",
    "upslopeellipsis": "⋰",
    "downslopeellipsis": "⋱",
    "perspcorrespond": "⌆",
    "recorder": "⌕",
    "ulcorner": "⌜",
    "urcorner": "⌝",
    "llcorner": "⌞",
    "lrcorner": "⌟",
    "langle": "〈",
    "rangle": "〉",
    "Elzdlcorn": "⎣",
    "lmoustache": "⎰",
    "rmoustache": "⎱",
    "textvisiblespace": "␣",
    "Elzdshfnc": "┆",
    "Elzsqfnw": "┙",
    "diagup": "╱",
    "Elzvrecto": "▯",
    "Elzcirfl": "◐",
    "Elzcirfr": "◑",
    "Elzcirfb": "◒",
    "Elzrvbull": "◘",
    "Elzsqfl": "◧",
    "Elzsqfr": "◨",
    "Elzsqfse": "◪",
    "bigcirc": "◯",
    "rightmoon": "☾",
    "mercury": "☿",
    "venus": "♀",
    "male": "♂",
    "jupiter": "♃",
    "saturn": "♄",
    "uranus": "♅",
    "neptune": "♆",
    "pluto": "♇",
    "aries": "♈",
    "taurus": "♉",
    "gemini": "♊",
    "cancer": "♋",
    "leo": "♌",
    "virgo": "♍",
    "libra": "♎",
    "scorpio": "♏",
    "sagittarius": "♐",
    "capricornus": "♑",
    "aquarius": "♒",
    "pisces": "♓",
    "quarternote": "♩",
    "eighthnote": "♪",
    "UpArrowBar": "⤒",
    "DownArrowBar": "⤓",
    "Elolarr": "⥀",
    "Elorarr": "⥁",
    "ElzRlarr": "⥂",
    "ElzrLarr": "⥄",
    "Elzrarrx": "⥇",
    "LeftRightVector": "⥎",
    "RightUpDownVector": "⥏",
    "DownLeftRightVector": "⥐",
    "LeftUpDownVector": "⥑",
    "LeftVectorBar": "⥒",
    "RightVectorBar": "⥓",
    "RightUpVectorBar": "⥔",
    "RightDownVectorBar": "⥕",
    "DownLeftVectorBar": "⥖",
    "DownRightVectorBar": "⥗",
    "LeftUpVectorBar": "⥘",
    "LeftDownVectorBar": "⥙",
    "LeftTeeVector": "⥚",
    "RightTeeVector": "⥛",
    "RightUpTeeVector": "⥜",
    "RightDownTeeVector": "⥝",
    "DownLeftTeeVector": "⥞",
    "DownRightTeeVector": "⥟",
    "LeftUpTeeVector": "⥠",
    "LeftDownTeeVector": "⥡",
    "UpEquilibrium": "⥮",
    "ReverseUpEquilibrium": "⥯",
    "RoundImplies": "⥰",
    "Elztfnc": "⦀",
    "Elroang": "⦆",
    "Elzddfnc": "⦙",
    "Angle": "⦜",
    "Elzlpargt": "⦠",
    "ElzLap": "⧊",
    "Elzdefas": "⧋",
    "LeftTriangleBar": "⧏",
    "NotLeftTriangleBar": "⧏",
    "RightTriangleBar": "⧐",
    "NotRightTriangleBar": "⧐",
    "RuleDelayed": "⧴",
    "Elxuplus": "⨄",
    "ElzThr": "⨅",
    "Elxsqcup": "⨆",
    "ElzInf": "⨇",
    "ElzSup": "⨈",
    "ElzCint": "⨍",
    "clockoint": "⨏",
    "sqrint": "⨖",
    "ElzTimes": "⨯",
    "amalg": "⨿",
    "ElzAnd": "⩓",
    "ElzOr": "⩔",
    "ElOr": "⩖",
    "Elzminhat": "⩟",
    "Equal": "⩵",
    "nleqslant": "⩽",
    "geqslant": "⩾",
    "ngeqslant": "⩾",
    "lessapprox": "⪅",
    "gtrapprox": "⪆",
    "lneq": "⪇",
    "gneq": "⪈",
    "lnapprox": "⪉",
    "gnapprox": "⪊",
    "lesseqqgtr": "⪋",
    "gtreqqless": "⪌",
    "eqslantless": "⪕",
    "eqslantgtr": "⪖",
    "NestedLessLess": "⪡",
    "NotNestedLessLess": "⪡",
    "NestedGreaterGreater": "⪢",
    "NotNestedGreaterGreater": "⪢",
    "precneqq": "⪵",
    "succneqq": "⪶",
    "precnapprox": "⪹",
    "succnapprox": "⪺",
    "subseteqq": "⫅",
    "nsubseteqq": "⫅",
    "supseteqq": "⫆",
    "subsetneqq": "⫋",
    "supsetneqq": "⫌",
    "Elztdcol": "⫶",
    "openbracketleft": "〚",
    "openbracketright": "〛",
    checkmark: "✓",
    maltese: "✠",
};
function isCharacterUnicode(x) {
    return exports.characterUnicodeChart.hasOwnProperty(x);
}
exports.isCharacterUnicode = isCharacterUnicode;
exports.characterUnicode = function (name) { return isCharacterUnicode(name) ? exports.characterUnicodeChart[name] : undefined; };
//# sourceMappingURL=symbols.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.barredLUnicodeChart = {
    l: "ł",
    L: "Ł"
};
exports.barredLUnicode = function (name) { return exports.barredLUnicodeChart[name]; };
//# sourceMappingURL=barred-letter.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.slashed_o = "ø";
exports.slashed_O = "Ø";
exports.slashedOUnicodeChart = {
    "o": exports.slashed_o,
    "O": exports.slashed_O
};
exports.slashedOUnicode = function (char) { return exports.slashedOUnicodeChart[char]; };
//# sourceMappingURL=slashed.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.cyrillicUnicodeChart = {
    "CYRF": "Ф",
    "CYRII": "І",
    "CYROMEGA": "Ѡ",
    "CYRG": "Г",
    "cyrkvcrs": "ҝ",
    "cyryo": "ё",
    "CYRH": "Х",
    "CYRZHDSC": "Җ",
    "cyrphk": "ҧ",
    "CYRTDSC": "Ҭ",
    "CYRI": "И",
    "cyryi": "ї",
    "CYRDZHE": "Џ",
    "cyriote": "ѥ",
    "CYRK": "К",
    "CYRSHHA": "Һ",
    "CYRL": "Л",
    "CYRM": "М",
    "CYRCHLDSC": "Ӌ",
    "CYRNJE": "Њ",
    "CYRYAT": "Ѣ",
    "CYRA": "А",
    "CYRB": "Б",
    "cyrchrdsc": "ҷ",
    "cyrschwa": "ә",
    "CYRDZE": "Ѕ",
    "CYRIE": "Є",
    "CYRC": "Ц",
    "CYRZH": "Ж",
    "CYRD": "Д",
    "CYRABHCHDSC": "Ҿ",
    "CYRFITA": "Ѳ",
    "CYRE": "Е",
    "CYRABHHA": "Ҩ",
    "cyrya": "я",
    "cyrdzhe": "џ",
    "CYRIOTLYUS": "Ѩ",
    "cyrsemisftsn": "ҍ",
    "CYRV": "В",
    "cyrishrt": "й",
    "cyrdje": "ђ",
    "cyrchldsc": "ӌ",
    "CYRY": "Ү",
    "cyrndsc": "ң",
    "CYRZ": "З",
    "CYRKHCRS": "Ҟ",
    "CYRNG": "Ҥ",
    "CYRCHRDSC": "Ҷ",
    "CYRYHCRS": "Ұ",
    "CYRSHCH": "Щ",
    "CYRUSHRT": "Ў",
    "cyryu": "ю",
    "cyrksi": "ѯ",
    "CYRN": "Н",
    "CYRO": "О",
    "CYRBYUS": "Ѫ",
    "CYRP": "П",
    "CYRZDSC": "Ҙ",
    "CYRAE": "Ӕ",
    "CYRR": "Р",
    "CYRS": "С",
    "CYRT": "Т",
    "CYRABHCH": "Ҽ",
    "cyruk": "ѹ",
    "CYRU": "У",
    "cyrii": "і",
    "CYRSEMISFTSN": "Ҍ",
    "cyrghcrs": "ғ",
    "CYRISHRT": "Й",
    "cyromegatitlo": "ѽ",
    "cyrkbeak": "ҡ",
    "cyrie": "є",
    "cyrzdsc": "ҙ",
    "CYRNDSC": "Ң",
    "CYRGUP": "Ґ",
    "cyrshch": "щ",
    "CYRKHK": "Ӄ",
    "cyrzh": "ж",
    "CYRJE": "Ј",
    "cyrthousands": "҂",
    "cyrabhch": "ҽ",
    "textnumero": "№",
    "cyrng": "ҥ",
    "CYRPSI": "Ѱ",
    "CYRTETSE": "Ҵ",
    "CYRIOTBYUS": "Ѭ",
    "cyrnje": "њ",
    "CYRIOTE": "Ѥ",
    "cyrdze": "ѕ",
    "cyrae": "ӕ",
    "CYRHRDSN": "Ъ",
    "CYRKOPPA": "Ҁ",
    "CYRRTICK": "Ҏ",
    "CYRSCHWA": "Ә",
    "cyrtdsc": "ҭ",
    "CYRGHK": "Ҕ",
    "cyrabhha": "ҩ",
    "cyrshha": "һ",
    "CYRSH": "Ш",
    "cyru": "у",
    "cyrkhcrs": "ҟ",
    "cyrt": "т",
    "CYRERY": "Ы",
    "cyrs": "с",
    "cyrr": "р",
    "CYROT": "Ѿ",
    "cyrlyus": "ѧ",
    "CYRNHK": "Ӈ",
    "CYRSFTSN": "Ь",
    "cyrghk": "ҕ",
    "cyrp": "п",
    "cyrabhdze": "ӡ",
    "cyro": "о",
    "CYRTSHE": "Ћ",
    "cyrn": "н",
    "CYRSDSC": "Ҫ",
    "cyryhcrs": "ұ",
    "cyrpsi": "ѱ",
    "cyrz": "з",
    "cyry": "ү",
    "cyrje": "ј",
    "cyrv": "в",
    "cyrchvcrs": "ҹ",
    "cyrkhk": "ӄ",
    "cyre": "е",
    "cyromega": "ѡ",
    "cyrd": "д",
    "cyrc": "ц",
    "cyrb": "б",
    "CYROTLD": "Ө",
    "cyrgup": "ґ",
    "CYRLJE": "Љ",
    "cyra": "а",
    "CYROMEGATITLO": "Ѽ",
    "CYRGHCRS": "Ғ",
    "CYRCHVCRS": "Ҹ",
    "cyrm": "м",
    "cyrl": "л",
    "cyrsh": "ш",
    "cyrk": "к",
    "cyri": "и",
    "cyrh": "х",
    "CYRHDSC": "Ҳ",
    "CYRIZH": "Ѵ",
    "CYRABHDZE": "Ӡ",
    "cyrkdsc": "қ",
    "cyrg": "г",
    "CYRCH": "Ч",
    "cyrf": "ф",
    "CYRYI": "Ї",
    "cyrmillions": "\u0489",
    "CYRKSI": "Ѯ",
    "CYROMEGARND": "Ѻ",
    "cyrot": "ѿ",
    "cyrtetse": "ҵ",
    "cyrhdsc": "ҳ",
    "cyrushrt": "ў",
    "cyriotlyus": "ѩ",
    "CYRYA": "Я",
    "cyrlje": "љ",
    "cyrotld": "ө",
    "CYRKDSC": "Қ",
    "cyrhrdsn": "ъ",
    "cyrrtick": "ҏ",
    "cyrkoppa": "ҁ",
    "CYRDJE": "Ђ",
    "cyriotbyus": "ѭ",
    "cyrhundredthousands": "\u0488",
    "CYRpalochka": "Ӏ",
    "CYRKVCRS": "Ҝ",
    "cyromegarnd": "ѻ",
    "cyrsftsn": "ь",
    "cyrabhchdsc": "ҿ",
    "cyrzhdsc": "җ",
    "cyrerev": "э",
    "CYRLYUS": "Ѧ",
    "CYRKBEAK": "Ҡ",
    "cyrery": "ы",
    "CYREREV": "Э",
    "cyrnhk": "ӈ",
    "cyrsdsc": "ҫ",
    "cyrch": "ч",
    "cyrtshe": "ћ",
    "CYRPHK": "Ҧ",
    "CYRYO": "Ё",
    "CYRYU": "Ю",
    "CYRUK": "Ѹ",
};
exports.cyrillicUnicode = function (name) { return exports.cyrillicUnicodeChart[name]; };
//# sourceMappingURL=cyrillic.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.specialCharacters = {
    "i": "ı",
    "j": "ȷ",
    "oe": "œ",
    "OE": "Œ",
    "ae": "æ",
    "AE": "Æ",
    "aa": "å",
    "AA": "Å",
    "o": "ø",
    "O": "Ø",
    "ss": "ß",
    "l": "ł",
    "L": "Ł"
};
function isSpecialCharacter(x) {
    return exports.specialCharacters.hasOwnProperty(x);
}
exports.isSpecialCharacter = isSpecialCharacter;
exports.specialCharacter = function (name) { return isSpecialCharacter(name) ? exports.specialCharacters[name] : undefined; };
//# sourceMappingURL=specialchars.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(30);
var index_2 = __webpack_require__(43);
var cyrillic_1 = __webpack_require__(52);
var dingbats_1 = __webpack_require__(53);
var elsevier_1 = __webpack_require__(54);
function expand1argsCommand(name, arg) {
    switch (name) {
        case "cyrchar":
            var c = cyrillic_1.translateCharToCyrillic(arg);
            if (!!c)
                return c;
            break;
        case "ding":
        case "dingbat":
            var d = dingbats_1.translateCharToDingbat(arg);
            if (!!d)
                return d;
            break;
        case "ElsevierGlyph":
        case "elsevierglyph":
        case "elsevier":
        case "Elsevier":
            var e = elsevier_1.translateCharToElsevier(arg);
            if (!!e)
                return e;
            break;
        default:
            for (var _i = 0, _a = [
                index_1.diacriticUnicode,
                index_2.formattingUnicode
            ]; _i < _a.length; _i++) {
                var fn = _a[_i];
                var result = fn(name, arg);
                if (!!result)
                    return result;
            }
    }
    throw new Error("No implementation found to expand \\" + name + " with argument {" + arg + "}");
}
exports.expand1argsCommand = expand1argsCommand;
//# sourceMappingURL=index.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mathring_1 = __webpack_require__(31);
var acute_1 = __webpack_require__(32);
var grave_1 = __webpack_require__(33);
var circumflex_1 = __webpack_require__(34);
var tilde_1 = __webpack_require__(35);
var dieresis_1 = __webpack_require__(36);
var cedilla_1 = __webpack_require__(37);
var caron_1 = __webpack_require__(38);
var util_1 = __webpack_require__(1);
var ogonek_1 = __webpack_require__(39);
var tie_letters_1 = __webpack_require__(40);
var vectorArrow_1 = __webpack_require__(41);
var longHungarianUmlaut_1 = __webpack_require__(42);
exports.barUnderLetter = util_1.simpleSuffix("\u0331");
exports.dotUnderLetter = util_1.simpleSuffix("\u0323");
exports.breve = util_1.simpleSuffix("\u0306");
exports.macrron = util_1.simpleSuffix("\u0304");
exports.dotOverLetter = util_1.simpleSuffix("\u0307");
exports.modifiersTextModeUnicodeChart = {
    "`": grave_1.graveAccent,
    "'": acute_1.acuteAccent,
    "^": circumflex_1.circumflex,
    "~": tilde_1.tilde,
    "=": exports.macrron,
    ".": exports.dotOverLetter,
    '"': dieresis_1.dieresis,
    "H": longHungarianUmlaut_1.longHungarianUmlaut,
    "c": cedilla_1.cedilla,
    "k": ogonek_1.ogonek,
    "b": exports.barUnderLetter,
    "d": exports.dotUnderLetter,
    "r": mathring_1.ringOverLetter,
    "u": exports.breve,
    "v": caron_1.caron,
    "t": tie_letters_1.tieLetters,
};
exports.modifiersMathModeUnicodeChart = {
    "check": caron_1.caron,
    "acute": acute_1.acuteAccent,
    "grave": acute_1.acuteAccent,
    "breve": exports.breve,
    "vec": vectorArrow_1.vectorArrow,
    "mathring": mathring_1.ringOverLetter,
};
exports.diacriticUnicode = function (str, arg) {
    var fun = exports.modifiersTextModeUnicodeChart[str];
    if (!fun)
        fun = exports.modifiersMathModeUnicodeChart[str];
    return fun && fun(arg);
};
//# sourceMappingURL=index.js.map

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var command_expander_1 = __webpack_require__(0);
exports.ringOverLetter = command_expander_1.lookupOrAppend({
    a: "å",
    A: "Å",
    y: "ẙ"
}, "\u030A");
//# sourceMappingURL=mathring.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var command_expander_1 = __webpack_require__(0);
exports.acuteAccent = command_expander_1.lookupOrAppend({
    e: "é",
    y: "ý",
    u: "ú",
    i: "í",
    o: "ó",
    a: "á",
    E: "É",
    Y: "Ý",
    U: "Ú",
    I: "Í",
    O: "Ó",
    A: "Á",
    cyrk: "ќ",
    cyrg: "ѓ",
    CYRK: "Ќ",
    CYRG: "Ѓ",
}, "\u0301");
//# sourceMappingURL=acute.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var command_expander_1 = __webpack_require__(0);
exports.graveAccent = command_expander_1.lookupOrAppend({
    e: "è",
    u: "ù",
    i: "ì",
    o: "ò",
    a: "à",
    E: "È",
    U: "Ù",
    I: "Ì",
    O: "Ò",
    A: "À"
}, "\u0300");
//# sourceMappingURL=grave.js.map

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var command_expander_1 = __webpack_require__(0);
exports.circumflex = command_expander_1.lookupOrAppend({
    e: "ê",
    u: "û",
    i: "î",
    o: "ô",
    a: "â",
    E: "Ê",
    U: "Û",
    I: "Î",
    O: "Ô",
    A: "Â"
}, "\u0302");
//# sourceMappingURL=circumflex.js.map

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var command_expander_1 = __webpack_require__(0);
exports.tilde = command_expander_1.lookupOrAppend({
    o: "õ",
    a: "ã",
    n: "ñ",
    O: "Õ",
    A: "Ã",
    N: "Ñ"
}, "\u0303");
//# sourceMappingURL=tilde.js.map

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var command_expander_1 = __webpack_require__(0);
exports.dieresis = command_expander_1.lookupOrAppend({
    e: "ë",
    y: "ÿ",
    u: "ü",
    i: "ï",
    o: "ö",
    a: "ä",
    E: "Ë",
    Y: "Ÿ",
    U: "Ü",
    I: "Ï",
    O: "Ö",
    A: "Ä"
}, "\u0308");
//# sourceMappingURL=dieresis.js.map

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var command_expander_1 = __webpack_require__(0);
exports.cedilla = command_expander_1.lookupOrAppend({
    c: "ç"
}, "\u0327");
//# sourceMappingURL=cedilla.js.map

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var command_expander_1 = __webpack_require__(0);
exports.caron = command_expander_1.lookupOrAppend({
    s: "š"
}, "\u030C");
//# sourceMappingURL=caron.js.map

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(1);
exports.ogonek = util_1.simpleSuffix("\u0328");
//# sourceMappingURL=ogonek.js.map

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function tieLetters(chars) {
    return tie2Letters(chars.charAt(0), chars.substring(1));
}
exports.tieLetters = tieLetters;
function tie2Letters(a, b) {
    return a + "͡" + b;
}
exports.tie2Letters = tie2Letters;
function isTieLetters(cmdName) {
    return cmdName === "t";
}
exports.isTieLetters = isTieLetters;
//# sourceMappingURL=tie-letters.js.map

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var command_expander_1 = __webpack_require__(0);
exports.vectorArrow = command_expander_1.lookupOrAppend({}, "\u20D7");
//# sourceMappingURL=vectorArrow.js.map

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var command_expander_1 = __webpack_require__(0);
exports.longHungarianUmlaut = command_expander_1.lookupOrAppend({
    o: "ő",
    u: "ű",
    O: "Ő",
    U: "Ű",
}, "\u030B");
//# sourceMappingURL=longHungarianUmlaut.js.map

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var blackboard_1 = __webpack_require__(44);
var boldfont_1 = __webpack_require__(45);
var fraktur_1 = __webpack_require__(46);
var italic_1 = __webpack_require__(47);
var monospace_1 = __webpack_require__(48);
var textcal_1 = __webpack_require__(49);
var formatting_1 = __webpack_require__(10);
var subscript_1 = __webpack_require__(50);
var superscript_1 = __webpack_require__(11);
var mono_1 = __webpack_require__(51);
exports.formattingUnicode = function (cmdName, arg) {
    var fn = undefined;
    if (formatting_1.isBbCmd(cmdName))
        fn = blackboard_1.translateCharToBlackboard;
    else if (formatting_1.isBfCmd(cmdName))
        fn = boldfont_1.translateCharToBold;
    else if (formatting_1.isFrakCmd(cmdName))
        fn = fraktur_1.translateCharToFraktur;
    else if (formatting_1.isItCmd(cmdName))
        fn = italic_1.translateCharToItalic;
    else if (formatting_1.isTtCmd(cmdName))
        fn = monospace_1.translateCharToMonospace;
    else if (formatting_1.isCalCmd(cmdName))
        fn = textcal_1.translateCharToCalligraphic;
    else if (formatting_1.isSubCmd(cmdName))
        fn = subscript_1.translateCharToSubscript;
    else if (formatting_1.isSupCmd(cmdName))
        fn = superscript_1.translateCharToSuperscript;
    else if (formatting_1.isMonoCmd(cmdName))
        fn = mono_1.translateCharToMono;
    if (!!fn) {
        var fun_1 = fn;
        return arg.split("").map(function (char) { return (fun_1(char) || char); }).join("");
    }
    else
        return undefined;
};
//# sourceMappingURL=index.js.map

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.blackboardCharacters = {
    "A": "𝔸",
    "B": "𝔹",
    "C": "ℂ",
    "D": "𝔻",
    "E": "𝔼",
    "F": "𝔽",
    "G": "𝔾",
    "H": "ℍ",
    "I": "𝕀",
    "J": "𝕁",
    "K": "𝕂",
    "L": "𝕃",
    "M": "𝕄",
    "N": "ℕ",
    "O": "𝕆",
    "P": "ℙ",
    "Q": "ℚ",
    "R": "ℝ",
    "S": "𝕊",
    "T": "𝕋",
    "U": "𝕌",
    "V": "𝕍",
    "W": "𝕎",
    "X": "𝕏",
    "Y": "𝕐",
    "Z": "ℤ",
    "a": "𝕒",
    "b": "𝕓",
    "c": "𝕔",
    "d": "𝕕",
    "e": "𝕖",
    "f": "𝕗",
    "g": "𝕘",
    "h": "𝕙",
    "i": "𝕚",
    "j": "𝕛",
    "k": "𝕜",
    "l": "𝕝",
    "m": "𝕞",
    "n": "𝕟",
    "o": "𝕠",
    "p": "𝕡",
    "q": "𝕢",
    "r": "𝕣",
    "s": "𝕤",
    "t": "𝕥",
    "u": "𝕦",
    "v": "𝕧",
    "w": "𝕨",
    "x": "𝕩",
    "y": "𝕪",
    "z": "𝕫",
    "0": "𝟘",
    "1": "𝟙",
    "2": "𝟚",
    "3": "𝟛",
    "4": "𝟜",
    "5": "𝟝",
    "6": "𝟞",
    "7": "𝟟",
    "8": "𝟠",
    "9": "𝟡"
};
function isBlackboardCharacter(x) {
    return exports.blackboardCharacters.hasOwnProperty(x);
}
exports.isBlackboardCharacter = isBlackboardCharacter;
exports.translateCharToBlackboard = function (char) { return isBlackboardCharacter(char) ? exports.blackboardCharacters[char] : undefined; };
//# sourceMappingURL=blackboard.js.map

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.boldCharacters = {
    "A": "𝐀",
    "B": "𝐁",
    "C": "𝐂",
    "D": "𝐃",
    "E": "𝐄",
    "F": "𝐅",
    "G": "𝐆",
    "H": "𝐇",
    "I": "𝐈",
    "J": "𝐉",
    "K": "𝐊",
    "L": "𝐋",
    "M": "𝐌",
    "N": "𝐍",
    "O": "𝐎",
    "P": "𝐏",
    "Q": "𝐐",
    "R": "𝐑",
    "S": "𝐒",
    "T": "𝐓",
    "U": "𝐔",
    "V": "𝐕",
    "W": "𝐖",
    "X": "𝐗",
    "Y": "𝐘",
    "Z": "𝐙",
    "a": "𝐚",
    "b": "𝐛",
    "c": "𝐜",
    "d": "𝐝",
    "e": "𝐞",
    "f": "𝐟",
    "g": "𝐠",
    "h": "𝐡",
    "i": "𝐢",
    "j": "𝐣",
    "k": "𝐤",
    "l": "𝐥",
    "m": "𝐦",
    "n": "𝐧",
    "o": "𝐨",
    "p": "𝐩",
    "q": "𝐪",
    "r": "𝐫",
    "s": "𝐬",
    "t": "𝐭",
    "u": "𝐮",
    "v": "𝐯",
    "w": "𝐰",
    "x": "𝐱",
    "y": "𝐲",
    "z": "𝐳",
    "Α": "𝚨",
    "Β": "𝚩",
    "Γ": "𝚪",
    "Δ": "𝚫",
    "Ε": "𝚬",
    "Ζ": "𝚭",
    "Η": "𝚮",
    "Θ": "𝚯",
    "Ι": "𝚰",
    "Κ": "𝚱",
    "Λ": "𝚲",
    "Μ": "𝚳",
    "Ν": "𝚴",
    "Ξ": "𝚵",
    "Ο": "𝚶",
    "Π": "𝚷",
    "Ρ": "𝚸",
    "ϴ": "𝚹",
    "Σ": "𝚺",
    "Τ": "𝚻",
    "Υ": "𝚼",
    "Φ": "𝚽",
    "Χ": "𝚾",
    "Ψ": "𝚿",
    "Ω": "𝛀",
    "∇": "𝛁",
    "α": "𝛂",
    "β": "𝛃",
    "γ": "𝛄",
    "δ": "𝛅",
    "ε": "𝛆",
    "ζ": "𝛇",
    "η": "𝛈",
    "θ": "𝛉",
    "ι": "𝛊",
    "κ": "𝛋",
    "λ": "𝛌",
    "μ": "𝛍",
    "ν": "𝛎",
    "ξ": "𝛏",
    "ο": "𝛐",
    "π": "𝛑",
    "ρ": "𝛒",
    "ς": "𝛓",
    "σ": "𝛔",
    "τ": "𝛕",
    "υ": "𝛖",
    "φ": "𝛗",
    "χ": "𝛘",
    "ψ": "𝛙",
    "ω": "𝛚",
    "∂": "𝛛",
    "ϵ": "𝛜",
    "ϑ": "𝛝",
    "ϰ": "𝛞",
    "ϕ": "𝛟",
    "ϱ": "𝛠",
    "ϖ": "𝛡",
    "0": "𝟎",
    "1": "𝟏",
    "2": "𝟐",
    "3": "𝟑",
    "4": "𝟒",
    "5": "𝟓",
    "6": "𝟔",
    "7": "𝟕",
    "8": "𝟖",
    "9": "𝟗"
};
function isBlackboardCharacter(x) {
    return exports.boldCharacters.hasOwnProperty(x);
}
exports.isBlackboardCharacter = isBlackboardCharacter;
exports.translateCharToBold = function (char) { return isBlackboardCharacter(char) ? exports.boldCharacters[char] : undefined; };
//# sourceMappingURL=boldfont.js.map

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.frakturCharacters = {
    "A": "𝔄",
    "B": "𝔅",
    "C": "ℭ",
    "D": "𝔇",
    "E": "𝔈",
    "F": "𝔉",
    "G": "𝔊",
    "H": "ℌ",
    "I": "ℑ",
    "J": "𝔍",
    "K": "𝔎",
    "L": "𝔏",
    "M": "𝔐",
    "N": "𝔑",
    "O": "𝔒",
    "P": "𝔓",
    "Q": "𝔔",
    "R": "ℜ",
    "S": "𝔖",
    "T": "𝔗",
    "U": "𝔘",
    "V": "𝔙",
    "W": "𝔚",
    "X": "𝔛",
    "Y": "𝔜",
    "Z": "ℨ",
    "a": "𝔞",
    "b": "𝔟",
    "c": "𝔠",
    "d": "𝔡",
    "e": "𝔢",
    "f": "𝔣",
    "g": "𝔤",
    "h": "𝔥",
    "i": "𝔦",
    "j": "𝔧",
    "k": "𝔨",
    "l": "𝔩",
    "m": "𝔪",
    "n": "𝔫",
    "o": "𝔬",
    "p": "𝔭",
    "q": "𝔮",
    "r": "𝔯",
    "s": "𝔰",
    "t": "𝔱",
    "u": "𝔲",
    "v": "𝔳",
    "w": "𝔴",
    "x": "𝔵",
    "y": "𝔶",
    "z": "𝔷"
};
function isFrakturCharacter(x) {
    return exports.frakturCharacters.hasOwnProperty(x);
}
exports.isFrakturCharacter = isFrakturCharacter;
exports.translateCharToFraktur = function (char) { return isFrakturCharacter(char) ? exports.frakturCharacters[char] : undefined; };
//# sourceMappingURL=fraktur.js.map

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.italicCharacters = {
    "A": "𝐴",
    "B": "𝐵",
    "C": "𝐶",
    "D": "𝐷",
    "E": "𝐸",
    "F": "𝐹",
    "G": "𝐺",
    "H": "𝐻",
    "I": "𝐼",
    "J": "𝐽",
    "K": "𝐾",
    "L": "𝐿",
    "M": "𝑀",
    "N": "𝑁",
    "O": "𝑂",
    "P": "𝑃",
    "Q": "𝑄",
    "R": "𝑅",
    "S": "𝑆",
    "T": "𝑇",
    "U": "𝑈",
    "V": "𝑉",
    "W": "𝑊",
    "X": "𝑋",
    "Y": "𝑌",
    "Z": "𝑍",
    "a": "𝑎",
    "b": "𝑏",
    "c": "𝑐",
    "d": "𝑑",
    "e": "𝑒",
    "f": "𝑓",
    "g": "𝑔",
    "h": "ℎ",
    "i": "𝑖",
    "j": "𝑗",
    "k": "𝑘",
    "l": "𝑙",
    "m": "𝑚",
    "n": "𝑛",
    "o": "𝑜",
    "p": "𝑝",
    "q": "𝑞",
    "r": "𝑟",
    "s": "𝑠",
    "t": "𝑡",
    "u": "𝑢",
    "v": "𝑣",
    "w": "𝑤",
    "x": "𝑥",
    "y": "𝑦",
    "z": "𝑧",
    "Α": "𝛢",
    "Β": "𝛣",
    "Γ": "𝛤",
    "Δ": "𝛥",
    "Ε": "𝛦",
    "Ζ": "𝛧",
    "Η": "𝛨",
    "Θ": "𝛩",
    "Ι": "𝛪",
    "Κ": "𝛫",
    "Λ": "𝛬",
    "Μ": "𝛭",
    "Ν": "𝛮",
    "Ξ": "𝛯",
    "Ο": "𝛰",
    "Π": "𝛱",
    "Ρ": "𝛲",
    "ϴ": "𝛳",
    "Σ": "𝛴",
    "Τ": "𝛵",
    "Υ": "𝛶",
    "Φ": "𝛷",
    "Χ": "𝛸",
    "Ψ": "𝛹",
    "Ω": "𝛺",
    "∇": "𝛻",
    "α": "𝛼",
    "β": "𝛽",
    "γ": "𝛾",
    "δ": "𝛿",
    "ε": "𝜀",
    "ζ": "𝜁",
    "η": "𝜂",
    "θ": "𝜃",
    "ι": "𝜄",
    "κ": "𝜅",
    "λ": "𝜆",
    "μ": "𝜇",
    "ν": "𝜈",
    "ξ": "𝜉",
    "ο": "𝜊",
    "π": "𝜋",
    "ρ": "𝜌",
    "ς": "𝜍",
    "σ": "𝜎",
    "τ": "𝜏",
    "υ": "𝜐",
    "φ": "𝜑",
    "χ": "𝜒",
    "ψ": "𝜓",
    "ω": "𝜔",
    "∂": "𝜕",
    "ϵ": "𝜖",
    "ϑ": "𝜗",
    "ϰ": "𝜘",
    "ϕ": "𝜙",
    "ϱ": "𝜚",
    "ϖ": "𝜛"
};
function isItalicCharacter(x) {
    return exports.italicCharacters.hasOwnProperty(x);
}
exports.isItalicCharacter = isItalicCharacter;
exports.translateCharToItalic = function (char) { return isItalicCharacter(char) ? exports.italicCharacters[char] : undefined; };
//# sourceMappingURL=italic.js.map

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.monospaceCharacters = {
    "A": "𝙰",
    "B": "𝙱",
    "C": "𝙲",
    "D": "𝙳",
    "E": "𝙴",
    "F": "𝙵",
    "G": "𝙶",
    "H": "𝙷",
    "I": "𝙸",
    "J": "𝙹",
    "K": "𝙺",
    "L": "𝙻",
    "M": "𝙼",
    "N": "𝙽",
    "O": "𝙾",
    "P": "𝙿",
    "Q": "𝚀",
    "R": "𝚁",
    "S": "𝚂",
    "T": "𝚃",
    "U": "𝚄",
    "V": "𝚅",
    "W": "𝚆",
    "X": "𝚇",
    "Y": "𝚈",
    "Z": "𝚉",
    "a": "𝚊",
    "b": "𝚋",
    "c": "𝚌",
    "d": "𝚍",
    "e": "𝚎",
    "f": "𝚏",
    "g": "𝚐",
    "h": "𝚑",
    "i": "𝚒",
    "j": "𝚓",
    "k": "𝚔",
    "l": "𝚕",
    "m": "𝚖",
    "n": "𝚗",
    "o": "𝚘",
    "p": "𝚙",
    "q": "𝚚",
    "r": "𝚛",
    "s": "𝚜",
    "t": "𝚝",
    "u": "𝚞",
    "v": "𝚟",
    "w": "𝚠",
    "x": "𝚡",
    "y": "𝚢",
    "z": "𝚣",
    "0": "𝟶",
    "1": "𝟷",
    "2": "𝟸",
    "3": "𝟹",
    "4": "𝟺",
    "5": "𝟻",
    "6": "𝟼",
    "7": "𝟽",
    "8": "𝟾",
    "9": "𝟿"
};
function isMonospaceCharacter(x) {
    return exports.monospaceCharacters.hasOwnProperty(x);
}
exports.isMonospaceCharacter = isMonospaceCharacter;
exports.translateCharToMonospace = function (char) { return isMonospaceCharacter(char) ? exports.monospaceCharacters[char] : undefined; };
//# sourceMappingURL=monospace.js.map

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.calligraphicLetters = {
    "A": "𝓐",
    "B": "𝓑",
    "C": "𝓒",
    "D": "𝓓",
    "E": "𝓔",
    "F": "𝓕",
    "G": "𝓖",
    "H": "𝓗",
    "I": "𝓘",
    "J": "𝓙",
    "K": "𝓚",
    "L": "𝓛",
    "M": "𝓜",
    "N": "𝓝",
    "O": "𝓞",
    "P": "𝓟",
    "Q": "𝓠",
    "R": "𝓡",
    "S": "𝓢",
    "T": "𝓣",
    "U": "𝓤",
    "V": "𝓥",
    "W": "𝓦",
    "X": "𝓧",
    "Y": "𝓨",
    "Z": "𝓩",
    "a": "𝓪",
    "b": "𝓫",
    "c": "𝓬",
    "d": "𝓭",
    "e": "𝓮",
    "f": "𝓯",
    "g": "𝓰",
    "h": "𝓱",
    "i": "𝓲",
    "j": "𝓳",
    "k": "𝓴",
    "l": "𝓵",
    "m": "𝓶",
    "n": "𝓷",
    "o": "𝓸",
    "p": "𝓹",
    "q": "𝓺",
    "r": "𝓻",
    "s": "𝓼",
    "t": "𝓽",
    "u": "𝓾",
    "v": "𝓿",
    "w": "𝔀",
    "x": "𝔁",
    "y": "𝔂",
    "z": "𝔃"
};
function isCalligraphicLetter(x) {
    return exports.calligraphicLetters.hasOwnProperty(x);
}
exports.isCalligraphicLetter = isCalligraphicLetter;
exports.translateCharToCalligraphic = function (char) { return isCalligraphicLetter(char) ? exports.calligraphicLetters[char] : undefined; };
//# sourceMappingURL=textcal.js.map

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriptCharacters = {
    "0": "₀",
    "1": "₁",
    "2": "₂",
    "3": "₃",
    "4": "₄",
    "5": "₅",
    "6": "₆",
    "7": "₇",
    "8": "₈",
    "9": "₉",
    "+": "₊",
    "-": "₋",
    "=": "₌",
    "(": "₍",
    ")": "₎",
    "a": "ₐ",
    "e": "ₑ",
    "h": "ₕ",
    "i": "ᵢ",
    "j": "ⱼ",
    k: "ₖ",
    l: "ₗ",
    m: "ₘ",
    n: "ₙ",
    "o": "ₒ",
    p: "ₚ",
    "r": "ᵣ",
    s: "ₛ",
    t: "ₜ",
    "u": "ᵤ",
    "v": "ᵥ",
    "x": "ₓ",
    "β": "ᵦ",
    "γ": "ᵧ",
    "ρ": "ᵨ",
    "φ": "ᵩ",
    "χ": "ᵪ"
};
function isSubscriptCharacter(x) {
    return exports.subscriptCharacters.hasOwnProperty(x);
}
exports.isSubscriptCharacter = isSubscriptCharacter;
exports.translateCharToSubscript = function (char) { return isSubscriptCharacter(char) ? exports.subscriptCharacters[char] : undefined; };
//# sourceMappingURL=subscript.js.map

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.monoCharacters = {
    "A": "𝙰",
    "B": "𝙱",
    "C": "𝙲",
    "D": "𝙳",
    "E": "𝙴",
    "F": "𝙵",
    "G": "𝙶",
    "H": "𝙷",
    "I": "𝙸",
    "J": "𝙹",
    "K": "𝙺",
    "L": "𝙻",
    "M": "𝙼",
    "N": "𝙽",
    "O": "𝙾",
    "P": "𝙿",
    "Q": "𝚀",
    "R": "𝚁",
    "S": "𝚂",
    "T": "𝚃",
    "U": "𝚄",
    "V": "𝚅",
    "W": "𝚆",
    "X": "𝚇",
    "Y": "𝚈",
    "Z": "𝚉",
    "a": "𝚊",
    "b": "𝚋",
    "c": "𝚌",
    "d": "𝚍",
    "e": "𝚎",
    "f": "𝚏",
    "g": "𝚐",
    "h": "𝚑",
    "i": "𝚒",
    "j": "𝚓",
    "k": "𝚔",
    "l": "𝚕",
    "m": "𝚖",
    "n": "𝚗",
    "o": "𝚘",
    "p": "𝚙",
    "q": "𝚚",
    "r": "𝚛",
    "s": "𝚜",
    "t": "𝚝",
    "u": "𝚞",
    "v": "𝚟",
    "w": "𝚠",
    "x": "𝚡",
    "y": "𝚢",
    "z": "𝚣",
    "0": "𝟶",
    "1": "𝟷",
    "2": "𝟸",
    "3": "𝟹",
    "4": "𝟺",
    "5": "𝟻",
    "6": "𝟼",
    "7": "𝟽",
    "8": "𝟾",
    "9": "𝟿",
};
function isMonoCharacter(x) {
    return exports.monoCharacters.hasOwnProperty(x);
}
exports.isMonoCharacter = isMonoCharacter;
exports.translateCharToMono = function (char) { return isMonoCharacter(char) ? exports.monoCharacters[char] : undefined; };
//# sourceMappingURL=mono.js.map

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.cyrillicCharacters = {
    "Ф": "Ф",
    "І": "І",
    "Ѡ": "Ѡ",
    "Г": "Г",
    "ҝ": "ҝ",
    "ё": "ё",
    "Х": "Х",
    "Җ": "Җ",
    "ҧ": "ҧ",
    "Ҭ": "Ҭ",
    "И": "И",
    "ї": "ї",
    "Џ": "Џ",
    "ѥ": "ѥ",
    "К": "К",
    "Һ": "Һ",
    "Л": "Л",
    "М": "М",
    "Ӌ": "Ӌ",
    "Њ": "Њ",
    "Ѣ": "Ѣ",
    "А": "А",
    "Б": "Б",
    "ҷ": "ҷ",
    "ә": "ә",
    "Ѕ": "Ѕ",
    "Є": "Є",
    "Ц": "Ц",
    "Ж": "Ж",
    "Д": "Д",
    "Ҿ": "Ҿ",
    "Ѳ": "Ѳ",
    "Е": "Е",
    "Ҩ": "Ҩ",
    "я": "я",
    "џ": "џ",
    "Ѩ": "Ѩ",
    "ҍ": "ҍ",
    "В": "В",
    "й": "й",
    "ђ": "ђ",
    "ӌ": "ӌ",
    "Ү": "Ү",
    "ң": "ң",
    "З": "З",
    "Ҟ": "Ҟ",
    "Ҥ": "Ҥ",
    "Ҷ": "Ҷ",
    "Ұ": "Ұ",
    "Щ": "Щ",
    "Ў": "Ў",
    "ю": "ю",
    "ѯ": "ѯ",
    "Н": "Н",
    "О": "О",
    "Ѫ": "Ѫ",
    "П": "П",
    "Ҙ": "Ҙ",
    "Ӕ": "Ӕ",
    "Р": "Р",
    "С": "С",
    "Т": "Т",
    "Ҽ": "Ҽ",
    "ѹ": "ѹ",
    "У": "У",
    "і": "і",
    "Ҍ": "Ҍ",
    "ғ": "ғ",
    "Й": "Й",
    "ѽ": "ѽ",
    "ҡ": "ҡ",
    "є": "є",
    "ҙ": "ҙ",
    "Ң": "Ң",
    "Ґ": "Ґ",
    "щ": "щ",
    "Ӄ": "Ӄ",
    "ж": "ж",
    "Ј": "Ј",
    "҂": "҂",
    "ҽ": "ҽ",
    "№": "№",
    "ҥ": "ҥ",
    "Ѱ": "Ѱ",
    "Ҵ": "Ҵ",
    "Ѭ": "Ѭ",
    "њ": "њ",
    "Ѥ": "Ѥ",
    "ѕ": "ѕ",
    "ӕ": "ӕ",
    "Ъ": "Ъ",
    "Ҁ": "Ҁ",
    "Ҏ": "Ҏ",
    "Ә": "Ә",
    "ҭ": "ҭ",
    "Ҕ": "Ҕ",
    "ҩ": "ҩ",
    "һ": "һ",
    "Ш": "Ш",
    "у": "у",
    "ҟ": "ҟ",
    "т": "т",
    "Ы": "Ы",
    "с": "с",
    "р": "р",
    "Ѿ": "Ѿ",
    "ѧ": "ѧ",
    "Ӈ": "Ӈ",
    "Ь": "Ь",
    "ҕ": "ҕ",
    "п": "п",
    "ӡ": "ӡ",
    "о": "о",
    "Ћ": "Ћ",
    "н": "н",
    "Ҫ": "Ҫ",
    "ұ": "ұ",
    "ѱ": "ѱ",
    "з": "з",
    "ү": "ү",
    "\u030F": "\u030F",
    "ј": "ј",
    "в": "в",
    "ҹ": "ҹ",
    "ӄ": "ӄ",
    "е": "е",
    "ѡ": "ѡ",
    "д": "д",
    "ц": "ц",
    "б": "б",
    "Ө": "Ө",
    "ґ": "ґ",
    "Љ": "Љ",
    "а": "а",
    "Ѽ": "Ѽ",
    "Ғ": "Ғ",
    "Ҹ": "Ҹ",
    "м": "м",
    "л": "л",
    "ш": "ш",
    "к": "к",
    "и": "и",
    "х": "х",
    "Ҳ": "Ҳ",
    "Ѵ": "Ѵ",
    "Ӡ": "Ӡ",
    "қ": "қ",
    "г": "г",
    "Ч": "Ч",
    "ф": "ф",
    "Ї": "Ї",
    "\u0489": "\u0489",
    "Ѯ": "Ѯ",
    "Ѻ": "Ѻ",
    "ѿ": "ѿ",
    "ҵ": "ҵ",
    "ҳ": "ҳ",
    "ў": "ў",
    "ѩ": "ѩ",
    "Я": "Я",
    "љ": "љ",
    "ө": "ө",
    "Қ": "Қ",
    "ъ": "ъ",
    "ҏ": "ҏ",
    "ҁ": "ҁ",
    "Ђ": "Ђ",
    "ѭ": "ѭ",
    "\u0488": "\u0488",
    "Ӏ": "Ӏ",
    "Ҝ": "Ҝ",
    "ѻ": "ѻ",
    "ь": "ь",
    "ҿ": "ҿ",
    "җ": "җ",
    "э": "э",
    "Ѧ": "Ѧ",
    "Ҡ": "Ҡ",
    "ы": "ы",
    "Э": "Э",
    "ӈ": "ӈ",
    "ҫ": "ҫ",
    "ч": "ч",
    "ћ": "ћ",
    "Ҧ": "Ҧ",
    "Ё": "Ё",
    "Ю": "Ю",
    "Ѹ": "Ѹ",
    "ќ": "ќ",
    "ѓ": "ѓ",
    "Ќ": "Ќ",
    "Ѓ": "Ѓ"
};
exports.isCyrillicCharacter = function (x) {
    return exports.cyrillicCharacters.hasOwnProperty(x);
};
exports.translateCharToCyrillic = function (char) {
    if (exports.isCyrillicCharacter(char))
        return exports.cyrillicCharacters[char];
    else
        return undefined;
};
//# sourceMappingURL=cyrillic.js.map

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.dingbatsUnicodeChart = {
    "33": "✁",
    "34": "✂",
    "35": "✃",
    "36": "✄",
    "37": "☎",
    "38": "✆",
    "39": "✇",
    "40": "✈",
    "41": "✉",
    "42": "☛",
    "43": "☞",
    "44": "✌",
    "45": "✍",
    "46": "✎",
    "47": "✏",
    "48": "✐",
    "49": "✑",
    "50": "✒",
    "51": "✓",
    "52": "✔",
    "53": "✕",
    "54": "✖",
    "55": "✗",
    "56": "✘",
    "57": "✙",
    "58": "✚",
    "59": "✛",
    "60": "✜",
    "61": "✝",
    "62": "✞",
    "63": "✟",
    "64": "✠",
    "65": "✡",
    "66": "✢",
    "67": "✣",
    "68": "✤",
    "69": "✥",
    "70": "✦",
    "71": "✧",
    "72": "★",
    "73": "✩",
    "74": "✪",
    "75": "✫",
    "76": "✬",
    "77": "✭",
    "78": "✮",
    "79": "✯",
    "80": "✰",
    "81": "✱",
    "82": "✲",
    "83": "✳",
    "84": "✴",
    "85": "✵",
    "86": "✶",
    "87": "✷",
    "88": "✸",
    "89": "✹",
    "90": "✺",
    "91": "✻",
    "92": "✼",
    "93": "✽",
    "94": "✾",
    "95": "✿",
    "96": "❀",
    "97": "❁",
    "98": "❂",
    "99": "❃",
    "100": "❄",
    "101": "❅",
    "102": "❆",
    "103": "❇",
    "104": "❈",
    "105": "❉",
    "106": "❊",
    "107": "❋",
    "108": "●",
    "109": "❍",
    "110": "■",
    "111": "❏",
    "112": "❐",
    "113": "❑",
    "114": "❒",
    "115": "▲",
    "116": "▼",
    "117": "◆",
    "118": "❖",
    "119": "◗",
    "120": "❘",
    "121": "❙",
    "122": "❚",
    "123": "❛",
    "124": "❜",
    "125": "❝",
    "126": "❞",
    "161": "❡",
    "162": "❢",
    "163": "❣",
    "164": "❤",
    "165": "❥",
    "166": "❦",
    "167": "❧",
    "168": "♣",
    "169": "♦",
    "170": "♥",
    "171": "♠",
    "172": "①",
    "173": "②",
    "174": "③",
    "175": "④",
    "176": "⑤",
    "177": "⑥",
    "178": "⑦",
    "179": "⑧",
    "180": "⑨",
    "181": "⑩",
    "182": "❶",
    "183": "❷",
    "184": "❸",
    "185": "❹",
    "186": "❺",
    "187": "❻",
    "188": "❼",
    "189": "❽",
    "190": "❾",
    "191": "❿",
    "192": "➀",
    "193": "➁",
    "194": "➂",
    "195": "➃",
    "196": "➄",
    "197": "➅",
    "198": "➆",
    "199": "➇",
    "200": "➈",
    "201": "➉",
    "202": "➊",
    "203": "➋",
    "204": "➌",
    "205": "➍",
    "206": "➎",
    "207": "➏",
    "208": "➐",
    "209": "➑",
    "210": "➒",
    "211": "➓",
    "212": "➔",
    "213": "→",
    "214": "↔",
    "215": "↕",
    "216": "➘",
    "217": "➙",
    "218": "➚",
    "219": "➛",
    "220": "➜",
    "221": "➝",
    "222": "➞",
    "223": "➟",
    "224": "➠",
    "225": "➡",
    "226": "➢",
    "227": "➣",
    "228": "➤",
    "229": "➥",
    "230": "➦",
    "231": "➧",
    "232": "➨",
    "233": "➩",
    "234": "➪",
    "235": "➫",
    "236": "➬",
    "237": "➭",
    "238": "➮",
    "239": "➯",
    "241": "➱",
    "242": "➲",
    "243": "➳",
    "244": "➴",
    "245": "➵",
    "246": "➶",
    "247": "➷",
    "248": "➸",
    "249": "➹",
    "250": "➺",
    "251": "➻",
    "252": "➼",
    "253": "➽",
    "254": "➾"
};
function isDingbatCharacter(x) {
    return exports.dingbatsUnicodeChart.hasOwnProperty(x);
}
exports.isDingbatCharacter = isDingbatCharacter;
exports.translateCharToDingbat = function (char) { return isDingbatCharacter(char) ? exports.dingbatsUnicodeChart[char] : undefined; };
//# sourceMappingURL=dingbats.js.map

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.elsevierGlyphsUnicodeChart = {
    "2129": "℩",
    "21B3": "↳",
    "2232": "∲",
    "2233": "∳",
    "2238": "∸",
    "2242": "≂",
    "225A": "≚",
    "225F": "≟",
    "2274": "≴",
    "2275": "≵",
    "22C0": "⋀",
    "22C1": "⋁",
    "E838": "⌽",
    "E381": "▱",
    "E212": "⤅",
    "E20C": "⤣",
    "E20D": "⤤",
    "E20B": "⤥",
    "E20A": "⤦",
    "E211": "⤧",
    "E20E": "⤨",
    "E20F": "⤩",
    "E210": "⤪",
    "E21C": "⤳",
    "E21D": "⤳",
    "E21A": "⤶",
    "E219": "⤷",
    "E214": "⥼",
    "E215": "⥽",
    "E291": "⦔",
    "E260": "⦵",
    "E61B": "⦶",
    "E372": "⧜",
    "E395": "⨐",
    "E25A": "⨥",
    "E25B": "⨪",
    "E25C": "⨭",
    "E25D": "⨮",
    "E25E": "⨴",
    "E25F": "⨵",
    "E259": "⨼",
    "E36E": "⩕",
    "E30D": "⫫",
    "300A": "《",
    "300B": "》",
    "3018": "〘",
    "3019": "〙",
};
function isElsevierGlyph(x) {
    return exports.elsevierGlyphsUnicodeChart.hasOwnProperty(x);
}
exports.isElsevierGlyph = isElsevierGlyph;
exports.translateCharToElsevier = function (char) { return isElsevierGlyph(char) ? exports.elsevierGlyphsUnicodeChart[char] : undefined; };
//# sourceMappingURL=elsevier.js.map

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.spaceCmds1arg = {
    kern: true,
    hskip: true,
    hspace: true,
    hphantom: true,
};
//# sourceMappingURL=space.js.map

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.diacriticsTextMode = {
    "`": true,
    "'": true,
    "^": true,
    "~": true,
    "=": true,
    ".": true,
    '"': true,
    "H": true,
    "c": true,
    "k": true,
    "b": true,
    "d": true,
    "r": true,
    "u": true,
    "v": true,
};
exports.diacriticsMathMode = {
    "hat": true,
    "widehat": true,
    "check": true,
    "tilde": true,
    "widetilde": true,
    "acute": true,
    "grave": true,
    "dot": true,
    "ddot": true,
    "breve": true,
    "bar": true,
    "vec": true,
    "mathring": true,
};
//# sourceMappingURL=diacritic.js.map

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var superscript_1 = __webpack_require__(11);
function determineSqrtSymbol(base) {
    var trimmd = base ? base.trim() : undefined;
    if (!trimmd)
        return "√";
    switch (trimmd) {
        case "2":
            return "√";
        case "3":
            return "∛";
        case "4":
            return "∜";
        default:
            var chars = [];
            for (var i = 0; i < trimmd.length; i++) {
                var char = superscript_1.translateCharToSuperscript(trimmd.charAt(i));
                if (!char)
                    throw new Error("Could not translate \"" + char + "\" to superscript");
                chars.push(char);
            }
            return chars.join("") + "√";
    }
}
function convertSqrtToUnicode(nucleus, base) {
    var sqrt = determineSqrtSymbol(base);
    var trimmedNucleus = nucleus.trim();
    if (trimmedNucleus === "") {
        return sqrt;
    }
    else {
        return sqrt + "(" + trimmedNucleus + ")";
    }
}
exports.convertSqrtToUnicode = convertSqrtToUnicode;
//# sourceMappingURL=sqrt.js.map

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var frac_1 = __webpack_require__(59);
var binom_1 = __webpack_require__(60);
function expand2argsCommand(name, arg1, arg2) {
    switch (name) {
        case "frac":
        case "nfrac":
        case "cfrac":
        case "xfrac":
        case "sfrac":
            return frac_1.convertFracToUnicode(arg1, arg2);
        case "binom":
            return binom_1.convertBinom(arg1, arg2);
    }
    throw new Error("No implementation found to expand \\" + name + " with arguments {" + arg1 + ", " + arg2);
}
exports.expand2argsCommand = expand2argsCommand;
//# sourceMappingURL=index.js.map

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(1);
var zeroWidthNonJoiner = "\u200C";
var regExpDigit = /^[0-9]*$/;
function convertFracToUnicode(n, d) {
    if (n === "1" && d === "2")
        return "½";
    if (n === "1" && d === "3")
        return "⅓";
    if (n === "1" && d === "4")
        return "¼";
    if (n === "1" && d === "5")
        return "⅕";
    if (n === "1" && d === "6")
        return "⅙";
    if (n === "1" && d === "8")
        return "⅛";
    if (n === "2" && d === "3")
        return "⅔";
    if (n === "2" && d === "5")
        return "⅖";
    if (n === "3" && d === "4")
        return "¾";
    if (n === "3" && d === "5")
        return "⅗";
    if (n === "3" && d === "8")
        return "⅜";
    if (n === "4" && d === "5")
        return "⅘";
    if (n === "5" && d === "6")
        return "⅚";
    if (n === "5" && d === "8")
        return "⅝";
    if (n === "7" && d === "8")
        return "⅞";
    if (regExpDigit.test(n) && regExpDigit.test(d)) {
        return zeroWidthNonJoiner + n + "⁄" + d + zeroWidthNonJoiner;
    }
    n = util_1.isSingleTerm.test(n) ? n : util_1.addParenthesis(n);
    d = util_1.isSingleTerm.test(d) ? d : util_1.addParenthesis(d);
    return "(" + n + " / " + d + ")";
}
exports.convertFracToUnicode = convertFracToUnicode;
//# sourceMappingURL=frac.js.map

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(1);
var isSingleTerm = /^.$|^[0-9]+$/;
function convertBinom(n, d) {
    n = isSingleTerm.test(n) ? n : util_1.addParenthesis(n);
    d = isSingleTerm.test(d) ? d : util_1.addParenthesis(d);
    return "(" + n + " \u00A6 " + d + ")";
}
exports.convertBinom = convertBinom;
//# sourceMappingURL=binom.js.map

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var frac_1 = __webpack_require__(62);
exports.twoArgsCommands = Object.assign({}, frac_1.fracCmds, {
    "binom": true
});
function is2argsCommand(name) {
    return exports.twoArgsCommands.hasOwnProperty(name);
}
exports.is2argsCommand = is2argsCommand;
//# sourceMappingURL=index.js.map

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fracCmds = {
    "frac": true,
    "nfrac": true,
    "cfrac": true,
    "xfrac": true,
    "sfrac": true,
};
function isFracCmd(x) {
    return exports.fracCmds.hasOwnProperty(x);
}
exports.isFracCmd = isFracCmd;
//# sourceMappingURL=frac.js.map

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function createKnownCommand(name) {
    return {
        name: name,
        optionalArguments: 0,
        argumentCount: 0
    };
}
exports.createKnownCommand = createKnownCommand;
//# sourceMappingURL=KnownCommand0Args.js.map

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function createKnownCommandWith1Arg(name) {
    return {
        name: name,
        optionalArguments: 0,
        argumentCount: 1
    };
}
exports.createKnownCommandWith1Arg = createKnownCommandWith1Arg;
//# sourceMappingURL=KnownCommand1Args.js.map

/***/ })
/******/ ]);
});