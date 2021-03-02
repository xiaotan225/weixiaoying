(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/common/video-details"],{

/***/ 76:
/*!********************************************************************************************!*\
  !*** G:/桌面/桌面文件夹/玩一玩/weixiaoying_uniapp/main.js?{"page":"pages%2Fcommon%2Fvideo-details"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _videoDetails = _interopRequireDefault(__webpack_require__(/*! ./pages/common/video-details.vue */ 77));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_videoDetails.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 77:
/*!*************************************************************************!*\
  !*** G:/桌面/桌面文件夹/玩一玩/weixiaoying_uniapp/pages/common/video-details.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _video_details_vue_vue_type_template_id_8512d876___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-details.vue?vue&type=template&id=8512d876& */ 78);
/* harmony import */ var _video_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-details.vue?vue&type=script&lang=js& */ 80);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _video_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _video_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _video_details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video-details.vue?vue&type=style&index=0&lang=css& */ 82);
/* harmony import */ var _D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _video_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _video_details_vue_vue_type_template_id_8512d876___WEBPACK_IMPORTED_MODULE_0__["render"],
  _video_details_vue_vue_type_template_id_8512d876___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _video_details_vue_vue_type_template_id_8512d876___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/common/video-details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 78:
/*!********************************************************************************************************!*\
  !*** G:/桌面/桌面文件夹/玩一玩/weixiaoying_uniapp/pages/common/video-details.vue?vue&type=template&id=8512d876& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_details_vue_vue_type_template_id_8512d876___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./video-details.vue?vue&type=template&id=8512d876& */ 79);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_details_vue_vue_type_template_id_8512d876___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_details_vue_vue_type_template_id_8512d876___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_details_vue_vue_type_template_id_8512d876___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_details_vue_vue_type_template_id_8512d876___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 79:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/桌面/桌面文件夹/玩一玩/weixiaoying_uniapp/pages/common/video-details.vue?vue&type=template&id=8512d876& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 80:
/*!**************************************************************************************************!*\
  !*** G:/桌面/桌面文件夹/玩一玩/weixiaoying_uniapp/pages/common/video-details.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./video-details.vue?vue&type=script&lang=js& */ 81);
