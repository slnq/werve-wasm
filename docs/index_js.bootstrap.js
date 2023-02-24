"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcreate_wasm_app"] = self["webpackChunkcreate_wasm_app"] || []).push([["index_js"],{

/***/ "../pkg/wasm_game_of_life_bg.js":
/*!**************************************!*\
  !*** ../pkg/wasm_game_of_life_bg.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ElectricField\": () => (/* binding */ ElectricField),\n/* harmony export */   \"__wbg_error_f851667af71bcfc6\": () => (/* binding */ __wbg_error_f851667af71bcfc6),\n/* harmony export */   \"__wbg_new_abda76e883ba8a5f\": () => (/* binding */ __wbg_new_abda76e883ba8a5f),\n/* harmony export */   \"__wbg_stack_658279fe44541cf6\": () => (/* binding */ __wbg_stack_658279fe44541cf6),\n/* harmony export */   \"__wbindgen_object_drop_ref\": () => (/* binding */ __wbindgen_object_drop_ref),\n/* harmony export */   \"__wbindgen_throw\": () => (/* binding */ __wbindgen_throw),\n/* harmony export */   \"init_panic_hook\": () => (/* binding */ init_panic_hook),\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_game_of_life_bg.wasm */ \"../pkg/wasm_game_of_life_bg.wasm\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);\n_wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = new Uint8Array();\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(_wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n*/\nfunction init_panic_hook() {\n    _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.init_panic_hook();\n}\n\nfunction _assertClass(instance, klass) {\n    if (!(instance instanceof klass)) {\n        throw new Error(`expected instance of ${klass.name}`);\n    }\n    return instance.ptr;\n}\n/**\n* @param {ElectricField} electric_field\n*/\nfunction main(electric_field) {\n    _assertClass(electric_field, ElectricField);\n    _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.main(electric_field.ptr);\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachedInt32Memory0 = new Int32Array();\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(_wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachedInt32Memory0;\n}\n/**\n*/\nclass ElectricField {\n\n    static __wrap(ptr) {\n        const obj = Object.create(ElectricField.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_electricfield_free(ptr);\n    }\n    /**\n    * @returns {ElectricField}\n    */\n    static new() {\n        const ret = _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.electricfield_new();\n        return ElectricField.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        const ret = _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.electricfield_width(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    height() {\n        const ret = _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.electricfield_height(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    cqn() {\n        const ret = _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.electricfield_cqn(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    get_pointer() {\n        const ret = _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.electricfield_get_pointer(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} q\n    * @param {number} x\n    * @param {number} y\n    */\n    install_charge(q, x, y) {\n        _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.electricfield_install_charge(this.ptr, q, x, y);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    */\n    remove_charge(x, y) {\n        _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.electricfield_remove_charge(this.ptr, x, y);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    */\n    control_charge(x, y) {\n        _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.electricfield_control_charge(this.ptr, x, y);\n    }\n    /**\n    */\n    not_control_charge() {\n        _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.electricfield_not_control_charge(this.ptr);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    */\n    mouse_charge(x, y) {\n        _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.electricfield_mouse_charge(this.ptr, x, y);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    */\n    fix_charge(x, y) {\n        _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.electricfield_fix_charge(this.ptr, x, y);\n    }\n    /**\n    * @returns {boolean}\n    */\n    test2() {\n        const ret = _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.electricfield_test2(this.ptr);\n        return ret !== 0;\n    }\n}\n\nfunction __wbg_new_abda76e883ba8a5f() {\n    const ret = new Error();\n    return addHeapObject(ret);\n};\n\nfunction __wbg_stack_658279fe44541cf6(arg0, arg1) {\n    const ret = getObject(arg1).stack;\n    const ptr0 = passStringToWasm0(ret, _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);\n    const len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nfunction __wbg_error_f851667af71bcfc6(arg0, arg1) {\n    try {\n        console.error(getStringFromWasm0(arg0, arg1));\n    } finally {\n        _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(arg0, arg1);\n    }\n};\n\nfunction __wbindgen_object_drop_ref(arg0) {\n    takeObject(arg0);\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://create-wasm-app/../pkg/wasm_game_of_life_bg.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pkg_wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pkg/wasm_game_of_life_bg.wasm */ \"../pkg/wasm_game_of_life_bg.wasm\");\n/* harmony import */ var _pkg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pkg */ \"../pkg/wasm_game_of_life_bg.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ \"./input.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pkg__WEBPACK_IMPORTED_MODULE_1__, _pkg_wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_2__]);\n([_pkg__WEBPACK_IMPORTED_MODULE_1__, _pkg_wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n(0,_pkg__WEBPACK_IMPORTED_MODULE_1__.init_panic_hook)();\n\nconst electricField = _pkg__WEBPACK_IMPORTED_MODULE_1__.ElectricField[\"new\"]();\nconst width = electricField.width();\nconst height = electricField.height();\n\nconst canvas = document.getElementById(\"canvas\");\ncanvas.width = width;\ncanvas.height = height;\nconst cwidth = canvas.clientWidth;\nconst cheight = canvas.clientHeight;\nconst ctx = canvas.getContext('2d');\nconst input_radio = document.getElementsByName(\"input_radio\");\nlet radio = 'install';\nlet control = false;\nconst range = document.getElementById('range');\nconst rangev = document.getElementById('rangev');\nlet rangeq = 10;\n\nconst render = () => {\n  (0,_pkg__WEBPACK_IMPORTED_MODULE_1__.main)(electricField);\n  ctx.putImageData(new ImageData(new Uint8ClampedArray(_pkg_wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_2__.memory.buffer, electricField.get_pointer(), width * height * 4), width, height), 0, 0);\n}\n\nfunction animation(){\n  let fps = 0;\n  let frameCount = 0;\n  let startTime;\n  let endTime;\n  startTime = new Date().getTime();\n  function animationLoop(){\n      frameCount ++;\n      endTime = new Date().getTime();\n      if(endTime - startTime >= 1000){\n          fps = frameCount;\n          frameCount = 0;\n          startTime = new Date().getTime();\n      }\n      render();\n      requestAnimationFrame(animationLoop);\n      let animationFPS = document.getElementById(\"fps\");\n      animationFPS.innerHTML = fps;\n  }\n  animationLoop();\n}\nanimation();\n\nfunction radio_situation() {\n  for (let i = 0; i < 4; i++){\n    if (input_radio.item(i).checked){\n      radio = input_radio.item(i).value;\n      break;\n    }\n  }\n}\n\nfunction input(e) {\n  const xy = (0,_input__WEBPACK_IMPORTED_MODULE_0__.get_mouse_coordinate)(e, cwidth,  cheight, width, height)\n  if (radio == 'install') {\n    electricField.install_charge(rangeq/10, xy[0], xy[1], width, height)\n  } else if (radio == 'remove') {\n    electricField.remove_charge(xy[0], xy[1], width, height)\n  } else if (radio == 'control') {\n    control = true;\n    electricField.control_charge(xy[0], xy[1])\n  } else if (radio == 'fix') {\n    electricField.fix_charge(xy[0], xy[1])\n  }\n}\n\nfunction mouseMove(e) {\n  if (radio == 'control' && control) {\n    const xy = (0,_input__WEBPACK_IMPORTED_MODULE_0__.get_mouse_coordinate)(e, cwidth,  cheight, width, height)\n    electricField.mouse_charge(xy[0], xy[1])\n  }\n}\n\nfunction mouseUp(e) {\n  if (radio == 'control') {\n    control = false;\n    electricField.not_control_charge()\n  }\n}\n\nfunction get_range(e) {\n  rangeq = Number(range.value)\n  if (rangeq <= 0) {\n    rangeq-=1;\n  }\n  rangev.innerHTML = rangeq;\n}\n\ninput_radio.forEach(function(e) { e.addEventListener('click', radio_situation) });\ncanvas.addEventListener('mousedown', input);\ncanvas.addEventListener('mousemove', mouseMove);//touch系にも対応しようね\ndocument.addEventListener('mouseup', mouseUp);\nrange.addEventListener('input', get_range);\n\nradio_situation();\nget_range();\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://create-wasm-app/./index.js?");

/***/ }),

