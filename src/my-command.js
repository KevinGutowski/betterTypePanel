import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

// Small Caps Buttons
var pushOnOffButtonLowerCase
var pushOnOffButtonUpperCase
var radioButtonLiningFigures
var radioButtonOldStyleFigures

let threadIdentifier = "co.betterTypePanel"

export default function() {
    sketch.UI.message("It's alive 🙌")
    runPanel()

    setupFramework()
    framework("CoreText");
    const document = sketch.getSelectedDocument();
    const textLayer = document.selectedLayers.layers[0]
    const font = textLayer.sketchObject.font()
    const coreTextFont = CTFontCreateWithName(font.fontName(), font.pointSize(), nil);
    const features = CTFontCopyFeatures(coreTextFont)
    const settings = CTFontCopyFeatureSettings(coreTextFont)

    var main = HSMain.alloc().init()
    var featuresArray = main.bridgeArray(features)
    var settingsArray = main.bridgeArray(settings)

    //determineProps(featuresArray);

    updateUI()
}

export function selectionChanged(context) {
    let threadDictionary = NSThread.mainThread().threadDictionary()
    // check if the panel is open, if open update UI, else just do nothing
    if (threadDictionary[threadIdentifier]) {
        console.log(threadDictionary[threadIdentifier])
        updateUI()
        //Question: Is it best to go through context.newSelection rather than sketch.getSelectedDoucment...?
    } else {
        return
    }
}

