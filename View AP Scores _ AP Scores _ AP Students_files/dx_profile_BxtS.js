/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/CBAccordion.js"
/*!*******************************!*\
  !*** ./src/js/CBAccordion.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _scss_includes_apricot_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/includes/apricot-base.scss */ "./src/scss/includes/apricot-base.scss");
/* harmony import */ var _scss_includes_accordion_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/includes/accordion.scss */ "./src/scss/includes/accordion.scss");
/* harmony import */ var _CBUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CBUtils */ "./src/js/CBUtils.js");
/* ========================================================================
 * Apricot's Accordion
 * ======================================================================== */

// SCSS



// javaScript


/**
 * Accordion
 *
 * @export
 * @param {Object} data
 * @param {Element} data.elem
 * @param {String} data.headingClass
 * @param {String} data.panelClass
 * @param {Boolean} data.multiOpen
 * @param {Element} data.targetElem
 * @param {Boolean} data.removeFocusableElements
 * @param {Array} data.extendFocusableElements
 * @param {String} data.triggerClass
 * @param {String} data.targetPanelClass
 * @param {String} data.triggerLabel
 * @param {String} data.triggerLabelActive
 * @param {Number} data.heightAdjustment
 * @param {Boolean} data.animation
 * @param {Boolean} data.mathJax
 * @param {Function} data.callBack
 * @param {Function} data.onChange
 * @returns {{adjustHeight: Function}}
 * @returns {{setPanelState: Function}}
 * @returns {{destroy: Function}}
 */

