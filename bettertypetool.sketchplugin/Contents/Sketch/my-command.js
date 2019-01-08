var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/my-command.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/my-command.js":
/*!***************************!*\
  !*** ./src/my-command.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);
 // documentation: https://developer.sketchapp.com/reference/api/

/* harmony default export */ __webpack_exports__["default"] = (function () {
  sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("It's alive 🙌");
  runPanel();
  setupFramework();
  framework("CoreText");
  var document = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.getSelectedDocument();
  var textLayer = document.selectedLayers.layers[0];
  var font = textLayer.sketchObject.font();
  var coreTextFont = CTFontCreateWithName(font.fontName(), font.pointSize(), nil);
  var features = CTFontCopyFeatures(coreTextFont);
  var settings = CTFontCopyFeatureSettings(coreTextFont);
  var main = HSMain.alloc().init();
  var featuresArray = main.bridgeArray(features);
  var settingsArray = main.bridgeArray(settings); //determineProps(featuresArray);

  console.log("Hello Finish");
});

function setupFramework() {
  // var HelloSketch_FrameworkPath = HelloSketch_FrameworkPath || COScript.currentCOScript().env().scriptURL.path().stringByDeletingLastPathComponent();
  var scriptPath = COScript.currentCOScript().env().scriptURL.path();
  var HelloSketch_FrameworkPath = scriptPath.stringByDeletingLastPathComponent().stringByDeletingLastPathComponent().stringByDeletingLastPathComponent().stringByDeletingLastPathComponent() + "/src";
  var HelloSketch_Log = HelloSketch_Log || log;

  (function () {
    var mocha = Mocha.sharedRuntime();
    var frameworkName = "HelloSketch";
    var directory = HelloSketch_FrameworkPath;

    if (mocha.valueForKey(frameworkName)) {
      HelloSketch_Log("😎 loadFramework: `" + frameworkName + "` already loaded.");
      return true;
    } else if (mocha.loadFrameworkWithName_inDirectory(frameworkName, directory)) {
      HelloSketch_Log("✅ loadFramework: `" + frameworkName + "` success!");
      mocha.setValue_forKey_(true, frameworkName);
      return true;
    } else {
      HelloSketch_Log("❌ loadFramework: `" + frameworkName + "` failed!: " + directory + ". Please define HelloSketch_FrameworkPath if you're trying to @import in a custom plugin");
      return false;
    }
  })();
}

function determineProps(featuresArray) {}

function runPanel() {
  console.log("Setting Up Panel");
  var threadDictionary = NSThread.mainThread().threadDictionary();
  var identifier = "co.betterTypePanel"; // If there is already a panel, prevent the plugin from running again

  if (threadDictionary[identifier]) return;
  threadDictionary.panelOpen = true;
  setupPanel(threadDictionary, identifier);
}