function setupFramework() {
    // var HelloSketch_FrameworkPath = HelloSketch_FrameworkPath || COScript.currentCOScript().env().scriptURL.path().stringByDeletingLastPathComponent();
    var scriptPath = COScript.currentCOScript().env().scriptURL.path()
    var HelloSketch_FrameworkPath = scriptPath
        .stringByDeletingLastPathComponent()
        .stringByDeletingLastPathComponent()
        .stringByDeletingLastPathComponent()
        .stringByDeletingLastPathComponent()
        + "/src";
    var HelloSketch_Log = HelloSketch_Log || log;
    (function() {
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

function determineProps(featuresArray) {

}

function runPanel() {
    console.log("Setting Up Panel")
    let threadDictionary = NSThread.mainThread().threadDictionary()

    // If there is already a panel, prevent the plugin from running again
    if (threadDictionary[threadIdentifier]) return
    threadDictionary.panelOpen = true
    setupPanel(threadDictionary, threadIdentifier)
}

function setupPanel(threadDictionary, identifier) {
    var panelWidth = 312
    var panelHeight = 210
    let panel = NSPanel.alloc().init()
    panel.setFrame_display(NSMakeRect(0, 0, panelWidth, panelHeight), true)
    panel.setStyleMask(NSTexturedBackgroundWindowMask | NSTitledWindowMask | NSClosableWindowMask)
    // panel.setBackgroundColor(NSColor.whiteColor());
    panel.title = "betterTypePanel"

    panel.center()
    panel.makeKeyAndOrderFront(null)
    panel.setLevel(NSFloatingWindowLevel)

    COScript.currentCOScript().setShouldKeepAround_(true)

    panel.standardWindowButton(NSWindowMiniaturizeButton).setHidden(true)
    panel.standardWindowButton(NSWindowZoomButton).setHidden(true)


    const column1width = 109
    const column2width = 171
    const columnSpacing = 4
    const rowSpacing = 8
    const mainViewWidth = column1width + column2width + columnSpacing

    // MARK: SETUP ROW 1
    var verticalPositionLabel = createTextField({
        text: "Vertical Position:",
        frame: NSMakeRect(0,0,column1width,17),
        alignment: NSTextAlignmentRight
    })

    verticalPositionLabel.addConstraint(NSLayoutConstraint.constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant(
        verticalPositionLabel,
        NSLayoutAttributeWidth,
        NSLayoutRelationEqual,
        nil,
        NSLayoutAttributeNotAnAttribute,
        1.0,
        column1width
    ))

    var verticalPositionPopupButton = NSPopUpButton.alloc().initWithFrame(NSMakeRect(0,0,150,25))
    verticalPositionPopupButton.addItemsWithTitles([
        'Default Position',
        'Superscript',
        'Subscript',
        'Ordinals',
        'Scientific Notiation'
    ])

    let verticalPositionTargetFuntion = (sender) => {
        console.log(sender.title() + ' dropdown button was selected')
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
            let settingsAttribute = getSettingsAttributeForKey_Value(kVerticalPositionType, kSuperiorsSelector)
            updateFontFeatureSettingsAttribute(settingsAttribute)
        } else if (sender.title() == 'Subscript') {
            let settingsAttribute = getSettingsAttributeForKey_Value(kVerticalPositionType, kInferiorsSelector)
            updateFontFeatureSettingsAttribute(settingsAttribute)
        } else if (sender.title() == 'Ordinals') {
            let settingsAttribute = getSettingsAttributeForKey_Value(kVerticalPositionType, kOrdinalsSelector)
            updateFontFeatureSettingsAttribute(settingsAttribute)
        } else if (sender.title() == 'Scientific Notiation') {
            let settingsAttribute = getSettingsAttributeForKey_Value(kVerticalPositionType, kOrdinalsSelector)
            updateFontFeatureSettingsAttribute(settingsAttribute)
        } else {
            let settingsAttribute = getSettingsAttributeForKey_Value(kVerticalPositionType, kNormalPositionSelector)
            updateFontFeatureSettingsAttribute(settingsAttribute)
        }
    }

    verticalPositionPopupButton.setCOSJSTargetFunction(sender => verticalPositionTargetFuntion(sender))

    var row1 = NSStackView.alloc().initWithFrame(NSMakeRect(0,0,mainViewWidth,25))
    row1.setOrientation(NSUserInterfaceLayoutOrientationHorizontal)
    row1.setAlignment(NSLayoutAttributeFirstBaseline)
    row1.setSpacing(columnSpacing)
    row1.setViews_inGravity([verticalPositionLabel,verticalPositionPopupButton],NSStackViewGravityLeading)

    // MARK: Setup Row 2
    var numberSpacingLabel = createTextField({
        text: "Number Spacing:",
        frame: NSMakeRect(0,0,column1width,17),
        alignment: NSTextAlignmentRight
    })

    numberSpacingLabel.addConstraint(NSLayoutConstraint.constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant(
        numberSpacingLabel,
        NSLayoutAttributeWidth,
        NSLayoutRelationEqual,
        nil,
        NSLayoutAttributeNotAnAttribute,
        1.0,
        column1width
    ))

    let radioButtonProportional = NSButton.alloc().initWithFrame(NSMakeRect(0,0,97,18))
    radioButtonProportional.setButtonType(NSRadioButton)
    radioButtonProportional.setTitle('Proportional')
    radioButtonProportional.setState(NSOnState)

    let radioButtonMonospacedOrTabular = NSButton.alloc().initWithFrame(NSMakeRect(0,0,150,18))
    radioButtonMonospacedOrTabular.setButtonType(NSRadioButton)
    radioButtonMonospacedOrTabular.setTitle('Monospaced/Tabular')
    radioButtonMonospacedOrTabular.setState(NSOffState)

    let numberSpacingTargetFunction = (sender) => {
        console.log(sender.title() + ' radio button was clicked')

        if (sender.title() == 'Proportional') {
            let settingsAttribute = getSettingsAttributeForKey_Value(kNumberSpacingType, kProportionalNumbersSelector)
            updateFontFeatureSettingsAttribute(settingsAttribute)
        } else {
            let settingsAttribute = getSettingsAttributeForKey_Value(kNumberSpacingType, kMonospacedNumbersSelector)
            updateFontFeatureSettingsAttribute(settingsAttribute)
        }
    }

    radioButtonProportional.setCOSJSTargetFunction(sender => numberSpacingTargetFunction(sender))
    radioButtonMonospacedOrTabular.setCOSJSTargetFunction(sender => numberSpacingTargetFunction(sender))

    var numberSpacingRadioGroupStackView = NSStackView.stackViewWithViews([radioButtonProportional, radioButtonMonospacedOrTabular])
    numberSpacingRadioGroupStackView.setOrientation(NSUserInterfaceLayoutOrientationVertical)
    numberSpacingRadioGroupStackView.setAlignment(NSLayoutAttributeLeading)
    numberSpacingRadioGroupStackView.setSpacing(4)
    numberSpacingRadioGroupStackView.setTranslatesAutoresizingMaskIntoConstraints(false)

    var row2 = NSStackView.alloc().initWithFrame(NSMakeRect(0,0,mainViewWidth,36))
    row2.setOrientation(NSUserInterfaceLayoutOrientationHorizontal)
    row2.setAlignment(NSLayoutAttributeFirstBaseline)
    row2.setSpacing(columnSpacing)
    row2.setViews_inGravity([numberSpacingLabel, numberSpacingRadioGroupStackView], NSStackViewGravityLeading)

    // MARK: Setup Row 3
    var numberCaseLabel = createTextField({
        text: "Number Case:",
        frame: NSMakeRect(0,0,column1width,17),
        alignment: NSTextAlignmentRight
    })

    numberCaseLabel.addConstraint(NSLayoutConstraint.constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant(
        numberCaseLabel,
        NSLayoutAttributeWidth,
        NSLayoutRelationEqual,
        nil,
        NSLayoutAttributeNotAnAttribute,
        1.0,
        column1width
    ))

    radioButtonLiningFigures = NSButton.alloc().initWithFrame(NSMakeRect(0,0,104,17))
    radioButtonLiningFigures.setButtonType(NSRadioButton)
    radioButtonLiningFigures.setTitle('Lining figures')
    radioButtonLiningFigures.setState(NSOnState)

    radioButtonOldStyleFigures = NSButton.alloc().initWithFrame(NSMakeRect(0,0,124,18))
    radioButtonOldStyleFigures.setButtonType(NSRadioButton)
    radioButtonOldStyleFigures.setTitle('Old-style figures')
    radioButtonOldStyleFigures.setState(NSOffState)

    let numberCaseTargetFunction = (sender) => {
        console.log(sender.title() + ' radio button was clicked')

        if (sender.title() == "Old-style figures") {
            let settingsAttribute = getSettingsAttributeForKey_Value(kNumberCaseType, kLowerCaseNumbersSelector)
            updateFontFeatureSettingsAttribute(settingsAttribute)
        } else {
            let settingsAttribute = getSettingsAttributeForKey_Value(kNumberCaseType, kUpperCaseNumbersSelector)
            updateFontFeatureSettingsAttribute(settingsAttribute)
        }
    }

    radioButtonLiningFigures.setCOSJSTargetFunction(sender => numberCaseTargetFunction(sender))
    radioButtonOldStyleFigures.setCOSJSTargetFunction(sender => numberCaseTargetFunction(sender))

    var numberCaseRadioGroupStackView = NSStackView.stackViewWithViews([radioButtonLiningFigures,radioButtonOldStyleFigures])
    numberCaseRadioGroupStackView.setOrientation(NSUserInterfaceLayoutOrientationVertical)
    numberCaseRadioGroupStackView.setAlignment(NSLayoutAttributeLeading)
    numberCaseRadioGroupStackView.setSpacing(4)
    numberCaseRadioGroupStackView.setTranslatesAutoresizingMaskIntoConstraints(false)

    var row3 = NSStackView.alloc().initWithFrame(NSMakeRect(0,0,mainViewWidth,36))
    row3.setOrientation(NSUserInterfaceLayoutOrientationHorizontal)
    row3.setAlignment(NSLayoutAttributeFirstBaseline)
    row3.setSpacing(columnSpacing)
    row3.setViews_inGravity([numberCaseLabel, numberCaseRadioGroupStackView], NSStackViewGravityLeading)

    // MARK: Setup Row 4
    var smallCapsLabel = createTextField({
        text: "Small Caps:",
        frame: NSMakeRect(0,0,column1width,17),
        alignment: NSTextAlignmentRight
    })

    smallCapsLabel.addConstraint(NSLayoutConstraint.constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant(
        smallCapsLabel,
        NSLayoutAttributeWidth,
        NSLayoutRelationEqual,
        nil,
        NSLayoutAttributeNotAnAttribute,
        1.0,
        column1width
    ))

    var smallCapsExampleLabel = createTextField({
        text: "Tt →",
        frame: NSMakeRect(0,0,32,17),
        alignment: NSTextAlignmentLeft,
    })

    pushOnOffButtonLowerCase = NSButton.alloc().initWithFrame(NSMakeRect(0,0,72,32))
    pushOnOffButtonLowerCase.setButtonType(NSButtonTypeOnOff)
    pushOnOffButtonLowerCase.setBezelStyle(NSRoundedBezelStyle)
    pushOnOffButtonLowerCase.setTitle('Tt')
    pushOnOffButtonLowerCase.setState(NSOffState)

    pushOnOffButtonLowerCase.addConstraint(NSLayoutConstraint.constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant(
        pushOnOffButtonLowerCase,
        NSLayoutAttributeWidth,
        NSLayoutRelationEqual,
        nil,
        NSLayoutAttributeNotAnAttribute,
        1.0,
        60
    ))

    let smallCapsLowerCaseTargetFunction = (sender) => {
        console.log(sender.title() + ' toggle was clicked')
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
            let settingsAttribute = getSettingsAttributeForKey_Value(kLowerCaseType, kDefaultLowerCaseSelector)
            updateFontFeatureSettingsAttribute(settingsAttribute)
        } else {
            let settingsAttribute = getSettingsAttributeForKey_Value(kLowerCaseType, kLowerCaseSmallCapsSelector)
            updateFontFeatureSettingsAttribute(settingsAttribute)
        }
    }
    pushOnOffButtonLowerCase.setCOSJSTargetFunction(sender => smallCapsLowerCaseTargetFunction(sender))

    var lowerCaseLabel = createTextField({
        text: "Lower Case",
        frame: NSMakeRect(0,0,65,14),
        alignment: NSTextAlignmentCenter,
        fontSize: 11
    })

    var lowerCaseStackView = NSStackView.stackViewWithViews([pushOnOffButtonLowerCase,lowerCaseLabel])
    lowerCaseStackView.setOrientation(NSUserInterfaceLayoutOrientationVertical)
    lowerCaseStackView.setAlignment(NSLayoutAttributeCenterX)
    lowerCaseStackView.setSpacing(4)
    lowerCaseStackView.setTranslatesAutoresizingMaskIntoConstraints(false)

    pushOnOffButtonUpperCase = NSButton.alloc().initWithFrame(NSMakeRect(0,0,72,32))
    pushOnOffButtonUpperCase.setButtonType(NSButtonTypeOnOff)
    pushOnOffButtonUpperCase.setBezelStyle(NSRoundedBezelStyle)
    pushOnOffButtonUpperCase.setTitle('Tt')
    pushOnOffButtonUpperCase.setState(NSOffState)

    pushOnOffButtonUpperCase.addConstraint(NSLayoutConstraint.constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant(
        pushOnOffButtonUpperCase,
        NSLayoutAttributeWidth,
        NSLayoutRelationEqual,
        nil,
        NSLayoutAttributeNotAnAttribute,
        1.0,
        60
    ))

    let smallCapsUpperCaseTargetFunction = (sender) => {
        console.log(sender.title() + ' toggle was clicked')
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
            let settingsAttribute = getSettingsAttributeForKey_Value(kUpperCaseType, kDefaultUpperCaseSelector)
            updateFontFeatureSettingsAttribute(settingsAttribute)
        } else {
            let settingsAttribute = getSettingsAttributeForKey_Value(kUpperCaseType, kUpperCaseSmallCapsSelector)
            updateFontFeatureSettingsAttribute(settingsAttribute)
        }
    }
    pushOnOffButtonUpperCase.setCOSJSTargetFunction(sender => smallCapsUpperCaseTargetFunction(sender))

    var upperCaseLabel = createTextField({
        text: "Upper Case",
        frame: NSMakeRect(0,0,66,14),
        alignment: NSTextAlignmentCenter,
        fontSize: 11
    })

    var upperCaseStackView = NSStackView.stackViewWithViews([pushOnOffButtonUpperCase,upperCaseLabel])
    upperCaseStackView.setOrientation(NSUserInterfaceLayoutOrientationVertical)
    upperCaseStackView.setSpacing(4)
    upperCaseStackView.setTranslatesAutoresizingMaskIntoConstraints(false)

    var smallCapsButtonGroupStackView = NSStackView.stackViewWithViews([smallCapsExampleLabel,lowerCaseStackView,upperCaseStackView])
    smallCapsButtonGroupStackView.setOrientation(NSUserInterfaceLayoutOrientationHorizontal)
    smallCapsButtonGroupStackView.setAlignment(NSLayoutAttributeFirstBaseline)
    smallCapsButtonGroupStackView.setSpacing(4)
    smallCapsButtonGroupStackView.setTranslatesAutoresizingMaskIntoConstraints(false)

    var row4 = NSStackView.alloc().initWithFrame(NSMakeRect(0,0,mainViewWidth,36))
    row4.setOrientation(NSUserInterfaceLayoutOrientationHorizontal)
    row4.setAlignment(NSLayoutAttributeFirstBaseline)
    row4.setSpacing(columnSpacing)
    row4.setViews_inGravity([smallCapsLabel, smallCapsButtonGroupStackView], NSStackViewGravityLeading)

    // MARK: Combine rows together
    var mainContentView = NSStackView.stackViewWithViews([row1,row2,row3, row4])
    mainContentView.setOrientation(NSUserInterfaceLayoutOrientationVertical)
    mainContentView.setAlignment(NSLayoutAttributeLeading)
    mainContentView.setSpacing(8)
    mainContentView.setTranslatesAutoresizingMaskIntoConstraints(false)

    panel.contentView().addSubview(mainContentView)
    panel.contentView().setFlipped(true)
    fitSubviewToView(mainContentView,panel.contentView(),[16.0,16.0,8.0,16.0])
    //addVibrancyView(panel.contentView())

    threadDictionary[identifier] = panel;

    var closeButton = panel.standardWindowButton(NSWindowCloseButton)
    closeButton.setCOSJSTargetFunction(function(sender) {
        panel.close()

        //Remove the reference to the panel
        threadDictionary.removeObjectForKey(identifier)
        threadDictionary.panelOpen = false

        //Stop this script
        COScript.currentCOScript().setShouldKeepAround_(false)
    })
}