const Accordion = (data = {}) => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return {
      adjustHeight: () => {},
      setPanelState: () => {},
      destroy: () => {}
    };
  }
  const defaultData = {
    elem: null,
    headingClass: 'cb-accordion-heading',
    panelClass: 'cb-accordion-panel',
    multiOpen: true,
    trigger: false,
    targetElem: null,
    removeFocusableElements: false,
    extendFocusableElements: null,
    triggerClass: 'cb-accordion-trigger',
    targetPanelClass: 'cb-accordion-trigger-panel',
    triggerLabel: 'See More',
    triggerLabelActive: 'See Less',
    heightAdjustment: 0,
    animation: true,
    nested: false,
    controlsNested: false,
    callBack: null,
    onChange: null,
    mathJax: false
  };
  data = {
    ...defaultData,
    ...data
  };
  let elem = data.elem;
  let headingClass = data.headingClass;
  let panelClass = data.panelClass;
  let multiOpen = data.multiOpen;
  let nested = data.nested;
  let callBack = data.callBack;
  let onChange = data.onChange;

  // Split
  let targetElem = data.targetElem;
  let triggerLabel = data.triggerLabel;
  let triggerLabelActive = data.triggerLabelActive;
  let trigger = _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].elemExists(targetElem);
  let resizeId = 0;
  let changeTime = 0;
  let focusableElements = data.removeFocusableElements ? ['a[href]'] : _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].FOCUSABLE_ELEMENTS;
  const isAndroid = _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].OSName().name === 'Android';
  if (!_CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].elemExists(elem)) return false;
  const getFocusableNodes = panel => {
    return panel.querySelectorAll(focusableElements);
  };
  const a11yExpCol = () => {
    if (trigger) return;
    const exp = elem.querySelector('.cb-accordion-expand');
    const col = elem.querySelector('.cb-accordion-collapse');
    const colHead = elem.querySelectorAll('.cb-accordion-heading[aria-expanded="false"]').length;
    const expHead = elem.querySelectorAll('.cb-accordion-heading[aria-expanded="true"]').length;
    const head = elem.getElementsByClassName(headingClass).length;
    if (!exp || !col) return;
    if (head === expHead) {
      _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].attr(exp, 'aria-current', 'true');
      _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].removeAttr(col, 'aria-current');
    } else if (head === colHead) {
      _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].attr(col, 'aria-current', 'true');
      _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].removeAttr(exp, 'aria-current');
    } else {
      _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].removeAttr(col, 'aria-current');
      _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].removeAttr(exp, 'aria-current');
    }
  };
  const a11y = header => {
    const panel = trigger ? targetElem : _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].getNextSibling(header, '.' + panelClass);
    const mode = _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].hasClass(header, 'cb-active');

    // mode - true: open
    // mode - false: close
    _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].attr(header, 'aria-expanded', String(mode));
    if (mode) {
      if (!isAndroid) {
        _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].attr(panel, 'aria-hidden', String(!mode));
      } else {
        _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].removeAttr(panel, 'aria-hidden');
      }
    } else {
      _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].attr(panel, 'aria-hidden', String(!mode));
    }

    // Hide all focusable tags
    Array.prototype.forEach.call(panel.querySelectorAll(focusableElements), a => {
      _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].attr(a, 'tabIndex', mode ? '0' : '-1');
      _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].attr(a, 'aria-hidden', String(!mode));
    });
    a11yExpCol();
  };
  const resetAcc = () => {
    const active = elem.getElementsByClassName('cb-active');
    const open = elem.getElementsByClassName('cb-in');
    Array.prototype.forEach.call(active, activeHeader => {
      _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].removeClass(activeHeader, 'cb-active');
      a11y(activeHeader);
    });
    Array.prototype.forEach.call(open, openPanel => {
      _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].removeClass(openPanel, 'cb-in');
      openPanel.style.removeProperty('height');
    });
  };
  const customTriggerEvent = (acc, panel) => {
    const event = new CustomEvent('apricot_accordion');
    if (_CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].hasClass(panel, 'cb-in')) {
      event.data = {
        open: true
      };
      panel.focus();
    } else {
      event.data = {
        open: false
      };
    }
    acc.dispatchEvent(event);
    callBack && callBack(panel);
  };
  const useAnimation = () => {
    return _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].reduceMotionChanged() ? false : data.animation;
  };
  const panelAdjustment = (panel, load) => {
    // A11Y
    if (useAnimation() && data.animation) {
      // Reset First
      _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].removeClass(panel, 'transition');
      if (_CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].hasClass(panel, 'cb-in')) {
        _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].addClass(panel, 'cb-tmp-in');
      }

      // re-calculate
      _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].addClass(panel, 'cb-in');
      const height = panel.offsetHeight + data.heightAdjustment;
      _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].attr(panel, 'data-cb-height', height);
      _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].removeClass(panel, 'cb-in');
      if (!load) {
        if (_CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].hasClass(panel, 'cb-tmp-in')) {
          _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].addClass(panel, 'cb-in');
          _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].removeClass(panel, 'cb-tmp-in');
          panel.style.height = `${height}px`;
        }
      }
    } else {
      if (_CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].hasClass(panel, 'cb-in')) {
        _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].addClass(panel, 'cb-tmp-in');
        _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].removeClass(panel, 'cb-in');
      }
    }
  };

  // Panel heigh check after resize
  const adjustAccHeight = () => {
    if (trigger) {
      if (_CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].hasClass(targetElem, 'cb-in')) {
        targetElem.style.height = 'auto';
      }
      panelAdjustment(targetElem);
    } else {
      let panelList = elem.getElementsByClassName(panelClass);
      if (nested) {
        panelList = [].slice.call(panelList, 0).reverse();
      }
      Array.prototype.forEach.call(panelList, panel => {
        if (_CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].hasClass(panel, 'cb-in')) {
          panel.style.height = 'auto';
        }
        panelAdjustment(panel);
      });
    }
  };
  const customNoTriggerEvent = (acc, panel) => {
    const event = new CustomEvent('apricot_accordion');
    event.data = {
      open: _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].hasClass(panel, 'cb-in')
    };
    acc.dispatchEvent(event);
    callBack && callBack(panel);
  };
  const noTriggerClickHeader = (e, acc) => {
    // Click event for header
    if (e) {
      e.preventDefault();
      acc = e.currentTarget;
    }
    const panel = _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].getNextSibling(acc, '.' + panelClass);
    let panelHeight = panel.getAttribute('data-cb-height');
    if (_CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].elemExists(panel)) {
      // Reset if multi open option is off
      if (!multiOpen) {
        if (!_CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].hasClass(panel, 'cb-in')) {
          resetAcc();
        }
      }
      if (_CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].hasClass(panel, 'cb-in')) {
        panel.style.removeProperty('height');
      } else {
        if (panelHeight === null) {
          panelAdjustment(panel);
          panelHeight = panel.getAttribute('data-cb-height');
        }
        _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].addClass(panel, 'transition');
        panel.style.height = panelHeight + 'px';
      }
      _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].toggleClass(panel, 'cb-in');
      _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].toggleClass(acc, 'cb-active');
      a11y(acc);
      if (nested) {
        adjustAccHeight();
      }
      let count = 0;
      if (useAnimation() && data.animation) {
        // dispatch event after transition is finished
        panel.addEventListener('transitionend', evn => {
          evn.stopPropagation();
          if (count === 0 && evn.propertyName === 'height') {
            customNoTriggerEvent(acc, panel);
            count++;
          }
        }, false);
      } else {
        customNoTriggerEvent(acc, panel);
      }
      onChange && setTimeout(onChange(panel), changeTime);
    }
  };
  const triggerLabelVal = mode => {
    const triggerLabelElem = elem.firstElementChild;
    if (!_CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].elemExists(triggerLabelElem)) return;
    if (mode) {
      triggerLabelElem.innerHTML = triggerLabel;
    } else {
      triggerLabelElem.innerHTML = triggerLabelActive;
    }
  };
  const a11yTabIndex = (panel, mode) => {
    getFocusableNodes(panel).forEach(node => {
      _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].attr(node, 'tabIndex', mode);
    });
  };
  const triggerClickHeader = e => {
    e.preventDefault();
    const acc = e.currentTarget;
    const panel = targetElem;
    const panelHeight = panel.getAttribute('data-cb-height');

    // It's already open
    if (_CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].hasClass(panel, 'cb-in')) {
      panel.style.removeProperty('height');
      triggerLabelVal(true);
      a11yTabIndex(panel, 0);
    } else {
      _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].addClass(panel, 'transition');
      panel.style.height = panelHeight + 'px';
      triggerLabelVal(false);
      a11yTabIndex(panel, -1);
    }
    _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].toggleClass(panel, 'cb-in');
    _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].toggleClass(acc, 'cb-active');
    a11y(acc);
    let count = 0;
    if (useAnimation() && data.animation) {
      // dispatch event after transition is finished
      panel.addEventListener('transitionend', evn => {
        evn.stopPropagation();
        if (count === 0 && evn.propertyName === 'height') {
          customTriggerEvent(acc, panel);
          count++;
        }
      });
    } else {
      customTriggerEvent(acc, panel);
    }
    onChange && setTimeout(onChange(panel), changeTime);
  };
  const a11YKeydown = e => {
    const k = e.which || e.keyCode;

    // space
    if (k === 32) {
      e.preventDefault();
      if (!trigger) {
        noTriggerClickHeader(e);
      } else {
        triggerClickHeader(e);
      }
    }
  };
  const delayedResize = () => {
    clearTimeout(resizeId);
    resizeId = setTimeout(adjustAccHeight, 500);
  };

  // open panel if needed
  const setupHeight = () => {
    if (trigger) {
      panelAdjustment(targetElem, true);
      if (_CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].hasClass(targetElem, 'cb-tmp-in')) {
        elem.click();
        _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].removeClass(targetElem, 'cb-tmp-in');
      }
    } else {
      Array.prototype.forEach.call(elem.getElementsByClassName(panelClass), panel => {
        panelAdjustment(panel, true);
        if (_CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].hasClass(panel, 'cb-tmp-in')) {
          const heading = _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].parent(panel).querySelector('.' + headingClass);
          noTriggerClickHeader(null, heading);
          _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].removeClass(panel, 'cb-tmp-in');
        }
      });
    }
  };

  // 1: open
  // 0: close
  const setPanelState = (header, mode) => {
    if (!elem.contains(header)) return;
    if (_CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].hasClass(header, 'cb-active') && !mode) {
      header.click();
    } else if (!_CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].hasClass(header, 'cb-active') && mode) {
      header.click();
    }
  };
  const clickAllEvents = e => {
    e.preventDefault();
    Array.prototype.forEach.call(elem.getElementsByClassName(headingClass), header => {
      if (_CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].hasClass(e.currentTarget, 'cb-accordion-expand')) {
        if (!_CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].hasClass(header, 'cb-active')) {
          if (!nested) {
            header.click();
          } else if (nested && data.controlsNested) {
            header.click();
          } else if (nested) {
            if (!_CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].hasClass(header, 'cb-header-nested')) {
              header.click();
            }
          }
        }
      } else if (_CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].hasClass(e.currentTarget, 'cb-accordion-collapse')) {
        if (_CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].hasClass(header, 'cb-active')) {
          if (!nested) {
            header.click();
          } else if (nested && data.controlsNested) {
            header.click();
          } else if (nested) {
            if (!_CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].hasClass(header, 'cb-header-nested')) {
              header.click();
            }
          }
        }
      }
    });
  };
  const allEvents = () => {
    if (elem.querySelector('.cb-accordion-collapse')) {
      elem.querySelector('.cb-accordion-collapse').addEventListener('click', clickAllEvents);
    }
    if (elem.querySelector('.cb-accordion-expand')) {
      elem.querySelector('.cb-accordion-expand').addEventListener('click', clickAllEvents);
    }
  };
  const markNested = () => {
    Array.prototype.forEach.call(elem.getElementsByClassName(headingClass), header => {
      if (_CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].getClosest(header, '.cb-accordion-panel-content')) {
        _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].addClass(header, 'cb-header-nested');
      }
    });
  };
  const accFocusableNodes = panel => {
    getFocusableNodes(panel).forEach(node => {
      _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].attr(node, 'data-cb-focusable', 'true');
    });
  };
  const a11yFocusableItems = () => {
    if (trigger) {
      accFocusableNodes(targetElem);
      if (_CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].hasClass(targetElem, 'cb-in')) {
        a11yTabIndex(targetElem, 0);
      } else {
        a11yTabIndex(targetElem, -1);
      }
    } else {
      Array.prototype.forEach.call(elem.getElementsByClassName(panelClass), panel => {
        accFocusableNodes(panel);
        if (_CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].hasClass(panel, 'cb-in')) {
          a11yTabIndex(panel, 0);
        } else {
          a11yTabIndex(panel, -1);
        }
      });
    }
  };
  const destroy = () => {
    if (elem.accordionPlugin === 'cb') {
      elem.accordionPlugin = null;
      if (useAnimation() && data.animation) {
        window.removeEventListener('resize', delayedResize);
      }
      // Accordion controls
      if (elem.querySelector('.cb-accordion-collapse')) {
        elem.querySelector('.cb-accordion-collapse').removeEventListener('click', clickAllEvents);
        _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].removeAttr(elem.querySelector('.cb-accordion-collapse'), 'aria-current');
      }
      if (elem.querySelector('.cb-accordion-expand')) {
        elem.querySelector('.cb-accordion-expand').removeEventListener('click', clickAllEvents);
        _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].removeAttr(elem.querySelector('.cb-accordion-expand'), 'aria-current');
      }

      // Height adjustment
      Array.prototype.forEach.call(elem.getElementsByClassName(panelClass), panel => {
        panel.style.height = '';
      });
      if (!trigger) {
        Array.prototype.forEach.call(elem.getElementsByClassName(headingClass), header => {
          const panel = _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].getNextSibling(header, '.' + panelClass);
          _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].removeAttr(header, 'aria-expanded');
          _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].removeAttr(header, 'aria-controls');
          _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].removeClass(header, 'cb-active');
          _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].removeAttr(panel, 'aria-labelledby');
          _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].removeAttr(panel, 'aria-hidden');
          _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].removeAttr(panel, 'data-cb-height');
          header.removeEventListener('click', noTriggerClickHeader);
          header.removeEventListener('keydown', a11YKeydown);
        });
      } else {
        const panel = targetElem;
        _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].removeAttr(elem, 'aria-expanded');
        _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].removeAttr(elem, 'aria-controls');
        _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].removeClass(elem, 'cb-active');
        _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].removeAttr(panel, 'aria-labelledby');
        _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].removeAttr(panel, 'aria-hidden');
        _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].removeAttr(panel, 'data-cb-height');
        panel.style.height = 'auto';
        elem.removeEventListener('click', triggerClickHeader);
        elem.removeEventListener('keydown', a11YKeydown);
      }
    }
  };
  const getMathJaxObject = () => {
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        if (window.MathJax) {
          clearInterval(interval); // Stop the interval once MathJax is available

          resolve(window.MathJax); // Resolve the promise with the MathJax object
        }
      }, 50); // Check every 50 milliseconds

      // Set a timeout to reject the promise if MathJax doesn't load within a certain time
      setTimeout(() => {
        clearInterval(interval);
        reject(new Error('MathJax did not load within the expected time.'));
      }, 2000);
    });
  };
  const init = async () => {
    elem.accordionPlugin = 'cb';

    // expand default focusable
    if (data.extendFocusableElements) {
      if (data.mathJax) {
        getMathJaxObject().then(mathJax => {
          const inTabOrder = _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].deepSearch(mathJax, 'inTabOrder');
          // only expand if user in MathJax has selected "Include in tab order"
          if (inTabOrder) {
            focusableElements = [...focusableElements, ...data.extendFocusableElements];
          }
        }).catch(error => {
          console.warn(error);
        });
      } else {
        focusableElements = [...focusableElements, ...data.extendFocusableElements];
      }
    }
    if (trigger) {
      panelClass = data.targetPanelClass;
      triggerLabelVal(true);
    }
    if (nested) {
      markNested();
    }

    // Traditional Accordion
    if (!trigger) {
      Array.prototype.forEach.call(elem.getElementsByClassName(headingClass), header => {
        const panel = _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].getNextSibling(header, '.' + panelClass);
        const idH = _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].attr(header, 'id') ? _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].attr(header, 'id') : _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].uniqueID(5, 'apricot_');
        const idP = _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].attr(panel, 'id') ? _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].attr(panel, 'id') : _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].uniqueID(5, 'apricot_');
        _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].attr(header, 'id', idH);
        _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].attr(header, 'aria-expanded', 'false');
        _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].attr(header, 'aria-controls', idP);
        _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].attr(panel, 'id', idP);
        _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].attr(panel, 'aria-labelledby', idH);
        _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].attr(panel, 'aria-hidden', 'true');

        // Click event for header
        header.addEventListener('click', noTriggerClickHeader);
        header.addEventListener('keydown', a11YKeydown);
      });
      allEvents();
    } else {
      const panel = targetElem;
      const idH = _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].attr(elem, 'id') ? _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].attr(elem, 'id') : _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].uniqueID(5, 'apricot_');
      const idP = _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].attr(panel, 'id') ? _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].attr(panel, 'id') : _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].uniqueID(5, 'apricot_');
      _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].attr(elem, 'id', idH);
      _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].attr(elem, 'aria-expanded', 'false');
      _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].attr(elem, 'aria-controls', idP);
      _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].attr(panel, 'id', idP);
      _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].attr(panel, 'aria-hidden', 'true');
      _CBUtils__WEBPACK_IMPORTED_MODULE_2__["default"].attr(panel, 'tabIndex', '-1');

      // Click event for header
      elem.addEventListener('click', triggerClickHeader);
      elem.addEventListener('keydown', a11YKeydown);
    }

    // Adjust panel heigh to css animation
    setupHeight();

    // A11Y Link treatment
    a11yFocusableItems();
    if (useAnimation() && data.animation) {
      changeTime = 350;
      window.addEventListener('resize', delayedResize);
    }
  };
  if (elem.accordionPlugin !== 'cb') {
    init();
  }
  return {
    adjustHeight: adjustAccHeight,
    setPanelState: setPanelState,
    destroy: destroy
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);

