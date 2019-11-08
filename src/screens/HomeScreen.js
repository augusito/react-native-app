import React from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import colors from '../styles/colors';
import transparentHeaderStyle from '../styles/navigation';

class HomeScreen extends React.Component {
    static navigationOptions = () => ({
        headerLeft: <Text>Home</Text>,
        headerStyle: transparentHeaderStyle,
        headerTransparent: true,
        gesturesEnabled: false,
    });

    render() {
        return (
            <View style={styles.container}>
                <View>
                <Button
                    color={colors.orange}
                    onPress={() => this.props.navigation.navigate('MapOne')} title="Map One">
                  </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center"
    },
    textButton: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'left',
        color: colors.white,
    },
});

export default HomeScreen;