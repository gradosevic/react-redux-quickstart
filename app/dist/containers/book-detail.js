'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookDetail = function (_Component) {
    _inherits(BookDetail, _Component);

    function BookDetail() {
        _classCallCheck(this, BookDetail);

        return _possibleConstructorReturn(this, (BookDetail.__proto__ || Object.getPrototypeOf(BookDetail)).apply(this, arguments));
    }

    _createClass(BookDetail, [{
        key: 'render',
        value: function render() {
            if (!this.props.book) {
                return _react2.default.createElement(
                    'div',
                    null,
                    'Select a book to get started.'
                );
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h3',
                    null,
                    'Details for:'
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    'Title: ',
                    this.props.book.title
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    'Pages: ',
                    this.props.book.pages
                )
            );
        }
    }]);

    return BookDetail;
}(_react.Component);

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(BookDetail);