function addVibrancyView(superview) {
    var vibrancy = NSVisualEffectView.alloc().initWithFrame(NSMakeRect(0, 0, panelWidth, panelHeight))
    // TODO: Control Light/Dark Appearance
    vibrancy.setAppearance(NSAppearance.appearanceNamed(NSAppearanceNameVibrantLight))
    vibrancy.setBlendingMode(NSVisualEffectBlendingModeBehindWindow)
    superview.addSubview(vibrancy)
    fitSubviewToView(vibrancy,superview, [0.0,0.0,0.0,0.0])
}

function fitSubviewToView(subview, view, constants) {
    subview.setTranslatesAutoresizingMaskIntoConstraints(false)

    addEdgeConstraint(NSLayoutAttributeTop, subview, view, constants[0])
    addEdgeConstraint(NSLayoutAttributeTrailing, subview, view, constants[1])
    addEdgeConstraint(NSLayoutAttributeBottom, subview, view, constants[2])
    addEdgeConstraint(NSLayoutAttributeLeading, subview, view, constants[3])
}

function addEdgeConstraint(layoutAttribute, subview, view, constant) {
    view.addConstraint(
        NSLayoutConstraint.constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant(
                subview,
                layoutAttribute,
                NSLayoutRelationEqual,
                view,
                layoutAttribute,
                1.0,
                constant
            )
        )
}

