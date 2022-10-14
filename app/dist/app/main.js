"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/main/main.component */ 2409);


class AppComponent {
    constructor() {
        this.title = 'app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-main");
    } }, dependencies: [_components_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main/main.component */ 2409);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/stepper */ 4193);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__.MatSliderModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__.MatProgressBarModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabsModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__.MainComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__.MatSliderModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__.MatProgressBarModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabsModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule] }); })();


/***/ }),

/***/ 2409:
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var src_app_models_Experience__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/Experience */ 6272);
/* harmony import */ var src_app_models_mainContect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/mainContect */ 9390);
/* harmony import */ var src_app_models_skill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/skill */ 5631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ 5892);











function MainComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MainComponent_div_37_Template_input_ngModelChange_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const p_r10 = restoredCtx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.arrLanguage[p_r10].name = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-slider", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MainComponent_div_37_Template_mat_slider_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const p_r10 = restoredCtx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.arrLanguage[p_r10].value = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const p_r10 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.arrLanguage[p_r10].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.arrLanguage[p_r10].value);
} }
function MainComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MainComponent_div_45_Template_input_ngModelChange_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const p_r15 = restoredCtx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.arrSkils[p_r15].name = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-slider", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MainComponent_div_45_Template_mat_slider_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const p_r15 = restoredCtx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.arrSkils[p_r15].value = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const p_r15 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.arrSkils[p_r15].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.arrSkils[p_r15].value);
} }
function MainComponent_div_52_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MainComponent_div_52_input_3_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25); const i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](i_r19.headline = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", i_r19.headline);
} }
function MainComponent_div_52_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 40)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "date start work");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MainComponent_div_52_div_4_Template_input_ngModelChange_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const z_r27 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](z_r27.dateStart = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "date end work");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MainComponent_div_52_div_4_Template_input_ngModelChange_8_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const z_r27 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](z_r27.dateEnd = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "compony/education name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MainComponent_div_52_div_4_Template_input_ngModelChange_11_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const z_r27 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](z_r27.compnyName = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "compny/education Addres");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MainComponent_div_52_div_4_Template_input_ngModelChange_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const z_r27 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](z_r27.compnyAddres = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "position");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MainComponent_div_52_div_4_Template_input_ngModelChange_17_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const z_r27 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](z_r27.position = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "start work");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MainComponent_div_52_div_4_Template_input_ngModelChange_20_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const z_r27 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](z_r27.content = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const z_r27 = ctx.$implicit;
    const x_r28 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("< ", x_r28 + 1, " >");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", z_r27.dateStart);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", z_r27.dateEnd);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", z_r27.compnyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", z_r27.compnyAddres);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", z_r27.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", z_r27.content);
} }
function MainComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MainComponent_div_52_input_3_Template, 1, 1, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MainComponent_div_52_div_4_Template, 21, 7, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainComponent_div_52_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r37); const p_r20 = restoredCtx.index; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r36.newExperience(p_r20)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " + ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const i_r19 = ctx.$implicit;
    const p_r20 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", "{" + i_r19.headline + "}", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", p_r20 != 0 && p_r20 != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.MC[p_r20].arr);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("new ", i_r19.headline, "");
} }
function MainComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r4.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function MainComponent_div_58_h4_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MainComponent_div_58_h4_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MainComponent_div_58_h4_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Linkdein");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MainComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "hr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MainComponent_div_58_h4_4_Template, 2, 0, "h4", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MainComponent_div_58_h4_7_Template, 2, 0, "h4", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, MainComponent_div_58_h4_10_Template, 2, 0, "h4", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.tel);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.tel);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.linkdein);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.linkdein);
} }
function MainComponent_div_63_mat_progress_bar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 49);
} if (rf & 2) {
    const p_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", ctx_r43.arrLanguage[p_r42].value);
} }
function MainComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 47)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MainComponent_div_63_mat_progress_bar_3_Template, 1, 1, "mat-progress-bar", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r42 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6.arrLanguage[p_r42].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.arrLanguage[p_r42].name);
} }
function MainComponent_div_67_mat_progress_bar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 49);
} if (rf & 2) {
    const p_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", ctx_r47.arrSkils[p_r46].value);
} }
function MainComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 50)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MainComponent_div_67_mat_progress_bar_3_Template, 1, 1, "mat-progress-bar", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r46 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.arrSkils[p_r46].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.arrSkils[p_r46].name);
} }
function MainComponent_div_76_div_6_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MainComponent_div_76_div_6_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MainComponent_div_76_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54)(1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MainComponent_div_76_div_6_span_5_Template, 2, 0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, MainComponent_div_76_div_6_span_9_Template, 2, 0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const z_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", z_r52.dateStart, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", z_r52.dateStart && z_r52.dateEnd);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", z_r52.dateEnd, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", z_r52.compnyName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", z_r52.compnyName && z_r52.compnyAddres);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", z_r52.compnyAddres, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](z_r52.content);
} }
function MainComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 51)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "hr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MainComponent_div_76_div_6_Template, 13, 7, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const i_r49 = ctx.$implicit;
    const p_r50 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r49.headline);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r8.MC[p_r50].arr);
} }
class MainComponent {
    constructor() {
        // display="height: 0;display: none; clip-path: none;"
        this.url = "";
        this.inputName = "";
        this.inputAbut = "";
        this.linkdein = "";
        this.email = '';
        this.tel = '';
        this.arrSkils = [
            { name: "skile", value: 70 }
        ];
        this.arrLanguage = [
            { name: "english", value: 70 }
        ];
        this.MC = [{ headline: "experiense", arr: [{ dateStart: "", dateEnd: "", compnyName: "", compnyAddres: "", position: "", content: "" }] }, { headline: "Education", arr: [{ dateStart: "", dateEnd: "", compnyName: "", compnyAddres: "", position: "", content: "" }] }];
        // arrExperience:Experience[]=[{dateStart:"",dateEnd:"",compnyName:"",compnyAddres:"",position:"",content:""}]
        // arrEducation:Experience[]=[{dateStart:"",dateEnd:"",compnyName:"",compnyAddres:"",position:"",content:""}]
        this.reader = new FileReader();
    }
    ngOnInit() {
    }
    newSkil() {
        this.arrSkils.push(new src_app_models_skill__WEBPACK_IMPORTED_MODULE_2__.skill("", 50));
    }
    newLanguage() {
        this.arrLanguage.push(new src_app_models_skill__WEBPACK_IMPORTED_MODULE_2__.skill("", 70));
    }
    newExperience(a) {
        this.MC[a].arr.push(new src_app_models_Experience__WEBPACK_IMPORTED_MODULE_0__.Experience());
    }
    newMainInput() {
        this.MC.push(new src_app_models_mainContect__WEBPACK_IMPORTED_MODULE_1__.mainContect("", [new src_app_models_Experience__WEBPACK_IMPORTED_MODULE_0__.Experience()]));
    }
    onFileUpload(img0) {
        if (img0.target.files[0] && img0.target.files) {
            let file = img0.target.files[0];
            this.reader.readAsDataURL(file);
            // this.display="display:grid"
            this.reader.onload = (event) => {
                this.url = this.reader.result;
            };
        }
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 77, vars: 15, consts: [[1, "main"], [1, "input"], ["label", "First"], [1, "header"], [1, "img1"], ["type", "file", "multiple", "", "accept", "image/*", 2, "display", "none", 3, "change"], ["selectFile", ""], [3, "click"], [1, "name"], ["type", "text", "value", "full name", 3, "ngModel", "ngModelChange"], [1, "abuot"], ["type", "text", "value", "abut", 3, "ngModel", "ngModelChange"], [1, "contact", "center"], ["type", "tel", 3, "ngModel", "ngModelChange"], ["type", "email", 3, "ngModel", "ngModelChange"], ["type", "text", 3, "ngModel", "ngModelChange"], ["label", "Second"], [1, "aside", "center"], [1, "Language", "center"], [4, "ngFor", "ngForOf"], ["mat-mini-fab", "", "color", "accent", "aria-label", "Example icon button with a plus one icon", 3, "click"], [1, "skils", "center"], ["label", "Third"], [1, "mainEducation"], ["class", "ArrEducation", 4, "ngFor", "ngForOf"], [1, "output"], [1, "aside"], ["class", "img", 4, "ngIf"], ["class", "contact", 4, "ngIf"], [1, "skiil"], [1, "headline"], [1, "line"], ["class", "Language ProgressBar", 4, "ngFor", "ngForOf"], ["class", "skils ProgressBar", 4, "ngFor", "ngForOf"], [1, "right"], [1, "main1"], ["aria-label", "", 3, "ngModel", "ngModelChange"], [1, "ArrEducation"], ["type", "text", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "inputEducation", 4, "ngFor", "ngForOf"], [1, "inputEducation"], ["type", "date", 3, "ngModel", "ngModelChange"], [1, "img"], ["alt", "", 3, "src"], [1, "contact"], ["class", "title", 4, "ngIf"], [1, "title"], [1, "Language", "ProgressBar"], ["mode", "determinate", 3, "value", 4, "ngIf"], ["mode", "determinate", 3, "value"], [1, "skils", "ProgressBar"], [1, "experiense"], [1, "ExperienceLineSide"], ["class", "onee", 4, "ngFor", "ngForOf"], [1, "onee"], [1, "date"], [1, "circle"], [4, "ngIf"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "mat-tab-group")(4, "mat-tab", 2)(5, "div", 3)(6, "div", 4)(7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "upload profil img");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function MainComponent_Template_input_change_9_listener($event) { return ctx.onFileUpload($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainComponent_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r56); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.click()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "add_photo_alternate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 8)(15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "enter your name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_input_ngModelChange_17_listener($event) { return ctx.inputName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 10)(19, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "enter about you");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_input_ngModelChange_21_listener($event) { return ctx.inputAbut = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 12)(23, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "your phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_input_ngModelChange_25_listener($event) { return ctx.tel = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_input_ngModelChange_28_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "your linkdein");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_input_ngModelChange_31_listener($event) { return ctx.linkdein = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mat-tab", 16)(33, "div", 17)(34, "div", 18)(35, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, MainComponent_div_37_Template, 3, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "new Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainComponent_Template_button_click_40_listener() { return ctx.newLanguage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, " + ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 21)(43, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Skilss");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, MainComponent_div_45_Template, 3, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "new skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainComponent_Template_button_click_48_listener() { return ctx.newSkil(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, " + ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "mat-tab", 22)(51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, MainComponent_div_52_Template, 9, 4, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainComponent_Template_button_click_53_listener() { return ctx.newMainInput(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, " + ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 25)(56, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, MainComponent_div_57_Template, 2, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, MainComponent_div_58_Template, 13, 6, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 29)(60, "h2", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, " Languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "hr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, MainComponent_div_63_Template, 4, 2, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "h2", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, " skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "hr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](67, MainComponent_div_67_Template, 4, 2, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 34)(69, "div", 3)(70, "div", 8)(71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](76, MainComponent_div_76_Template, 7, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.inputName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.inputAbut);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.tel);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.linkdein);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.arrLanguage);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.arrSkils);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.MC);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reader.onload);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.tel || ctx.email || ctx.linkdein);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.arrLanguage);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.arrSkils);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.inputName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.inputAbut, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.MC);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__.MatSlider, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__.MatProgressBar, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTab], styles: ["*[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.center[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    justify-content: center;\r\n}\r\n\r\n.end[_ngcontent-%COMP%]{\r\n    justify-self: end;\r\n}\r\n\r\n\r\n\r\n.input[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    justify-content: center;\r\n}\r\n\r\n.input[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n   \r\n    color: #007791;\r\n    margin-bottom: 3px;\r\n    margin-top: 27px;\r\n}\r\n\r\n\r\n\r\n.input[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    justify-content: center;\r\n    justify-items: center;\r\n}\r\n\r\n.input[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    justify-content: center;\r\n    justify-items: center;\r\n}\r\n\r\n\r\n\r\n.input[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    justify-self: end;\r\n    color: #007791;\r\n}\r\n\r\n.input[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    justify-self: end;\r\n    margin-bottom:20px ;\r\n}\r\n\r\n\r\n\r\n.input[_ngcontent-%COMP%]   .inputEducation[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    justify-content: center;\r\n    margin-top: 15px;\r\n}\r\n\r\n.input[_ngcontent-%COMP%]   .mainEducation[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n   margin-top: 22px;\r\n   color: #002D62;\r\n}\r\n\r\n.input[_ngcontent-%COMP%]   .mainEducation[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n    color: #1b6f82;\r\n }\r\n\r\n.input[_ngcontent-%COMP%]   .mainEducation[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\r\n   justify-self: end;\r\n    color: #1b6f82;\r\n }\r\n\r\n.input[_ngcontent-%COMP%]   .mainEducation[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    justify-self: end;\r\n    \r\n  }\r\n\r\n.input[_ngcontent-%COMP%]   .mainEducation[_ngcontent-%COMP%]   .ArrEducation[_ngcontent-%COMP%]{\r\n  display: grid;    \r\n  }\r\n\r\n\r\n\r\n.output[_ngcontent-%COMP%] {\r\n    border: solid 1px black;\r\n    margin: 20px;\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr;\r\n    \r\n    box-shadow: -2px -4px 11px 1px;\r\n\r\n}\r\n\r\n.output[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n    color: #002D62;\r\n}\r\n\r\nmat-progress-bar[_ngcontent-%COMP%] {\r\n    width: 60%;\r\n}\r\n\r\n.output[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%] {\r\n    background-color: #002244;\r\n    color: aliceblue;\r\n    padding: 20px;\r\n}\r\n\r\n.output[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\r\n    height: 257px;\r\n    resize: vertical;\r\n    overflow: hidden;\r\n}\r\n\r\n.line[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    background-color: white;\r\n    height: 2px;\r\n    margin: 2px 5px 0px 0px;\r\n    margin-bottom: 28px;\r\n    border: none;\r\n}\r\n\r\n.output[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    margin: 12px 0px 6px 0px;\r\n}\r\n\r\n.ProgressBar[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px;\r\n\r\n}\r\n\r\n.headline[_ngcontent-%COMP%] {\r\n    padding-top: 25px;\r\n\r\n}\r\n\r\n.right[_ngcontent-%COMP%] {\r\n    padding-left: 47px;\r\n}\r\n\r\n.output[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n    height: min(278px);\r\n\r\n}\r\n\r\n.right[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\r\n    padding-top: 27px;\r\n}\r\n\r\n.right[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .abuot[_ngcontent-%COMP%] {\r\n    padding-top: 34px;\r\n    margin-right: 19px;\r\n}\r\n\r\n.experiense[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%], .Education[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\r\n    background-color: black;\r\n}\r\n\r\n.ExperienceLineSide[_ngcontent-%COMP%] {\r\n    border-left: solid 2px;\r\n}\r\n\r\n.ExperienceLineSide[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    right: 24px;\r\n    position: relative;\r\n}\r\n\r\n.ExperienceLineSide[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\r\n    margin-right: 5px;\r\n    clip-path: circle(50%);\r\n    border: black solid 2px;\r\n    border-radius: 15px;\r\n    background: white;\r\n    width: 12px;\r\n    height: 12px;\r\n}\r\n\r\n.onee[_ngcontent-%COMP%] {\r\n    margin: 15px 15px 0px 15px;\r\n\r\n}\r\n\r\n.output[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{\r\n    height: 240px;\r\n    \r\n    border-radius: 50%;\r\n    margin-bottom: 35px;\r\n    display: grid;\r\n    justify-content: center;\r\n}\r\n\r\n.output[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n@media(max-width:700px){\r\n\r\n    .main[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n    }\r\n    \r\n    \r\n}\r\n\r\n@media(min-width:1200px){\r\n    .input[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 50px;\r\n       \r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUEsNkJBQTZCOztBQUM3QjtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBQ0E7O0lBRUksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBQ0EsVUFBVTs7QUFDVjtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7QUFDekI7O0FBQ0EsVUFBVTs7QUFDVjtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFDQSxVQUFVOztBQUNWO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBQ0E7R0FDRyxnQkFBZ0I7R0FDaEIsY0FBYztBQUNqQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0NBQ2pCOztBQUNBO0dBQ0UsaUJBQWlCO0lBQ2hCLGNBQWM7Q0FDakI7O0FBQ0E7SUFDRyxpQkFBaUI7O0VBRW5COztBQUNBO0VBQ0EsYUFBYTtFQUNiOztBQUNGLDZCQUE2Qjs7QUFDN0I7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLDhCQUE4Qjs7QUFFbEM7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFDQTtJQUNJLFVBQVU7QUFDZDs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjs7QUFFOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUlBOztJQUVJO1FBQ0ksYUFBYTtRQUNiLGVBQWU7UUFDZix1QkFBdUI7SUFDM0I7SUFDQSw0Q0FBNEM7O0FBRWhEOztBQUNBO0lBQ0k7UUFDSSxlQUFlOztJQUVuQjtBQUNKIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG59XHJcbi5jZW50ZXJ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmVuZHtcclxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0gaW5wdXQgLS0tLS0gKi9cclxuLmlucHV0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uaW5wdXQgLmhlYWRlciBoMSwuaW5wdXQgLmNvbnRhY3QgaDF7XHJcbiAgIFxyXG4gICAgY29sb3I6ICMwMDc3OTE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyN3B4O1xyXG59XHJcbi8qIHRhYiAxICovXHJcbi5pbnB1dCAuaGVhZGVye1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG59XHJcbi5pbnB1dCAuaGVhZGVyIGRpdntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxufVxyXG4vKiB0YWIgMiAqL1xyXG4uaW5wdXQgLmFzaWRlIGg0e1xyXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XHJcbiAgICBjb2xvcjogIzAwNzc5MTtcclxufVxyXG4uaW5wdXQgLmFzaWRlIGJ1dHRvbntcclxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gICAgbWFyZ2luLWJvdHRvbToyMHB4IDtcclxufVxyXG4vKiB0YWIgMyAqL1xyXG4uaW5wdXQgIC5pbnB1dEVkdWNhdGlvbntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuLmlucHV0IC5tYWluRWR1Y2F0aW9uIGgye1xyXG4gICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4gICBjb2xvcjogIzAwMkQ2MjtcclxufVxyXG4uaW5wdXQgLm1haW5FZHVjYXRpb24gaDR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgY29sb3I6ICMxYjZmODI7XHJcbiB9XHJcbiAuaW5wdXQgLm1haW5FZHVjYXRpb24gaDV7XHJcbiAgIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gICAgY29sb3I6ICMxYjZmODI7XHJcbiB9XHJcbiAuaW5wdXQgLm1haW5FZHVjYXRpb24gYnV0dG9ue1xyXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XHJcbiAgICBcclxuICB9XHJcbiAgLmlucHV0IC5tYWluRWR1Y2F0aW9uIC5BcnJFZHVjYXRpb257XHJcbiAgZGlzcGxheTogZ3JpZDsgICAgXHJcbiAgfVxyXG4vKi0tLS0tLS0tLS0gb3V0cHV0IC0tLS0tLS0gKi9cclxuLm91dHB1dCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XHJcbiAgICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xyXG4gICAgYm94LXNoYWRvdzogLTJweCAtNHB4IDExcHggMXB4O1xyXG5cclxufVxyXG4ub3V0cHV0IC5uYW1lIHAge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgY29sb3I6ICMwMDJENjI7XHJcbn1cclxubWF0LXByb2dyZXNzLWJhciB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcbi5vdXRwdXQgLmFzaWRlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDIyNDQ7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG4ub3V0cHV0IC5pbWcge1xyXG4gICAgaGVpZ2h0OiAyNTdweDtcclxuICAgIHJlc2l6ZTogdmVydGljYWw7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubGluZSB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIG1hcmdpbjogMnB4IDVweCAwcHggMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLm91dHB1dCAuYXNpZGUgLmNvbnRhY3QgLnRpdGxlIHtcclxuICAgIG1hcmdpbjogMTJweCAwcHggNnB4IDBweDtcclxufVxyXG5cclxuLlByb2dyZXNzQmFyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblxyXG59XHJcblxyXG4uaGVhZGxpbmUge1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcblxyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0N3B4O1xyXG59XHJcblxyXG4ub3V0cHV0IC5yaWdodCAuaGVhZGVyIHtcclxuICAgIGhlaWdodDogbWluKDI3OHB4KTtcclxuXHJcbn1cclxuXHJcbi5yaWdodCAuaGVhZGVyIC5uYW1lIHtcclxuICAgIHBhZGRpbmctdG9wOiAyN3B4O1xyXG59XHJcblxyXG4ucmlnaHQgLmhlYWRlciAuYWJ1b3Qge1xyXG4gICAgcGFkZGluZy10b3A6IDM0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE5cHg7XHJcbn1cclxuXHJcbi5leHBlcmllbnNlIC5saW5lLCAuRWR1Y2F0aW9uIC5saW5lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uRXhwZXJpZW5jZUxpbmVTaWRlIHtcclxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAycHg7XHJcbn1cclxuXHJcbi5FeHBlcmllbmNlTGluZVNpZGUgLmRhdGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHJpZ2h0OiAyNHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uRXhwZXJpZW5jZUxpbmVTaWRlIC5jaXJjbGUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSg1MCUpO1xyXG4gICAgYm9yZGVyOiBibGFjayBzb2xpZCAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGhlaWdodDogMTJweDtcclxufVxyXG5cclxuLm9uZWUge1xyXG4gICAgbWFyZ2luOiAxNXB4IDE1cHggMHB4IDE1cHg7XHJcblxyXG59XHJcblxyXG4ub3V0cHV0IC5hc2lkZSAuaW1ne1xyXG4gICAgaGVpZ2h0OiAyNDBweDtcclxuICAgIC8qIHdpZHRoOiAxNjVweDsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLm91dHB1dCAuYXNpZGUgLmltZyBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjcwMHB4KXtcclxuXHJcbiAgICAubWFpbntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tIGlucHV0IC0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgXHJcbn1cclxuQG1lZGlhKG1pbi13aWR0aDoxMjAwcHgpe1xyXG4gICAgLmlucHV0IC5oZWFkZXIgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgXHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 6272:
/*!**************************************!*\
  !*** ./src/app/models/Experience.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Experience": () => (/* binding */ Experience)