/***/ },

/***/ "./src/js/CBApricotDxProfile.js"
/*!**************************************!*\
  !*** ./src/js/CBApricotDxProfile.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _scss_dx_apricot_dx_profile_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/dx/apricot-dx-profile.scss */ "./src/scss/dx/apricot-dx-profile.scss");
/* harmony import */ var _CBUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CBUtils */ "./src/js/CBUtils.js");
/* harmony import */ var _CBAccordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CBAccordion */ "./src/js/CBAccordion.js");
/**!
 * Apricot DX Profile
 * @version 2
 * @author Mitra Assadi
 * @license
 * Copyright (c) 2026 The College Board
 */

/* ========================================================================
 * Apricot's D8
 * ======================================================================== */

// SCSS


// javaScript



/**
 * Menu Page Layout
 *
 * @export
 * @param {Object} data
 * @param {Element} data.elem
 * @returns {{destroy: Function}}
 */
const menuPageLayout = (data = {}) => {
  const defaultData = {
    elem: null
  };
  data = {
    ...defaultData,
    ...data
  };
  let elem = data.elem;
  if (!_CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].elemExists(elem)) return null;
  const chunkArray = (arr, chunk) => {
    let results = [];
    while (arr.length) {
      results.push(arr.splice(0, chunk));
    }
    return results;
  };
  const checkLayout = viewport => {
    let columns = 3;
    if (viewport === 'xs') {
      columns = 1;
    } else if (viewport === 'sm') {
      columns = 2;
    }
    const menus = [];
    elem.querySelectorAll('.cb-menu-list-d9 .cb-menu-list-heading-link, .cb-menu-list-d9 .cb-menu-list-heading').forEach(node => {
      node.style.height = 'auto';
      node.style.minHeight = 'auto';
      if (columns > 1) {
        const obj = {};
        obj.height = _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].outerHeight(node);
        obj.elem = node;
        menus.push(obj);
      }
    });
    if (columns === 1) return;
    let items = chunkArray(menus, columns);
    for (var item in items) {
      const row = items[item];
      row.sort((a, b) => {
        return a.height - b.height;
      });
      const max = row[row.length - 1].height;
      Array.prototype.forEach.call(row, obj => {
        obj.elem.style.minHeight = `${max}px`;
        obj.elem.style.height = `${max}px`;
      });
    }
  };
  const breakpointChange = e => {
    const breakpointData = e.data;
    checkLayout(breakpointData.prefix);
  };
  const destroy = () => {
    if (elem.menuPageLayout === 'cb') {
      elem.menuPageLayout = null;
    }
    document.removeEventListener('apricot_breakpointChange', breakpointChange);
  };
  const init = () => {
    elem.menuPageLayout = 'cb';
    checkLayout(_CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].viewport().prefix);
    _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].breakpoints();
    document.addEventListener('apricot_breakpointChange', breakpointChange);
  };
  if (elem.menuPageLayout !== 'cb') {
    init();
  }
  return {
    destroy: destroy
  };
};

// --------------------------------

/**
 * Drupal Left Navigation
 *
 * @export
 * @param {Element} data.leftNav
 * @param {Element} data.leftNavTrigger
 * @param {String} data.mainContentId
 * @param {Array} data.mobileLayoutBreakpoints
 * @param {String} data.localNavMobileLayoutBreakpoint
 * @returns {{destroy: Function}}
 */