/***/ "./input.js":
/*!******************!*\
  !*** ./input.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"get_mouse_coordinate\": () => (/* binding */ get_mouse_coordinate)\n/* harmony export */ });\nfunction get_mouse_coordinate(e, canvasClientWidth,  canvasClientHeight, canvasWidth, canvasHeight) {\n    const rect = e.target.getBoundingClientRect()\n    return [Math.floor((e.clientX - rect.left) * canvasWidth / canvasClientWidth), Math.floor((e.clientY - rect.top) * canvasHeight / canvasClientHeight)]\n}\n\n//# sourceURL=webpack://create-wasm-app/./input.js?");

/***/ }),

/***/ "../pkg/wasm_game_of_life_bg.wasm":
/*!****************************************!*\
  !*** ../pkg/wasm_game_of_life_bg.wasm ***!
  \****************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __webpack_instantiate__ = ([WEBPACK_IMPORTED_MODULE_0]) => {\n\treturn __webpack_require__.v(exports, module.id, \"0c7c011baf4e80399430\", {\n\t\t\"./wasm_game_of_life_bg.js\": {\n\t\t\t\"__wbg_new_abda76e883ba8a5f\": WEBPACK_IMPORTED_MODULE_0.__wbg_new_abda76e883ba8a5f,\n\t\t\t\"__wbg_stack_658279fe44541cf6\": WEBPACK_IMPORTED_MODULE_0.__wbg_stack_658279fe44541cf6,\n\t\t\t\"__wbg_error_f851667af71bcfc6\": WEBPACK_IMPORTED_MODULE_0.__wbg_error_f851667af71bcfc6,\n\t\t\t\"__wbindgen_object_drop_ref\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_drop_ref,\n\t\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw\n\t\t}\n\t});\n}\n__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {\n\ttry {\n\t/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./wasm_game_of_life_bg.js */ \"../pkg/wasm_game_of_life_bg.js\");\n\tvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([WEBPACK_IMPORTED_MODULE_0]);\n\tvar [WEBPACK_IMPORTED_MODULE_0] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;\n\tawait __webpack_require__.v(exports, module.id, \"0c7c011baf4e80399430\", {\n\t\t\"./wasm_game_of_life_bg.js\": {\n\t\t\t\"__wbg_new_abda76e883ba8a5f\": WEBPACK_IMPORTED_MODULE_0.__wbg_new_abda76e883ba8a5f,\n\t\t\t\"__wbg_stack_658279fe44541cf6\": WEBPACK_IMPORTED_MODULE_0.__wbg_stack_658279fe44541cf6,\n\t\t\t\"__wbg_error_f851667af71bcfc6\": WEBPACK_IMPORTED_MODULE_0.__wbg_error_f851667af71bcfc6,\n\t\t\t\"__wbindgen_object_drop_ref\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_drop_ref,\n\t\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw\n\t\t}\n\t});\n\t__webpack_async_result__();\n\t} catch(e) { __webpack_async_result__(e); }\n}, 1);\n\n//# sourceURL=webpack://create-wasm-app/../pkg/wasm_game_of_life_bg.wasm?");

/***/ })

}]);