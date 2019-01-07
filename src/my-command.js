import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

export default function() {
    sketch.UI.message("It's alive 🙌")
    runPanel()

    setupFramework()

    framework("CoreText");
    const document = sketch.getSelectedDocument();
    const textLayer = document.selectedLayers.layers[0];
    const font = textLayer.sketchObject.font()
    const coreTextFont = CTFontCreateWithName(font.fontName(), font.pointSize(), nil);
    const features = CTFontCopyFeatures(coreTextFont);
    const settings = CTFontCopyFeatureSettings(coreTextFont)

    var main = HSMain.alloc().init();
    var featuresArray = main.bridgeArray(features);
    var settingsArray = main.bridgeArray(settings)

    //determineProps(featuresArray);

    console.log("Hello Finish");
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
    console.log(feature);
    for (var i = 0; i < featuresArray.count(); i++) {
        var feature = featuresArray[i];
        if (feature['CTFeatureTypeIdentifier'] == 37) {
            console.log(feature['CTFeatureTypeSelectors']);
        }
    }
}

function runPanel() {
    console.log("Setting Up Panel")
    let threadDictionary = NSThread.mainThread().threadDictionary()
    let identifier = "co.betterTypePanel"

    // If there is already a panel, prevent the plugin from running again
    if (threadDictionary[identifier]) return
    threadDictionary.panelOpen = true
    setupPanel(threadDictionary, identifier)
}

function setupPanel(threadDictionary, identifier) {
    var panelWidth = 312
    var panelHeight = 305
    let panel = NSPanel.alloc().init()
    panel.setFrame_display(NSMakeRect(0, 0, panelWidth, panelHeight), true)
    panel.setStyleMask(NSTexturedBackgroundWindowMask | NSTitledWindowMask | NSClosableWindowMask)
    // panel.setBackgroundColor(NSColor.whiteColor());
    panel.title = "betterTypePanel2"

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
        alignment: NSRightTextAlignment
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
        alignment: NSRightTextAlignment
    })

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
        alignment: NSRightTextAlignment
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

    let radioButtonLiningFigures = NSButton.alloc().initWithFrame(NSMakeRect(0,0,104,17))
    radioButtonLiningFigures.setButtonType(NSRadioButton)
    radioButtonLiningFigures.setTitle('Lining figures')
    radioButtonLiningFigures.setState(NSOnState)

    let radioButtonOldStyleFigures = NSButton.alloc().initWithFrame(NSMakeRect(0,0,124,18))
    radioButtonOldStyleFigures.setButtonType(NSRadioButton)
    radioButtonOldStyleFigures.setTitle('Old-style figures')
    radioButtonOldStyleFigures.setState(NSOffState)

    let numberCaseTargetFunction = (sender) => {
        console.log(sender.title() + ' radio button was clicked')
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

    // MARK: Combine rows together
    var mainContentView = NSStackView.stackViewWithViews([row1,row3,row2])
    mainContentView.setOrientation(NSUserInterfaceLayoutOrientationVertical)
    mainContentView.setAlignment(NSLayoutAttributeLeading)
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

function createTextField({text, frame, alignment}) {
    const label = NSTextField.alloc().initWithFrame(frame)
    label.setStringValue(text)
    label.setAlignment(alignment)
    label.setFont(NSFont.systemFontOfSize(13))
    label.setBezeled(false)
    label.setDrawsBackground(true)
    label.setEditable(false)
    label.setSelectable(false)
    return label
}