const dxLeftNavigation = (data = {}) => {
  const defaultData = {
    leftNav: null,
    leftNavTrigger: null,
    mainContentId: null,
    mobileLayoutBreakpoints: ['xs', 'sm'],
    localNavMobileLayoutBreakpoint: 'xs'
  };
  data = {
    ...defaultData,
    ...data
  };
  let leftNav = data.leftNav;
  let leftNavTrigger = data.leftNavTrigger;
  let firstLink = null;
  let leftNavClose = null;
  let cover = null;
  let skip = null;
  if (!_CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].elemExists(leftNav) || !_CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].elemExists(leftNavTrigger)) {
    return false;
  }

  // a11y
  const escKeyboard = e => {
    if (e.key === 'Escape' || e.keyCode === 27) {
      if (_CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].hasClass(leftNav, 'dx-nav-slider-show')) {
        cover.click();
      }
    }
  };
  const getScrollTop = () => {
    return window.scrollY || document.documentElement.scrollTop;
  };

  // hide: true -> hide all links
  // hide: false -> show all links
  const a11yAcc = hide => {
    const containers = leftNav.querySelectorAll('.cb-accordion-container');
    let anchors;
    containers.forEach(container => {
      if (hide) {
        anchors = container.querySelectorAll('a');
        anchors.forEach(a => {
          _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(a, 'tabIndex', '-1');
          _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(a, 'aria-hidden', 'true');
        });
      } else {
        // we only want to change the ones in open panel
        const heading = container.querySelector('.cb-accordion-heading');
        _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(heading, 'tabIndex', '0');
        _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(heading, 'aria-hidden', 'false');
        if (_CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].hasClass(heading, 'cb-active')) {
          anchors = container.querySelectorAll('.cb-accordion-panel a');
          anchors.forEach(a => {
            _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(a, 'tabIndex', '0');
            _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(a, 'aria-hidden', 'false');
          });
        }
      }
    });

    // firstLink = leftNav.querySelectorAll('a[aria-hidden="false"]')[0];
    // Utils.addClass(firstLink, "dx-first-link");
  };
  const keydownEvent = e => {
    const linkSelectors = 'a[aria-hidden="false"], .cb-accordion-heading';
    const a = e.target;
    // Clean up
    const predLastLink = leftNav.querySelector('.dx-last-link');
    _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].removeClass(predLastLink, 'dx-last-link');
    const lastLinkList = leftNav.querySelectorAll(linkSelectors);
    const lastLink = lastLinkList[lastLinkList.length - 1];
    _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].addClass(lastLink, 'dx-last-link');
    if (_CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].hasClass(a, 'dx-last-link')) {
      if (_CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].whichKey(e) === 'TAB' && !e.shiftKey) {
        e.preventDefault();
        firstLink.focus();
      }
    }
    if (_CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].hasClass(a, 'dx-first-link')) {
      if (_CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].whichKey(e) === 'TAB' && e.shiftKey) {
        e.preventDefault();
        lastLink.focus();
      }
    }
  };
  const tabOrder = () => {
    const linkSelectors = 'a[aria-hidden="false"], .cb-accordion-heading';
    const list = leftNav.querySelectorAll(linkSelectors);
    if (list.length <= 0) return;
    leftNav.querySelectorAll('a').forEach(a => {
      a.removeEventListener('keydown', keydownEvent);
      a.addEventListener('keydown', keydownEvent);
    });
  };

  // open/close Mobile panel
  const manageLeftNav = e => {
    e && e.preventDefault();

    // If open, close
    if (_CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].hasClass(leftNav, 'dx-nav-slider-show')) {
      _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].removeClass(leftNav, 'dx-nav-slider-show');
      _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].addClass(leftNav, 'dx-nav-slider-hide');
      _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(leftNavTrigger, 'aria-expanded', 'false');
      _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].removeClass(leftNav, 'dx-nav-slider-hide');
      _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(leftNav, 'aria-hidden', 'true');
      _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(leftNav, 'tabIndex', '-1');
      _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].removeClass(cover, 'dx-open');

      // Set focus back to trigger
      leftNavTrigger.focus();

      // add links to tab order
      a11yAcc(true);

      // Set focus to close
      _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(firstLink, 'tabIndex', '-1');
      _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(firstLink, 'aria-hidden', 'true');
      const body = document.getElementsByTagName('body')[0];
      _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].removeClass(body, 'dx-left-nav-open');
    } else {
      tabOrder();
      _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(leftNavTrigger, 'aria-expanded', 'true');
      const pagePosition = getScrollTop();
      let topPosition = 40;
      if (pagePosition > 40) {
        const topNav = document.querySelector('.cb-local-navigation');
        if (_CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].elemExists(topNav) && _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].hasClass(topNav, 'cb-sticky-local-navigation')) {
          const prefix = _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].viewport().prefix;
          if (prefix !== data.localNavMobileLayoutBreakpoint) {
            topPosition = 72;
          } else {
            topPosition = 48;
          }
        } else {
          topPosition = 0;
        }
      } else if (pagePosition < 40 && pagePosition > 0) {
        topPosition = 40 - pagePosition;
      }
      leftNav.style.top = `${topPosition}px`;
      setTimeout(() => {
        _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].addClass(leftNav, 'dx-nav-slider-show');
      }, 100);
      const body = document.getElementsByTagName('body')[0];
      _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].addClass(body, 'dx-left-nav-open');
      _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(leftNav, 'aria-hidden', 'false');
      _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(leftNav, 'tabIndex', '0');
      _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].addClass(cover, 'dx-open');

      // Set focus to close
      _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(firstLink, 'tabIndex', '0');
      _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(firstLink, 'aria-hidden', 'false');
      a11yAcc(false);
      leftNav.focus();
    }
  };
  const closeShowEvents = () => {
    cover.addEventListener('click', manageLeftNav);
    leftNavTrigger.addEventListener('click', manageLeftNav);
    leftNavClose.addEventListener('click', manageLeftNav);
  };
  const useMobileLayout = prefix => {
    return data.mobileLayoutBreakpoints.includes(prefix);
  };

  // switch between mobile/desktop
  const desktopMobileSwitch = mode => {
    // mode: true - > Mobile
    // mode: false -> Desktop
    if (mode) {
      _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(leftNavTrigger, 'tabIndex', '0');
      _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(leftNavTrigger, 'aria-hidden', 'false');
      _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(leftNav, 'aria-hidden', 'true');
      _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(leftNav, 'tabIndex', '-1');
      skip && _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(skip, 'tabIndex', '-1');
      skip && _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(skip, 'aria-hidden', 'true');
    } else {
      // make sure mobile layout is closed
      if (cover && _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].hasClass(cover, 'dx-open')) {
        manageLeftNav();
      }
      _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(leftNavTrigger, 'tabIndex', '-1');
      _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(leftNavTrigger, 'aria-hidden', 'true');
      _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(leftNav, 'aria-hidden', 'false');
      _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(leftNav, 'tabIndex', '0');
      skip && _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].removeAttr(skip, 'tabIndex', '0');
      skip && _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(skip, 'aria-hidden', 'false');
    }
  };
  const adjustLeftNavLayout = prefix => {
    // Accessibility for left nav trigger
    if (useMobileLayout(prefix)) {
      // Show trigger
      desktopMobileSwitch(true);
      a11yAcc(true);
    } else {
      // Hide trigger
      desktopMobileSwitch(false);
      a11yAcc(false);
    }
  };
  const trackBreakpointChanges = () => {
    document.addEventListener('apricot_breakpointChange', e => {
      if (!_CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].isEmptyObject(e.data)) {
        adjustLeftNavLayout(e.data.prefix);
      }
    });
  };
  const leftNavInteraction = () => {
    const elem = _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].getByClass('cb-selected', leftNav)[0];
    elem && _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(elem, 'aria-current', 'page');
  };
  const destroy = () => {
    if (leftNav.dxLeftNavigation === 'cb') {
      leftNav.dxLeftNavigation = null;
      window.removeEventListener('keydown', escKeyboard, true);
      cover && cover.removeEventListener('click', manageLeftNav);
      leftNavTrigger && leftNavTrigger.removeEventListener('click', manageLeftNav);
      leftNavClose && leftNavClose.removeEventListener('click', manageLeftNav);
      leftNav.querySelectorAll('a').forEach(a => {
        a.removeEventListener('keydown', keydownEvent);
      });
    }
  };
  const init = () => {
    leftNav.dxLeftNavigation = 'cb';

    // Add cover
    cover = document.createElement('div');
    _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].addClass(cover, 'dx-left-nav-cover');
    document.querySelector('body').appendChild(cover);

    // due Drupal structure
    const parent = leftNav.parentNode;
    if (_CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].elemExists(parent)) {
      _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].addClass(parent, 'dx-left-nav-parent');
    }
    const triggerID = _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(leftNavTrigger, 'id') ? _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(leftNavTrigger, 'id') : _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].uniqueID(5, 'apricot_');
    _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(leftNavTrigger, 'id', triggerID);
    const leftNavID = _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(leftNav, 'id') ? _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(leftNav, 'id') : _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].uniqueID(5, 'apricot_');
    _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(leftNav, 'id', leftNavID);
    _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(leftNavTrigger, 'aria-controls', leftNavID);
    _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(leftNavTrigger, 'aria-expanded', 'false');

    // Skip to Content
    skip = leftNav.querySelector('.dx-left-nav-skip');
    if (skip && data.mainContentId) {
      _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].attr(skip, 'href', `#${data.mainContentId}`);
    }

    // activate accordion
    (0,_CBAccordion__WEBPACK_IMPORTED_MODULE_2__["default"])({
      elem: leftNav.querySelector('.cb-accordion')
    });

    // Page Navigation
    firstLink = _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].getByClass('dx-left-nav-btn', leftNav)[0];
    _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].addClass(firstLink, 'dx-first-link');
    leftNavClose = _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].getByClass('dx-left-nav-btn', leftNav)[0];

    //Initialize breakpoint_change event
    _CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].breakpoints();

    // open/close for left nav slider
    closeShowEvents();

    //Listen to viewport changes
    trackBreakpointChanges();

    // Left Navigation
    leftNavInteraction();

    // Adjust leftNavigation items
    adjustLeftNavLayout(_CBUtils__WEBPACK_IMPORTED_MODULE_1__["default"].viewport().prefix);

    // Events
    window.addEventListener('keydown', escKeyboard, true);
  };
  if (leftNav.dxLeftNavigation !== 'cb') {
    init();
  }
  return {
    destroy: destroy
  };
};
const CBApricotD8 = {
  menuPageLayout,
  dxLeftNavigation
};
if (typeof window !== 'undefined') {
  window.cb = window.cb || {};
  window.cb.apricot = window.cb.apricot || {};
  window.cb.apricot.CBApricotD8 = CBApricotD8;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CBApricotD8);

/***/ },

/***/ "./src/js/CBUtils.js"
/*!***************************!*\
  !*** ./src/js/CBUtils.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* ========================================================================
 * Apricot's Utility Module
 * ======================================================================== */

// Same as CBData
const viewports = {
  mobile: {
    prefix: 'xs',
    min: 0,
    max: 767
  },
  tablet: {
    prefix: 'sm',
    min: 768,
    max: 1023
  },
  desktop: {
    prefix: 'md',
    min: 1024,
    max: 1247
  },
  large: {
    prefix: 'lg',
    min: 1248,
    max: 1343
  },
  xl: {
    prefix: 'xl',
    min: 1344,
    max: 1439
  },
  xl2: {
    prefix: '3xl',
    min: 1440,
    max: 1727
  },
  xl3: {
    prefix: '2xl',
    min: 1728,
    max: 99999
  }
};

// ------------------------------------  KEYBOARD
const KEYS = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  PAGEUP: 33,
  PAGEDOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  PREV: 37,
  NEXT: 39,
  DOWN: 40,
  PLUS: 187,
  PLUSNUMERICKEYPAD: 107,
  MINUS: 189,
  MINUSNUMERICKEYPAD: 109,
  DEL: 46,
  A: 65,
  Z: 90,
  ZERO: 48,
  NINE: 57
};

// ------------------------------------  FOCUSABLE ELEMENTS
// This list should be used when you only want, elements which can have focus in their current state
const FOCUSABLE_ELEMENTS = ['a[href]', 'area[href]', 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', 'select:not([disabled]):not([aria-hidden])', 'textarea:not([disabled]):not([aria-hidden])', 'button:not([disabled]):not([aria-hidden])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])', '[data-cb-focusable]'];

// This list should be used when we want ALL elements which could get focus regardless of the current state
const FOCUSABLE_ELEMENTS_ALL = ['a[href]', 'area[href]', 'input', 'select', 'textarea', 'button', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]', '[data-cb-focusable]'];

/**
 * Check is object is empty
 *
 * @export
 * @param {Object} obj
 * @returns {Boolean}
 */
const isEmptyObject = obj => {
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
  }
  return true;
};

/**
 * Check if any key in KEYS were clicked
 *
 * @export
 * @param {Object} event
 * @param {String} key
 * @returns {Boolean}
 */

const isKey = (event, key) => {
  return KEYS[key] === event.which ? true : false;
};

/**
 * Get Key name
 *
 * @export
 * @param {Object} event
 * @returns {(String|null)}
 */
const whichKey = event => {
  for (var key in KEYS) {
    if (KEYS[key] === event.which) {
      return key;
    }
  }
  return null;
};

