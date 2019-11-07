import {
  createStackNavigator,
} from 'react-navigation-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from "../screens/HomeScreen";

const AppRouteConfigs = createStackNavigator({
  Welcome: { screen: WelcomeScreen },
  Home: {screen: HomeScreen},
  LogIn: { screen: LoginScreen },
});

export default AppRouteConfigs;