function createTextField({text, frame, alignment, fontSize = 13}) {
    const label = NSTextField.alloc().initWithFrame(frame)
    label.setStringValue(text)
    label.setAlignment(alignment)
    label.setFont(NSFont.systemFontOfSize(fontSize))
    label.setBezeled(false)
    label.setDrawsBackground(false)
    label.setEditable(false)
    label.setSelectable(false)
    return label
}

function updateFontFeatureSettingsAttribute(settingsAttribute) {
    var document = sketch.getSelectedDocument();
    var textLayer = document.selectedLayers.layers[0]
    var font = textLayer.sketchObject.font()
    var fontSize = font.pointSize()
    var fontFeatureSettings = font.fontDescriptor().fontAttributes()[NSFontFeatureSettingsAttribute]
    const descriptor = font.fontDescriptor().fontDescriptorByAddingAttributes(settingsAttribute)

    const newFont = NSFont.fontWithDescriptor_size(descriptor,fontSize)
    textLayer.sketchObject.setFont(newFont)
    document.sketchObject.inspectorController().reload()
}

function getSettingsAttributeForKey_Value(key, value) {
    let settingsAttribute = {
        [NSFontFeatureSettingsAttribute]: [{
            [NSFontFeatureTypeIdentifierKey]: key,
            [NSFontFeatureSelectorIdentifierKey]: value
        }]
    }

    return settingsAttribute
}

