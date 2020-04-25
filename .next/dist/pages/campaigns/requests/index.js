'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../../Components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../../../routes');

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require('../../../Components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\fteno\\OneDrive\\Ft-Yoga\\Blockchain\\udemy\\02 - Etherum and solidity\\bc-examples-04-kickstart\\pages\\campaigns\\requests\\index.js?entry';


var RequestIndex = function (_Component) {
    (0, _inherits3.default)(RequestIndex, _Component);

    function RequestIndex() {
        (0, _classCallCheck3.default)(this, RequestIndex);

        return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(RequestIndex, [{
        key: 'renderRows',
        value: function renderRows() {
            var _this2 = this;

            return this.props.requests.map(function (request, index) {
                return _react2.default.createElement(_RequestRow2.default, {
                    key: index,
                    id: index,
                    request: request,
                    address: _this2.props.address,
                    approversCount: _this2.props.approversCount,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, 'Requests'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, 'Description'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, 'Amount'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'Recepient'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, 'Approval Count'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, 'Approve'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, 'Finalize'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, this.renderRows())), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, 'Found ', this.props.requestCount, ' requests'));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, campaign, requestCount, approversCount, requests;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;
                                campaign = (0, _campaign2.default)(address);
                                _context.next = 4;
                                return campaign.methods.getRequestCount().call();

                            case 4:
                                requestCount = _context.sent;
                                _context.next = 7;
                                return campaign.methods.approversCount().call();

                            case 7:
                                approversCount = _context.sent;
                                _context.next = 10;
                                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                                    return campaign.methods.requests(index).call();
                                }));

                            case 10:
                                requests = _context.sent;
                                return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, approversCount: approversCount });

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHJlcXVlc3RzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkxpbmsiLCJCdXR0b24iLCJUYWJsZSIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIlJlcXVlc3RJbmRleCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwiYXBwcm92ZXJzQ291bnQiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsIm1hcmdpbkJvdHRvbSIsInJlbmRlclJvd3MiLCJyZXF1ZXN0Q291bnQiLCJxdWVyeSIsImNhbXBhaWduIiwibWV0aG9kcyIsImdldFJlcXVlc3RDb3VudCIsImNhbGwiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVEsQUFBVzs7QUFDbkIsQUFBUSxBQUFROztBQUNoQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0ksQUFJakI7Ozs7Ozs7Ozs7O3FDQWtCVTt5QkFDUjs7d0JBQU8sQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBUSxBQUM3Qzt1Q0FBTyxBQUFDO3lCQUFELEFBQ0ksQUFDUDt3QkFGRyxBQUVDLEFBQ0o7NkJBSEcsQUFHUSxBQUNYOzZCQUFXLE9BQUEsQUFBSyxNQUpiLEFBSW1CLEFBQ3RCO29DQUFpQixPQUFBLEFBQUssTUFMbkIsQUFLeUI7O2tDQUx6QjtvQ0FBUCxBQUFPLEFBT1Y7QUFQVTtBQUNILGlCQURHO0FBRFgsQUFBTyxBQVVWLGFBVlU7Ozs7aUNBWUg7Z0JBQUEsQUFFRyxTQUZILEFBRW1DLHVCQUZuQyxBQUVHO2dCQUZILEFBRVcsTUFGWCxBQUVtQyx1QkFGbkMsQUFFVztnQkFGWCxBQUVlLGFBRmYsQUFFbUMsdUJBRm5DLEFBRWU7Z0JBRmYsQUFFMkIsT0FGM0IsQUFFbUMsdUJBRm5DLEFBRTJCLEFBRy9COzttQ0FDRyxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQyw2QkFBQSxBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFBdEM7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFoQixBQUF3QixTQUFRLE9BQU8sRUFBQyxjQUF4QyxBQUF1QyxBQUFjOzhCQUFyRDtnQ0FBQTtBQUFBO2VBSmIsQUFFSyxBQUNJLEFBQ0ksQUFJUixrQ0FBQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsdUJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRkosQUFFSSxBQUNBLGdDQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUhKLEFBR0ksQUFDQSwyQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFKSixBQUlJLEFBQ0EsOEJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBTEosQUFLSSxBQUNBLG1DQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQU5KLEFBTUksQUFDQSw0QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFUWixBQUNJLEFBQ0ksQUFPSSxBQUdSLCtCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0s7QUFETDtBQUFBLG9CQXBCVCxBQVFLLEFBWUksQUFDSyxBQUFLLEFBR3RCLGdDQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUFZLGVBQUEsQUFBSyxNQUFqQixBQUF1QixjQXpCdkIsQUFDRyxBQXdCSCxBQUlIOzs7OztpSCxBQS9ENEI7Ozs7O2lDQUNsQjtBLDBDQUFXLE0sQUFBTSxNLEFBQWpCLEFBQ0Q7QSwyQ0FBVyx3QixBQUFBLEFBQVM7O3VDQUNDLFNBQUEsQUFBUyxRQUFULEFBQWlCLGtCLEFBQWpCLEFBQW1DOztpQ0FBeEQ7QTs7dUNBQ3VCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGlCLEFBQWpCLEFBQWtDOztpQ0FBekQ7QTs7eURBRWlCLEFBQVEsVUFDckIsU0FBTixBQUFNLEFBQVMsZUFBZixBQUE4QixPQUE5QixBQUFxQyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVMsT0FBUSxBQUN0RDsyQ0FBTyxTQUFBLEFBQVMsUUFBVCxBQUFpQixTQUFqQixBQUEwQixPQUFqQyxBQUFPLEFBQWlDLEFBQzNDO0EsQUFIa0IsQUFDbkIsaUNBQUEsQ0FEbUI7O2lDQUFqQjtBO2lFQU9DLEVBQUMsU0FBRCxTQUFVLFVBQVYsVUFBb0IsY0FBcEIsY0FBa0MsZ0IsQUFBbEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxRGYsQSxBQXBFMkI7O2tCQW9FM0IsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9mdGVuby9PbmVEcml2ZS9GdC1Zb2dhL0Jsb2NrY2hhaW4vdWRlbXkvMDIgLSBFdGhlcnVtIGFuZCBzb2xpZGl0eS9iYy1leGFtcGxlcy0wNC1raWNrc3RhcnQifQ==