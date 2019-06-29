import React from "react"
import {View, Text, Button} from "react-native"


export default class Initialcreen extends React.Component {
    render() {
        const {app} = this.props
        return <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text>Welcome</Text>
            <Button title="Go to tab-based app" onPress={() => app.start_tab_based_app()} />
        </View>
    }
}
