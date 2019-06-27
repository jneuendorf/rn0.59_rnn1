import React from "react"
import {View, Text} from "react-native"


export default class Screen extends React.Component {
    render() {
        const {text, color} = this.props
        return <View style={{backgroundColor: color}}>
            <Text>Text1</Text>
            <Text>{text}</Text>
        </View>
    }
}
