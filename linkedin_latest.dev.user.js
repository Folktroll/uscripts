// ==UserScript==
// @name       [FT] LinkedIn (DEV version)
// @namespace  https://github.com/folktroll/
// @version    25.3.14.1701
// @author     Folky
// @license    MIT
// @icon       https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/240px-Linkedin_icon.svg.png
// @updateURL  https://raw.githubusercontent.com/Folktroll/uscripts/refs/heads/main/linkedin_latest.dev.user.js
// @match      https://www.linkedin.com/*
// @grant      GM.xmlHttpRequest
// @grant      GM_addStyle
// @grant      GM_getResourceText
// @grant      GM_getValue
// @grant      GM_registerMenuCommand
// @grant      GM_setClipboard
// @grant      GM_setValue
// @run-at     document-start
// ==/UserScript==

(t=>{if(typeof GM_addStyle=="function"){GM_addStyle(t);return}const i=document.createElement("style");i.textContent=t,document.head.append(i)})(" .toastify{padding:12px 20px;color:#fff;display:inline-block;box-shadow:0 3px 6px -1px #0000001f,0 10px 36px -4px #4d60e84d;background:-webkit-linear-gradient(315deg,#73a5ff,#5477f5);background:linear-gradient(135deg,#73a5ff,#5477f5);position:fixed;opacity:0;transition:all .4s cubic-bezier(.215,.61,.355,1);border-radius:2px;cursor:pointer;text-decoration:none;max-width:calc(50% - 20px);z-index:2147483647}.toastify.on{opacity:1}.toast-close{background:transparent;border:0;color:#fff;cursor:pointer;font-family:inherit;font-size:1em;opacity:.4;padding:0 5px}.toastify-right{right:15px}.toastify-left{left:15px}.toastify-top{top:-150px}.toastify-bottom{bottom:-150px}.toastify-rounded{border-radius:25px}.toastify-avatar{width:1.5em;height:1.5em;margin:-7px 5px;border-radius:2px}.toastify-center{margin-left:auto;margin-right:auto;left:0;right:0;max-width:fit-content;max-width:-moz-fit-content}@media only screen and (max-width: 360px){.toastify-right,.toastify-left{margin-left:auto;margin-right:auto;left:0;right:0;max-width:fit-content}} ");