/**
 * Check id element exists
 *
 * @export
 * @param {Element} elem
 * @returns {Boolean}
 */
const elemExists = elem => {
  if (typeof elem !== 'undefined' && elem !== null) {
    return true;
  } else {
    return false;
  }
};

/**
 * Get all elements with the specified class name
 *
 * @export
 * @param {String} className
 * @param {Element} [node=null]
 * @returns {Element[]}
 */
const getByClass = (className, node = null) => {
  node = node || document;
  return node.getElementsByClassName(className);
};

/**
 * Get element whose id property matches the specified string
 *
 * @export
 * @param {String} idName
 * @param {Element} [node=null]
 * @returns {Element}
 */
const getById = (idName, node = null) => {
  node = node || document;
  return node.getElementById(idName);
};

/**
 * Get all elements with the specified tag name
 *
 * @export
 * @param {String} tagName
 * @param {Element} [node=null]
 * @returns {Element[]}
 */
const getByTag = (tagName, node = null) => {
  node = node || document;
  return node.getElementsByTagName(tagName);
};

/**
 * Return the first matching ancestor
 *
 * @export
 * @param {Element} elem
 * @param {String} selector
 * @returns {(String|null)}
 */
const getClosest = (elem, selector) => {
  for (; elem && elem !== document; elem = elem.parentNode) {
    if (selector) {
      if (elem.matches(selector)) return elem;
    } else {
      return elem;
    }
  }
  return null;
};

/**
 * Get elements value
 *
 * @export
 * @param {Element} elem
 * @returns {(String|null)}
 */
const getValue = elem => {
  if (elemExists(elem)) {
    return elem.value;
  } else {
    return null;
  }
};

/**
 * Check if element has a specific class
 *
 * @export
 * @param {Element} elem
 * @param {String} className
 * @returns {Boolean}
 */
const hasClass = (elem, className) => {
  return (' ' + elem.className + ' ').indexOf(' ' + className + ' ') > -1;
};
const checkClassName = (elem, className) => {
  if (elem) {
    if (elem.classList) {
      elem.classList.add(className);
    } else {
      elem.className += ' ' + className;
    }
  }
};

/**
 * Add one or multiple classes to element
 *
 * @export
 * @param {Element} elem
 * @param {String[]|String} className
 */
const addClass = (elem, className) => {
  if (!elemExists(elem)) return;
  if (Array.isArray(className)) {
    className.forEach(function (cName) {
      checkClassName(elem, cName);
    });
  } else {
    checkClassName(elem, className);
  }
};

/**
 * Remove specific class from element
 *
 * @export
 * @param {Element} elem
 * @param {String} className
 */
const removeClass = (elem, className) => {
  if (!elemExists(elem)) return;
  if (elem && elem.classList) {
    if (elem.classList.contains(className)) {
      elem.classList.remove(className);
    }
  }
};

/**
 * Toggle class name
 *
 * @export
 * @param {Element} elem
 * @param {String} className
 * @param {Boolean} state
 */
const toggleClass = (elem, className, state) => {
  if (elem && elem.classList) {
    if (typeof state != 'undefined') {
      if (state) {
        addClass(elem, className);
      } else if (!state) {
        removeClass(elem, className);
      }
    } else {
      elem.classList.toggle(className);
    }
  }
};

/**
 * Toggle between two classes
 *
 * @export
 * @param {Element} elem
 * @param {String} className1
 * @param {String} className2
 */
const toggleBetweenClasses = (elem, className1, className2) => {
  if (elem && elem.classList) {
    if (hasClass(elem, className1)) {
      addClass(elem, className2);
      removeClass(elem, className1);
    } else {
      addClass(elem, className1);
      removeClass(elem, className2);
    }
  }
};

/**
 * Remove element
 *
 * @export
 * @param {Element} elem
 */
const remove = elem => {
  if (typeof elem !== 'undefined' && elem !== null) {
    elem.parentNode && elem.parentNode.removeChild(elem);
  }
};

/**
 * Get first or specific previous sibling
 *
 * @export
 * @param {Element} elem
 * @param {String=} selector
 * @returns {Element}
 */
const getPreviousSibling = (elem, selector) => {
  let sibling = elem.previousElementSibling;

  // If there's no selector, return the first sibling
  if (!selector) return sibling;

  // If the sibling matches our selector, use it
  // If not, jump to the next sibling and continue the loop
  while (sibling) {
    if (sibling.matches(selector)) return sibling;
    sibling = sibling.previousElementSibling;
  }
};

/**
 * Get next or specific next sibling
 *
 * @export
 * @param {Element} elem
 * @param {String=} selector
 * @returns {Element}
 */
const getNextSibling = (elem, selector) => {
  // Get the next sibling element
  let sibling = elem.nextElementSibling;

  // If there's no selector, return the first sibling
  if (!selector) return sibling;

  // If the sibling matches our selector, use it
  // If not, jump to the next sibling and continue the loop
  while (sibling) {
    if (sibling.matches(selector)) return sibling;
    sibling = sibling.nextElementSibling;
  }
};

/**
 * Get parent element
 *
 * @export
 * @param {Element} elem
 * @returns {Element}
 */
const parent = elem => {
  return elem.parentNode;
};

/**
 * Insert element after referenced node
 *
 * @export
 * @param {Element} referenceNode
 * @param {Element} elem
 */
const insertAfter = (referenceNode, elem) => {
  referenceNode.parentNode.insertBefore(elem, referenceNode.nextSibling);
};

/**
 * Insert element before referenced node
 *
 * @export
 * @param {Element} referenceNode
 * @param {Element} elem
 */
const insertBefore = (referenceNode, elem) => {
  referenceNode.parentNode.insertBefore(elem, referenceNode);
};

/**
 * Append element
 *
 * @export
 * @param {Element} elem1
 * @param {Element} elem2
 */
const append = (elem1, elem2) => {
  elem1.appendChild(elem2);
};

/**
 * Detect Browser
 *
 * @export
 * @returns {Object} browser object
 * @returns {String} browser.name
 * @returns {Boolean} browser.type - opera|msie|chrome|firefox|safari
 * @returns {Number} browser.version
 */
const browser = () => {
  var t = true,
    browserObj = {},
    detect;
  detect = function (ua) {
    function getFirstMatch(regex) {
      var match = ua.match(regex);
      return match && match.length > 1 && match[1] || '';
    }
    var versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i),
      result = {};
    if (/opera|opr/i.test(ua)) {
      result = {
        name: 'Opera',
        opera: t,
        version: versionIdentifier || getFirstMatch(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)
      };
    } else if (/msie|trident/i.test(ua)) {
      result = {
        name: 'Internet Explorer',
        msie: t,
        version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
      };
    } else if (/chrome|crios|crmo/i.test(ua)) {
      result = {
        name: 'Chrome',
        chrome: t,
        version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      };
    } else if (/firefox|iceweasel/i.test(ua)) {
      result = {
        name: 'Firefox',
        firefox: t,
        version: getFirstMatch(/(?:firefox|iceweaselem)[ \/](\d+(\.\d+)?)/i)
      };
    } else if (/safari/i.test(ua)) {
      result = {
        name: 'Safari',
        safari: t,
        version: versionIdentifier
      };
    } else {
      result = {};
    }
    return result;
  };
  browserObj = detect(typeof navigator !== 'undefined' ? navigator.userAgent : '');
  return browserObj;
};

/**
 * Add browser + version to element
 *
 * @export
 * @param {Element} elem
 * @param {Boolean} noVersion
 */
const addClassBrowser = (elem, noVersion) => {
  const b = browser();
  if (isEmptyObject(b)) return;
  const className = b.msie ? 'ie' : b.name.toLowerCase();
  const version = !noVersion ? parseInt(b.version, 10) : '';
  if (elemExists(elem)) {
    addClass(elem, className + version);
  }
};

/**
 * Detect OS
 *
 * @export
 * @returns {Object} os object
 * @returns {String} os.name
 */
const OSName = () => {
  var osObj = {},
    detect;
  detect = function (ua) {
    let result = {};
    if (/android/i.test(ua)) {
      result = {
        name: 'Android'
      };
    } else if (/win/i.test(ua)) {
      result = {
        name: 'Windows'
      };
    } else if (/mac/i.test(ua)) {
      result = {
        name: 'MacOS'
      };
    } else if (/linux/i.test(ua)) {
      result = {
        name: 'Linux'
      };
    } else if (/x11/i.test(ua)) {
      result = {
        name: 'UNIX'
      };
    } else {
      result = {
        name: 'Unknown'
      };
    }
    return result;
  };
  osObj = detect(typeof navigator !== 'undefined' ? navigator.userAgent : '');
  return osObj;
};

/**
 * Fix IE(11) Error: Object doesn't support this action
 * - CustomEvent
 * - Object.assign
 * - forEach (on NodeLis)
 * - matches
 *
 * @export
 */