/* harmony export */ });
class Experience {
}


/***/ }),

/***/ 9390:
/*!***************************************!*\
  !*** ./src/app/models/mainContect.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainContect": () => (/* binding */ mainContect)
/* harmony export */ });
class mainContect {
    constructor(headline, arr) {
        this.arr = [];
        this.headline = headline;
        this.arr = arr;
    }
}


/***/ }),

/***/ 5631:
/*!*********************************!*\
  !*** ./src/app/models/skill.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skill": () => (/* binding */ skill)
/* harmony export */ });
class skill {
    constructor(n, v) {
        this.name = n;
        this.value = v;
    }
}


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ 6369);
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/analytics */ 1162);




// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGE2FE-9jcb1ymt_C5OZd4rFyqYZKAd0w",
    authDomain: "cv-design-4f0f8.firebaseapp.com",
    projectId: "cv-design-4f0f8",
    storageBucket: "cv-design-4f0f8.appspot.com",
    messagingSenderId: "798381755581",
    appId: "1:798381755581:web:771b2ef18ac4cf232a3bd4",
    measurementId: "G-V3P492YQNR"
};
// Initialize Firebase
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_2__.initializeApp)(firebaseConfig);
const analytics = (0,firebase_analytics__WEBPACK_IMPORTED_MODULE_3__.getAnalytics)(app);
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map