function updateUI() {
    var document = sketch.getSelectedDocument()
    var textLayer = document.selectedLayers.layers[0]
    var font = textLayer.sketchObject.font()
    var fontSize = font.pointSize()
    var fontFeatureSettings = font.fontDescriptor().fontAttributes()[NSFontFeatureSettingsAttribute]
    console.log(pushOnOffButtonLowerCase)

    fontFeatureSettings.forEach(function(featureSetting) {
        const featureTypeIdentifierKey = featureSetting[NSFontFeatureTypeIdentifierKey]
        const featureSelectorIdentifierKey = featureSetting[NSFontFeatureSelectorIdentifierKey]
        console.log(featureTypeIdentifierKey)
        console.log(featureSelectorIdentifierKey)

        if (featureTypeIdentifierKey == 33) {
            // kCaseSensitiveLayout
        }

        if (featureTypeIdentifierKey == 21) {
            // kNumberCaseType
            if (featureSelectorIdentifierKey == 0) {
                console.log('Setting Number Case - Old-style')
                radioButtonLiningFigures.setState(NSOffState)
                radioButtonOldStyleFigures.setState(NSOnState)
            } else {
                console.log('Setting Number Case - Lining')
                radioButtonLiningFigures.setState(NSOnState)
                radioButtonOldStyleFigures.setState(NSOffState)
            }
        }

        if (featureTypeIdentifierKey == 37) {
            // kLowerCase
            if (featureSelectorIdentifierKey == 0) {
                // kDefaultLowerCaseSelector (aka OFF)
                console.log('Setting Small Caps Lower Case - OFF')
                pushOnOffButtonLowerCase.setState(NSOffState)
            } else if (featureSelectorIdentifierKey == 1) {
                // kLowerCaseSmallCapsSelector
                console.log('Setting Small Caps Lower Case - ON')
                pushOnOffButtonLowerCase.setState(NSOnState)
            }
        }

        if (featureTypeIdentifierKey == 38) {
            // kUpperCase
            if (featureSelectorIdentifierKey == 0) {
                // kDefaultUpperCaseSelector (aka OFF)
                console.log('Setting Small Caps Upper Case OFF')
                pushOnOffButtonUpperCase.setState(NSOffState)
            } else if (featureSelectorIdentifierKey == 1) {
                // kUpperCaseSmallCapsSelector
                console.log('Setting Small Caps Upper Case ON')
                pushOnOffButtonUpperCase.setState(NSOnState)
            }
        }
    })
}


