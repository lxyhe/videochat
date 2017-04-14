cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.synconset.imagepicker.ImagePicker",
        "file": "plugins/com.synconset.imagepicker/www/imagepicker.js",
        "pluginId": "com.synconset.imagepicker",
        "clobbers": [
            "plugins.imagePicker"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-headercolor.HeaderColor",
        "file": "plugins/cordova-plugin-headercolor/www/HeaderColor.js",
        "pluginId": "cordova-plugin-headercolor",
        "clobbers": [
            "cordova.plugins.headerColor"
        ]
    },
    {
        "id": "cordova-plugin-navigationbar.navigationbar",
        "file": "plugins/cordova-plugin-navigationbar/www/navigationbar.js",
        "pluginId": "cordova-plugin-navigationbar",
        "clobbers": [
            "window.navigationbar"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "cordova-plugin-vibration.notification",
        "file": "plugins/cordova-plugin-vibration/www/vibration.js",
        "pluginId": "cordova-plugin-vibration",
        "merges": [
            "navigator.notification",
            "navigator"
        ]
    },
    {
        "id": "ionic-plugin-keyboard.keyboard",
        "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    },
    {
        "id": "jpush-phonegap-plugin.JPushPlugin",
        "file": "plugins/jpush-phonegap-plugin/www/JPushPlugin.js",
        "pluginId": "jpush-phonegap-plugin",
        "clobbers": [
            "JPush"
        ]
    },
    {
        "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
        "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
        "pluginId": "phonegap-plugin-barcodescanner",
        "clobbers": [
            "cordova.plugins.barcodeScanner"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.synconset.imagepicker": "2.1.7",
    "cordova-plugin-compat": "1.1.0",
    "cordova-plugin-console": "1.0.5",
    "cordova-plugin-device": "1.1.4",
    "cordova-plugin-headercolor": "1.0",
    "cordova-plugin-navigationbar": "1.0.31",
    "cordova-plugin-splashscreen": "4.0.1",
    "cordova-plugin-statusbar": "2.2.1",
    "cordova-plugin-vibration": "2.1.3",
    "cordova-plugin-whitelist": "1.3.1",
    "ionic-plugin-keyboard": "2.2.1",
    "jpush-phonegap-plugin": "3.0.3",
    "phonegap-plugin-barcodescanner": "6.0.5"
};
// BOTTOM OF METADATA
});