function setupPanel(threadDictionary, identifier) {
  var panelWidth = 312;
  var panelHeight = 305;
  var panel = NSPanel.alloc().init();
  panel.setFrame_display(NSMakeRect(0, 0, panelWidth, panelHeight), true);
  panel.setStyleMask(NSTexturedBackgroundWindowMask | NSTitledWindowMask | NSClosableWindowMask); // panel.setBackgroundColor(NSColor.whiteColor());

  panel.title = "betterTypePanel";
  panel.center();
  panel.makeKeyAndOrderFront(null);
  panel.setLevel(NSFloatingWindowLevel);
  COScript.currentCOScript().setShouldKeepAround_(true);
  panel.standardWindowButton(NSWindowMiniaturizeButton).setHidden(true);
  panel.standardWindowButton(NSWindowZoomButton).setHidden(true);
  var column1width = 109;
  var column2width = 171;
  var columnSpacing = 4;
  var rowSpacing = 8;
  var mainViewWidth = column1width + column2width + columnSpacing; // MARK: SETUP ROW 1

  var verticalPositionLabel = createTextField({
    text: "Vertical Position:",
    frame: NSMakeRect(0, 0, column1width, 17),
    alignment: NSTextAlignmentRight
  });
  verticalPositionLabel.addConstraint(NSLayoutConstraint.constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant(verticalPositionLabel, NSLayoutAttributeWidth, NSLayoutRelationEqual, nil, NSLayoutAttributeNotAnAttribute, 1.0, column1width));
  var verticalPositionPopupButton = NSPopUpButton.alloc().initWithFrame(NSMakeRect(0, 0, 150, 25));
  verticalPositionPopupButton.addItemsWithTitles(['Default Position', 'Superscript', 'Subscript', 'Ordinals', 'Scientific Notiation']);

  var verticalPositionTargetFuntion = function verticalPositionTargetFuntion(sender) {
    console.log(sender.title() + ' dropdown button was selected'); // Vertical Position
    // ID: kVerticalPositionType
    //
    // Selectors
    //
    // kNormalPositionSelector
    // This is the default. It means to display the text with no vertical displacement.
    //
    // kSuperiorsSelector
    // Changes any characters having superior forms in the font into those forms.
    //
    // kInferiorsSelector
    // Changes any characters having inferior forms in the font into those forms.
    //
    // kOrdinalsSelector
    // Contextually changes certain letters into their superior forms, like in Spanish changing from 1a to 1ª.
    //
    // kScientificInferiorsSelector
    // Changes any characters having them into inferior forms designed for a technical context (as in H2O).
    //

    if (sender.title() == 'Superscript') {
      var settingsAttribute = {
        [NSFontFeatureSettingsAttribute]: [{
          [NSFontFeatureTypeIdentifierKey]: kVerticalPositionType,
          [NSFontFeatureSelectorIdentifierKey]: kSuperiorsSelector
        }]
      };
      updateFontFeatureSettingsAttribute(settingsAttribute);
    } else if (sender.title() == 'Subscript') {
      var _settingsAttribute = {
        [NSFontFeatureSettingsAttribute]: [{
          [NSFontFeatureTypeIdentifierKey]: kVerticalPositionType,
          [NSFontFeatureSelectorIdentifierKey]: kInferiorsSelector
        }]
      };
      updateFontFeatureSettingsAttribute(_settingsAttribute);
    } else if (sender.title() == 'Ordinals') {
      var _settingsAttribute2 = {
        [NSFontFeatureSettingsAttribute]: [{
          [NSFontFeatureTypeIdentifierKey]: kVerticalPositionType,
          [NSFontFeatureSelectorIdentifierKey]: kOrdinalsSelector
        }]
      };
      updateFontFeatureSettingsAttribute(_settingsAttribute2);
    } else if (sender.title() == 'Scientific Notiation') {
      var _settingsAttribute3 = {
        [NSFontFeatureSettingsAttribute]: [{
          [NSFontFeatureTypeIdentifierKey]: kVerticalPositionType,
          [NSFontFeatureSelectorIdentifierKey]: kOrdinalsSelector
        }]
      };
      updateFontFeatureSettingsAttribute(_settingsAttribute3);
    } else {
      var _settingsAttribute4 = {
        [NSFontFeatureSettingsAttribute]: [{
          [NSFontFeatureTypeIdentifierKey]: kVerticalPositionType,
          [NSFontFeatureSelectorIdentifierKey]: kNormalPositionSelector
        }]
      };
      updateFontFeatureSettingsAttribute(_settingsAttribute4);
    }
  };

  verticalPositionPopupButton.setCOSJSTargetFunction(function (sender) {
    return verticalPositionTargetFuntion(sender);
  });
  var row1 = NSStackView.alloc().initWithFrame(NSMakeRect(0, 0, mainViewWidth, 25));
  row1.setOrientation(NSUserInterfaceLayoutOrientationHorizontal);
  row1.setAlignment(NSLayoutAttributeFirstBaseline);
  row1.setSpacing(columnSpacing);
  row1.setViews_inGravity([verticalPositionLabel, verticalPositionPopupButton], NSStackViewGravityLeading); // MARK: Setup Row 2

  var numberSpacingLabel = createTextField({
    text: "Number Spacing:",
    frame: NSMakeRect(0, 0, column1width, 17),
    alignment: NSTextAlignmentRight
  });
  numberSpacingLabel.addConstraint(NSLayoutConstraint.constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant(numberSpacingLabel, NSLayoutAttributeWidth, NSLayoutRelationEqual, nil, NSLayoutAttributeNotAnAttribute, 1.0, column1width));
  var radioButtonProportional = NSButton.alloc().initWithFrame(NSMakeRect(0, 0, 97, 18));
  radioButtonProportional.setButtonType(NSRadioButton);
  radioButtonProportional.setTitle('Proportional');
  radioButtonProportional.setState(NSOnState);
  var radioButtonMonospacedOrTabular = NSButton.alloc().initWithFrame(NSMakeRect(0, 0, 150, 18));
  radioButtonMonospacedOrTabular.setButtonType(NSRadioButton);
  radioButtonMonospacedOrTabular.setTitle('Monospaced/Tabular');
  radioButtonMonospacedOrTabular.setState(NSOffState);

  var numberSpacingTargetFunction = function numberSpacingTargetFunction(sender) {
    console.log(sender.title() + ' radio button was clicked');
  };

  radioButtonProportional.setCOSJSTargetFunction(function (sender) {
    return numberSpacingTargetFunction(sender);
  });
  radioButtonMonospacedOrTabular.setCOSJSTargetFunction(function (sender) {
    return numberSpacingTargetFunction(sender);
  });
  var numberSpacingRadioGroupStackView = NSStackView.stackViewWithViews([radioButtonProportional, radioButtonMonospacedOrTabular]);
  numberSpacingRadioGroupStackView.setOrientation(NSUserInterfaceLayoutOrientationVertical);
  numberSpacingRadioGroupStackView.setAlignment(NSLayoutAttributeLeading);
  numberSpacingRadioGroupStackView.setSpacing(4);
  numberSpacingRadioGroupStackView.setTranslatesAutoresizingMaskIntoConstraints(false);
  var row2 = NSStackView.alloc().initWithFrame(NSMakeRect(0, 0, mainViewWidth, 36));
  row2.setOrientation(NSUserInterfaceLayoutOrientationHorizontal);
  row2.setAlignment(NSLayoutAttributeFirstBaseline);
  row2.setSpacing(columnSpacing);
  row2.setViews_inGravity([numberSpacingLabel, numberSpacingRadioGroupStackView], NSStackViewGravityLeading); // MARK: Setup Row 3

  var numberCaseLabel = createTextField({
    text: "Number Case:",
    frame: NSMakeRect(0, 0, column1width, 17),
    alignment: NSTextAlignmentRight
  });
  numberCaseLabel.addConstraint(NSLayoutConstraint.constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant(numberCaseLabel, NSLayoutAttributeWidth, NSLayoutRelationEqual, nil, NSLayoutAttributeNotAnAttribute, 1.0, column1width));
  var radioButtonLiningFigures = NSButton.alloc().initWithFrame(NSMakeRect(0, 0, 104, 17));
  radioButtonLiningFigures.setButtonType(NSRadioButton);
  radioButtonLiningFigures.setTitle('Lining figures');
  radioButtonLiningFigures.setState(NSOnState);
  var radioButtonOldStyleFigures = NSButton.alloc().initWithFrame(NSMakeRect(0, 0, 124, 18));
  radioButtonOldStyleFigures.setButtonType(NSRadioButton);
  radioButtonOldStyleFigures.setTitle('Old-style figures');
  radioButtonOldStyleFigures.setState(NSOffState);

  var numberCaseTargetFunction = function numberCaseTargetFunction(sender) {
    console.log(sender.title() + ' radio button was clicked');
    console.log(sender.state());
    var currentFontProperties = getCurrentFontProperties();

    if (sender.title() == "Old-style figures") {} else {}
  };

  radioButtonLiningFigures.setCOSJSTargetFunction(function (sender) {
    return numberCaseTargetFunction(sender);
  });
  radioButtonOldStyleFigures.setCOSJSTargetFunction(function (sender) {
    return numberCaseTargetFunction(sender);
  });
  var numberCaseRadioGroupStackView = NSStackView.stackViewWithViews([radioButtonLiningFigures, radioButtonOldStyleFigures]);
  numberCaseRadioGroupStackView.setOrientation(NSUserInterfaceLayoutOrientationVertical);
  numberCaseRadioGroupStackView.setAlignment(NSLayoutAttributeLeading);
  numberCaseRadioGroupStackView.setSpacing(4);
  numberCaseRadioGroupStackView.setTranslatesAutoresizingMaskIntoConstraints(false);
  var row3 = NSStackView.alloc().initWithFrame(NSMakeRect(0, 0, mainViewWidth, 36));
  row3.setOrientation(NSUserInterfaceLayoutOrientationHorizontal);
  row3.setAlignment(NSLayoutAttributeFirstBaseline);
  row3.setSpacing(columnSpacing);
  row3.setViews_inGravity([numberCaseLabel, numberCaseRadioGroupStackView], NSStackViewGravityLeading); // MARK: Setup Row 4

  var smallCapsLabel = createTextField({
    text: "Small Caps:",
    frame: NSMakeRect(0, 0, column1width, 17),
    alignment: NSTextAlignmentRight
  });
  smallCapsLabel.addConstraint(NSLayoutConstraint.constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant(smallCapsLabel, NSLayoutAttributeWidth, NSLayoutRelationEqual, nil, NSLayoutAttributeNotAnAttribute, 1.0, column1width));
  var smallCapsExampleLabel = createTextField({
    text: "Tt →",
    frame: NSMakeRect(0, 0, 32, 17),
    alignment: NSTextAlignmentLeft
  });
  var pushOnOffButtonLowerCase = NSButton.alloc().initWithFrame(NSMakeRect(0, 0, 72, 32));
  pushOnOffButtonLowerCase.setButtonType(NSButtonTypeOnOff);
  pushOnOffButtonLowerCase.setBezelStyle(NSRoundedBezelStyle);
  pushOnOffButtonLowerCase.setTitle('Tt');
  pushOnOffButtonLowerCase.setState(NSOffState);
  pushOnOffButtonLowerCase.addConstraint(NSLayoutConstraint.constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant(pushOnOffButtonLowerCase, NSLayoutAttributeWidth, NSLayoutRelationEqual, nil, NSLayoutAttributeNotAnAttribute, 1.0, 60));

  var smallCapsLowerCaseTargetFunction = function smallCapsLowerCaseTargetFunction(sender) {
    console.log(sender.title() + ' toggle was clicked'); // Small Caps Lower Case
    // ID: kLowerCaseType
    //
    // SELECTORS
    // kDefaultLowerCaseSelector = 0
    // Use standard lower-case glyphs
    //
    // kLowerCaseSmallCapsSelector = 1
    // Display lower-case glyphs as small caps. (This is the most common way of displaying small caps.)
    //
    // kLowerCasePetiteCapsSelector = 2
    // Display lower-case glyphs as petite caps
    //

    if (sender.state() == 0) {
      var settingsAttribute = {
        [NSFontFeatureSettingsAttribute]: [{
          [NSFontFeatureTypeIdentifierKey]: kLowerCaseType,
          [NSFontFeatureSelectorIdentifierKey]: kDefaultLowerCaseSelector
        }]
      };
      updateFontFeatureSettingsAttribute(settingsAttribute);
    } else {
      var _settingsAttribute5 = {
        [NSFontFeatureSettingsAttribute]: [{
          [NSFontFeatureTypeIdentifierKey]: kLowerCaseType,
          [NSFontFeatureSelectorIdentifierKey]: kLowerCaseSmallCapsSelector
        }]
      };
      updateFontFeatureSettingsAttribute(_settingsAttribute5);
    }
  };

  pushOnOffButtonLowerCase.setCOSJSTargetFunction(function (sender) {
    return smallCapsLowerCaseTargetFunction(sender);
  });
  var lowerCaseLabel = createTextField({
    text: "Lower Case",
    frame: NSMakeRect(0, 0, 65, 14),
    alignment: NSTextAlignmentCenter,
    fontSize: 11
  });
  var lowerCaseStackView = NSStackView.stackViewWithViews([pushOnOffButtonLowerCase, lowerCaseLabel]);
  lowerCaseStackView.setOrientation(NSUserInterfaceLayoutOrientationVertical);
  lowerCaseStackView.setAlignment(NSLayoutAttributeCenterX);
  lowerCaseStackView.setSpacing(4);
  lowerCaseStackView.setTranslatesAutoresizingMaskIntoConstraints(false);
  var pushOnOffButtonUpperCase = NSButton.alloc().initWithFrame(NSMakeRect(0, 0, 72, 32));
  pushOnOffButtonUpperCase.setButtonType(NSButtonTypeOnOff);
  pushOnOffButtonUpperCase.setBezelStyle(NSRoundedBezelStyle);
  pushOnOffButtonUpperCase.setTitle('Tt');
  pushOnOffButtonUpperCase.setState(NSOffState);
  pushOnOffButtonUpperCase.addConstraint(NSLayoutConstraint.constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant(pushOnOffButtonUpperCase, NSLayoutAttributeWidth, NSLayoutRelationEqual, nil, NSLayoutAttributeNotAnAttribute, 1.0, 60));

  var smallCapsUpperCaseTargetFunction = function smallCapsUpperCaseTargetFunction(sender) {
    console.log(sender.title() + ' toggle was clicked'); //Small Caps Upper Case
    // ID: kUpperCaseType
    //
    // SELECTORS
    //
    // kDefaultUpperCaseSelector = 0
    // Use standard upper-case glyphs
    //
    // kUpperCaseSmallCapsSelector = 1
    // Display upper-case glyphs as small caps (used commonly with acronyms).
    //
    // kUpperCasePetiteCapsSelector = 2
    // Display upper-case glyphs as petite caps
    //

    if (sender.state() == 0) {
      //Need to set to default setting
      var settingsAttribute = {
        [NSFontFeatureSettingsAttribute]: [{
          [NSFontFeatureTypeIdentifierKey]: kUpperCaseType,
          [NSFontFeatureSelectorIdentifierKey]: kDefaultUpperCaseSelector
        }]
      };
      updateFontFeatureSettingsAttribute(settingsAttribute);
    } else {
      var _settingsAttribute6 = {
        [NSFontFeatureSettingsAttribute]: [{
          [NSFontFeatureTypeIdentifierKey]: kUpperCaseType,
          [NSFontFeatureSelectorIdentifierKey]: kUpperCaseSmallCapsSelector
        }]
      };
      updateFontFeatureSettingsAttribute(_settingsAttribute6);
    }
  };

  pushOnOffButtonUpperCase.setCOSJSTargetFunction(function (sender) {
    return smallCapsUpperCaseTargetFunction(sender);
  });
  var upperCaseLabel = createTextField({
    text: "Upper Case",
    frame: NSMakeRect(0, 0, 66, 14),
    alignment: NSTextAlignmentCenter,
    fontSize: 11
  });
  var upperCaseStackView = NSStackView.stackViewWithViews([pushOnOffButtonUpperCase, upperCaseLabel]);
  upperCaseStackView.setOrientation(NSUserInterfaceLayoutOrientationVertical);
  upperCaseStackView.setSpacing(4);
  upperCaseStackView.setTranslatesAutoresizingMaskIntoConstraints(false);
  var smallCapsButtonGroupStackView = NSStackView.stackViewWithViews([smallCapsExampleLabel, lowerCaseStackView, upperCaseStackView]);
  smallCapsButtonGroupStackView.setOrientation(NSUserInterfaceLayoutOrientationHorizontal);
  smallCapsButtonGroupStackView.setAlignment(NSLayoutAttributeFirstBaseline);
  smallCapsButtonGroupStackView.setSpacing(4);
  smallCapsButtonGroupStackView.setTranslatesAutoresizingMaskIntoConstraints(false);
  var row4 = NSStackView.alloc().initWithFrame(NSMakeRect(0, 0, mainViewWidth, 36));
  row4.setOrientation(NSUserInterfaceLayoutOrientationHorizontal);
  row4.setAlignment(NSLayoutAttributeFirstBaseline);
  row4.setSpacing(columnSpacing);
  row4.setViews_inGravity([smallCapsLabel, smallCapsButtonGroupStackView], NSStackViewGravityLeading); // MARK: Combine rows together

  var mainContentView = NSStackView.stackViewWithViews([row1, row2, row3, row4]);
  mainContentView.setOrientation(NSUserInterfaceLayoutOrientationVertical);
  mainContentView.setAlignment(NSLayoutAttributeLeading);
  mainContentView.setSpacing(8);
  mainContentView.setTranslatesAutoresizingMaskIntoConstraints(false);
  panel.contentView().addSubview(mainContentView);
  panel.contentView().setFlipped(true);
  fitSubviewToView(mainContentView, panel.contentView(), [16.0, 16.0, 8.0, 16.0]); //addVibrancyView(panel.contentView())

  threadDictionary[identifier] = panel;
  var closeButton = panel.standardWindowButton(NSWindowCloseButton);
  closeButton.setCOSJSTargetFunction(function (sender) {
    panel.close(); //Remove the reference to the panel

    threadDictionary.removeObjectForKey(identifier);
    threadDictionary.panelOpen = false; //Stop this script

    COScript.currentCOScript().setShouldKeepAround_(false);
  });
}

