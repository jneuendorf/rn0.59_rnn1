// Dynamic styling of the tab bar is available only for RNN >=2.0.2594.
// See https://github.com/wix/react-native-navigation/issues/466
export default {
    // iOS + Android
    tabBarHidden: false, // make the tab bar hidden
    // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
    tabBarButtonColor: "white",
    // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
    tabBarSelectedButtonColor: "white",
    // optional, change the background color of the tab bar
    tabBarBackgroundColor: "black",
    // change the translucent of the tab bar to false
    tabBarTranslucent: false,
    // change the tab font family
    // tabBarTextFontFamily: "",
    tabFontSize: 10,
    selectedTabFontSize: 10,
    // Remove default tab bar top shadow (hairline)
    tabBarHideShadow: true,
    // optional, the default selected bottom tab. Default: 0. On Android, add this to appStyle
    // initialTabIndex: 1,

    // iOS only
    tabBarLabelColor: "gray", // iOS only. change the color of tab text
    tabBarSelectedLabelColor: "white", // iOS only. change the color of the selected tab text

    // Android only
    forceTitlesDisplay: true, // Android only. If true - Show all bottom tab labels. If false - only the selected tab's label is visible.
}
