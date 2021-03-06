'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalFooter = function (_React$Component) {
  _inherits(ModalFooter, _React$Component);

  function ModalFooter() {
    _classCallCheck(this, ModalFooter);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  ModalFooter.getDefaultPrefix = function getDefaultPrefix() {
    return 'modal';
  };

  ModalFooter.prototype.render = function render() {
    var _props = this.props;
    var modalPrefix = _props.modalPrefix;
    var children = _props.children;
    var className = _props.className;

    var props = _objectWithoutProperties(_props, ['modalPrefix', 'children', 'className']);

    var prefix = modalPrefix || ModalFooter.getDefaultPrefix();

    return _react2.default.createElement(
      'div',
      _extends({}, props, { className: (0, _classnames2.default)(className, prefix + '-footer') }),
      children
    );
  };

  return ModalFooter;
}(_react2.default.Component);

ModalFooter.propTypes = {
  /**
   * A css class applied to the Component
   */
  modalPrefix: _react2.default.PropTypes.string
};

exports.default = ModalFooter;
module.exports = exports['default'];