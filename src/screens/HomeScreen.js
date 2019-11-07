import React from "react";
import {View, Text, SafeAreaView, ScrollView} from "react-native";
import NavBarButton from "../components/buttons/NavBarButton";
import Icon from "react-native-vector-icons/index";
import colors from "../styles/colors";
import styles from './styles/Home';
import transparentHeaderStyle from "../styles/navigation";

class HomeScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        headerLeft: null,
        headerRight: <NavBarButton handleButtonPress={() =>
            navigation.navigate('LogIn')
        } location="right" color={colors.black} text="Logout"/>,
        headerStyle: transparentHeaderStyle,
        headerTransparent: true,
        headerTintColor: colors.black,
    });
    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView style={styles.wrapper}>
                    <View style={styles.welcomeWrapper}>
                        <Text style={styles.welcomeText}>Home</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default HomeScreen;