const supportIEObjects = () => {
  const b = browser();
  if (isEmptyObject(b)) return;
  if (b.msie) {
    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;

    // missing assign
    if (typeof Object.assign != 'function') {
      Object.assign = function (target) {
        'use strict';

        if (target === null) {
          throw new TypeError('Cannot convert undefined or null to object');
        }
        target = Object(target);
        for (var index = 1; index < arguments.length; index++) {
          var source = arguments[index];
          if (source !== null) {
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
        }
        return target;
      };
    }

    // missing forEach on NodeList for IE11
    if (window.NodeList && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = Array.prototype.forEach;
    }
    // missing match
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.msMatchesSelector;
    }
  }
};

/**
 * Add safari + version to element is browser is Safari
 *
 * @export
 * @param {Element} elem
 * @param {Boolean} noVersion
 */
const addClassSafari = (elem, noVersion) => {
  const b = browser();
  if (isEmptyObject(b)) return;
  const className = !noVersion ? 'safari' + parseInt(b.version, 10) : 'safari';
  if (b.safari) {
    if (elemExists(elem)) {
      addClass(elem, className);
    }
  }
};

/**
 * Add Chrome + version to element is browser is chrome
 *
 * @export
 * @param {Element} elem
 * @param {Boolean} noVersion
 */
const addClassChrome = (elem, noVersion) => {
  const b = browser();
  if (isEmptyObject(b)) return;
  const className = !noVersion ? 'chrome' + parseInt(b.version, 10) : 'chrome';
  if (b.chrome) {
    if (elemExists(elem)) {
      addClass(elem, className);
    }
  }
};

/**
 * Add Firefox + version to element is browser is firefox
 *
 * @export
 * @param {Element} elem
 * @param {Boolean} noVersion
 */
const addClassFirefox = (elem, noVersion) => {
  const b = browser();
  if (isEmptyObject(b)) return;
  const className = !noVersion ? 'firefox' + parseInt(b.version, 10) : 'firefox';
  if (b.firefox) {
    if (elemExists(elem)) {
      addClass(elem, className);
    }
  }
};

/**
 * Add ie + version to element is browser is IE
 *
 * @export
 * @param {Element} elem
 * @param {Boolean} noVersion
 */
const addClassIE = (elem, noVersion) => {
  const b = browser();
  if (isEmptyObject(b)) return;
  const className = !noVersion ? 'ie' + parseInt(b.version, 10) : 'ie';
  if (b.msie) {
    if (elemExists(elem)) {
      addClass(elem, className);
    }
  }
};

/**
 * Truncate text
 *
 * @export
 * @param {String} value
 * @param {Number} maxChars
 * @param {String} position
 * @param {String} ellipseText
 * @returns {String}
 */
const textTruncate = (value, maxChars, position, ellipseText) => {
  if (position === 'last') {
    value = value.substring(0, maxChars - ellipseText.length) + ellipseText;
  } else if (position === 'first') {
    value = ellipseText + value.substring(value.length - (maxChars - ellipseText.length));
  } else {
    var middle = Math.floor(maxChars / 2) - ellipseText.length;
    value = value.substring(0, middle) + ellipseText + value.substring(value.length - middle, value.length);
  }
  return value;
};

/**
 * Check if value is blank|undefined|null
 *
 * @export
 * @param {String} value
 * @returns {Boolean}
 */
const isBlank = value => {
  if (!value) {
    value = '';
  }
  return /^\s*$/.test(value);
};

/**
 * Check if value is true
 *
 * @export
 * @param {String} value
 * @returns {Boolean}
 */
const isTrue = value => {
  if (typeof value === 'string') {
    value = value.trim().toLowerCase();
  }
  switch (value) {
    case true:
    case 'true':
    case 1:
    case '1':
    case 'on':
    case 'yes':
      return true;
    default:
      return false;
  }
};

/**
 * Get window dimension
 *
 * @export
 * @returns {Object} dimension object
 * @returns {Number} dimension.width
 * @returns {Number} dimension.height
 */
const windowsDimension = () => {
  const w = window;
  const d = document;
  const e = d.documentElement;
  const g = d.getElementsByTagName('body')[0];
  const x = w.innerWidth || e.clientWidth || g.clientWidth;
  const y = w.innerHeight || e.clientHeight || g.clientHeight;
  return {
    width: x,
    height: y
  };
};

/**
 * Get elements outer height (height+margin)
 *
 * @export
 * @param {Element} elem
 * @returns {Number}
 */
const outerHeight = elem => {
  let height = elem.offsetHeight;
  const style = getComputedStyle(elem);
  height += parseInt(style.marginTop) + parseInt(style.marginBottom);
  return height;
};

/**
 * Get elements outer width (width+margin)
 *
 * @export
 * @param {Element} elem
 * @returns {Number}
 */
const outerWidth = elem => {
  let width = elem.offsetWidth;
  const style = getComputedStyle(elem);
  width += parseInt(style.marginLeft) + parseInt(style.marginRight);
  return width;
};

/**
 * Get elements height (height)
 *
 * @export
 * @param {Element} elem
 * @param {Boolean} handelHidden
 * @returns {Number}
 */
const height = (elem, handelHidden) => {
  if (handelHidden) {
    return elem.clientHeight || height(elem.parentElement, handelHidden);
  } else {
    return elem.clientHeight;
  }
};

/**
 * Get height of hidden element
 *
 * @export
 * @param {Element} elem
 * @returns {Number}
 */
const getHiddenHeight = elem => {
  if (!elem?.cloneNode) {
    return null;
  }
  const clone = elem.cloneNode(true);
  Object.assign(clone.style, {
    overflow: 'visible',
    height: 'auto',
    maxHeight: 'none',
    minHeight: 'none',
    opacity: '0',
    visibility: 'hidden',
    display: 'block',
    position: 'relative'
  });
  elem.after(clone);
  const hiddenHeight = clone.offsetHeight;
  clone.remove();
  return hiddenHeight;
};

/**
 * Get elements width (width)
 *
 * @export
 * @param {Element} elem
 * @param {Boolean} handelHidden
 * @returns {Number}
 */
const width = (elem, handelHidden) => {
  if (handelHidden) {
    return elem.clientWidth || width(elem.parentElement, handelHidden);
  } else {
    return elem.clientWidth;
  }
};

/**
 * Get elements offset Height (height + border )
 *
 * @export
 * @param {Element} elem
 * @returns {Number}
 */
const offsetHeight = elem => {
  return elem.offsetHeight;
};

/**
 * Get elements offset Width (width + border )
 *
 * @export
 * @param {Element} elem
 * @returns {Number}
 */
const offsetWidth = elem => {
  return elem.offsetWidth;
};

/**
 * Get elements position, relative to the offset parent
 *
 * @export
 * @param {Element} elem
 * @returns {Object}
 */
const position = elem => {
  return {
    top: elem.offsetTop,
    left: elem.offsetLeft
  };
};

/**
 * Get coordinates of the element, relative to the document.
 *
 * @export
 * @param {Element} elem
 * @returns {Object} object
 * @returns {Number} left
 * @returns {Number} top
 */
const offset = elem => {
  const rect = elem.getBoundingClientRect(),
    scrollLeft = window.scrollX || document.documentElement.scrollLeft,
    scrollTop = window.scrollY || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  };
};

/**
 * Get coordinates of the element, relative to the parent.
 *
 * @export
 * @param {Element} elem
 * @returns {Object} object
 * @returns {Number} top
 * @returns {Number} right
 * @returns {Number} bottom
 * @returns {Number} left
 */
const offsetToParent = elem => {
  const parentElem = parent(elem);
  const rectParent = parentElem.getBoundingClientRect();
  const rect = elem.getBoundingClientRect();
  return {
    top: rect.top - rectParent.top,
    right: rect.right - rectParent.right,
    bottom: rect.bottom - rectParent.bottom,
    left: rect.left - rectParent.left
  };
};

/**
 * Get browsers viewport
 *
 * @export
 * @returns {Object} viewport
 * @returns {String} viewport.name
 * @returns {String} viewport.prefix
 */
const viewport = () => {
  var viewportType = {},
    getViewPortWidth;
  getViewPortWidth = function (data) {
    var result = {
        name: '',
        prefix: '',
        width: 0
      },
      body = document.querySelector('body'),
      viewPortWidth = 0;
    body.style.overflow = 'hidden';
    viewPortWidth = windowsDimension().width;
    body.style.overflow = '';
    if (isEmptyObject(data)) {
      return result;
    }
    if (viewPortWidth <= data.mobile.max) {
      result = {
        name: 'mobile',
        prefix: 'xs'
      };
    } else if (viewPortWidth >= data.tablet.min && viewPortWidth <= data.tablet.max) {
      result = {
        name: 'tablet',
        prefix: 'sm'
      };
    } else if (viewPortWidth >= data.desktop.min && viewPortWidth <= data.desktop.max) {
      result = {
        name: 'desktop',
        prefix: 'md'
      };
    } else if (viewPortWidth >= data.large.min && viewPortWidth <= data.large.max) {
      result = {
        name: 'large',
        prefix: 'lg'
      };
    } else if (viewPortWidth >= data.xl.min && viewPortWidth <= data.xl.max) {
      result = {
        name: 'xl',
        prefix: 'xl'
      };
    } else if (viewPortWidth >= data.xl2.min && viewPortWidth <= data.xl2.max) {
      result = {
        name: '2xl',
        prefix: '2xl'
      };
    } else {
      result = {
        name: '3xl',
        prefix: '3xl'
      };
    }
    result.width = viewPortWidth;
    return result;
  };
  viewportType = getViewPortWidth(!isEmptyObject(viewports) ? viewports : {});
  return viewportType;
};