function addVibrancyView(superview) {
  var vibrancy = NSVisualEffectView.alloc().initWithFrame(NSMakeRect(0, 0, panelWidth, panelHeight)); // TODO: Control Light/Dark Appearance

  vibrancy.setAppearance(NSAppearance.appearanceNamed(NSAppearanceNameVibrantLight));
  vibrancy.setBlendingMode(NSVisualEffectBlendingModeBehindWindow);
  superview.addSubview(vibrancy);
  fitSubviewToView(vibrancy, superview, [0.0, 0.0, 0.0, 0.0]);
}

function fitSubviewToView(subview, view, constants) {
  subview.setTranslatesAutoresizingMaskIntoConstraints(false);
  addEdgeConstraint(NSLayoutAttributeTop, subview, view, constants[0]);
  addEdgeConstraint(NSLayoutAttributeTrailing, subview, view, constants[1]);
  addEdgeConstraint(NSLayoutAttributeBottom, subview, view, constants[2]);
  addEdgeConstraint(NSLayoutAttributeLeading, subview, view, constants[3]);
}

function addEdgeConstraint(layoutAttribute, subview, view, constant) {
  view.addConstraint(NSLayoutConstraint.constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant(subview, layoutAttribute, NSLayoutRelationEqual, view, layoutAttribute, 1.0, constant));
}

function createTextField(_ref) {
  var text = _ref.text,
      frame = _ref.frame,
      alignment = _ref.alignment,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 13 : _ref$fontSize;
  var label = NSTextField.alloc().initWithFrame(frame);
  label.setStringValue(text);
  label.setAlignment(alignment);
  label.setFont(NSFont.systemFontOfSize(fontSize));
  label.setBezeled(false);
  label.setDrawsBackground(false);
  label.setEditable(false);
  label.setSelectable(false);
  return label;
}

function updateFontFeatureSettingsAttribute(settingsAttribute) {
  var document = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.getSelectedDocument();
  var textLayer = document.selectedLayers.layers[0];
  var font = textLayer.sketchObject.font();
  var fontSize = font.pointSize();
  var fontFeatureSettings = font.fontDescriptor().fontAttributes()[NSFontFeatureSettingsAttribute];
  var descriptor = font.fontDescriptor().fontDescriptorByAddingAttributes(settingsAttribute);
  var newFont = NSFont.fontWithDescriptor_size(descriptor, fontSize);
  textLayer.sketchObject.setFont(newFont);
  document.sketchObject.inspectorController().reload();
}

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=my-command.js.map