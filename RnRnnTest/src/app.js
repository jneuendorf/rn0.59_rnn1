import React from "react"
import {Navigation} from "react-native-navigation"
import {createStore} from "redux"
import {Provider} from "react-redux"

import Screen from "./screen"
import InitialScreen from "./initial_screen"
import tab_bar_style from "./tab_bar_style"


const store = createStore(() => ({}))

export default class App {

    constructor() {
        this.register_components()
        this.start_single_screen_app()
    }

    register_components() {
        const components_for_registration = {
            initial_screen: InitialScreen,
            screen_a: props => <Screen {...props} text="screen_a" />,
            screen_b: props => <Screen {...props} text="screen_b" />,
            screen_c: props => <Screen {...props} text="screen_c" />,
            screen_d: props => <Screen {...props} text="screen_d" />,
            screen_e: props => <Screen {...props} text="screen_e" />,
        }
        for (const [name, component] of Object.entries(components_for_registration)) {
            console.log("registering", name, __DEV__)
            Navigation.registerComponent(
                name,
                () => component,
                store,
                Provider,
            )
        }
    }

    start_single_screen_app() {
        Navigation.startSingleScreenApp({
            appStyle: {
                orientation: "portrait",
            },
            screen: {screen: "initial_screen"},
            passProps: {
                app: this,
            },
            animationType: "fade",
        })
    }

    start_tab_based_app() {
        Navigation.startTabBasedApp({
            appStyle: {
                orientation: "portrait",
                // For Android
                ...tab_bar_style,
            },
            tabs: [
                {
                    screen: "screen_a",
                    label: "A",
                    icon: require("../assets/rst.png"),
                    selectedIcon: require("../assets/rst_sepia.png"),
                    passProps: {
                        color: "red",
                    },
                },
                {
                    screen: "screen_b",
                    label: "B",
                    icon: require("../assets/rst.png"),
                    selectedIcon: require("../assets/rst_sepia.png"),
                    passProps: {
                        color: "green",
                    },
                },
                {
                    screen: "screen_c",
                    label: "C",
                    icon: require("../assets/rst.png"),
                    selectedIcon: require("../assets/rst_sepia.png"),
                    passProps: {
                        color: "blue",
                    },
                },
                {
                    screen: "screen_d",
                    label: "D",
                    icon: require("../assets/rst.png"),
                    selectedIcon: require("../assets/rst_sepia.png"),
                    passProps: {
                        color: "gray",
                    },
                },
                {
                    screen: "screen_e",
                    label: "E",
                    icon: require("../assets/rst.png"),
                    selectedIcon: require("../assets/rst_sepia.png"),
                    passProps: {
                        color: "white",
                    },
                },
            ],
            tabsStyle: tab_bar_style,
            animationType: "fade",
        })
    }
}