/**
 * Trigger "apricot_breakpointChange" event on document when breakpoint changes
 *
 * @export
 * @param {Boolean} start
 * @returns {Event} event
 * @returns {Object} event.data: viewport object
 */
const breakpoints = start => {
  //Make sure we only declare custom apricot_breakpointChange event once
  if (document.cbBreakpoints) {
    return false;
  }
  const vp = viewport();
  const event = new CustomEvent('apricot_breakpointChange');

  // Default: false
  start = start ? true : false;
  document.cbViewport = vp;

  //If start, trigger event on page load
  if (start) {
    document.addEventListener('DOMContentLoaded', function () {
      // Dispatch the event
      event.data = viewport;
      document.dispatchEvent(event);
    });
  }

  //Check breakpoint status on resize
  window.addEventListener('resize', function () {
    const currentViewport = viewport();
    const oldViewport = document.cbViewport;

    // If viewport has changed trigger event
    if (oldViewport.name !== currentViewport.name) {
      event.data = currentViewport;
      document.dispatchEvent(event);
      document.cbViewport = currentViewport;
    }
  });
  document.cbBreakpoints = true;
};

/**
 * Check if monitor supports  retina display
 *
 * @export
 * @returns {Boolean}
 */
const isRetina = () => {
  return window.devicePixelRatio > 1 || window.matchMedia && window.matchMedia('only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)').matches;
};

/**
 * Generate unique ID for HTML element
 *
 * @export
 * @param {Number=} idLength
 * @param {String=} prefix
 * @returns {String}
 */
const uniqueID = (idLength, prefix) => {
  var charArr = '_0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split(''),
    id = '';
  if (!idLength) {
    idLength = Math.floor(Math.random() * charArr.length);
  }
  for (var i = 0; i < idLength; i++) {
    id += charArr[Math.floor(Math.random() * charArr.length)];
  }
  if (prefix) {
    id = prefix + id;
  }
  if (elemExists(document.getElementById(id))) {
    return uniqueID(idLength);
  } else {
    return id;
  }
};

/**
 * Return or set HTML elements attribute
 *
 * @export
 * @param {Element} elem
 * @param {String} attribute
 * @param {String|null}
 */
const attr = (elem, attribute, value = null) => {
  if (!elemExists(elem)) return;
  if (value) {
    elem.setAttribute(attribute, value);
  } else {
    return elem.getAttribute(attribute);
  }
};

/**
 * Remove HTML elements attribute
 *
 * @export
 * @param {Element} elem
 * @param {String} attribute
 */
const removeAttr = (elem, attribute) => {
  if (!elemExists(elem)) return;
  elem.removeAttribute(attribute);
};

/**
 * Detect HTML documents language setting
 *
 * @export
 * @returns {String}
 */
const detectLang = () => {
  var lang = document.documentElement.getAttribute('lang') ? document.documentElement.getAttribute('lang') : 'en';
  if (lang.indexOf('-') >= 0) {
    lang = lang.split('-')[0];
  }
  return lang;
};

/**
 * Convert HTML string to element
 *
 * @param {String} HTML representing any number of sibling elements
 * @return {NodeList}
 */
function htmlToElements(html) {
  var template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  return template.content.childNodes;
}

/**
 * Element contains
 *
 * @export
 * @param {Element} elem
 * @param {Element} child
 */
const contains = (elem, child) => {
  return elem !== child && elem.contains(child);
};

/**
 * Wrap element inside wrapper element
 *
 * @export
 * @param {Element} elem
 * @param {Element} wrapper
 */
const wrap = (elem, wrapper) => {
  elem.parentNode.insertBefore(wrapper, elem);
  wrapper.appendChild(elem);
};

/**
 * Wrap an element around another set of elements
 *
 * @export
 * @param {Element[]} elms
 * @param {Element} wrapper
 */
const wrapAll = (elms, wrapper) => {
  let el = elms.length ? elms[0] : elms;
  let parentElem = el.parentNode;
  wrapper.appendChild(el);
  while (elms.length) {
    wrapper.appendChild(elms[0]);
  }
  if (parentElem) {
    parent.appendChild(wrapper);
  }
};

/**
 * Unwrap element from parent
 *
 * @export
 * @param {Element} elem
 */
const unwrap = elem => {
  let parentElem = elem.parentNode;

  // move all children out of the element
  while (elem.firstChild) {
    parentElem.insertBefore(elem.firstChild, elem);
  }

  // remove the now-empty wrapper
  parentElem.removeChild(elem);
};

/**
 * Get/Set Element text
 * @export
 * @param {Element} elem
 * @param {String} content
 * @returns {(String|null)}
 */
const elemText = (elem, content = null) => {
  if (content) {
    elem.textContent = content;
  } else {
    return elem.textContent;
  }
};

/**
 * Empty Element
 * @export
 * @param {Element} elem
 */
const empty = elem => {
  elem.innerHTML = '';
};

/**
 * Show element, set display to block
 *
 * @export
 * @param {Element} elem
 */
const show = elem => {
  elem.style.display = 'block';
};

/**
 * Hide element, set display to none
 *
 * @export
 * @param {Element} elem
 */
const hide = elem => {
  elem.style.display = 'none';
};

/**
 * Toggle element visibility
 *
 * @export
 * @param {Element} elem
 * @param {Boolean} state
 */
const toggleDisplay = (elem, state) => {
  if (typeof state !== 'undefined') {
    if (state) {
      show(elem);
    } else if (!state) {
      hide(elem);
    }
  } else {
    // If the element is visible, hide it
    if (window.getComputedStyle(elem).display === 'block') {
      hide(elem);
      return;
    }

    // Otherwise, show it
    show(elem);
  }
};

/**
 * Check if the given variable is a function
 * @export
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
const isFunction = functionToCheck => {
  const getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
};

/**
 * Check if prefers-reduced-motion is set
 * @export
 * @returns {Boolean}
 */
const reduceMotionChanged = () => {
  const query = '(prefers-reduced-motion: reduce)';
  return window.matchMedia(query).matches;
};

/**
 * Check if high contrast is supported
 * @export
 * @param {String} color
 * @returns {Boolean}
 */
const isHighContrast = color => {
  // option to pass default font-color
  if (!color) {
    color = 'rgb(30, 30, 30)';
  }
  if (document.querySelector('body').style.color !== color) {
    return true;
  } else {
    return false;
  }
};
const _message = (mode, message, obj) => {
  switch (mode) {
    case true:
      if (obj) {
        console.error(message, obj);
      } else {
        console.error(message);
      }
      break;
    case false:
      if (obj) {
        console.warn(message, obj);
      } else {
        console.warn(message);
      }
      break;
    default:
      // eslint-disable-next-line no-console
      console.log(message, obj);
  }
};

/**
 * Display error message in terminal
 *
 * @export
 * @param {String} message
 * @param {Object} obj
 */
const error = (message, obj) => {
  _message(true, message, obj);
};

/**
 * Display warning message in terminal
 *
 * @export
 * @param {String} message
 * @param {Object} obj
 */
const warning = (message, obj) => {
  _message(false, message, obj);
};

/**
 * Include a css file, creating new link DOM element
 * @export
 * @argument {String} css_file - variable to check
 * @returns {Boolean} False
 */
const include_css = css_file => {
  const html_doc = document.getElementsByTagName('head')[0];
  const css = document.createElement('link');
  css.setAttribute('rel', 'stylesheet');
  css.setAttribute('type', 'text/css');
  css.setAttribute('href', css_file);
  html_doc.appendChild(css);

  // alert state change

  css.onload = () => {
    const event = new CustomEvent('apricot_cssLoaded');
    html_doc.dispatchEvent(event);
  };
  return false;
};

/**
 * Include a js file, creating new script DOM element
 * @export
 * @argument {String} js_file - variable to check
 * @returns {Boolean} False
 */
const include_js = js_file => {
  const html_doc = document.getElementsByTagName('head')[0];
  const js = document.createElement('script');
  js.setAttribute('type', 'text/javascript');
  js.setAttribute('src', js_file);
  html_doc.appendChild(js);
  js.onload = function () {
    const event = new CustomEvent('apricot_jsLoaded');
    html_doc.dispatchEvent(event);
  };
  return false;
};

/**
 * Disable browser context menu on right click
 *
 * @export
 * @param {Element} elem
 */
const disableRightClick = elem => {
  elem.addEventListener('contextmenu', e => {
    e.preventDefault();
    return false;
  });
};

/**
 * swipe detection
 *
 * @export
 * @param {Element} elem
 * @returns {Event} events swipe_end|swipe_move
 * @returns {Object} event.data: swipe object
 */
