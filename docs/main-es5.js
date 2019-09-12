(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/question-form/question-form.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/question-form/question-form.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"quiz\" *ngIf=\"question\">\r\n  <h2 class=\"title\">{{question.label}}</h2>\r\n  <form [formGroup]=\"form\">\r\n    <mat-card-content class=\"form-group mat-app-background\">\r\n      <label *ngFor=\"let choice of question.choices\">\r\n        <input type=\"radio\" [value]=\"choice\" formControlName=\"choice\">\r\n          <span>{{choice.value}}</span>\r\n      </label>\r\n    </mat-card-content>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/questions/questions.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/questions/questions.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"quiz && !questions\" class=\"spinner-grow text-primary\"></div>\n\n<mat-card *ngIf=\"questions\">\n\n  <div class=\"questions\" *ngIf=\"!showResults\">\n    <app-question-form\n      [question]=\"questions[currentQuestionIndex]\"\n      (onChoiceMade)=\"updateChoice($event)\">\n    </app-question-form>\n    <mat-card-actions>\n    <button\n      mat-button\n      class=\"btn btn-success btn-primary\"\n      (click)=\"nextOrViewResults()\"\n      [disabled]=\"!answers.values[currentQuestionIndex]\">\n      {{currentQuestionIndex === questions.length -1 ? 'View results' : 'Next'}}</button>\n    </mat-card-actions>\n  </div>\n\n  <app-results *ngIf=\"showResults\" [answers]=\"answers\"></app-results>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/results/results.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/results/results.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title class=\"title\">Results</mat-card-title>\n  <mat-card-content class=\"answer mat-app-background\" *ngFor=\"let a of answers.values\" [ngClass]=\"{correct: a.correct}\">\n    {{a.value}}\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button color=\"primary\" class=\"btn btn-primary\">\n      <a routerLink=\"/welcome\" class=\"btn btn-primary\">Choose another quiz</a>\n    </button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/welcome/welcome.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-card color=\"primary\">\n    <mat-card-title class=\"title\"> Quizzes</mat-card-title>\n  </mat-card>\n  <div *ngFor=\"let q of quiz\">\n    <mat-card>\n        <mat-card-title>{{q.label}}</mat-card-title>\n        <mat-card-subtitle>{{q.description}}</mat-card-subtitle>\n        <mat-card-actions>\n          <button mat-button color=\"secondary\" class=\"btn btn-primary\">\n            <a routerLink=\"/{{q.name}}\" class=\"btn btn-primary\">Select this quiz</a>\n          </button>\n        </mat-card-actions>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _question_form_question_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./question-form/question-form.component */ "./src/app/question-form/question-form.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/questions/questions.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");













var appRoutes = [
    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__["WelcomeComponent"] },
    { path: ':quizId', component: _questions_questions_component__WEBPACK_IMPORTED_MODULE_10__["QuestionsComponent"] },
    { path: '', redirectTo: "welcome", pathMatch: "prefix" },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _question_form_question_form_component__WEBPACK_IMPORTED_MODULE_7__["QuestionFormComponent"],
                _results_results_component__WEBPACK_IMPORTED_MODULE_8__["ResultsComponent"],
                _questions_questions_component__WEBPACK_IMPORTED_MODULE_10__["QuestionsComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__["WelcomeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/question-form/question-form.component.scss":
/*!************************************************************!*\
  !*** ./src/app/question-form/question-form.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-app-background {\n  font-size: 26px;\n}\n\n.btn-primary {\n  background-color: #E8F75F;\n}\n\nbody {\n  background-color: #E8F75F;\n}\n\nmat-card {\n  width: 50%;\n  margin: auto;\n  text-align: center;\n}\n\n.title {\n  margin: auto;\n  background-color: #000057;\n  color: white;\n  font-size: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3phY2xpbnovbXktcXVpei1hcHAvc3JjL2FwcC9xdWVzdGlvbi1mb3JtL3F1ZXN0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3F1ZXN0aW9uLWZvcm0vcXVlc3Rpb24tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREdBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uLWZvcm0vcXVlc3Rpb24tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtYXBwLWJhY2tncm91bmR7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4Rjc1RjtcclxufVxyXG5cclxuYm9keXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThGNzVGO1xyXG59XHJcblxyXG5tYXQtY2FyZHtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwNTc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG4iLCIubWF0LWFwcC1iYWNrZ3JvdW5kIHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThGNzVGO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4Rjc1Rjtcbn1cblxubWF0LWNhcmQge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDU3O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/question-form/question-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/question-form/question-form.component.ts ***!
  \**********************************************************/
/*! exports provided: QuestionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionFormComponent", function() { return QuestionFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var QuestionFormComponent = /** @class */ (function () {
    function QuestionFormComponent() {
        var _this = this;
        this.onChoiceMade = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChange = function () {
            _this.onChoiceMade.emit(_this.form.value.choice);
        };
    }
    QuestionFormComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            choice: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.form.valueChanges.subscribe(this.onChange);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], QuestionFormComponent.prototype, "question", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], QuestionFormComponent.prototype, "onChoiceMade", void 0);
    QuestionFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question-form',
            template: __webpack_require__(/*! raw-loader!./question-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/question-form/question-form.component.html"),
            styles: [__webpack_require__(/*! ./question-form.component.scss */ "./src/app/question-form/question-form.component.scss")]
        })
    ], QuestionFormComponent);
    return QuestionFormComponent;
}());



