import React from "react";
import {ActivityIndicator, Platform, StyleSheet, Text, View} from 'react-native';

class MapTwoScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Map Two</Text>
            </View>
        );
    }
}

export default MapTwoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
    },
});