/* harmony import */ var _D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 81:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/桌面/桌面文件夹/玩一玩/weixiaoying_uniapp/pages/common/video-details.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 8));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var commonListFill = function commonListFill() {__webpack_require__.e(/*! require.ensure | components/common/common-list-fill */ "components/common/common-list-fill").then((function () {return resolve(__webpack_require__(/*! @/components/common/common-list-fill.vue */ 141));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var popUpModel = function popUpModel() {__webpack_require__.e(/*! require.ensure | components/common/pop-up-model */ "components/common/pop-up-model").then((function () {return resolve(__webpack_require__(/*! @/components/common/pop-up-model.vue */ 167));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =


























































































































































































































{
  components: {
    commonListFill: commonListFill,
    popUpModel: popUpModel },

  data: function data() {
    return {
      item: {},
      // 影片详情数据
      videoDatails: {
        vod_cont: [],
        vod_content: [] },

      // 影片推荐列表
      videoList: [],
      // 是否展开和收起（影片介绍）
      isShow: false,
      // 零时 影片介绍
      tempVodCont: '',
      // 豆瓣评分数据
      filterVoList: {
        directors: [{}],
        rating: {
          value: 0 } },


      // 评分处理数据
      newArr: [],
      imagePath: '',
      canvasHidden: '',
      tempImgVod: '' };

  },
  computed: {
    isShowKan: function isShowKan() {
      return this.$store.state.vodClassify.isShow;
    } },

  onLoad: function onLoad(e) {
    // this.$refs.popUpModel.open()

    this.item = JSON.parse(e.item);
    this.getVideoDatails();
    var _this = this;
    // 获取豆瓣视频数据（评分）
    this.$api.getScoreVod({
      vod_name: this.item.vod_name }).
    then(function (res) {
      // 找到对应的视频数据
      var filterVoList = res.data.subjects.filter(function (item) {
        return item.title == _this.item.vod_name;
      });
      if (filterVoList.length <= 0) {
        // 没有找到对应视频数据 （没有评分）
        _this.filterVoList = res.data.subjects[0];
        _this.filterVoList.directors = res.data.directors;
      } else {
        _this.filterVoList = filterVoList[0];
      }
      // 评分数 做页面 处理
      var star_count = _this.filterVoList.rating.star_count || [];
      if (String(star_count).indexOf('.') != -1) {
        // 小数
        var intSatr = parseInt(star_count);

        for (var i = 0; i < 5; i++) {
          if (i < intSatr) {
            _this.newArr.push(1);
          } else if (i <= intSatr) {
            _this.newArr.push(3);
          } else {
            _this.newArr.push(2);
          }

        }
      } else {
        // 整数
        var intSatr = parseInt(star_count);
        for (var i = 0; i < 5; i++) {
          if (i < intSatr) {
            _this.newArr.push(1);
          } else {
            _this.newArr.push(2);
          }

        }

      }

    });


  },
  // 分享
  onShareAppMessage: function onShareAppMessage(e) {
    return {
      title: this.videoDatails.vod_name,
      path: '/pages/common/video-details?item=' + JSON.stringify(this.item),
      imageUrl: this.tempImgVod,
      content: this.videoDatails.vod_name,
      desc: '免费观看' + this.videoDatails.vod_name,
      success: function success(res) {} };

  },
  methods: {
    // 分享邀请App
    invite: function invite() {
      var _this = this;
      var routes = getCurrentPages(); // 获取当前打开过的页面路由数组
      var curRoute = routes[routes.length - 1].route; //获取当前页面路由
      var curParam = routes[routes.length - 1].options; //获取路由参数
      var url = 'http://42.192.125.82/#/' + curRoute + '?item=' + JSON.stringify(_this.item);
      console.log(url);
      uni.showActionSheet({
        itemList: ['分享好友', '分享朋友圈', '取消'],
        success: function success(res) {
          if (res.tapIndex == 0) {
            uni.share({
              provider: "weixin",
              scene: "WXSceneSession",
              type: 0,
              href: url,
              title: "\u9080\u8BF7\u60A8\u4E00\u8D77\u770B\u201C".concat(_this.item.vod_name, "\u201D"),
              imageUrl: _this.videoDatails.vod_pic,
              summary: _this.videoDatails.vod_cont,
              // imageUrl: "/static/img1.jpg",
              success: function success(res) {
                if (res.share == 'ok') {
                  uni.showToast({
                    title: "分享成功",
                    icon: "none" });

                } else {
                  uni.showToast({
                    title: "分享失败",
                    icon: "none" });

                }
              },
              fail: function fail(err) {
                uni.showToast({
                  title: "分享失败",
                  icon: "none" });

                console.log("fail:" + JSON.stringify(err));
              } });



          } else if (res.tapIndex == 1) {
            uni.share({
              provider: "weixin",
              scene: "WXSceneSession",
              type: 0,
              href: url,
              title: "\u9080\u8BF7\u60A8\u4E00\u8D77\u770B\u201C".concat(_this.item.vod_name, "\u201D"),
              imageUrl: _this.videoDatails.vod_pic,
              summary: _this.videoDatails.vod_cont,
              // imageUrl: "/static/img1.jpg",
              success: function success(res) {
                if (res.share == 'ok') {
                  uni.showToast({
                    title: "分享成功",
                    icon: "none" });

                } else {
                  uni.showToast({
                    title: "分享失败",
                    icon: "none" });

                }
              },
              fail: function fail(err) {
                uni.showToast({
                  title: "分享失败",
                  icon: "none" });

                console.log("fail:" + JSON.stringify(err));
              } });



          }
        },
        fail: function fail(res) {
          console.log(res.errMsg);
        } });



    },

    //将canvas转换为图片保存到本地，然后将图片路径传给image图片的src
    createNewImg: function createNewImg() {
      var that = this;
      var context = wx.createCanvasContext('mycanvas');
      context.setFillStyle("#FFFFFF");
      context.fillRect(0, 0, 375, 430);
      // 图片
      context.drawImage(this.tempImgVod, 10, 10, 130, 200); // 在刚刚裁剪的园上画图
      // 名字
      context.setFontSize(20);
      context.setFillStyle('#000000');
      context.setTextAlign('left');
      context.fillText(this.videoDatails.vod_name, 162, 50);
      context.stroke();

      // 类型
      context.setFontSize(15);
      context.setFillStyle('#000000');
      context.setTextAlign('left');
      if (this.filterVoList) {
        context.fillText('类型：' + this.filterVoList.genres || false, 162, 95);
      } else {
        context.fillText('类型：' + '未知', 162, 95);
      }
      context.stroke();
      // 演员
      context.setFontSize(15);
      context.setFillStyle('#000000');
      context.setTextAlign('left');
      context.fillText('演员：' + this.videoDatails.vod_actor.slice(0, 12) + '...', 162, 120);
      context.stroke();
      // 详情
      context.setFontSize(15);
      context.setFillStyle('#000000');
      context.setTextAlign('left');
      context.fillText('详情：' + this.videoDatails.vod_blurb.slice(0, 11), 162, 120 + 25);
      context.stroke();
      // 详情
      context.setFontSize(15);
      context.setFillStyle('#000000');
      context.setTextAlign('left');
      context.fillText(this.videoDatails.vod_blurb.slice(11, 11 + 18), 162, 120 + 25 + 20);
      context.stroke();

      // 详情
      context.setFontSize(15);
      context.setFillStyle('#000000');
      context.setTextAlign('left');
      context.fillText(this.videoDatails.vod_blurb.slice(11 + 18, 11 + 18 + 18), 162, 120 + 25 + 20 + 20);
      context.stroke();

      // 详情
      context.setFontSize(15);
      context.setFillStyle('#000000');
      context.setTextAlign('left');
      context.fillText(this.videoDatails.vod_blurb.slice(11 + 18 + 18, 11 + 18 + 18 + 20) + '...', 162, 120 + 25 + 20 +
      20 + 20);
      context.stroke();

      // 阴影
      context.beginPath();
      context.setFillStyle("#fff");
      context.setShadow(0, 0, 10, "rgba(0, 0, 0, 0.2)");
      context.fillRect(10, 260, 350, 120);

      context.beginPath();
      var grd = context.createLinearGradient(0, 0, 200, 0);
      grd.addColorStop(0, 'white');
      grd.addColorStop(1, 'white');
      context.setFillStyle(grd);
      context.fillRect(10, 260, 350, 120);
      context.closePath();


      // 详情
      context.setFontSize(16);
      context.setFillStyle('#000000');
      context.setTextAlign('left');
      context.fillText('长按识别小程序视频', 20, 310);
      context.stroke();

      // 详情
      context.setFontSize(14);
      context.setFillStyle('#474747');
      context.setTextAlign('left');
      context.fillText('即可免费在线观看', 20, 340);
      context.stroke();
      // 
      //绘制小程序图片
      context.arc(280, 320, 50, 0, 2 * Math.PI); //画出圆
      context.strokeStyle = "#ffe200";
      context.clip(); //裁剪上面的圆形
      context.drawImage('../../static/img.jpg', 230, 270, 100, 100); // 在刚刚裁剪的园上画图
      context.draw();
      //将生成好的图片保存到本地，需要延迟一会，绘制期间耗时
      setTimeout(function () {
        wx.canvasToTempFilePath({
          canvasId: 'mycanvas',
          success: function success(res) {
            var tempFilePath = res.tempFilePath;
            that.imagePath = tempFilePath,
            that.canvasHidden = true;
          },
          fail: function fail(res) {
            console.log(res);
          } });

      }, 200);
    },
    //点击保存到相册
    baocun: function baocun() {
      var that = this;
      that.formSubmit();
      wx.saveImageToPhotosAlbum({
        filePath: that.imagePath,
        success: function success(res) {
          wx.showModal({
            content: '图片已保存到相册，赶紧晒一下吧~',
            showCancel: false,
            confirmText: '好的',
            confirmColor: '#333',
            success: function success(res) {
              if (res.confirm) {
                console.log('用户点击确定');
                /* 该隐藏的隐藏 */

              }
            },
            fail: function fail(res) {
              console.log(11111);
            } });

        } });

    },
    //点击生成
    formSubmit: function formSubmit(e) {

      var that = this;
      // this.setData({
      // 	maskHidden: false
      // });
      wx.showToast({
        title: '绘制中...',
        icon: 'loading',
        duration: 1000 });

      setTimeout(function () {
        wx.hideToast();
        that.createNewImg();
        // that.setData({
        // 	maskHidden: true
        // });
      }, 1000);
    },
    // 打开海报 取消海报
    haibao: function haibao(type) {
      if (type == 1) {
        this.$refs.popUpModel.close();
        return;
      }
      this.$refs.popUpModel.open();
    },
    //返回 
    backTap: function backTap() {
      uni.switchTab({
        url: "/pages/index/index" });

    },
    // to播放视频
    toKan: function toKan() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var data;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                  _this2.$api.collectVod({
                    vod_id: _this2.item.vod_id,
                    isCollect: true,
                    type: 2 }));case 2:data = _context.sent;

                _this2.$U.navTo('./video-kan?item=' + JSON.stringify(_this2.item));case 4:case "end":return _context.stop();}}}, _callee);}))();
    },
    // 影片介绍文字是否展示全部
    isShowEvent: function isShowEvent() {
      this.isShow = !this.isShow;
      if (this.isShow) {
        this.videoDatails.vod_cont = this.videoDatails.vod_content;
      } else {
        this.videoDatails.vod_cont = this.tempVodCont;
      }
      // this.videoDatails = Object.assign({},this.videoDatails)
    },
    // 获取视频详情
    getVideoDatails: function getVideoDatails() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var _this, data;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                _this = _this3;_context2.next = 3;return (
                  _this3.$api.getVideoDatails({
                    vodid: _this3.item.vod_id }));case 3:data = _context2.sent;

                _this3.videoDatails = data.data[0];
                // 影片介绍
                _this3.videoDatails.vod_cont = _this3.tempVodCont = data.data[0].vod_content.slice(0, 100);
                // 为你推荐视频列表
                _this3.videoList = data.list;

                uni.getImageInfo({
                  src: _this3.videoDatails.vod_pic,
                  success: function success(res) {
                    _this.tempImgVod = res.path;
                    _this.formSubmit();
                  } });case 8:case "end":return _context2.stop();}}}, _callee2);}))();



    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 82:
/*!**********************************************************************************************************!*\
  !*** G:/桌面/桌面文件夹/玩一玩/weixiaoying_uniapp/pages/common/video-details.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./video-details.vue?vue&type=style&index=0&lang=css& */ 83);
/* harmony import */ var _D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 83:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/桌面/桌面文件夹/玩一玩/weixiaoying_uniapp/pages/common/video-details.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[76,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/common/video-details.js.map