/***/ }),

/***/ "./src/app/questions.service.ts":
/*!**************************************!*\
  !*** ./src/app/questions.service.ts ***!
  \**************************************/
/*! exports provided: QuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsService", function() { return QuestionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _quiz_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quiz.model */ "./src/app/quiz.model.ts");





var QuestionsService = /** @class */ (function () {
    function QuestionsService(http) {
        this.http = http;
    }
    QuestionsService.prototype.getQuizzes = function () {
        return this.http.get("./assets/quiz-list.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            return result.map(function (r) { return new _quiz_model__WEBPACK_IMPORTED_MODULE_4__["Quiz"](r.label, r.name, r.description, r.fileName); });
        }));
    };
    QuestionsService.prototype.getQuestion = function (fileName) {
        return this.http.get("./assets/" + fileName + ".json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            return result.map(function (r) { return new _quiz_model__WEBPACK_IMPORTED_MODULE_4__["Question"](r.label, r.choices); });
        }));
    };
    QuestionsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    QuestionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], QuestionsService);
    return QuestionsService;
}());



/***/ }),

/***/ "./src/app/questions/questions.component.scss":
/*!****************************************************!*\
  !*** ./src/app/questions/questions.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-primary {\n  background-color: #E8F75F;\n}\n\nmat-card {\n  width: 256px;\n}\n\nbody {\n  background-color: #E8F75F;\n}\n\n.mat-app-background {\n  background-color: #000057;\n}\n\n.btn-primary {\n  background-color: #E8F75F;\n}\n\nmat-card {\n  width: 50%;\n  margin: auto;\n  text-align: center;\n}\n\n.title {\n  margin: auto;\n  background-color: #000057;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3phY2xpbnovbXktcXVpei1hcHAvc3JjL2FwcC9xdWVzdGlvbnMvcXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9xdWVzdGlvbnMvcXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UseUJBQUE7QUNERjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURHQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9ucy9xdWVzdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5idG4tcHJpbWFyeXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThGNzVGO1xyXG59XHJcbm1hdC1jYXJke1xyXG4gIHdpZHRoOiAyNTZweFxyXG59XHJcblxyXG5ib2R5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFOEY3NUY7XHJcbn1cclxuLm1hdC1hcHAtYmFja2dyb3VuZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDU3O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4Rjc1RjtcclxufVxyXG5cclxubWF0LWNhcmR7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLnRpdGxle1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDU3O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iLCIuYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThGNzVGO1xufVxuXG5tYXQtY2FyZCB7XG4gIHdpZHRoOiAyNTZweDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOEY3NUY7XG59XG5cbi5tYXQtYXBwLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDU3O1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThGNzVGO1xufVxuXG5tYXQtY2FyZCB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0bGUge1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwNTc7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/questions/questions.component.ts":
/*!**************************************************!*\
  !*** ./src/app/questions/questions.component.ts ***!
  \**************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../questions.service */ "./src/app/questions.service.ts");
/* harmony import */ var _quiz_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../quiz.model */ "./src/app/quiz.model.ts");





var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(route, questionsService) {
        this.route = route;
        this.questionsService = questionsService;
        this.showResults = false;
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionsService.getQuestion(this.route.snapshot.params.quizId)
            .subscribe(function (questions) {
            _this.questions = questions;
            _this.answers = new _quiz_model__WEBPACK_IMPORTED_MODULE_4__["Answers"]();
            _this.currentQuestionIndex = 0;
        });
    };
    QuestionsComponent.prototype.updateChoice = function (choice) {
        this.answers.values[this.currentQuestionIndex] = choice;
    };
    QuestionsComponent.prototype.nextOrViewResults = function () {
        if (this.currentQuestionIndex === this.questions.length - 1) {
            this.showResults = true;
            return;
        }
        this.currentQuestionIndex++;
    };
    QuestionsComponent.prototype.reset = function () {
        this.quiz = undefined;
        this.questions = undefined;
        this.answers = undefined;
        this.currentQuestionIndex = undefined;
    };
    QuestionsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"] }
    ]; };
    QuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-questions',
            template: __webpack_require__(/*! raw-loader!./questions.component.html */ "./node_modules/raw-loader/index.js!./src/app/questions/questions.component.html"),
            styles: [__webpack_require__(/*! ./questions.component.scss */ "./src/app/questions/questions.component.scss")]
        })
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "./src/app/quiz.model.ts":
/*!*******************************!*\
  !*** ./src/app/quiz.model.ts ***!
  \*******************************/
