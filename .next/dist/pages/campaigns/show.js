'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _Layout = require('../../Components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../Components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\fteno\\OneDrive\\Ft-Yoga\\Blockchain\\udemy\\02 - Etherum and solidity\\bc-examples-04-kickstart\\pages\\campaigns\\show.js?entry';


var CampaignShow = function (_Component) {
    (0, _inherits3.default)(CampaignShow, _Component);

    function CampaignShow() {
        (0, _classCallCheck3.default)(this, CampaignShow);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                balance = _props.balance,
                manager = _props.manager,
                minimumContribution = _props.minimumContribution,
                requestsCount = _props.requestsCount,
                approversCount = _props.approversCount;

            var items = [{
                header: manager,
                meta: 'Address of Manager',
                description: 'The manager created this campaign and can create requests to withdraw money ',
                style: { overflowWrap: 'break-word' }
            }, {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contribute at least this much wei to become an approver'
            }, {
                header: requestsCount,
                meta: 'Number of requests',
                description: 'A request tries to withdraw money from the contract. Requests must be approved at least %51 of approvers to be completed'
            }, {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of people who donated to this contract'
            }, {
                header: _web2.default.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance(ether)',
                description: 'The balance is how much money this campaign has left to spend'
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, 'Campaign Show'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, '  ', _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, 'View Requests')))))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaign, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                campaign = (0, _campaign2.default)(props.query.address);
                                _context.next = 3;
                                return campaign.methods.getSummary().call();

                            case 3:
                                summary = _context.sent;
                                return _context.abrupt('return', {
                                    address: props.query.address,
                                    minimumContribution: summary[0],
                                    balance: summary[1],
                                    requestsCount: summary[2],
                                    approversCount: summary[3],
                                    manager: summary[4]
                                });

                            case 5:
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

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiTGluayIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsImNhbXBhaWduIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFTLEFBQU0sQUFBTTs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBUSxBQUFXOzs7Ozs7O0ksQUFFYjs7Ozs7Ozs7Ozs7c0NBZVc7eUJBUUwsS0FSSyxBQVFBO2dCQVJBLEFBR0wsaUJBSEssQUFHTDtnQkFISyxBQUlMLGlCQUpLLEFBSUw7Z0JBSkssQUFLTCw2QkFMSyxBQUtMO2dCQUxLLEFBTUwsdUJBTkssQUFNTDtnQkFOSyxBQU9MLHdCQVBLLEFBT0wsQUFHSjs7Z0JBQU07d0JBQ0YsQUFDTyxBQUNQO3NCQUZBLEFBRUssQUFDTDs2QkFIQSxBQUdZLEFBQ1o7dUJBQU8sRUFBQyxjQUxFLEFBQ1YsQUFJTyxBQUFjO0FBSnJCLEFBQ0EsYUFGVTt3QkFPVixBQUNPLEFBQ1A7c0JBRkEsQUFFSyxBQUNMOzZCQVZVLEFBT1YsQUFHWTtBQUhaLEFBQ0E7d0JBSUEsQUFDTyxBQUNQO3NCQUZBLEFBRUssQUFDTDs2QkFmVSxBQVlWLEFBR1k7QUFIWixBQUNBO3dCQUlBLEFBQ08sQUFDUDtzQkFGQSxBQUVLLEFBQ0w7NkJBcEJVLEFBaUJWLEFBR1k7QUFIWixBQUNBO3dCQUtPLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUQxQixBQUNPLEFBQTJCLEFBQ2xDO3NCQUZBLEFBRUssQUFDTDs2QkF6QkosQUFBYyxBQXNCVixBQUdZLEFBSWhCO0FBUEksQUFDQTs7aURBTUcsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTs7OztpQ0FJSCxBQUNKO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLGtDQUFBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDQztBQUREO29CQURKLEFBQ0ksQUFDQyxBQUFLLEFBSU4sZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUE7QUFBQTtlQUEwQixzQkFBQSxBQUFDLDBDQUFlLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DOzhCQUFwQztnQ0FQbEMsQUFDSSxBQU1JLEFBQTBCLEFBRTlCO0FBRjhCO2tDQUU3QixjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDQTtBQURBO0FBQUEsK0JBQ0EsQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLFNBQVI7OEJBQUE7Z0NBQUE7QUFBQTtlQWhCeEIsQUFDSSxBQUVJLEFBU0ksQUFDSSxBQUNBLEFBQ0ksQUFDSSxBQVMzQjs7Ozs7aUgsQUFuRjRCOzs7OztpQ0FDbkI7QSwyQ0FBVyx3QkFBUyxNQUFBLEFBQU0sTSxBQUFmLEFBQXFCOzt1Q0FDaEIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYSxBQUFqQixBQUE4Qjs7aUNBQTlDO0E7OzZDQUdNLE1BQUEsQUFBTSxNQURaLEFBQ2tCLEFBQ3BCO3lEQUFvQixRQUZsQixBQUVrQixBQUFRLEFBQzVCOzZDQUFTLFFBSFAsQUFHTyxBQUFRLEFBQ2pCO21EQUFjLFFBSlosQUFJWSxBQUFRLEFBQ3RCO29EQUFlLFFBTGIsQUFLYSxBQUFRLEFBQ3ZCOzZDQUFRLFEsQUFOTixBQU1NLEFBQVE7QUFOZCxBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0ZaLEEsQUF4RjJCOztrQkF3RjNCLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9mdGVuby9PbmVEcml2ZS9GdC1Zb2dhL0Jsb2NrY2hhaW4vdWRlbXkvMDIgLSBFdGhlcnVtIGFuZCBzb2xpZGl0eS9iYy1leGFtcGxlcy0wNC1raWNrc3RhcnQifQ==