const swipe = (elem, removeEvent) => {
  let touchDown = false;
  let originalPosition = null;
  const swipeInfo = e => {
    let x = 0;
    let y = 0;
    let dx, dy;
    if ('undefined' !== typeof e.pageX) {
      x = e.pageX;
      y = e.pageY;
    } else if (e.changedTouches && e.changedTouches[0]) {
      x = e.changedTouches[0].pageX;
      y = e.changedTouches[0].pageY;
    }
    dx = x > originalPosition.x ? 'right' : 'left';
    dy = y > originalPosition.y ? 'down' : 'up';
    return {
      direction: {
        x: dx,
        y: dy
      },
      offset: {
        x: x - originalPosition.x,
        y: originalPosition.y - y
      }
    };
  };
  const down = e => {
    touchDown = true;
    if ('undefined' !== typeof e.pageX) {
      originalPosition = {
        x: e.pageX,
        y: e.pageY
      };
    } else if (e.changedTouches && e.changedTouches[0]) {
      originalPosition = {
        x: e.changedTouches[0].pageX,
        y: e.changedTouches[0].pageY
      };
    }
  };
  const up = e => {
    const event = new CustomEvent('swipe_end');
    const d = swipeInfo(e);
    event.data = d;
    elem.dispatchEvent(event);
    touchDown = false;
    originalPosition = null;
  };
  const move = e => {
    if (!touchDown) return;
    const event = new CustomEvent('swipe_move');
    event.data = swipeInfo(e);
    elem.dispatchEvent(event);
  };
  if (removeEvent) {
    elem.removeEventListener('touchstart', down, {
      passive: true
    });
    elem.removeEventListener('mousedown', down, {
      passive: true
    });
    elem.removeEventListener('touchend', up, {
      passive: true
    });
    elem.removeEventListener('mouseup', up);
    elem.removeEventListener('touchmove', move, {
      passive: true
    });
    elem.removeEventListener('mousemove', move);
  } else {
    elem.addEventListener('touchstart', down, {
      passive: true
    });
    elem.addEventListener('mousedown', down);
    elem.addEventListener('touchend', up, {
      passive: true
    });
    elem.addEventListener('mouseup', up);
    elem.addEventListener('touchmove', move, {
      passive: true
    });
    elem.addEventListener('mousemove', move);
  }
  return true;
};

/**
 * copy to clipboard
 *
 * @export
 * @param {Element} elem
 * @param {String} text
 */

const copyToClipboard = text => {
  if (window.clipboardData && window.clipboardData.setData) {
    window.clipboardData.clearData();
    return window.clipboardData.setData('Text', text);
  } else if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
    var textarea = document.createElement('textarea');
    textarea.textContent = text;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand('copy');
    } catch (ex) {
      console.warn('Failed to copy.', ex);
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }
};

/**
 * Block ESC key for Apricot components
 *
 */
const blockEsc = () => {
  attr(document.getElementsByTagName('body')[0], 'data-cb-esc', 'true');
};

/**
 * UN-Block ESC key for Apricot components
 *
 * @export
 * @param {Number} ms
 */
const unBlockEsc = (ms = 150) => {
  setTimeout(() => {
    removeAttr(document.getElementsByTagName('body')[0], 'data-cb-esc');
  }, ms);
};

/**
 * Finding the active element in a shadow root
 *
 * @export
 * @param {Node} root
 */
const getActiveElementShadowRoot = (root = document) => {
  const activeEl = root.activeElement;
  if (!activeEl) {
    return null;
  }
  if (activeEl.shadowRoot) {
    return getActiveElementShadowRoot(activeEl.shadowRoot);
  } else {
    return activeEl;
  }
};

/**
 * Get Shadow root of an element
 *
 * @export
 * @param {Node} element
 */
const getShadowRoot = element => {
  while (element && element.parentNode && (element = element.parentNode)) {
    if (element instanceof ShadowRoot) {
      return element;
    }
  }
  return null;
};

/**
 * Get browsers zoom Ration
 *
 * @export
 * @param {Boolean} exact
 * @returns {number} zoomRatio
 */
const zoomRatio = exact => {
  // make sure that it's running on the client side
  if (typeof window === 'undefined') {
    return null;
  }

  // return Math.round((window.outerWidth / window.innerWidth) * 100) / 100;
  const zoomLevel = Math.round(window.outerWidth / window.innerWidth * 100) / 100;
  if (exact) {
    return zoomLevel;
  } else {
    // Define common zoom factors
    const commonZoomFactors = [0.25, 0.33, 0.5, 0.67, 0.75, 0.8, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2, 2.5, 3, 4, 5];

    // Find the closest common zoom factor
    const closestZoomFactor = commonZoomFactors.reduce((prev, curr) => {
      return Math.abs(curr - zoomLevel) < Math.abs(prev - zoomLevel) ? curr : prev;
    });
    return closestZoomFactor;
  }
};

/**
 * Trigger "apricot_browserRatioChange" event on document when the browsers zoom ratio changes
 *
 * @export
 * @param {Boolean} start
 * @param {Boolean} exact
 * @returns {Event} event
 * @returns {Object} event.data: ratio object
 */

const browserRatio = (start = false, exact = false) => {
  //Make sure we only declare custom cbBrowserRatio event once
  if (document.cbBrowserRatio) {
    return false;
  }
  const zr = zoomRatio(exact);
  document.cbZoomRatio = zr;

  // Default: false
  start = start ? true : false;

  //If start, trigger event on page load
  if (start) {
    document.addEventListener('DOMContentLoaded', () => {
      const loadRatio = zoomRatio(exact);
      const eventOnLoad = new CustomEvent('apricot_breakpointChange');

      // Dispatch the event
      eventOnLoad.data = {
        ratio: loadRatio
      };
      document.cbZoomRatio = loadRatio;
      document.dispatchEvent(eventOnLoad);
    });
  }

  //Check ratio status on resize
  window.addEventListener('resize', () => {
    const currentRatio = zoomRatio(exact);
    const oldRatio = document.cbZoomRatio;

    // If viewport has changed trigger event
    if (currentRatio != oldRatio) {
      const event = new CustomEvent('apricot_browserRatioChange');
      event.data = {
        ratio: currentRatio
      };
      document.dispatchEvent(event);
      document.cbZoomRatio = currentRatio;
    }
  });
  document.cbBrowserRatio = true;
};

/**
 * Recursively searches for a key within a nested object and returns its value if found.
 * Uses an iterative approach with a stack to avoid deep recursion and a Set to handle circular references.
 *
 * @param {Object} obj - The object to search within.
 * @param {String} key - The key to search for.
 * @returns {Any} - The value associated with the key if found, otherwise undefined.
 */
const deepSearch = (obj, key) => {
  if (obj === null || typeof obj !== 'object') {
    return undefined;
  }
  const stack = [obj];
  const visited = new Set();
  while (stack.length > 0) {
    const current = stack.pop();
    if (visited.has(current)) {
      continue;
    }
    visited.add(current);
    if (Object.prototype.hasOwnProperty.call(current, key)) {
      return current[key];
    }
    for (const k in current) {
      if (Object.prototype.hasOwnProperty.call(current, k) && typeof current[k] === 'object' && current[k] !== null) {
        stack.push(current[k]);
      }
    }
  }
  return undefined;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  KEYS,
  FOCUSABLE_ELEMENTS,
  FOCUSABLE_ELEMENTS_ALL,
  addClass,
  addClassBrowser,
  addClassChrome,
  addClassFirefox,
  addClassIE,
  addClassSafari,
  append,
  attr,
  blockEsc,
  breakpoints,
  browser,
  browserRatio,
  contains,
  copyToClipboard,
  detectLang,
  deepSearch,
  disableRightClick,
  elemExists,
  elemText,
  empty,
  error,
  getActiveElementShadowRoot,
  getByClass,
  getById,
  getByTag,
  getClosest,
  getHiddenHeight,
  getNextSibling,
  getShadowRoot,
  getPreviousSibling,
  getValue,
  hasClass,
  height,
  hide,
  htmlToElements,
  include_css,
  include_js,
  insertAfter,
  insertBefore,
  isBlank,
  isEmptyObject,
  isFunction,
  isHighContrast,
  isKey,
  isRetina,
  isTrue,
  offset,
  offsetHeight,
  offsetToParent,
  offsetWidth,
  OSName,
  outerHeight,
  outerWidth,
  parent,
  position,
  reduceMotionChanged,
  remove,
  removeAttr,
  removeClass,
  show,
  supportIEObjects,
  swipe,
  textTruncate,
  toggleClass,
  toggleBetweenClasses,
  toggleDisplay,
  unBlockEsc,
  uniqueID,
  unwrap,
  viewport,
  warning,
  whichKey,
  width,
  windowsDimension,
  wrap,
  wrapAll,
  zoomRatio
});

/***/ },

/***/ "./src/scss/dx/apricot-dx-profile.scss"
/*!*********************************************!*\
  !*** ./src/scss/dx/apricot-dx-profile.scss ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/scss/includes/accordion.scss"
/*!******************************************!*\
  !*** ./src/scss/includes/accordion.scss ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/scss/includes/apricot-base.scss"
/*!*********************************************!*\
  !*** ./src/scss/includes/apricot-base.scss ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************************!*\
  !*** ./src/apricot-dx-profile.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _js_CBApricotDxProfile__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _js_CBApricotDxProfile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/CBApricotDxProfile */ "./src/js/CBApricotDxProfile.js");

})();

/******/ })()
;
//# sourceMappingURL=dx_profile.js.map