(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const printToDom = HTMLString => {
  document.querySelector("#employee-container").innerHTML += HTMLString;
};

var _default = printToDom;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _employeeBuilder = _interopRequireDefault(require("./employeeBuilder.js"));

var _DOMPrinter = _interopRequireDefault(require("./DOMPrinter.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getAllEmployees = () => {
  fetch("http://localhost:8088/employees?_expand=department&_expand=computer").then(employees => employees.json()).then(parsedEmployees => {
    parsedEmployees.forEach(employee => {
      const HTMLString = (0, _employeeBuilder.default)(employee);
      (0, _DOMPrinter.default)(HTMLString);
    });
  });
}; /// in case I need these later
// const getAllDepartments = () => {
//     fetch("http://localhost:8088/departments")
//         .then(departments => departments.json())
//         .then(parsedDepartments => {
//             console.log(parsedDepartments)
//         })
// }
// const getAllComputers = () => {
//     fetch("http://localhost:8088/computers")
//         .then(computers => computers.json())
//         .then(parsedComputers => {
//             console.log(parsedComputers)
//         })
// }


var _default = getAllEmployees;
exports.default = _default;

},{"./DOMPrinter.js":1,"./employeeBuilder.js":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const employeeBuilder = employeeObject => {
  return `<article class="employee">
    <header class="employee__name">
        <h1>${employeeObject.name}</h1>
    </header>
    <section class="employee__department">
        Works in the ${employeeObject.department.name} department
    </section>
    <section class="employee__computer">
        Currently using a ${employeeObject.computer.computerName}
    </section>
</article>`;
};

var _default = employeeBuilder;
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

var _apiManager = _interopRequireDefault(require("./apiManager.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _apiManager.default)();

},{"./apiManager.js":2}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL0RPTVByaW50ZXIuanMiLCIuLi9zY3JpcHRzL2FwaU1hbmFnZXIuanMiLCIuLi9zY3JpcHRzL2VtcGxveWVlQnVpbGRlci5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNBQSxNQUFNLFVBQVUsR0FBRyxVQUFELElBQWM7QUFFNUIsRUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixxQkFBdkIsRUFBOEMsU0FBOUMsSUFBeUQsVUFBekQ7QUFDSCxDQUhEOztlQUtlLFU7Ozs7Ozs7Ozs7O0FDTGY7O0FBQ0E7Ozs7QUFHQSxNQUFNLGVBQWUsR0FBRyxNQUFNO0FBQzFCLEVBQUEsS0FBSyxDQUFDLHFFQUFELENBQUwsQ0FDSyxJQURMLENBQ1UsU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFWLEVBRHZCLEVBRUssSUFGTCxDQUVVLGVBQWUsSUFBSTtBQUVyQixJQUFBLGVBQWUsQ0FBQyxPQUFoQixDQUF3QixRQUFRLElBQUk7QUFDaEMsWUFBTSxVQUFVLEdBQUcsOEJBQWdCLFFBQWhCLENBQW5CO0FBQ0EsK0JBQVcsVUFBWDtBQUVILEtBSkQ7QUFNSCxHQVZMO0FBWUgsQ0FiRCxDLENBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O2VBR2UsZTs7Ozs7Ozs7Ozs7QUMxQ2YsTUFBTSxlQUFlLEdBQUksY0FBRCxJQUFrQjtBQUcxQyxTQUFROztjQUVNLGNBQWMsQ0FBQyxJQUFLOzs7dUJBR1gsY0FBYyxDQUFDLFVBQWYsQ0FBMEIsSUFBSzs7OzRCQUcxQixjQUFjLENBQUMsUUFBZixDQUF3QixZQUFhOztXQVJqRTtBQVlDLENBZkQ7O2VBaUJlLGU7Ozs7OztBQ2pCZjs7OztBQUVBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgcHJpbnRUb0RvbSA9KEhUTUxTdHJpbmcpPT57XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbXBsb3llZS1jb250YWluZXJcIikuaW5uZXJIVE1MKz1IVE1MU3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByaW50VG9Eb207XHJcbiIsImltcG9ydCBlbXBsb3llZUJ1aWxkZXIgZnJvbSBcIi4vZW1wbG95ZWVCdWlsZGVyLmpzXCI7XHJcbmltcG9ydCBwcmludFRvRG9tIGZyb20gXCIuL0RPTVByaW50ZXIuanNcIjtcclxuXHJcblxyXG5jb25zdCBnZXRBbGxFbXBsb3llZXMgPSAoKSA9PiB7XHJcbiAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9lbXBsb3llZXM/X2V4cGFuZD1kZXBhcnRtZW50Jl9leHBhbmQ9Y29tcHV0ZXJcIilcclxuICAgICAgICAudGhlbihlbXBsb3llZXMgPT4gZW1wbG95ZWVzLmpzb24oKSlcclxuICAgICAgICAudGhlbihwYXJzZWRFbXBsb3llZXMgPT4ge1xyXG5cclxuICAgICAgICAgICAgcGFyc2VkRW1wbG95ZWVzLmZvckVhY2goZW1wbG95ZWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgSFRNTFN0cmluZyA9IGVtcGxveWVlQnVpbGRlcihlbXBsb3llZSlcclxuICAgICAgICAgICAgICAgIHByaW50VG9Eb20oSFRNTFN0cmluZylcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KVxyXG5cclxufVxyXG5cclxuXHJcbi8vLyBpbiBjYXNlIEkgbmVlZCB0aGVzZSBsYXRlclxyXG4vLyBjb25zdCBnZXRBbGxEZXBhcnRtZW50cyA9ICgpID0+IHtcclxuLy8gICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2RlcGFydG1lbnRzXCIpXHJcbi8vICAgICAgICAgLnRoZW4oZGVwYXJ0bWVudHMgPT4gZGVwYXJ0bWVudHMuanNvbigpKVxyXG4vLyAgICAgICAgIC50aGVuKHBhcnNlZERlcGFydG1lbnRzID0+IHtcclxuXHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhcnNlZERlcGFydG1lbnRzKVxyXG4vLyAgICAgICAgIH0pXHJcblxyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBnZXRBbGxDb21wdXRlcnMgPSAoKSA9PiB7XHJcbi8vICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9jb21wdXRlcnNcIilcclxuLy8gICAgICAgICAudGhlbihjb21wdXRlcnMgPT4gY29tcHV0ZXJzLmpzb24oKSlcclxuLy8gICAgICAgICAudGhlbihwYXJzZWRDb21wdXRlcnMgPT4ge1xyXG5cclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2cocGFyc2VkQ29tcHV0ZXJzKVxyXG4vLyAgICAgICAgIH0pXHJcblxyXG4vLyB9XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0QWxsRW1wbG95ZWVzO1xyXG5cclxuIiwiY29uc3QgZW1wbG95ZWVCdWlsZGVyID0gKGVtcGxveWVlT2JqZWN0KT0+e1xyXG5cclxuXHJcbnJldHVybiBgPGFydGljbGUgY2xhc3M9XCJlbXBsb3llZVwiPlxyXG4gICAgPGhlYWRlciBjbGFzcz1cImVtcGxveWVlX19uYW1lXCI+XHJcbiAgICAgICAgPGgxPiR7ZW1wbG95ZWVPYmplY3QubmFtZX08L2gxPlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImVtcGxveWVlX19kZXBhcnRtZW50XCI+XHJcbiAgICAgICAgV29ya3MgaW4gdGhlICR7ZW1wbG95ZWVPYmplY3QuZGVwYXJ0bWVudC5uYW1lfSBkZXBhcnRtZW50XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImVtcGxveWVlX19jb21wdXRlclwiPlxyXG4gICAgICAgIEN1cnJlbnRseSB1c2luZyBhICR7ZW1wbG95ZWVPYmplY3QuY29tcHV0ZXIuY29tcHV0ZXJOYW1lfVxyXG4gICAgPC9zZWN0aW9uPlxyXG48L2FydGljbGU+YFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZW1wbG95ZWVCdWlsZGVyO1xyXG4iLCJpbXBvcnQgZ2V0QWxsRW1wbG95ZWVzIGZyb20gXCIuL2FwaU1hbmFnZXIuanNcIlxyXG5cclxuZ2V0QWxsRW1wbG95ZWVzKCk7XHJcblxyXG5cclxuIl19