/*! exports provided: Choice, Question, Quiz, Answers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Choice", function() { return Choice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quiz", function() { return Quiz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answers", function() { return Answers; });
var Choice = /** @class */ (function () {
    function Choice(value, correct) {
        this.value = value;
        this.correct = correct;
    }
    Choice.ctorParameters = function () { return [
        { type: String },
        { type: Boolean }
    ]; };
    return Choice;
}());

var Question = /** @class */ (function () {
    function Question(label, choices) {
        this.label = label;
        this.choices = choices;
    }
    Question.ctorParameters = function () { return [
        { type: String },
        { type: Array }
    ]; };
    return Question;
}());

var Quiz = /** @class */ (function () {
    function Quiz(label, name, description, fileName) {
        this.label = label;
        this.name = name;
        this.description = description;
        this.fileName = fileName;
    }
    Quiz.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return Quiz;
}());

var Answers = /** @class */ (function () {
    function Answers(values) {
        if (values === void 0) { values = []; }
        this.values = values;
    }
    Answers.ctorParameters = function () { return [
        { type: Array }
    ]; };
    return Answers;
}());



/***/ }),

/***/ "./src/app/results/results.component.scss":
/*!************************************************!*\
  !*** ./src/app/results/results.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #E8F75F;\n}\n\n.answer {\n  background-color: red;\n  width: auto;\n  font-size: 26px;\n  text-align: center;\n  margin: auto;\n  margin-bottom: 5px;\n  margin-top: 5px;\n}\n\n.correct {\n  background-color: #00FF00;\n}\n\n.btn-primary {\n  background-color: #E8F75F;\n}\n\n.btn-primary {\n  background-color: #E8F75F;\n}\n\nmat-card {\n  width: 50%;\n  margin: auto;\n  text-align: center;\n}\n\n.title {\n  margin: auto;\n  background-color: #000057;\n  color: white;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3phY2xpbnovbXktcXVpei1hcHAvc3JjL2FwcC9yZXN1bHRzL3Jlc3VsdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRUY7O0FERUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThGNzVGO1xyXG59XHJcbi5hbnN3ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5jb3JyZWN0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEZGMDA7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThGNzVGO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4Rjc1RjtcclxufVxyXG5cclxubWF0LWNhcmR7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLnRpdGxle1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDU3O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuIiwiYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOEY3NUY7XG59XG5cbi5hbnN3ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIHdpZHRoOiBhdXRvO1xuICBmb250LXNpemU6IDI2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmNvcnJlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBGRjAwO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThGNzVGO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThGNzVGO1xufVxuXG5tYXQtY2FyZCB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0bGUge1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwNTc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/results/results.component.ts":
/*!**********************************************!*\
  !*** ./src/app/results/results.component.ts ***!
  \**********************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResultsComponent = /** @class */ (function () {
    function ResultsComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ResultsComponent.prototype, "answers", void 0);
    ResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-results',
            template: __webpack_require__(/*! raw-loader!./results.component.html */ "./node_modules/raw-loader/index.js!./src/app/results/results.component.html"),
            styles: [__webpack_require__(/*! ./results.component.scss */ "./src/app/results/results.component.scss")]
        })
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.scss":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #E8F75F;\n}\n\n.mat-app-background {\n  background-color: #000057;\n}\n\n.btn-primary {\n  background-color: #E8F75F;\n}\n\nmat-card {\n  width: 50%;\n  margin: auto;\n  text-align: center;\n}\n\n.title {\n  margin: auto;\n  background-color: #000057;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3phY2xpbnovbXktcXVpei1hcHAvc3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURFQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4Rjc1RjtcclxufVxyXG4ubWF0LWFwcC1iYWNrZ3JvdW5ke1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwNTc7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThGNzVGO1xyXG59XHJcblxyXG5tYXQtY2FyZHtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwNTc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiIsImJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThGNzVGO1xufVxuXG4ubWF0LWFwcC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDA1Nztcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4Rjc1Rjtcbn1cblxubWF0LWNhcmQge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDU3O1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _questions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../questions.service */ "./src/app/questions.service.ts");



var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(questionsService) {
        this.questionsService = questionsService;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionsService.getQuizzes()
            .subscribe(function (quiz) {
            _this.quiz = quiz;
        });
    };
    WelcomeComponent.prototype.reset = function () {
        this.quiz = undefined;
    };
    WelcomeComponent.ctorParameters = function () { return [
        { type: _questions_service__WEBPACK_IMPORTED_MODULE_2__["QuestionsService"] }
    ]; };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/welcome/welcome.component.scss")]
        })
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/zaclinz/my-quiz-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map