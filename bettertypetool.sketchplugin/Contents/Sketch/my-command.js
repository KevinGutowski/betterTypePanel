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
/*! exports provided: default, selectionChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectionChanged", function() { return selectionChanged; });
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);
 // Documentation:
// https://developer.sketchapp.com/reference/api/
// https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html

COScript.currentCOScript().setShouldKeepAround_(true);
var threadIdentifier = "com.betterTypePanel";
var verticalPositionPopupButtonID = "com.betterTypePanel.popupButton.verticalPosition";
var radioButtonProportionalID = "com.betterTypePanel.radioButton.proportional";
var radioButtonMonospacedOrTabularID = "com.betterTypePanel.radioButton.monospaced";
var pushOnOffButtonLowerCaseID = "com.betterTypePanel.button.lowerCase";
var pushOnOffButtonUpperCaseID = "com.betterTypePanel.button.upperCase";
var radioButtonLiningFiguresID = "com.betterTypePanel.radioButton.liningFigures";
var radioButtonOldStyleFiguresID = "com.betterTypePanel.radioButton.oldStyle";
/* harmony default export */ __webpack_exports__["default"] = (function () {
  runPanel();
  setupFramework();
  framework("CoreText"); // const document = sketch.getSelectedDocument();
  // const textLayer = document.selectedLayers.layers[0]
  // const font = textLayer.sketchObject.font()
  // const coreTextFont = CTFontCreateWithName(font.fontName(), font.pointSize(), nil);
  // const features = CTFontCopyFeatures(coreTextFont)
  // const settings = CTFontCopyFeatureSettings(coreTextFont)
  // var main = HSMain.alloc().init()
  // var featuresArray = main.bridgeArray(features)
  // var settingsArray = main.bridgeArray(settings)
  //determineProps(featuresArray);

  updateUI();
});
function selectionChanged(context) {
  framework("CoreText");
  var threadDictionary = NSThread.mainThread().threadDictionary(); // check if the panel is open, if open update UI, else just do nothing

  if (threadDictionary[threadIdentifier]) {
    updateUI();
  } else {
    return;
  }
}

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
      // HelloSketch_Log("😎 loadFramework: `" + frameworkName + "` already loaded.");
      return true;
    } else if (mocha.loadFrameworkWithName_inDirectory(frameworkName, directory)) {
      // HelloSketch_Log("✅ loadFramework: `" + frameworkName + "` success!");
      mocha.setValue_forKey_(true, frameworkName);
      return true;
    } else {
      // HelloSketch_Log("❌ loadFramework: `" + frameworkName + "` failed!: " + directory + ". Please define HelloSketch_FrameworkPath if you're trying to @import in a custom plugin");
      return false;
    }
  })();
}

function determineProps(featuresArray) {}

function runPanel() {
  // console.log("Setting Up Panel")
  var threadDictionary = NSThread.mainThread().threadDictionary(); // If there is already a panel, prevent the plugin from running again

  if (threadDictionary[threadIdentifier]) {
    closePanel(threadDictionary[threadIdentifier], threadDictionary, threadIdentifier);
  } else {
    threadDictionary.panelOpen = true;
    setupPanel(threadDictionary, threadIdentifier);
  }
}