(function () {
	'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var toastify$1 = {exports: {}};

	/*!
	 * Toastify js 1.12.0
	 * https://github.com/apvarun/toastify-js
	 * @license MIT licensed
	 *
	 * Copyright (C) 2018 Varun A P
	 */
	var toastify = toastify$1.exports;

	var hasRequiredToastify;

	function requireToastify () {
		if (hasRequiredToastify) return toastify$1.exports;
		hasRequiredToastify = 1;
		(function (module) {
			(function(root, factory) {
			  if (module.exports) {
			    module.exports = factory();
			  } else {
			    root.Toastify = factory();
			  }
			})(toastify, function(global) {
			  // Object initialization
			  var Toastify = function(options) {
			      // Returning a new init object
			      return new Toastify.lib.init(options);
			    },
			    // Library version
			    version = "1.12.0";

			  // Set the default global options
			  Toastify.defaults = {
			    oldestFirst: true,
			    text: "Toastify is awesome!",
			    node: undefined,
			    duration: 3000,
			    selector: undefined,
			    callback: function () {
			    },
			    destination: undefined,
			    newWindow: false,
			    close: false,
			    gravity: "toastify-top",
			    positionLeft: false,
			    position: '',
			    backgroundColor: '',
			    avatar: "",
			    className: "",
			    stopOnFocus: true,
			    onClick: function () {
			    },
			    offset: {x: 0, y: 0},
			    escapeMarkup: true,
			    ariaLive: 'polite',
			    style: {background: ''}
			  };

			  // Defining the prototype of the object
			  Toastify.lib = Toastify.prototype = {
			    toastify: version,

			    constructor: Toastify,

			    // Initializing the object with required parameters
			    init: function(options) {
			      // Verifying and validating the input object
			      if (!options) {
			        options = {};
			      }

			      // Creating the options object
			      this.options = {};

			      this.toastElement = null;

			      // Validating the options
			      this.options.text = options.text || Toastify.defaults.text; // Display message
			      this.options.node = options.node || Toastify.defaults.node;  // Display content as node
			      this.options.duration = options.duration === 0 ? 0 : options.duration || Toastify.defaults.duration; // Display duration
			      this.options.selector = options.selector || Toastify.defaults.selector; // Parent selector
			      this.options.callback = options.callback || Toastify.defaults.callback; // Callback after display
			      this.options.destination = options.destination || Toastify.defaults.destination; // On-click destination
			      this.options.newWindow = options.newWindow || Toastify.defaults.newWindow; // Open destination in new window
			      this.options.close = options.close || Toastify.defaults.close; // Show toast close icon
			      this.options.gravity = options.gravity === "bottom" ? "toastify-bottom" : Toastify.defaults.gravity; // toast position - top or bottom
			      this.options.positionLeft = options.positionLeft || Toastify.defaults.positionLeft; // toast position - left or right
			      this.options.position = options.position || Toastify.defaults.position; // toast position - left or right
			      this.options.backgroundColor = options.backgroundColor || Toastify.defaults.backgroundColor; // toast background color
			      this.options.avatar = options.avatar || Toastify.defaults.avatar; // img element src - url or a path
			      this.options.className = options.className || Toastify.defaults.className; // additional class names for the toast
			      this.options.stopOnFocus = options.stopOnFocus === undefined ? Toastify.defaults.stopOnFocus : options.stopOnFocus; // stop timeout on focus
			      this.options.onClick = options.onClick || Toastify.defaults.onClick; // Callback after click
			      this.options.offset = options.offset || Toastify.defaults.offset; // toast offset
			      this.options.escapeMarkup = options.escapeMarkup !== undefined ? options.escapeMarkup : Toastify.defaults.escapeMarkup;
			      this.options.ariaLive = options.ariaLive || Toastify.defaults.ariaLive;
			      this.options.style = options.style || Toastify.defaults.style;
			      if(options.backgroundColor) {
			        this.options.style.background = options.backgroundColor;
			      }

			      // Returning the current object for chaining functions
			      return this;
			    },

			    // Building the DOM element
			    buildToast: function() {
			      // Validating if the options are defined
			      if (!this.options) {
			        throw "Toastify is not initialized";
			      }

			      // Creating the DOM object
			      var divElement = document.createElement("div");
			      divElement.className = "toastify on " + this.options.className;

			      // Positioning toast to left or right or center
			      if (!!this.options.position) {
			        divElement.className += " toastify-" + this.options.position;
			      } else {
			        // To be depreciated in further versions
			        if (this.options.positionLeft === true) {
			          divElement.className += " toastify-left";
			          console.warn('Property `positionLeft` will be depreciated in further versions. Please use `position` instead.');
			        } else {
			          // Default position
			          divElement.className += " toastify-right";
			        }
			      }

			      // Assigning gravity of element
			      divElement.className += " " + this.options.gravity;

			      if (this.options.backgroundColor) {
			        // This is being deprecated in favor of using the style HTML DOM property
			        console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');
			      }

			      // Loop through our style object and apply styles to divElement
			      for (var property in this.options.style) {
			        divElement.style[property] = this.options.style[property];
			      }

			      // Announce the toast to screen readers
			      if (this.options.ariaLive) {
			        divElement.setAttribute('aria-live', this.options.ariaLive);
			      }

			      // Adding the toast message/node
			      if (this.options.node && this.options.node.nodeType === Node.ELEMENT_NODE) {
			        // If we have a valid node, we insert it
			        divElement.appendChild(this.options.node);
			      } else {
			        if (this.options.escapeMarkup) {
			          divElement.innerText = this.options.text;
			        } else {
			          divElement.innerHTML = this.options.text;
			        }

			        if (this.options.avatar !== "") {
			          var avatarElement = document.createElement("img");
			          avatarElement.src = this.options.avatar;

			          avatarElement.className = "toastify-avatar";

			          if (this.options.position == "left" || this.options.positionLeft === true) {
			            // Adding close icon on the left of content
			            divElement.appendChild(avatarElement);
			          } else {
			            // Adding close icon on the right of content
			            divElement.insertAdjacentElement("afterbegin", avatarElement);
			          }
			        }
			      }

			      // Adding a close icon to the toast
			      if (this.options.close === true) {
			        // Create a span for close element
			        var closeElement = document.createElement("button");
			        closeElement.type = "button";
			        closeElement.setAttribute("aria-label", "Close");
			        closeElement.className = "toast-close";
			        closeElement.innerHTML = "&#10006;";

			        // Triggering the removal of toast from DOM on close click
			        closeElement.addEventListener(
			          "click",
			          function(event) {
			            event.stopPropagation();
			            this.removeElement(this.toastElement);
			            window.clearTimeout(this.toastElement.timeOutValue);
			          }.bind(this)
			        );

			        //Calculating screen width
			        var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

			        // Adding the close icon to the toast element
			        // Display on the right if screen width is less than or equal to 360px
			        if ((this.options.position == "left" || this.options.positionLeft === true) && width > 360) {
			          // Adding close icon on the left of content
			          divElement.insertAdjacentElement("afterbegin", closeElement);
			        } else {
			          // Adding close icon on the right of content
			          divElement.appendChild(closeElement);
			        }
			      }

			      // Clear timeout while toast is focused
			      if (this.options.stopOnFocus && this.options.duration > 0) {
			        var self = this;
			        // stop countdown
			        divElement.addEventListener(
			          "mouseover",
			          function(event) {
			            window.clearTimeout(divElement.timeOutValue);
			          }
			        );
			        // add back the timeout
			        divElement.addEventListener(
			          "mouseleave",
			          function() {
			            divElement.timeOutValue = window.setTimeout(
			              function() {
			                // Remove the toast from DOM
			                self.removeElement(divElement);
			              },
			              self.options.duration
			            );
			          }
			        );
			      }

			      // Adding an on-click destination path
			      if (typeof this.options.destination !== "undefined") {
			        divElement.addEventListener(
			          "click",
			          function(event) {
			            event.stopPropagation();
			            if (this.options.newWindow === true) {
			              window.open(this.options.destination, "_blank");
			            } else {
			              window.location = this.options.destination;
			            }
			          }.bind(this)
			        );
			      }

			      if (typeof this.options.onClick === "function" && typeof this.options.destination === "undefined") {
			        divElement.addEventListener(
			          "click",
			          function(event) {
			            event.stopPropagation();
			            this.options.onClick();
			          }.bind(this)
			        );
			      }

			      // Adding offset
			      if(typeof this.options.offset === "object") {

			        var x = getAxisOffsetAValue("x", this.options);
			        var y = getAxisOffsetAValue("y", this.options);

			        var xOffset = this.options.position == "left" ? x : "-" + x;
			        var yOffset = this.options.gravity == "toastify-top" ? y : "-" + y;

			        divElement.style.transform = "translate(" + xOffset + "," + yOffset + ")";

			      }

			      // Returning the generated element
			      return divElement;
			    },

			    // Displaying the toast
			    showToast: function() {
			      // Creating the DOM object for the toast
			      this.toastElement = this.buildToast();

			      // Getting the root element to with the toast needs to be added
			      var rootElement;
			      if (typeof this.options.selector === "string") {
			        rootElement = document.getElementById(this.options.selector);
			      } else if (this.options.selector instanceof HTMLElement || (typeof ShadowRoot !== 'undefined' && this.options.selector instanceof ShadowRoot)) {
			        rootElement = this.options.selector;
			      } else {
			        rootElement = document.body;
			      }

			      // Validating if root element is present in DOM
			      if (!rootElement) {
			        throw "Root element is not defined";
			      }

			      // Adding the DOM element
			      var elementToInsert = Toastify.defaults.oldestFirst ? rootElement.firstChild : rootElement.lastChild;
			      rootElement.insertBefore(this.toastElement, elementToInsert);

			      // Repositioning the toasts in case multiple toasts are present
			      Toastify.reposition();

			      if (this.options.duration > 0) {
			        this.toastElement.timeOutValue = window.setTimeout(
			          function() {
			            // Remove the toast from DOM
			            this.removeElement(this.toastElement);
			          }.bind(this),
			          this.options.duration
			        ); // Binding `this` for function invocation
			      }

			      // Supporting function chaining
			      return this;
			    },

			    hideToast: function() {
			      if (this.toastElement.timeOutValue) {
			        clearTimeout(this.toastElement.timeOutValue);
			      }
			      this.removeElement(this.toastElement);
			    },

			    // Removing the element from the DOM
			    removeElement: function(toastElement) {
			      // Hiding the element
			      // toastElement.classList.remove("on");
			      toastElement.className = toastElement.className.replace(" on", "");

			      // Removing the element from DOM after transition end
			      window.setTimeout(
			        function() {
			          // remove options node if any
			          if (this.options.node && this.options.node.parentNode) {
			            this.options.node.parentNode.removeChild(this.options.node);
			          }

			          // Remove the element from the DOM, only when the parent node was not removed before.
			          if (toastElement.parentNode) {
			            toastElement.parentNode.removeChild(toastElement);
			          }

			          // Calling the callback function
			          this.options.callback.call(toastElement);

			          // Repositioning the toasts again
			          Toastify.reposition();
			        }.bind(this),
			        400
			      ); // Binding `this` for function invocation
			    },
			  };

			  // Positioning the toasts on the DOM
			  Toastify.reposition = function() {

			    // Top margins with gravity
			    var topLeftOffsetSize = {
			      top: 15,
			      bottom: 15,
			    };
			    var topRightOffsetSize = {
			      top: 15,
			      bottom: 15,
			    };
			    var offsetSize = {
			      top: 15,
			      bottom: 15,
			    };

			    // Get all toast messages on the DOM
			    var allToasts = document.getElementsByClassName("toastify");

			    var classUsed;

			    // Modifying the position of each toast element
			    for (var i = 0; i < allToasts.length; i++) {
			      // Getting the applied gravity
			      if (containsClass(allToasts[i], "toastify-top") === true) {
			        classUsed = "toastify-top";
			      } else {
			        classUsed = "toastify-bottom";
			      }

			      var height = allToasts[i].offsetHeight;
			      classUsed = classUsed.substr(9, classUsed.length-1);
			      // Spacing between toasts
			      var offset = 15;

			      var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

			      // Show toast in center if screen with less than or equal to 360px
			      if (width <= 360) {
			        // Setting the position
			        allToasts[i].style[classUsed] = offsetSize[classUsed] + "px";

			        offsetSize[classUsed] += height + offset;
			      } else {
			        if (containsClass(allToasts[i], "toastify-left") === true) {
			          // Setting the position
			          allToasts[i].style[classUsed] = topLeftOffsetSize[classUsed] + "px";

			          topLeftOffsetSize[classUsed] += height + offset;
			        } else {
			          // Setting the position
			          allToasts[i].style[classUsed] = topRightOffsetSize[classUsed] + "px";

			          topRightOffsetSize[classUsed] += height + offset;
			        }
			      }
			    }

			    // Supporting function chaining
			    return this;
			  };

			  // Helper function to get offset.
			  function getAxisOffsetAValue(axis, options) {

			    if(options.offset[axis]) {
			      if(isNaN(options.offset[axis])) {
			        return options.offset[axis];
			      }
			      else {
			        return options.offset[axis] + 'px';
			      }
			    }

			    return '0px';

			  }

			  function containsClass(elem, yourClass) {
			    if (!elem || typeof yourClass !== "string") {
			      return false;
			    } else if (
			      elem.className &&
			      elem.className
			        .trim()
			        .split(/\s+/gi)
			        .indexOf(yourClass) > -1
			    ) {
			      return true;
			    } else {
			      return false;
			    }
			  }

			  // Setting up the prototype for the init object
			  Toastify.lib.init.prototype = Toastify.lib;

			  // Returning the Toastify function to be assigned to the window object/module
			  return Toastify;
			}); 
		} (toastify$1));
		return toastify$1.exports;
	}

	var toastifyExports = requireToastify();
	const Toastify = /*@__PURE__*/getDefaultExportFromCjs(toastifyExports);

	function _extends() {
	  return _extends = Object.assign ? Object.assign.bind() : function (n) {
	    for (var e = 1; e < arguments.length; e++) {
	      var t = arguments[e];
	      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
	    }
	    return n;
	  }, _extends.apply(null, arguments);
	}

	/*! @violentmonkey/shortcut v1.4.4 | ISC License */

	const isMacintosh = navigator.userAgent.includes('Macintosh');
	const modifierList = ['m', 'c', 's', 'a'];
	const modifiers = {
	  ctrl: 'c',
	  control: 'c',
	  // macOS
	  shift: 's',
	  alt: 'a',
	  meta: 'm',
	  cmd: 'm'
	};
	const modifierAliases = _extends({}, modifiers, {
	  c: 'c',
	  s: 's',
	  a: 'a',
	  m: 'm',
	  cm: isMacintosh ? 'm' : 'c',
	  ctrlcmd: isMacintosh ? 'm' : 'c'
	});
	const aliases = {
	  arrowup: 'up',
	  arrowdown: 'down',
	  arrowleft: 'left',
	  arrowright: 'right',
	  cr: 'enter',
	  escape: 'esc',
	  ' ': 'space'
	};

	function createKeyNode() {
	  return {
	    children: new Map(),
	    shortcuts: new Set()
	  };
	}
	function addKeyNode(root, sequence, shortcut) {
	  let node = root;
	  for (const key of sequence) {
	    let child = node.children.get(key);
	    if (!child) {
	      child = createKeyNode();
	      node.children.set(key, child);
	    }
	    node = child;
	  }
	  node.shortcuts.add(shortcut);
	}
	function getKeyNode(root, sequence) {
	  let node = root;
	  for (const key of sequence) {
	    node = node.children.get(key);
	    if (!node) break;
	  }
	  return node;
	}
	function removeKeyNode(root, sequence, shortcut) {
	  let node = root;
	  const ancestors = [node];
	  for (const key of sequence) {
	    node = node.children.get(key);
	    if (!node) return;
	    ancestors.push(node);
	  }
	  if (shortcut) node.shortcuts.delete(shortcut);else node.shortcuts.clear();
	  let i = ancestors.length - 1;
	  while (i > 0) {
	    node = ancestors[i];
	    if (node.shortcuts.size || node.children.size) break;
	    const last = ancestors[i - 1];
	    last.children.delete(sequence[i - 1]);
	    i -= 1;
	  }
	}
	function reprNodeTree(root) {
	  const result = [];
	  const reprChildren = (node, level = 0) => {
	    for (const [key, child] of node.children.entries()) {
	      result.push(['  '.repeat(level), key, child.shortcuts.size ? ` (${child.shortcuts.size})` : ''].join(''));
	      reprChildren(child, level + 1);
	    }
	  };
	  reprChildren(root);
	  return result.join('\n');
	}

	class Subject {
	  constructor(value) {
	    this.listeners = [];
	    this.value = value;
	  }
	  get() {
	    return this.value;
	  }
	  set(value) {
	    this.value = value;
	    this.listeners.forEach(listener => listener(value));
	  }
	  subscribe(callback) {
	    this.listeners.push(callback);
	    callback(this.value);
	    return () => this.unsubscribe(callback);
	  }
	  unsubscribe(callback) {
	    const i = this.listeners.indexOf(callback);
	    if (i >= 0) this.listeners.splice(i, 1);
	  }
	}

	function buildKey(key) {
	  const {
	    caseSensitive,
	    modifierState
	  } = key;
	  let {
	    base
	  } = key;
	  if (!caseSensitive || base.length > 1) base = base.toLowerCase();
	  base = aliases[base] || base;
	  const keyExp = [...modifierList.filter(m => modifierState[m]), base].filter(Boolean).join('-');
	  return `${caseSensitive ? '' : 'i:'}${keyExp}`;
	}
	function breakKey(shortcut) {
	  const pieces = shortcut.split(/-(.)/);
	  const parts = [pieces[0]];
	  for (let i = 1; i < pieces.length; i += 2) {
	    parts.push(pieces[i] + pieces[i + 1]);
	  }
	  return parts;
	}
	function parseKey(shortcut, caseSensitive) {
	  const parts = breakKey(shortcut);
	  const base = parts.pop();
	  const modifierState = {};
	  for (const part of parts) {
	    const key = modifierAliases[part.toLowerCase()];
	    if (!key) throw new Error(`Unknown modifier key: ${part}`);
	    modifierState[key] = true;
	  }
	  // Alt/Shift modifies the character.
	  // In case sensitive mode, we only need to check the modified character: <c-A> = Ctrl+Shift+KeyA
	  // In case insensitive mode, we check the keyCode as well as modifiers: <c-s-a> = Ctrl+Shift+KeyA
	  // So if Alt/Shift appears in the shortcut, we must switch to case insensitive mode.
	  caseSensitive && (caseSensitive = !(modifierState.a || modifierState.s));
	  return {
	    base,
	    modifierState,
	    caseSensitive
	  };
	}
	function getSequence(input) {
	  return Array.isArray(input) ? input : input.split(/\s+/);
	}
	function normalizeSequence(input, caseSensitive) {
	  return getSequence(input).map(key => parseKey(key, caseSensitive));
	}
	function parseCondition(condition) {
	  return condition.split('&&').map(key => {
	    key = key.trim();
	    if (!key) return;
	    if (key[0] === '!') {
	      return {
	        not: true,
	        field: key.slice(1).trim()
	      };
	    }
	    return {
	      not: false,
	      field: key
	    };
	  }).filter(Boolean);
	}
	class KeyboardService {
	  constructor(options) {
	    this._context = {};
	    this._conditionData = {};
	    this._data = [];
	    this._root = createKeyNode();
	    this.sequence = new Subject([]);
	    this._timer = 0;
	    this._reset = () => {
	      this._cur = undefined;
	      this.sequence.set([]);
	      this._resetTimer();
	    };
	    this.handleKey = e => {
	      // Chrome sends a trusted keydown event with no key when choosing from autofill
	      if (!e.key || modifiers[e.key.toLowerCase()]) return;
	      this._resetTimer();
	      const keyExps = [
	      // case sensitive mode, `e.key` is the character considering Alt/Shift
	      buildKey({
	        base: e.key,
	        modifierState: {
	          c: e.ctrlKey,
	          m: e.metaKey
	        },
	        caseSensitive: true
	      }),
	      // case insensitive mode, using `e.code` with modifiers including Alt/Shift
	      buildKey({
	        base: e.code,
	        modifierState: {
	          c: e.ctrlKey,
	          s: e.shiftKey,
	          a: e.altKey,
	          m: e.metaKey
	        },
	        caseSensitive: false
	      }),
	      // case insensitive mode, using `e.key` with modifiers
	      buildKey({
	        // Note: `e.key` might be different from what you expect because of Alt Graph
	        // ref: https://en.wikipedia.org/wiki/AltGr_key
	        base: e.key,
	        modifierState: {
	          c: e.ctrlKey,
	          s: e.shiftKey,
	          a: e.altKey,
	          m: e.metaKey
	        },
	        caseSensitive: false
	      })];
	      const state = this._handleKeyOnce(keyExps, false);
	      if (state) {
	        e.preventDefault();
	        if (state === 2) this._reset();
	      }
	      this._timer = window.setTimeout(this._reset, this.options.sequenceTimeout);
	    };
	    this.options = _extends({}, KeyboardService.defaultOptions, options);
	  }
	  _resetTimer() {
	    if (this._timer) {
	      window.clearTimeout(this._timer);
	      this._timer = 0;
	    }
	  }
	  _addCondition(condition) {
	    let cache = this._conditionData[condition];
	    if (!cache) {
	      const value = parseCondition(condition);
	      cache = {
	        count: 0,
	        value,
	        result: this._evalCondition(value)
	      };
	      this._conditionData[condition] = cache;
	    }
	    cache.count += 1;
	  }
	  _removeCondition(condition) {
	    const cache = this._conditionData[condition];
	    if (cache) {
	      cache.count -= 1;
	      if (!cache.count) {
	        delete this._conditionData[condition];
	      }
	    }
	  }
	  _evalCondition(conditions) {
	    return conditions.every(cond => {
	      let value = this._context[cond.field];
	      if (cond.not) value = !value;
	      return value;
	    });
	  }
	  _checkShortcut(item) {
	    const cache = item.condition && this._conditionData[item.condition];
	    const enabled = !cache || cache.result;
	    if (item.enabled !== enabled) {
	      item.enabled = enabled;
	      this._enableShortcut(item);
	    }
	  }
	  _enableShortcut(item) {
	    (item.enabled ? addKeyNode : removeKeyNode)(this._root, item.sequence, item);
	  }
	  enable() {
	    this.disable();
	    document.addEventListener('keydown', this.handleKey);
	  }
	  disable() {
	    document.removeEventListener('keydown', this.handleKey);
	  }
	  register(key, callback, options) {
	    const {
	      caseSensitive,
	      condition
	    } = _extends({
	      caseSensitive: false
	    }, options);
	    const sequence = normalizeSequence(key, caseSensitive).map(key => buildKey(key));
	    const item = {
	      sequence,
	      condition,
	      callback,
	      enabled: false,
	      caseSensitive
	    };
	    if (condition) this._addCondition(condition);
	    this._checkShortcut(item);
	    this._data.push(item);
	    return () => {
	      const index = this._data.indexOf(item);
	      if (index >= 0) {
	        this._data.splice(index, 1);
	        if (condition) this._removeCondition(condition);
	        item.enabled = false;
	        this._enableShortcut(item);
	      }
	    };
	  }
	  setContext(key, value) {
	    this._context[key] = value;
	    for (const cache of Object.values(this._conditionData)) {
	      cache.result = this._evalCondition(cache.value);
	    }
	    for (const item of this._data) {
	      this._checkShortcut(item);
	    }
	  }
	  _handleKeyOnce(keyExps, fromRoot) {
	    var _cur, _cur2;
	    let cur = this._cur;
	    if (fromRoot || !cur) {
	      // set fromRoot to true to avoid another retry
	      fromRoot = true;
	      cur = this._root;
	    }
	    if (cur) {
	      let next;
	      for (const key of keyExps) {
	        next = getKeyNode(cur, [key]);
	        if (next) {
	          this.sequence.set([...this.sequence.get(), key]);
	          break;
	        }
	      }
	      cur = next;
	    }
	    this._cur = cur;
	    const [shortcut] = [...(((_cur = cur) == null ? void 0 : _cur.shortcuts) || [])];
	    if (!fromRoot && !shortcut && !((_cur2 = cur) != null && _cur2.children.size)) {
	      // Nothing is matched with the last key, rematch from root
	      this._reset();
	      return this._handleKeyOnce(keyExps, true);
	    }
	    if (shortcut) {
	      try {
	        shortcut.callback();
	      } catch (_unused) {
	        // ignore
	      }
	      return 2;
	    }
	    return this._cur ? 1 : 0;
	  }
	  repr() {
	    return reprNodeTree(this._root);
	  }
	}
	KeyboardService.defaultOptions = {
	  sequenceTimeout: 500
	};
	let service;
	function getService() {
	  if (!service) {
	    service = new KeyboardService();
	    service.enable();
	  }
	  return service;
	}
	const register = (...args) => getService().register(...args);

	var characterMap = {
		"À": "A",
		"Á": "A",
		"Â": "A",
		"Ã": "A",
		"Ä": "A",
		"Å": "A",
		"Ấ": "A",
		"Ắ": "A",
		"Ẳ": "A",
		"Ẵ": "A",
		"Ặ": "A",
		"Æ": "AE",
		"Ầ": "A",
		"Ằ": "A",
		"Ȃ": "A",
		"Ç": "C",
		"Ḉ": "C",
		"È": "E",
		"É": "E",
		"Ê": "E",
		"Ë": "E",
		"Ế": "E",
		"Ḗ": "E",
		"Ề": "E",
		"Ḕ": "E",
		"Ḝ": "E",
		"Ȇ": "E",
		"Ì": "I",
		"Í": "I",
		"Î": "I",
		"Ï": "I",
		"Ḯ": "I",
		"Ȋ": "I",
		"Ð": "D",
		"Ñ": "N",
		"Ò": "O",
		"Ó": "O",
		"Ô": "O",
		"Õ": "O",
		"Ö": "O",
		"Ø": "O",
		"Ố": "O",
		"Ṍ": "O",
		"Ṓ": "O",
		"Ȏ": "O",
		"Ù": "U",
		"Ú": "U",
		"Û": "U",
		"Ü": "U",
		"Ý": "Y",
		"à": "a",
		"á": "a",
		"â": "a",
		"ã": "a",
		"ä": "a",
		"å": "a",
		"ấ": "a",
		"ắ": "a",
		"ẳ": "a",
		"ẵ": "a",
		"ặ": "a",
		"æ": "ae",
		"ầ": "a",
		"ằ": "a",
		"ȃ": "a",
		"ç": "c",
		"ḉ": "c",
		"è": "e",
		"é": "e",
		"ê": "e",
		"ë": "e",
		"ế": "e",
		"ḗ": "e",
		"ề": "e",
		"ḕ": "e",
		"ḝ": "e",
		"ȇ": "e",
		"ì": "i",
		"í": "i",
		"î": "i",
		"ï": "i",
		"ḯ": "i",
		"ȋ": "i",
		"ð": "d",
		"ñ": "n",
		"ò": "o",
		"ó": "o",
		"ô": "o",
		"õ": "o",
		"ö": "o",
		"ø": "o",
		"ố": "o",
		"ṍ": "o",
		"ṓ": "o",
		"ȏ": "o",
		"ù": "u",
		"ú": "u",
		"û": "u",
		"ü": "u",
		"ý": "y",
		"ÿ": "y",
		"Ā": "A",
		"ā": "a",
		"Ă": "A",
		"ă": "a",
		"Ą": "A",
		"ą": "a",
		"Ć": "C",
		"ć": "c",
		"Ĉ": "C",
		"ĉ": "c",
		"Ċ": "C",
		"ċ": "c",
		"Č": "C",
		"č": "c",
		"C̆": "C",
		"c̆": "c",
		"Ď": "D",
		"ď": "d",
		"Đ": "D",
		"đ": "d",
		"Ē": "E",
		"ē": "e",
		"Ĕ": "E",
		"ĕ": "e",
		"Ė": "E",
		"ė": "e",
		"Ę": "E",
		"ę": "e",
		"Ě": "E",
		"ě": "e",
		"Ĝ": "G",
		"Ǵ": "G",
		"ĝ": "g",
		"ǵ": "g",
		"Ğ": "G",
		"ğ": "g",
		"Ġ": "G",
		"ġ": "g",
		"Ģ": "G",
		"ģ": "g",
		"Ĥ": "H",
		"ĥ": "h",
		"Ħ": "H",
		"ħ": "h",
		"Ḫ": "H",
		"ḫ": "h",
		"Ĩ": "I",
		"ĩ": "i",
		"Ī": "I",
		"ī": "i",
		"Ĭ": "I",
		"ĭ": "i",
		"Į": "I",
		"į": "i",
		"İ": "I",
		"ı": "i",
		"Ĳ": "IJ",
		"ĳ": "ij",
		"Ĵ": "J",
		"ĵ": "j",
		"Ķ": "K",
		"ķ": "k",
		"Ḱ": "K",
		"ḱ": "k",
		"K̆": "K",
		"k̆": "k",
		"Ĺ": "L",
		"ĺ": "l",
		"Ļ": "L",
		"ļ": "l",
		"Ľ": "L",
		"ľ": "l",
		"Ŀ": "L",
		"ŀ": "l",
		"Ł": "l",
		"ł": "l",
		"Ḿ": "M",
		"ḿ": "m",
		"M̆": "M",
		"m̆": "m",
		"Ń": "N",
		"ń": "n",
		"Ņ": "N",
		"ņ": "n",
		"Ň": "N",
		"ň": "n",
		"ŉ": "n",
		"N̆": "N",
		"n̆": "n",
		"Ō": "O",
		"ō": "o",
		"Ŏ": "O",
		"ŏ": "o",
		"Ő": "O",
		"ő": "o",
		"Œ": "OE",
		"œ": "oe",
		"P̆": "P",
		"p̆": "p",
		"Ŕ": "R",
		"ŕ": "r",
		"Ŗ": "R",
		"ŗ": "r",
		"Ř": "R",
		"ř": "r",
		"R̆": "R",
		"r̆": "r",
		"Ȓ": "R",
		"ȓ": "r",
		"Ś": "S",
		"ś": "s",
		"Ŝ": "S",
		"ŝ": "s",
		"Ş": "S",
		"Ș": "S",
		"ș": "s",
		"ş": "s",
		"Š": "S",
		"š": "s",
		"Ţ": "T",
		"ţ": "t",
		"ț": "t",
		"Ț": "T",
		"Ť": "T",
		"ť": "t",
		"Ŧ": "T",
		"ŧ": "t",
		"T̆": "T",
		"t̆": "t",
		"Ũ": "U",
		"ũ": "u",
		"Ū": "U",
		"ū": "u",
		"Ŭ": "U",
		"ŭ": "u",
		"Ů": "U",
		"ů": "u",
		"Ű": "U",
		"ű": "u",
		"Ų": "U",
		"ų": "u",
		"Ȗ": "U",
		"ȗ": "u",
		"V̆": "V",
		"v̆": "v",
		"Ŵ": "W",
		"ŵ": "w",
		"Ẃ": "W",
		"ẃ": "w",
		"X̆": "X",
		"x̆": "x",
		"Ŷ": "Y",
		"ŷ": "y",
		"Ÿ": "Y",
		"Y̆": "Y",
		"y̆": "y",
		"Ź": "Z",
		"ź": "z",
		"Ż": "Z",
		"ż": "z",
		"Ž": "Z",
		"ž": "z",
		"ſ": "s",
		"ƒ": "f",
		"Ơ": "O",
		"ơ": "o",
		"Ư": "U",
		"ư": "u",
		"Ǎ": "A",
		"ǎ": "a",
		"Ǐ": "I",
		"ǐ": "i",
		"Ǒ": "O",
		"ǒ": "o",
		"Ǔ": "U",
		"ǔ": "u",
		"Ǖ": "U",
		"ǖ": "u",
		"Ǘ": "U",
		"ǘ": "u",
		"Ǚ": "U",
		"ǚ": "u",
		"Ǜ": "U",
		"ǜ": "u",
		"Ứ": "U",
		"ứ": "u",
		"Ṹ": "U",
		"ṹ": "u",
		"Ǻ": "A",
		"ǻ": "a",
		"Ǽ": "AE",
		"ǽ": "ae",
		"Ǿ": "O",
		"ǿ": "o",
		"Þ": "TH",
		"þ": "th",
		"Ṕ": "P",
		"ṕ": "p",
		"Ṥ": "S",
		"ṥ": "s",
		"X́": "X",
		"x́": "x",
		"Ѓ": "Г",
		"ѓ": "г",
		"Ќ": "К",
		"ќ": "к",
		"A̋": "A",
		"a̋": "a",
		"E̋": "E",
		"e̋": "e",
		"I̋": "I",
		"i̋": "i",
		"Ǹ": "N",
		"ǹ": "n",
		"Ồ": "O",
		"ồ": "o",
		"Ṑ": "O",
		"ṑ": "o",
		"Ừ": "U",
		"ừ": "u",
		"Ẁ": "W",
		"ẁ": "w",
		"Ỳ": "Y",
		"ỳ": "y",
		"Ȁ": "A",
		"ȁ": "a",
		"Ȅ": "E",
		"ȅ": "e",
		"Ȉ": "I",
		"ȉ": "i",
		"Ȍ": "O",
		"ȍ": "o",
		"Ȑ": "R",
		"ȑ": "r",
		"Ȕ": "U",
		"ȕ": "u",
		"B̌": "B",
		"b̌": "b",
		"Č̣": "C",
		"č̣": "c",
		"Ê̌": "E",
		"ê̌": "e",
		"F̌": "F",
		"f̌": "f",
		"Ǧ": "G",
		"ǧ": "g",
		"Ȟ": "H",
		"ȟ": "h",
		"J̌": "J",
		"ǰ": "j",
		"Ǩ": "K",
		"ǩ": "k",
		"M̌": "M",
		"m̌": "m",
		"P̌": "P",
		"p̌": "p",
		"Q̌": "Q",
		"q̌": "q",
		"Ř̩": "R",
		"ř̩": "r",
		"Ṧ": "S",
		"ṧ": "s",
		"V̌": "V",
		"v̌": "v",
		"W̌": "W",
		"w̌": "w",
		"X̌": "X",
		"x̌": "x",
		"Y̌": "Y",
		"y̌": "y",
		"A̧": "A",
		"a̧": "a",
		"B̧": "B",
		"b̧": "b",
		"Ḑ": "D",
		"ḑ": "d",
		"Ȩ": "E",
		"ȩ": "e",
		"Ɛ̧": "E",
		"ɛ̧": "e",
		"Ḩ": "H",
		"ḩ": "h",
		"I̧": "I",
		"i̧": "i",
		"Ɨ̧": "I",
		"ɨ̧": "i",
		"M̧": "M",
		"m̧": "m",
		"O̧": "O",
		"o̧": "o",
		"Q̧": "Q",
		"q̧": "q",
		"U̧": "U",
		"u̧": "u",
		"X̧": "X",
		"x̧": "x",
		"Z̧": "Z",
		"z̧": "z",
	};

	var chars = Object.keys(characterMap).join('|');
	var allAccents = new RegExp(chars, 'g');

	const matcher = (match) => characterMap[match];

	const removeAccents = (string) => string.replace(allAccents, matcher);

	var _GM = /* @__PURE__ */ (() => typeof GM != "undefined" ? GM : void 0)();
	var _GM_addStyle = /* @__PURE__ */ (() => typeof GM_addStyle != "undefined" ? GM_addStyle : void 0)();
	var _GM_getResourceText = /* @__PURE__ */ (() => typeof GM_getResourceText != "undefined" ? GM_getResourceText : void 0)();
	var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
	var _GM_registerMenuCommand = /* @__PURE__ */ (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
	var _GM_setClipboard = /* @__PURE__ */ (() => typeof GM_setClipboard != "undefined" ? GM_setClipboard : void 0)();
	var _GM_setValue = /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();

	const profiles = {};
	let oldHref = document.location.href;
	const dictionary = {
	  "Daglig leder": "CEO",
	  "Styrets leder": "Chairman",
	  "Styremedlem": "Board Member",
	  "Varamedlem": "Deputy Board Member",
	  "Nestleder": "Deputy Chairman",
	  "Verkställande direktör": "CEO",
	  "Ordförande": "Chairman",
	  "Ledamot": "Board Member",
	  "Suppleant": "Deputy Board Member",
	  "Extern verkställande direktör": "CEO",
	  "Extern vice verkställande direktör": "Deputy CEO",
	  "Owner": "owner",
	  "Founder": "founder",
	  "gründer": "founder",
	  "salgssjef": "Sales Manager",
	  "salgsleder": "Sales Manager",
	  "salgsrepresentant": "Sales Representative",
	  "salgs representant": "Sales Representative",
	  "markedssjef": "Marketing Manager",
	  "Avdelingsleder": "Head of Department",
	  "Gruppeleder": "Team Leader",
	  "Rådgiver": "Adviser",
	  "Analytiker": "Analyst",
	  "Member of the Board": "Board Member",
	  "Styreleder": "Chairman",
	  "Administrerende direktør": "CEO",
	  "Adm. dir.": "CEO",
	  "prosjektleder": "Project Manager",
	  "Prosjektleder": "Project Manager",
	  "Teknisk sjef": "Technical Manager",
	  "Salgsdirektor": "Sales Director",
	  "Avdelingssjef": "Head of Department",
	  "Økonomisjef": "Finance Manager",
	  "Okonomisjef": "Finance Manager"
	};
	const customAccents = {
	  //"Æ": "Ae",
	  AE: "Ae"
	};
	let apiKey = _GM_getValue("apiKey");
	if (apiKey != void 0) {
	  console.log("API key found.");
	}
	_GM_registerMenuCommand(`Set API key`, () => {
	  apiKey = prompt("API key:", "");
	  _GM_setValue("apiKey", apiKey);
	  console.log("New API key set.");
	});
	_GM_addStyle(_GM_getResourceText("toastifyCSS") + `div.toastify { margin-top: 120px; width: inherit; font-family: Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif; }`);
	register("a-c-c", () => {
	  const curProf = getCache();
	  Toastify({
	    text: `👍 ${curProf.name}: ${curProf.totalExp} positions`,
	    duration: 15e3,
	    gravity: "bottom",
	    stopOnFocus: true,
	    style: {
	      "padding": "5px",
	      "background": "rgb(0, 65, 130, 0.9)",
	      "color": "#ddd",
	      "font-weight": "500",
	      "border-radius": "50px",
	      "min-width": "300px",
	      "text-align": "center",
	      "font-variant": "small-caps"
	    },
	    onClick: function() {
	      _GM_setClipboard(curProf?.copyStr ?? "");
	      this.hideToast();
	    }
	  }).showToast();
	  _GM_setClipboard(curProf?.copyStr ?? "");
	});
	const getProfileUrl = () => {
	  return document.location.pathname.split("/").at(2) ?? "?";
	};
	const getCache = () => {
	  const profId = getProfileUrl();
	  if (!Object.prototype.hasOwnProperty.call(profiles, `${profId}`)) {
	    console.log("Creating empty profile cache");
	    profiles[profId] = { totalExp: 0, copyStr: "" };
	  }
	  const prof = profiles?.[profId] ?? void 0;
	  return prof;
	};
	const fetchData = () => {
	  if (apiKey == void 0) {
	    console.log("Missing API key:", apiKey);
	    return;
	  } else {
	    console.log(apiKey);
	  }
	  const curProf = getCache();
	  if (curProf.copyStr.length > 0) {
	    textReady();
	    return;
	  }
	  const slug = decodeURIComponent(getProfileUrl());
	  if (slug.length > 0) {
	    console.log("Slug:", slug);
	  } else {
	    console.log("No slug specified");
	  }
	  void _GM.xmlHttpRequest({
	    method: "GET",
	    url: `https://www.linkedin.com/in/${slug}/`,
	    headers: {
	      "Content-Type": "text/html; charset=utf-8",
	      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36",
	      "Cookie": `li_at=${apiKey}`,
	      "Accept-Encoding": "gzip, deflate, br"
	    },
	    onload: (response) => {
	      const doc = response.response;
	      const exp = doc?.querySelector("section.experience-container > ol");
	      let formatStr = "";
	      for (const e of exp?.querySelectorAll("li dl") ?? []) {
	        const company = e.querySelector("dd span")?.textContent?.trim() ?? "";
	        const position = e.querySelector("dt")?.textContent?.trim() ?? "";
	        const date = e.querySelectorAll("dd.body-small span.body-small");
	        const period = date?.length > 0 ? `${date[0].textContent}${date[1].textContent}` : "";
	        formatStr += formatLine(company, position, period);
	      }
	      curProf.name = doc?.querySelector("h1.heading-large")?.textContent?.trim() ?? "Unknown";
	      curProf.copyStr = formatResult(formatStr);
	      curProf.totalExp = curProf.copyStr.split("\r\n").length - 1;
	      textReady();
	    }
	  });
	};
	const formatLine = (company, position, period) => {
	  if (company.includes("·")) {
	    company = company.slice(0, Math.max(0, company.indexOf("·"))).trim();
	  }
	  if (period.includes("·")) {
	    period = period.slice(0, Math.max(0, period.indexOf("·"))).trim();
	  }
	  position = position.replaceAll(/[_]+/g, "");
	  period = period.replaceAll(/[^0-9-]+/g, "");
	  period = period.replace(/(\d{4})-\1/, "$1");
	  let f = `- ${company.trim()}, ${position.trim()}, ${period.trim() ?? "n/a"}`;
	  f = f.replaceAll(/\s+/g, " ") + "\r\n";
	  return f;
	};
	const formatResult = (f) => {
	  for (const [k, v] of Object.entries(dictionary)) {
	    f = f.replaceAll(k, v);
	  }
	  f = removeAccents(f);
	  for (const [k, v] of Object.entries(customAccents)) {
	    f = f.replaceAll(k, v);
	  }
	  return f;
	};
	const textReady = () => {
	  console.log("🍺 Profiles info:", profiles);
	  const curProf = getCache();
	  console.log("Text is ready:", curProf.copyStr);
	  void Toastify({
	    // Ctrl-Alt-C
	    text: `<b><i>${curProf.name}</i></b>: ${curProf.totalExp} exp.`,
	    duration: 15e3,
	    stopOnFocus: true,
	    escapeMarkup: false,
	    close: false,
	    gravity: "top",
	    position: "right",
	    style: {
	      "padding": "10px",
	      "background": "rgb(5, 118, 66, 0.8)",
	      "color": "#ddd",
	      "font-weight": "500",
	      "border-radius": "50px",
	      "min-width": "300px",
	      "text-align": "center",
	      "font-variant": "small-caps",
	      "selector": "div.application-outlet"
	    },
	    onClick: function() {
	      _GM_setClipboard(curProf.copyStr);
	      this.hideToast();
	    }
	  }).showToast();
	  _GM_registerMenuCommand(`${curProf.name}: Copy all ${curProf.totalExp} positions`, () => {
	    _GM_setClipboard(curProf.copyStr);
	  });
	};
	window.addEventListener("load", () => {
	  const observer = new MutationObserver(() => {
	    if (!document.location.href.includes("linkedin.com/in")) {
	      return;
	    }
	    if (oldHref !== document.location.href) {
	      oldHref = document.location.href;
	      console.log("URL Changed!");
	      fetchData();
	    }
	  });
	  observer.observe(document.body, { subtree: true, childList: true });
	});
	fetchData();

})();