import React from "react";
import {Image, ScrollView, Text, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from "react-native-animatable";
import colors from '../styles/colors';
import transparentHeaderStyle from '../styles/navigation';
import styles from './styles/Welcome';
import RoundedButton from '../components/buttons/RoundedButton';
import NavBarButton from '../components/buttons/NavBarButton';

class WelcomeScreen extends React.Component {

    static navigationOptions = ({navigation}) => ({
        headerRight: <NavBarButton handleButtonPress={() =>
            navigation.navigate('LogIn')
        } location="right" color={colors.white} text="Log In"/>,
        headerStyle: transparentHeaderStyle,
        headerTransparent: true,
        headerTintColor: colors.white,
    });

    static onFacebookPress() {
        alert('Facebook button pressed');
    }

    static onCreateAccountPress() {
        alert('Create Account button pressed');
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView style={styles.wrapper}>
                    <View style={styles.welcomeWrapper}>
                        <Animatable.View animation="zoomIn" iterationCount={1} style={styles.logoContainer}>
                            <Image source={require('../assets/logo.png')}
                                   style={styles.logo}/>
                        </Animatable.View>

                        <Text style={styles.welcomeText}>
                            Welcome to Quatrix.
                        </Text>
                        <RoundedButton
                            text="Continue with Facebook"
                            textColor={colors.orange}
                            background={colors.white}
                            icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon}/>}
                            handleOnPress={this.onFacebookPress}
                        />
                        <RoundedButton
                            text="Create Account"
                            textColor={colors.white}
                            handleOnPress={this.onCreateAccountPress}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default WelcomeScreen;