function setupPanel(threadDictionary, identifier) {
  var panelWidth = 312;
  var panelHeight = 210;
  var panel = NSPanel.alloc().init();
  panel.setFrame_display(NSMakeRect(0, 0, panelWidth, panelHeight), true);
  panel.setStyleMask(NSTexturedBackgroundWindowMask | NSTitledWindowMask | NSClosableWindowMask); // panel.setBackgroundColor(NSColor.whiteColor());

  panel.title = "betterTypePanel";
  panel.center();
  panel.makeKeyAndOrderFront(null);
  panel.setLevel(NSFloatingWindowLevel);
  panel.standardWindowButton(NSWindowMiniaturizeButton).setHidden(true);
  panel.standardWindowButton(NSWindowZoomButton).setHidden(true);
  var column1width = 109;
  var column2width = 171;
  var columnSpacing = 4;
  var rowSpacing = 8;
  var mainViewWidth = column1width + column2width + columnSpacing; // MARK: SETUP ROW 1

  var verticalPositionLabel = createTextField({
    text: "Number Position:",
    frame: NSMakeRect(0, 0, column1width, 17),
    alignment: NSTextAlignmentRight
  });
  verticalPositionLabel.addConstraint(NSLayoutConstraint.constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant(verticalPositionLabel, NSLayoutAttributeWidth, NSLayoutRelationEqual, nil, NSLayoutAttributeNotAnAttribute, 1.0, column1width));
  var verticalPositionPopupButton = NSPopUpButton.alloc().initWithFrame(NSMakeRect(0, 0, 150, 25));
  verticalPositionPopupButton.addItemsWithTitles(['Default Position', 'Superscript', 'Subscript', 'Ordinals', 'Scientific Notation']);
  threadDictionary[verticalPositionPopupButtonID] = verticalPositionPopupButton;

  var verticalPositionTargetFuntion = function verticalPositionTargetFuntion(sender) {
    // console.log(sender.title() + ' dropdown button was selected')
    // Vertical Position
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
      var settingsAttribute = getSettingsAttributeForKey_Value(kVerticalPositionType, kSuperiorsSelector);
      updateFontFeatureSettingsAttribute(settingsAttribute);
    } else if (sender.title() == 'Subscript') {
      var _settingsAttribute = getSettingsAttributeForKey_Value(kVerticalPositionType, kInferiorsSelector);

      updateFontFeatureSettingsAttribute(_settingsAttribute);
    } else if (sender.title() == 'Ordinals') {
      var _settingsAttribute2 = getSettingsAttributeForKey_Value(kVerticalPositionType, kOrdinalsSelector);

      updateFontFeatureSettingsAttribute(_settingsAttribute2);
    } else if (sender.title() == 'Scientific Notation') {
      var _settingsAttribute3 = getSettingsAttributeForKey_Value(kVerticalPositionType, kOrdinalsSelector);

      updateFontFeatureSettingsAttribute(_settingsAttribute3);
    } else {
      var _settingsAttribute4 = getSettingsAttributeForKey_Value(kVerticalPositionType, kNormalPositionSelector);

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
  threadDictionary[radioButtonProportionalID] = radioButtonProportional;
  var radioButtonMonospacedOrTabular = NSButton.alloc().initWithFrame(NSMakeRect(0, 0, 150, 18));
  radioButtonMonospacedOrTabular.setButtonType(NSRadioButton);
  radioButtonMonospacedOrTabular.setTitle('Monospaced/Tabular');
  radioButtonMonospacedOrTabular.setState(NSOffState);
  threadDictionary[radioButtonMonospacedOrTabularID] = radioButtonMonospacedOrTabular;

  var numberSpacingTargetFunction = function numberSpacingTargetFunction(sender) {
    // console.log(sender.title() + ' radio button was clicked')
    if (sender.title() == 'Proportional') {
      var settingsAttribute = getSettingsAttributeForKey_Value(kNumberSpacingType, kProportionalNumbersSelector);
      updateFontFeatureSettingsAttribute(settingsAttribute);
    } else {
      var _settingsAttribute5 = getSettingsAttributeForKey_Value(kNumberSpacingType, kMonospacedNumbersSelector);

      updateFontFeatureSettingsAttribute(_settingsAttribute5);
    }
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
  threadDictionary[radioButtonLiningFiguresID] = radioButtonLiningFigures;
  var radioButtonOldStyleFigures = NSButton.alloc().initWithFrame(NSMakeRect(0, 0, 124, 18));
  radioButtonOldStyleFigures.setButtonType(NSRadioButton);
  radioButtonOldStyleFigures.setTitle('Old-style figures');
  radioButtonOldStyleFigures.setState(NSOffState);
  threadDictionary[radioButtonOldStyleFiguresID] = radioButtonOldStyleFigures;

  var numberCaseTargetFunction = function numberCaseTargetFunction(sender) {
    // console.log(sender.title() + ' radio button was clicked')
    if (sender.title() == "Old-style figures") {
      var settingsAttribute = getSettingsAttributeForKey_Value(kNumberCaseType, kLowerCaseNumbersSelector);
      updateFontFeatureSettingsAttribute(settingsAttribute);
    } else {
      var _settingsAttribute6 = getSettingsAttributeForKey_Value(kNumberCaseType, kUpperCaseNumbersSelector);

      updateFontFeatureSettingsAttribute(_settingsAttribute6);
    }
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
  var lowerCaseAttributedString = NSMutableAttributedString.new().initWithString("Tt");
  var lowerCaseRange = NSMakeRange(1, 1);
  var lowerCaseFont = getFontForKey_Value(37, 1);
  lowerCaseAttributedString.setAlignment_range(NSTextAlignmentCenter, NSMakeRange(0, 2));
  lowerCaseAttributedString.addAttribute_value_range(NSFontAttributeName, lowerCaseFont, lowerCaseRange);
  pushOnOffButtonLowerCase.setAttributedTitle(lowerCaseAttributedString);
  pushOnOffButtonLowerCase.setState(NSOffState);
  pushOnOffButtonLowerCase.addConstraint(NSLayoutConstraint.constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant(pushOnOffButtonLowerCase, NSLayoutAttributeWidth, NSLayoutRelationEqual, nil, NSLayoutAttributeNotAnAttribute, 1.0, 60));
  threadDictionary[pushOnOffButtonLowerCaseID] = pushOnOffButtonLowerCase;

  var smallCapsLowerCaseTargetFunction = function smallCapsLowerCaseTargetFunction(sender) {
    // console.log(sender.title() + ' toggle was clicked')
    // Small Caps Lower Case
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
      var settingsAttribute = getSettingsAttributeForKey_Value(kLowerCaseType, kDefaultLowerCaseSelector);
      updateFontFeatureSettingsAttribute(settingsAttribute);
    } else {
      var _settingsAttribute7 = getSettingsAttributeForKey_Value(kLowerCaseType, kLowerCaseSmallCapsSelector);

      updateFontFeatureSettingsAttribute(_settingsAttribute7);
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
  var upperCaseAttributedString = NSMutableAttributedString.new().initWithString("Tt");
  var upperCaseRange = NSMakeRange(0, 1);
  var upperCaseFont = getFontForKey_Value(38, 1);
  upperCaseAttributedString.setAlignment_range(NSTextAlignmentCenter, NSMakeRange(0, 2));
  var centerAlignUpperCase = NSMutableParagraphStyle.new().init().setAlignment(NSTextAlignmentCenter);
  upperCaseAttributedString.addAttribute_value_range(NSFontAttributeName, upperCaseFont, upperCaseRange);
  pushOnOffButtonUpperCase.setAttributedTitle(upperCaseAttributedString);
  pushOnOffButtonUpperCase.setState(NSOffState);
  pushOnOffButtonUpperCase.addConstraint(NSLayoutConstraint.constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant(pushOnOffButtonUpperCase, NSLayoutAttributeWidth, NSLayoutRelationEqual, nil, NSLayoutAttributeNotAnAttribute, 1.0, 60));
  threadDictionary[pushOnOffButtonUpperCaseID] = pushOnOffButtonUpperCase;

  var smallCapsUpperCaseTargetFunction = function smallCapsUpperCaseTargetFunction(sender) {
    // console.log(sender.title() + ' toggle was clicked')
    //Small Caps Upper Case
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
      var settingsAttribute = getSettingsAttributeForKey_Value(kUpperCaseType, kDefaultUpperCaseSelector);
      updateFontFeatureSettingsAttribute(settingsAttribute);
    } else {
      var _settingsAttribute8 = getSettingsAttributeForKey_Value(kUpperCaseType, kUpperCaseSmallCapsSelector);

      updateFontFeatureSettingsAttribute(_settingsAttribute8);
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
    closePanel(panel, threadDictionary, identifier);
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

  if (textLayer.sketchObject.isEditingText() == 1) {
    // In Edit Mode
    console.log("In Edit Mode");
    var textStorage = textLayer.sketchObject.editingDelegate().textStorage();
    textStorage.beginEditing();
    textStorage.setAttributes_range(settingsAttribute, NSMakeRange(0, 5));
    textStorage.endEditing();
  } else {
    textLayer.sketchObject.setFont(newFont);
  }

  document.sketchObject.inspectorController().reload();
}

function getFontForKey_Value(key, value) {
  var defaultButtonFont = NSFont.boldSystemFontOfSize(13);
  var settingsAttribute = getSettingsAttributeForKey_Value(key, value);
  var fontFeatureSettings = defaultButtonFont.fontDescriptor().fontAttributes()[NSFontFeatureSettingsAttribute];
  var descriptor = defaultButtonFont.fontDescriptor().fontDescriptorByAddingAttributes(settingsAttribute);
  var newFont = NSFont.fontWithDescriptor_size(descriptor, 13);
  return newFont;
}

function getSettingsAttributeForKey_Value(key, value) {
  var settingsAttribute = {
    [NSFontFeatureSettingsAttribute]: [{
      [NSFontFeatureTypeIdentifierKey]: key,
      [NSFontFeatureSelectorIdentifierKey]: value
    }]
  };
  return settingsAttribute;
}

function updateUI() {
  var document = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.getSelectedDocument();
  var textLayer = document.selectedLayers.layers[0];
  var threadDictionary = NSThread.mainThread().threadDictionary();

  if (!textLayer) {
    disableUI(threadDictionary);
    return;
  }

  var font = textLayer.sketchObject.font();
  var fontSize = font.pointSize();
  var fontFeatureSettings = font.fontDescriptor().fontAttributes()[NSFontFeatureSettingsAttribute]; //Start with Default Settings

  var defaultUISettings = {
    'verticalPosition': 'default',
    // 'default', 'superscript', 'subscript', 'ordinals', 'scientific inferiors'
    'numberSpacing': 'proportional',
    // 'proportional', 'monospaced'
    'numberCase': 'lining',
    // 'lining', 'oldStyle'
    'smallCapsLowerCase': false,
    // bool
    'smallCapsUpperCase': false // bool
    // Update uiSettings array
    // need to do this because fontFeatureSettings only has
    // settings for applied options (doesn't contain state for all options)

  };
  var updatedUISettings;

  if (fontFeatureSettings) {
    updatedUISettings = modifyUISettings(fontFeatureSettings, defaultUISettings);
  } else {
    updatedUISettings = defaultUISettings;
  } //Update UI Panel with only one update (to prevent flickering)


  for (var uiSetting in updatedUISettings) {
    if (uiSetting == 'verticalPosition') {
      var verticalPositionPopupButton = threadDictionary[verticalPositionPopupButtonID];
      verticalPositionPopupButton.setEnabled(true);

      if (updatedUISettings[uiSetting] == 'default') {
        // console.log('Setting UI: Vertical Position = Default Position')
        verticalPositionPopupButton.selectItemWithTitle('Default Position');
      } else if (updatedUISettings[uiSetting] == 'superscript') {
        // console.log('Setting UI: Vertical Position = Superscript')
        verticalPositionPopupButton.selectItemWithTitle('Superscript');
      } else if (updatedUISettings[uiSetting] == 'subscript') {
        // console.log('Setting UI: Vertical Position = Subscript')
        verticalPositionPopupButton.selectItemWithTitle('Subscript');
      } else if (updatedUISettings[uiSetting] == 'ordinals') {
        // console.log('Setting UI: Vertical Position = Ordinals')
        verticalPositionPopupButton.selectItemWithTitle('Ordinals');
      } else if (updatedUISettings[uiSetting] == 'scientific inferiors') {
        // console.log('Setting UI: Vertical Position = Scientific Notation')
        verticalPositionPopupButton.selectItemWithTitle('Scientific Notation');
      } else {// console.log('Error: Attempting update panel state - Out of scope of verticalPosition options')
      }
    } else if (uiSetting == 'numberSpacing') {
      var radioButtonProportional = threadDictionary[radioButtonProportionalID];
      var radioButtonMonospacedOrTabular = threadDictionary[radioButtonMonospacedOrTabularID];
      radioButtonProportional.setEnabled(true);
      radioButtonMonospacedOrTabular.setEnabled(true);

      if (updatedUISettings[uiSetting] == 'proportional') {
        // console.log('Setting UI: Number Spacing = Proportional')
        radioButtonProportional.setState(NSOnState);
        radioButtonMonospacedOrTabular.setState(NSOffState);
      } else if (updatedUISettings[uiSetting] == 'monospaced') {
        // console.log('Setting UI: Number Spacing == Monospaced/Tabular')
        radioButtonProportional.setState(NSOffState);
        radioButtonMonospacedOrTabular.setState(NSOnState);
      } else {// console.log('Error: Attempting update panel state - Out of scope of numberSpacing options')
      }
    } else if (uiSetting == 'numberCase') {
      var radioButtonLiningFigures = threadDictionary[radioButtonLiningFiguresID];
      var radioButtonOldStyleFigures = threadDictionary[radioButtonOldStyleFiguresID];
      radioButtonLiningFigures.setEnabled(true);
      radioButtonOldStyleFigures.setEnabled(true);

      if (updatedUISettings[uiSetting] == 'lining') {
        // console.log('Setting UI: Number Case = Lining figures')
        radioButtonLiningFigures.setState(NSOnState);
        radioButtonOldStyleFigures.setState(NSOffState);
      } else if (updatedUISettings[uiSetting] == 'oldStyle') {
        // console.log('Setting UI: Number Case = Old-style figures')
        radioButtonLiningFigures.setState(NSOffState);
        radioButtonOldStyleFigures.setState(NSOnState);
      } else {// console.log('Error: Attempting to update panel state - Out of scope of numberCase options')
      }
    } else if (uiSetting == 'smallCapsUpperCase') {
      var pushOnOffButtonUpperCase = threadDictionary[pushOnOffButtonUpperCaseID];
      pushOnOffButtonUpperCase.setEnabled(true);

      if (updatedUISettings[uiSetting] == false) {
        // console.log('Setting UI: Small Caps Upper Case = Off')
        pushOnOffButtonUpperCase.setState(NSOffState);
      } else if (updatedUISettings[uiSetting] == true) {
        // console.log('Setting UI: Small Caps Upper Case = On')
        pushOnOffButtonUpperCase.setState(NSOnState);
      }
    } else if (uiSetting == 'smallCapsLowerCase') {
      var pushOnOffButtonLowerCase = threadDictionary[pushOnOffButtonLowerCaseID];
      pushOnOffButtonLowerCase.setEnabled(true);

      if (updatedUISettings[uiSetting] == false) {
        // console.log('Setting UI: Small Caps Lower Case = Off')
        pushOnOffButtonLowerCase.setState(NSOffState);
      } else if (updatedUISettings[uiSetting] == true) {
        // console.log('Setting UI: Small Caps Lower Case = On')
        pushOnOffButtonLowerCase.setState(NSOnState);
      }
    } else {// console.log('Error: Unhandled uiSetting Property')
      // console.log(updatedUISettings[uiSetting])
    }
  }
}

function modifyUISettings(fontFeatureSettings, uiSettings) {
  fontFeatureSettings.forEach(function (featureSetting) {
    var featureTypeIdentifierKey = featureSetting[NSFontFeatureTypeIdentifierKey];
    var featureSelectorIdentifierKey = featureSetting[NSFontFeatureSelectorIdentifierKey];

    if (featureTypeIdentifierKey == 10) {
      // kVerticalPosition
      if (featureSelectorIdentifierKey == 0) {
        // kNormalPositionSelector
        uiSettings.verticalPosition = 'default';
      } else if (featureSelectorIdentifierKey == 1) {
        // kSuperiorsSelector
        uiSettings.verticalPosition = 'superscript';
      } else if (featureSelectorIdentifierKey == 2) {
        // kInferiorsSelector
        uiSettings.verticalPosition = 'subscript';
      } else if (featureSelectorIdentifierKey == 3) {
        // kOrdinalsSelector
        uiSettings.verticalPosition = 'ordinals';
      } else if (featureSelectorIdentifierKey == 4) {
        // kScientificInferiorsSelector
        uiSettings.verticalPosition = 'scientific inferiors';
      } else {// console.log("Unknown Feature for Vertical Position")
      }
    }

    if (featureTypeIdentifierKey == 6) {
      //kNumberSpacing
      if (featureSelectorIdentifierKey == 0) {
        // kMonospacedNumbersSelector
        uiSettings.numberSpacing = 'monospaced';
      } else if (featureSelectorIdentifierKey == 1) {
        // kProportionalNumbersSelector
        uiSettings.numberSpacing = 'proportional';
      } else if (featureSelectorIdentifierKey == 2) {// kThirdWidthNumbersSelector
        // console.log("Unsupported Number Spacing Feature - Third-width Numerals (Thin numerals)")
      } else if (featureSelectorIdentifierKey == 3) {// kQuarterWidthNumbersSelector
        // console.log("Unsupported Number Spacing Feature - Quarter-width Numerals (Very Yhin Numerals")
      } else {// console.log("Unknown feature for Number Spacing")
        }
    }

    if (featureTypeIdentifierKey == 21) {
      // kNumberCaseType
      if (featureSelectorIdentifierKey == 0) {
        // kLowerCaseNumbersSelector
        uiSettings.numberCase = 'oldStyle';
      } else if (featureSelectorIdentifierKey == 1) {
        // kUpperCaseNumbersSelector
        uiSettings.numberCase = 'lining';
      } else {// console.log("Unknown feature for Number Case")
      }
    }

    if (featureTypeIdentifierKey == 37) {
      // kLowerCase
      if (featureSelectorIdentifierKey == 0) {
        // kDefaultLowerCaseSelector (aka OFF)
        uiSettings.smallCapsLowerCase = false;
      } else if (featureSelectorIdentifierKey == 1) {
        // kLowerCaseSmallCapsSelector
        uiSettings.smallCapsLowerCase = true;
      } else if (featureSelectorIdentifierKey == 2) {// kLowerCasePetiteCapsSelector
        // console.log("Unsupported Lower Case Small Caps Feature - Lower Case Petite Caps")
      }
    }

    if (featureTypeIdentifierKey == 38) {
      // kUpperCase
      if (featureSelectorIdentifierKey == 0) {
        // kDefaultUpperCaseSelector (aka OFF)
        uiSettings.smallCapsUpperCase = false;
      } else if (featureSelectorIdentifierKey == 1) {
        // kUpperCaseSmallCapsSelector
        uiSettings.smallCapsUpperCase = true;
      } else if (featureSelectorIdentifierKey == 2) {// kUpperCasePetiteCapsSelector
        // console.log("Unsupported Upper Case Small Caps Feature - Upper Case Petite Caps")
      }
    }
  });
  return uiSettings;
}

function disableUI(threadDictionary) {
  var verticalPositionPopupButton = threadDictionary[verticalPositionPopupButtonID];
  verticalPositionPopupButton.setEnabled(false);
  var radioButtonProportional = threadDictionary[radioButtonProportionalID];
  var radioButtonMonospacedOrTabular = threadDictionary[radioButtonMonospacedOrTabularID];
  radioButtonProportional.setEnabled(false);
  radioButtonMonospacedOrTabular.setEnabled(false);
  var radioButtonLiningFigures = threadDictionary[radioButtonLiningFiguresID];
  var radioButtonOldStyleFigures = threadDictionary[radioButtonOldStyleFiguresID];
  radioButtonLiningFigures.setEnabled(false);
  radioButtonOldStyleFigures.setEnabled(false);
  var pushOnOffButtonUpperCase = threadDictionary[pushOnOffButtonUpperCaseID];
  pushOnOffButtonUpperCase.setEnabled(false);
  var pushOnOffButtonLowerCase = threadDictionary[pushOnOffButtonLowerCaseID];
  pushOnOffButtonLowerCase.setEnabled(false);
}

function closePanel(panel, threadDictionary, threadIdentifier) {
  panel.close(); //Remove the reference to the panel

  threadDictionary.removeObjectForKey(threadIdentifier);
  threadDictionary.panelOpen = false; //Stop this script

  COScript.currentCOScript().setShouldKeepAround_(false);
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
that['onRun'] = __skpm_run.bind(this, 'default');
that['selectionChanged'] = __skpm_run.bind(this, 'selectionChanged')

//# sourceMappingURL=my-command.js.map