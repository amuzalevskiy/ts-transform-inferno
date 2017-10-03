module.exports = { contents: "\"use strict\";\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = Object.setPrototypeOf ||\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar inferno_component_1 = require(\"inferno-component\");\nvar math_1 = require(\"../utils/math\");\nvar Visualizer_1 = require(\"./Visualizer\");\nvar Incrementer = /** @class */ (function (_super) {\n    __extends(Incrementer, _super);\n    function Incrementer(props, context) {\n        var _this = _super.call(this, props, context) || this;\n        _this.state = {\n            value: 1\n        };\n        _this.doMath = function () {\n            _this.setState({\n                value: math_1.addOne(_this.state.value)\n            });\n        };\n        return _this;\n    }\n    Incrementer.prototype.render = function () {\n        // uncomment: example of type verification\n        //\n        // this.props.name = 1;\n        // this.props.bar = 1;\n        return (<div>\n        {this.props.name}\n        <button onClick={this.doMath}>Increment</button>\n        <Visualizer_1.Visualizer number={this.state.value + \"foobar\"}/>\n      </div>);\n    };\n    return Incrementer;\n}(inferno_component_1[\"default\"]));\nexports.Incrementer = Incrementer;\n",
dependencies: ["inferno-component","../utils/math","./Visualizer"],
sourceMap: {},
headerContent: undefined,
mtime: 1503875678000,
devLibsRequired : undefined
};