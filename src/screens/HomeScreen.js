import React from "react";
import {View, Text, SafeAreaView, ScrollView} from "react-native";

class HomeScreen extends React.Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={{backgroundColor:'#DAE1E7'}}>
                    <View style={{flex: 1}}>
                        <Text style={{fontSize: 10}}>Home</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default HomeScreen;