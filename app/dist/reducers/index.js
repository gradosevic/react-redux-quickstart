'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reducer_books = require('./reducer_books');

var _reducer_books2 = _interopRequireDefault(_reducer_books);

var _reducer_active_book = require('./reducer_active_book');

var _reducer_active_book2 = _interopRequireDefault(_reducer_active_book);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
    books: _reducer_books2.default,
    activeBook: _reducer_active_book2.default
});

exports.default = rootReducer;