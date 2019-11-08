import React from "react";
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {KeyboardAvoidingView, ScrollView, Text, View,} from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../redux/actions';
import colors from '../styles/colors';
import transparentHeaderStyle from '../styles/navigation';
import InputField from '../components/form/InputField';
import NextArrowButton from '../components/buttons/NextArrowButton';
import Notification from '../components/Notification';
import Loader from '../components/Loader';
import NavBarButton from '../components/buttons/NavBarButton';
import styles from './styles/Login';

class LoginScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerLeft: <NavBarButton
            handleButtonPress={() => navigation.goBack()}
            location="left"
            icon={<Icon name="angle-left" color={colors.white} size={30} />}
        />,
        headerStyle: transparentHeaderStyle,
        headerTransparent: true,
        headerTintColor: colors.white,
    });

    constructor(props) {
        super(props);
        this.state = {
            formValid: true,
            validEmail: false,
            emailAddress: '',
            password: '',
            validPassword: false,
            loadingVisible: false,
        };

        this.handleCloseNotification = this.handleCloseNotification.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNextButton = this.handleNextButton.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
    }

    handleNextButton() {
        this.setState({ loadingVisible: true });
        const { logIn, navigation } = this.props;
        const { navigate } = navigation;
        const { emailAddress, password } = this.state;
        logIn(emailAddress, password);
        setTimeout(() => {
            if (this.props.loggedInStatus.loggedInState) {
                this.setState({ formValid: true, loadingVisible: false });
                navigate('Home');
            } else {
                this.setState({ formValid: false, loadingVisible: false });
            }
        }, 2000);
    }

    handleCloseNotification() {
        this.setState({ formValid: true });
    }

    handleEmailChange(email) {
        // eslint-disable-next-line
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validEmail } = this.state;
        this.setState({ emailAddress: email });

        if (!validEmail) {
            if (emailCheckRegex.test(email)) {
                this.setState({ validEmail: true });
            }
        } else if (!emailCheckRegex.test(email)) {
            this.setState({ validEmail: false });
        }
    }

    handlePasswordChange(password) {
        const { validPassword } = this.state;

        this.setState({ password });

        if (!validPassword) {
            if (password.length > 2) {
                // Password has to be at least 3 characters long
                this.setState({ validPassword: true });
            }
        } else if (password <= 2) {
            this.setState({ validPassword: false });
        }
    }

    toggleNextButtonState() {
        const { validEmail, validPassword } = this.state;
        return !(validEmail && validPassword);

    }

    render() {
        const {
            formValid, loadingVisible, validEmail, validPassword,
        } = this.state;
        const showNotification = !formValid;
        const background = formValid ? colors.lightBlack : colors.darkOrange;
        const notificationMarginTop = showNotification ? 10 : 0;
        return (
            <KeyboardAvoidingView
                style={[{ backgroundColor: background }, styles.wrapper]}
                behavior="padding"
            >
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.loginHeader}>
                            Log In
                        </Text>
                        <InputField
                            labelText="EMAIL ADDRESS"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="email"
                            customStyle={{ marginBottom: 30 }}
                            onChangeText={this.handleEmailChange}
                            showCheckmark={validEmail}
                            autoFocus
                        />
                        <InputField
                            labelText="PASSWORD"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="password"
                            customStyle={{ marginBottom: 30 }}
                            onChangeText={this.handlePasswordChange}
                            showCheckmark={validPassword}
                        />
                    </ScrollView>
                    <NextArrowButton
                        handleNextButton={this.handleNextButton}
                        disabled={this.toggleNextButtonState()}
                    />
                </View>
                <Loader
                    modalVisible={loadingVisible}
                    animationType="fade"
                />
                <View style={[styles.notificationWrapper, { marginTop: notificationMarginTop }]}>
                    <Notification
                        showNotification={showNotification}
                        handleCloseNotification={this.handleCloseNotification}
                        type="Error"
                        firstLine="Invalid login credentials."
                        secondLine=""
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = state => ({
    loggedInStatus: state.loggedInStatus,
});

const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch);

LoginScreen.propTypes = {
    logIn: PropTypes.func.isRequired,
    loggedInStatus: PropTypes.object.isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
        goBack: PropTypes.func,
    }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);