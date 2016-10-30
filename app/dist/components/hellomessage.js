'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _index = require('./../actions/index');

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HelloMessage = function (_Component) {
    _inherits(HelloMessage, _Component);

    function HelloMessage() {
        _classCallCheck(this, HelloMessage);

        return _possibleConstructorReturn(this, (HelloMessage.__proto__ || Object.getPrototypeOf(HelloMessage)).apply(this, arguments));
    }

    _createClass(HelloMessage, [{
        key: 'renderList',

        /*  render() {
              console.log('props',this.props);
              return <h1>Hello {this.props.message}!</h1>;
          }*/
        value: function renderList() {
            return this.props.books.map(function (book) {
                return _react2.default.createElement(
                    'li',
                    { key: book.title },
                    book.title
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'ul',
                null,
                this.renderList()
            );
        }
    }]);

    return HelloMessage;
}(_react.Component);

;

//export default HelloMessage;


function mapStateToProps(state) {
    console.log('mapping..', state);
    return {
        books: state.books
        //books: [{title:'hh'}]
    };
}

function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ selectBook: _index.selectBook }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HelloMessage);