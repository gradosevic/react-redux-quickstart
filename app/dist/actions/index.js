'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.selectBook = selectBook;

var _actions = require('./actions');

function selectBook(book) {
    // selectBook is an ActionCreator, it needs to return an action,
    // an object with a type property.
    return {
        type: _actions.Actions.BOOK_SELECTED,
        payload: book
    };
}